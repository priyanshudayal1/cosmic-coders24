import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await adminDb.collection("admins").doc(id).delete();

    return NextResponse.json({ message: "Manager deleted successfully" });
  } catch (error) {
    console.error("Error deleting manager:", error);
    return NextResponse.json(
      { error: "Failed to delete manager" },
      { status: 500 },
    );
  }
}

// Optional: UPDATE for resetting password if needed
export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const { password, email } = await req.json();
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updates = {};
    if (password) {
      updates.password = await bcrypt.hash(password, 10);
    }
    if (email) {
      updates.email = email;
    }

    if (Object.keys(updates).length > 0) {
      await adminDb.collection("admins").doc(id).update(updates);
    }

    return NextResponse.json({ message: "Manager updated successfully" });
  } catch (error) {
    console.error("Error updating manager:", error);
    return NextResponse.json(
      { error: "Failed to update manager" },
      { status: 500 },
    );
  }
}
