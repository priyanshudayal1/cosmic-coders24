import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const query = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
      status: "new",
    };

    const docRef = await adminDb.collection("queries").add(query);

    return NextResponse.json({
      id: docRef.id,
      message: "Query submitted successfully",
    });
  } catch (error) {
    console.error("Query submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit query" },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    const snapshot = await adminDb
      .collection("queries")
      .orderBy("submittedAt", "desc")
      .get();

    const queries = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(queries);
  } catch (error) {
    console.error("Error fetching queries:", error);
    return NextResponse.json(
      { error: "Failed to fetch queries" },
      { status: 500 },
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Query ID is required" },
        { status: 400 },
      );
    }

    await adminDb.collection("queries").doc(id).delete();

    return NextResponse.json({ message: "Query deleted successfully" });
  } catch (error) {
    console.error("Error deleting query:", error);
    return NextResponse.json(
      { error: "Failed to delete query" },
      { status: 500 },
    );
  }
}
