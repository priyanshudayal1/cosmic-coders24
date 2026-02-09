import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password, type, secretKey } = await req.json();

    if (!email || !password || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!adminDb) {
      return NextResponse.json(
        { error: "Server DB not initialized. Check server logs." },
        { status: 500 },
      );
    }

    // Validate Secret Key
    const VALID_SECRET_KEY = process.env.ADMIN_SECRET_KEY;

    if (!VALID_SECRET_KEY) {
      console.error("ADMIN_SECRET_KEY is not defined");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    if (secretKey !== VALID_SECRET_KEY) {
      return NextResponse.json(
        { error: "Invalid Secret Key" },
        { status: 401 },
      );
    }

    const adminsRef = adminDb.collection("admins");
    const querySnapshot = await adminsRef.where("email", "==", email).get();

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = {
      email,
      password: hashedPassword,
      type, // 'admin' or 'blog-manager'
      createdAt: new Date().toISOString(),
    };

    const docRef = await adminsRef.add(newAdmin);

    return NextResponse.json(
      {
        message: "Admin registered successfully",
        user: { id: docRef.id, email, type },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
