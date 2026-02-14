import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { uploadImage } from "@/config/cloudinary";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    if (!adminDb) {
      return NextResponse.json(
        { error: "DB not initialized" },
        { status: 500 },
      );
    }

    const doc = await adminDb.collection("blogs").doc(id).get();

    if (!doc.exists) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = verifyToken(token);
    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const docRef = adminDb.collection("blogs").doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Ownership check for managers
    if (user.type === "blog-manager" && doc.data().authorId !== user.id) {
      return NextResponse.json(
        { error: "Forbidden: You don't own this blog" },
        { status: 403 },
      );
    }

    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const excerpt = formData.get("excerpt");
    const author = formData.get("author");
    const category = formData.get("category");
    const imageFile = formData.get("image");

    const updateData = {
      updatedAt: new Date().toISOString(),
    };

    if (title) updateData.title = title;
    if (content) updateData.content = content;
    if (excerpt !== null) updateData.excerpt = excerpt;
    if (author) {
      updateData.author = author;
      updateData.authorEmail = author;
    }
    if (category) updateData.category = category;

    if (imageFile && typeof imageFile !== "string") {
      // Convert file to base64 or buffer
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = buffer.toString("base64");
      const dataURI = `data:${imageFile.type};base64,${base64}`;

      const imageUrl = await uploadImage(dataURI, "cosmic-coders/blogs");
      updateData.image = imageUrl;
    }

    await docRef.update(updateData);

    return NextResponse.json({ message: "Blog updated", id, ...updateData });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = verifyToken(token);
    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const docRef = adminDb.collection("blogs").doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Ownership check for managers
    if (user.type === "blog-manager" && doc.data().authorId !== user.id) {
      return NextResponse.json(
        { error: "Forbidden: You don't own this blog" },
        { status: 403 },
      );
    }

    await docRef.delete();

    return NextResponse.json({ message: "Blog deleted" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
