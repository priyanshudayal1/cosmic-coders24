import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function GET(req) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!adminDb) {
      return NextResponse.json([], { status: 500 });
    }

    // List all users where type == 'blog-manager'
    const adminsRef = adminDb.collection("admins");
    const snapshot = await adminsRef.where("type", "==", "blog-manager").get();

    // Warning: Returning hashed passwords is not dangerous but useless, we won't return them to potential vulnerabilities anyway if not needed.
    // But client "mock" code expected them. We simply return a placeholder or boolean to indicate password exists.
    const managers = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        email: data.email,
        type: data.type,
        createdAt: data.createdAt,
        // We do NOT return the password hash
      };
    });

    return NextResponse.json(managers);
  } catch (error) {
    console.error("Error fetching managers:", error);
    return NextResponse.json(
      { error: "Failed to fetch managers" },
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

    const { username, password } = await req.json(); // Front-end sends 'username' but we use it as email or name?
    // The previous mockup used 'username'. Let's assume it's an email for firebase auth or just a field.
    // Since our existing auth uses 'email', let's map username -> email or just keep it as email.
    // The mockup in BlogManagersPanel used 'username' and 'password'.
    // We should better use 'email' for consistency with our previous Login API.

    const email = username.includes("@")
      ? username
      : `${username}@cosmic-coders.com`;

    const adminsRef = adminDb.collection("admins");

    // Check if exists
    const qSnapshot = await adminsRef.where("email", "==", email).get();
    if (!qSnapshot.empty) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newManager = {
      email,
      password: hashedPassword,
      type: "blog-manager",
      createdAt: new Date().toISOString(),
    };

    const docRef = await adminsRef.add(newManager);

    return NextResponse.json({ id: docRef.id, ...newManager }, { status: 201 });
  } catch (error) {
    console.error("Error creating manager:", error);
    return NextResponse.json(
      { error: "Failed to create manager" },
      { status: 500 },
    );
  }
}
