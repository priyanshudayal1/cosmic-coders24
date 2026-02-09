import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { uploadImage } from "@/config/cloudinary";

export async function GET(req) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    // We allow public access to GET blogs? Usually yes for the frontend.
    // But this is the /api/blogs route. It might be used by the public site too.
    // However, the user specifically asked about the "manager user... to login and add/edit".
    // Let's check if the token exists. If not, maybe return all public blogs?
    // But currently, let's assume this endpoint is for the Admin/Manager panel.
    // Or we handle both.

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
    let query = blogsRef.orderBy("createdAt", "desc");

    // If user is a manager, maybe we want to filter?
    // Usually fetching all is fine, but we restrict EDITING.
    // Let's just fetch all for now so they see everything, but can only edit theirs.
    // Or if the request has a query param ?my=true

    const { searchParams } = new URL(req.url);
    const my = searchParams.get("my");

    if (my === "true" && user) {
      query = query.where("authorId", "==", user.id);
    }

    // If we want to filter by author for managers strictly:
    // if (user && user.type === 'blog-manager') {
    //    query = query.where("authorId", "==", user.id);
    // }
    // But let's assume they might want to see others' headlines.
    // Actually, "edit the blog written by them" implies strict control.
    // Let's play safe: if ?my=true or just return all and frontend filters?
    // Let's return all.

    const snapshot = await query.get();
    const blogs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

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
