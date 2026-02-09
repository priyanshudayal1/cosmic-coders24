import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing email or password" },
        { status: 400 },
      );
    }

    if (!adminDb) {
      return NextResponse.json(
        { error: "Server DB not initialized. Check server logs." },
        { status: 500 },
      );
    }

    const adminsRef = adminDb.collection("admins");
    const querySnapshot = await adminsRef
      .where("email", "==", email)
      .limit(1)
      .get();

    if (querySnapshot.empty) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // In Admin SDK, we get a QuerySnapshot. We take the first doc.
    const adminDoc = querySnapshot.docs[0];
    const adminData = adminDoc.data();

    const isMatch = await bcrypt.compare(password, adminData.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Generate JWT
    const token = signToken({
      id: adminDoc.id,
      email: adminData.email,
      type: adminData.type,
    });

    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
      path: "/",
    });

    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: adminDoc.id,
          email: adminData.email,
          type: adminData.type,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
