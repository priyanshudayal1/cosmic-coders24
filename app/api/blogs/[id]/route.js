import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { deleteImage, uploadImageDetailed } from "@/config/cloudinary";

const TARGET_BLOG_IMAGE_RATIO = 16 / 9;
const RATIO_TOLERANCE = 0.02;

const isAspectRatio16By9 = (width, height) => {
  if (!width || !height) {
    return false;
  }

  const ratio = width / height;
  return Math.abs(ratio - TARGET_BLOG_IMAGE_RATIO) <= RATIO_TOLERANCE;
};

const parseTags = (tagsValue) => {
  if (!tagsValue || typeof tagsValue !== "string") {
    return [];
  }

  return [
    ...new Set(
      tagsValue
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    ),
  ];
};

const slugify = (value = "") =>
  value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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
    const tags = formData.get("tags");
    const uniqueName = formData.get("uniqueName");
    const imageFile = formData.get("image");

    const updateData = {
      updatedAt: new Date().toISOString(),
    };

    let nextId = id;
    if (uniqueName !== null) {
      const normalizedUniqueName = slugify(uniqueName);
      if (!normalizedUniqueName) {
        return NextResponse.json(
          {
            error:
              "Invalid unique name. Use letters, numbers, and hyphens only.",
          },
          { status: 400 },
        );
      }
      nextId = normalizedUniqueName;
      updateData.slug = normalizedUniqueName;
    }

    if (title) updateData.title = title;
    if (content) updateData.content = content;
    if (excerpt !== null) updateData.excerpt = excerpt;
    if (author) updateData.author = author;
    if (category) updateData.category = category;
    if (tags !== null) updateData.tags = parseTags(tags);

    if (imageFile && typeof imageFile !== "string") {
      // Convert file to base64 or buffer
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = buffer.toString("base64");
      const dataURI = `data:${imageFile.type};base64,${base64}`;

      const uploadResult = await uploadImageDetailed(
        dataURI,
        "cosmic-coders/blogs",
      );

      if (!isAspectRatio16By9(uploadResult.width, uploadResult.height)) {
        await deleteImage(uploadResult.secure_url);
        return NextResponse.json(
          {
            error:
              "Invalid image ratio. Please upload a 16:9 image (example: 1600x900 or 1920x1080).",
          },
          { status: 400 },
        );
      }

      updateData.image = uploadResult.secure_url;
    }

    if (nextId !== id) {
      const targetRef = adminDb.collection("blogs").doc(nextId);
      const targetDoc = await targetRef.get();

      if (targetDoc.exists) {
        return NextResponse.json(
          {
            error:
              "This unique name is already in use. Please choose a different one.",
          },
          { status: 409 },
        );
      }

      const mergedData = {
        ...doc.data(),
        ...updateData,
      };

      await targetRef.set(mergedData);
      await docRef.delete();
    } else {
      if (!doc.data().slug) {
        updateData.slug = id;
      }
      await docRef.update(updateData);
    }

    return NextResponse.json({
      message: "Blog updated",
      id: nextId,
      ...updateData,
    });
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
