import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    await adminDb.collection("career-applications").doc(id).delete();
    return NextResponse.json({ message: "Application deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
