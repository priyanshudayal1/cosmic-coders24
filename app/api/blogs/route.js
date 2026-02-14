import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { uploadImage } from "@/config/cloudinary";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    let user = null;
    if (token) {
      user = verifyToken(token);
    }

    if (!adminDb) {
      return NextResponse.json(
        { error: "DB not initialized" },
        { status: 500 },
      );
    }

    const blogsRef = adminDb.collection("blogs");

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit"));
    const my = searchParams.get("my");

    // Build query: apply .where() BEFORE .orderBy() for Firestore best practice
    let query = blogsRef;

    if (my === "true" && user) {
      query = query.where("authorId", "==", user.id);
    }

    query = query.orderBy("createdAt", "desc");

    if (limit) {
      query = query.limit(limit);
    }

    let snapshot;
    try {
      snapshot = await query.get();
    } catch (indexError) {
      // Fallback: if composite index is not yet created, fetch without orderBy
      if (indexError.code === 9) {
        console.warn(
          "Composite index not found, falling back to unordered query. " +
          "Please create the index: " + (indexError.details || "")
        );
        let fallbackQuery = blogsRef;
        if (my === "true" && user) {
          fallbackQuery = fallbackQuery.where("authorId", "==", user.id);
        }
        if (limit) {
          fallbackQuery = fallbackQuery.limit(limit);
        }
        snapshot = await fallbackQuery.get();
      } else {
        throw indexError;
      }
    }

    const blogs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    // Sort in memory as fallback (ensures consistent ordering)
    blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = verifyToken(token);
    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    if (user.type !== "admin" && user.type !== "blog-manager") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const excerpt = formData.get("excerpt");
    const author = formData.get("author");
    const category = formData.get("category");
    const imageFile = formData.get("image");

    if (!title || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    let imageUrl = "";
    if (imageFile && typeof imageFile !== "string") {
      // Convert file to base64 or buffer
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = buffer.toString("base64");
      const dataURI = `data:${imageFile.type};base64,${base64}`;

      imageUrl = await uploadImage(dataURI, "cosmic-coders/blogs");
    }

    const newBlog = {
      title,
      content,
      excerpt,
      author: author || user.email || "Admin",
      category: category || "Technology",
      image: imageUrl,
      authorId: user.id || "admin",
      authorEmail: user.email || "admin",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const docRef = await adminDb.collection("blogs").add(newBlog);

    return NextResponse.json({ id: docRef.id, ...newBlog }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 },
    );
  }
}
