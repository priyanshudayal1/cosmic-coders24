import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { uploadImage, deleteImage } from "@/config/cloudinary";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    if (!adminDb) {
      return NextResponse.json(
        { error: "DB not initialized" },
        { status: 500 },
      );
    }

    const docRef = adminDb.collection("blogs").doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 },
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
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

    const currentBlog = doc.data();

    // Permission check
    if (user.type !== "admin" && currentBlog.authorId !== user.id) {
      return NextResponse.json(
        { error: "Permission denied. You can only edit your own blogs." },
        { status: 403 },
      );
    }

    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const excerpt = formData.get("excerpt");
    const imageFile = formData.get("image");

    let imageUrl = currentBlog.image;

    // Check if new image is uploaded
    if (imageFile && typeof imageFile !== "string") {
      // Delete old image if it exists
      if (currentBlog.image) {
        await deleteImage(currentBlog.image);
      }

      // Upload new image
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = buffer.toString("base64");
      const dataURI = `data:${imageFile.type};base64,${base64}`;

      imageUrl = await uploadImage(dataURI, "cosmic-coders/blogs");
    }

    const updatedData = {
      title: title || currentBlog.title,
      content: content || currentBlog.content,
      excerpt: excerpt || currentBlog.excerpt,
      image: imageUrl,
      updatedAt: new Date().toISOString(),
    };

    await docRef.update(updatedData);

    return NextResponse.json({ id, ...currentBlog, ...updatedData });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
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

    const currentBlog = doc.data();

    if (user.type !== "admin" && currentBlog.authorId !== user.id) {
      return NextResponse.json({ error: "Permission denied" }, { status: 403 });
    }

    // Delete image from Cloudinary
    if (currentBlog.image) {
      await deleteImage(currentBlog.image);
    }

    await docRef.delete();

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}
