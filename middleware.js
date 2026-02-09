import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth"; // We can't use node-jwt inside middleware easily because it relies on Node crypto not available in Edge runtime.

// For Next.js Middleware (Edge Runtime), we should ideally use 'jose' library, but since user asked to use session for 7 days, we can do client-side check or use 'jose' if we want real JWT parsing in middleware.
// However, the prompt didn't strictly require middleware protection, just "keep logged in".
// I'll skip complex middleware logic for now to avoid Edge Runtime issues with `jsonwebtoken` and stick to standard cookie checking.

// We will rely on simple cookie presence for redirection in middleware,
// and proper verification in API routes / Server Components.

export function middleware(request) {
  // Simple check for existence of cookie
  const token = request.cookies.get("admin_token");
  const { pathname } = request.nextUrl;

  // Protect Admin Routes
  if (pathname.startsWith("/admin")) {
    // Exclude auth page
    if (pathname === "/admin/auth") {
      if (token) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/admin/auth", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
