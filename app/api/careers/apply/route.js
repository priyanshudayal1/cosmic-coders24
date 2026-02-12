import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";
import { uploadPDF } from "@/config/cloudinary";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const role = formData.get("role");
    const resume = formData.get("resume");

    if (!firstName || !lastName || !email || !resume) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 },
      );
    }

    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const resumeUrl = await uploadPDF(buffer, "resumes");

    const submission = {
      firstName,
      lastName,
      email,
      role: role || "Not specified",
      resumeUrl,
      fileName: resume.name,
      submittedAt: new Date().toISOString(),
    };

    const docRef = await adminDb
      .collection("career-applications")
      .add(submission);

    return NextResponse.json({
      id: docRef.id,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Resume upload error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    const snapshot = await adminDb
      .collection("career-applications")
      .orderBy("submittedAt", "desc")
      .get();
    const applications = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 },
    );
  }
}
