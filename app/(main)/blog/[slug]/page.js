import Link from "next/link";
import BlogPostClient from "./BlogPostClient";
import { adminDb } from "@/config/firebaseAdminConfig";
import { formatDate } from "@/utils/dateUtils";

export const dynamic = "force-dynamic";

const BLOG_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop";

const getBlogBySlug = async (slug) => {
  if (!adminDb) {
    return null;
  }

  const docRef = adminDb.collection("blogs").doc(slug);
  const doc = await docRef.get();

  if (!doc.exists) {
    return null;
  }

  const data = doc.data();
  return {
    id: doc.id,
    title: data.title,
    content: data.content,
    excerpt: data.excerpt || "",
    date: formatDate(data.createdAt),
    author: data.author || data.authorEmail || "Admin",
    category: data.category || "Uncategorized",
    tags: Array.isArray(data.tags) ? data.tags : [],
    image: data.image || BLOG_FALLBACK_IMAGE,
  };
};

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
      return {
        title: "Post Not Found | Cosmic Coders",
        description: "The requested blog post could not be found.",
      };
    }

    const description =
      post.excerpt ||
      "Read expert insights from Cosmic Coders on digital growth and technology.";
    const keywords = [
      ...post.tags,
      post.category,
      "Cosmic Coders",
      "blog",
      "digital marketing",
      "web development",
    ];

    return {
      title: `${post.title} | Cosmic Coders Blog`,
      description,
      keywords,
      openGraph: {
        title: post.title,
        description,
        type: "article",
        images: [{ url: post.image }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description,
        images: [post.image],
      },
    };
  } catch (error) {
    console.error("Error generating blog metadata:", error);
    return {
      title: "Blog | Cosmic Coders",
      description: "Insights and ideas from Cosmic Coders.",
    };
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  let post = null;

  try {
    post = await getBlogBySlug(slug);
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0F061A] text-white">
        <div className="grow flex items-center justify-center">
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
