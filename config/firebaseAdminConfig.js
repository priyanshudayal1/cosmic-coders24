import admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    if (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          // Replace \n with actual newlines if the key comes as a single string
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        }),
      });
    } else {
      console.warn(
        "⚠️ Firebase Admin SDK Warning: Missing FIREBASE_PRIVATE_KEY or FIREBASE_CLIENT_EMAIL in .env.local",
      );
    }
  } catch (error) {
    console.error("Firebase Admin Initialization Error:", error);
  }
}

// Safely export services. If init failed, these will be null.
const adminDb = admin.apps.length ? admin.firestore() : null;
const adminAuth = admin.apps.length ? admin.auth() : null;

export { admin, adminDb, adminAuth };
