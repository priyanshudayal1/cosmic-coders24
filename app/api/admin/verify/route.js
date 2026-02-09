import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // Assuming we use same secret
import { cookies } from "next/headers";

const SECRET_KEY =
  process.env.JWT_SECRET || "your-secret-key-change-this-in-env";

export async function POST(req) {
  try {
    const { password } = await req.json();
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token || !password) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Decode token to get current user's ID
    let decoded;
    try {
      decoded = jwt.verify(token, SECRET_KEY);
    } catch (e) {
      return NextResponse.json({ error: "Invalid Session" }, { status: 401 });
    }

    const { email } = decoded;

    if (!adminDb) {
      return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }

    // Find admin by email
    const adminsRef = adminDb.collection("admins");
    const querySnapshot = await adminsRef
      .where("email", "==", email)
      .limit(1)
      .get();

    if (querySnapshot.empty) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const adminDoc = querySnapshot.docs[0];
    const adminData = adminDoc.data();

    // Verify Password
    const isMatch = await bcrypt.compare(password, adminData.password);

    if (isMatch) {
      return NextResponse.json({ verified: true });
    } else {
      return NextResponse.json({ verified: false }, { status: 401 });
    }
  } catch (error) {
    console.error("Verify Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
