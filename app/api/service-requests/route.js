import { NextResponse } from "next/server";
import { adminDb } from "@/config/firebaseAdminConfig";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, business, email, phone, service, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All required fields must be provided" },
        { status: 400 },
      );
    }

    const submission = {
      name,
      business: business || "",
      email,
      phone,
      service,
      message,
      submittedAt: new Date().toISOString(),
      status: "new",
    };

    const docRef = await adminDb.collection("service-requests").add(submission);

    return NextResponse.json({
      id: docRef.id,
      message: "Service request submitted successfully",
    });
  } catch (error) {
    console.error("Service request submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit service request" },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    const snapshot = await adminDb
      .collection("service-requests")
      .orderBy("submittedAt", "desc")
      .get();

    const submissions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(submissions);
  } catch (error) {
    console.error("Error fetching service requests:", error);
    return NextResponse.json(
      { error: "Failed to fetch service requests" },
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
        { error: "Service request ID is required" },
        { status: 400 },
      );
    }

    await adminDb.collection("service-requests").doc(id).delete();

    return NextResponse.json({
      message: "Service request deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting service request:", error);
    return NextResponse.json(
      { error: "Failed to delete service request" },
      { status: 500 },
    );
  }
}
