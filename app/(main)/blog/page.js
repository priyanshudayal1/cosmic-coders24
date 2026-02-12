import PageHeader from "@/components/shared/PageHeader";
import BlogCard from "@/components/Blog/BlogCard";
import { adminDb } from "@/config/firebaseAdminConfig";
import { formatDate } from "@/utils/dateUtils";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Blog({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams?.page) || 1;
  const limit = 6;
  const offset = (page - 1) * limit;

  let posts = [];
  let totalDocs = 0;

  try {
    if (adminDb) {
      const blogsRef = adminDb.collection("blogs");
      const countSnapshot = await blogsRef.count().get();
      totalDocs = countSnapshot.data().count;

      const querySnapshot = await blogsRef
        .orderBy("createdAt", "desc")
        .limit(limit)
        .offset(offset)
        .get();

      posts = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          excerpt: data.excerpt,
          author: data.authorEmail || data.author || "Admin",
          date: formatDate(data.createdAt),
          category: data.category || "Uncategorized",
          slug: doc.id,
          image:
            data.image ||
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
        };
      });
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  const totalPages = Math.ceil(totalDocs / limit);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#0F061A] text-white">
      <main className="flex-grow">
        <PageHeader
          title="Blog"
          description="Insights, tips, and trends from the world of digital marketing, web development, and design. Stay ahead with our expert perspectives."
        />

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.length > 0 ? (
                posts.map((post) => <BlogCard key={post.id} post={post} />)
              ) : (
                <div className="col-span-full text-center text-gray-400">
                  No blogs found.
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                {page > 1 ? (
                  <Link
                    href={`/blog?page=${page - 1}`}
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </Link>
                ) : (
                  <span className="px-4 py-2 bg-white/5 text-gray-500 rounded-lg cursor-not-allowed flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </span>
                )}

                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                      <Link
                        key={pageNum}
                        href={`/blog?page=${pageNum}`}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          page === pageNum
                            ? "bg-purple-500 text-white"
                            : "bg-white/10 text-gray-300 hover:bg-white/20"
                        }`}
                      >
                        {pageNum}
                      </Link>
                    ),
                  )}
                </div>

                {page < totalPages ? (
                  <Link
                    href={`/blog?page=${page + 1}`}
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors flex items-center gap-2"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="px-4 py-2 bg-white/5 text-gray-500 rounded-lg cursor-not-allowed flex items-center gap-2">
                    Next <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
