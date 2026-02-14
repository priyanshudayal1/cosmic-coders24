import Link from "next/link";
import BlogPostClient from "./BlogPostClient";
import { adminDb } from "@/config/firebaseAdminConfig";
import { formatDate } from "@/utils/dateUtils";

export const dynamic = "force-dynamic";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  let post = null;

  try {
    if (adminDb) {
      const docRef = adminDb.collection("blogs").doc(slug);
      const doc = await docRef.get();

      if (doc.exists) {
        const data = doc.data();
        post = {
          id: doc.id,
          title: data.title,
          content: data.content,
          date: formatDate(data.createdAt),
          author: data.author || data.authorEmail || "Admin",
          category: data.category || "Uncategorized",
          image:
            data.image ||
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
        };
      }
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0F061A] text-white">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link
              href="/blog"
              className="text-purple-400 hover:text-purple-300"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <BlogPostClient post={post} />;
}
