import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "10 Web Design Trends Dominating 2026",
      excerpt:
        "Discover the latest design trends shaping the digital landscape, from AI-powered interfaces to immersive 3D experiences.",
      author: "Sarah Chen",
      date: "Feb 5, 2026",
      category: "Design",
      readTime: "5 min read",
    },
    {
      title: "SEO in the Age of AI: What You Need to Know",
      excerpt:
        "How artificial intelligence is transforming search engine optimization and what strategies still work in 2026.",
      author: "Michael Rodriguez",
      date: "Feb 3, 2026",
      category: "SEO",
      readTime: "7 min read",
    },
    {
      title: "Building High-Converting Landing Pages",
      excerpt:
        "A comprehensive guide to creating landing pages that turn visitors into customers with proven conversion tactics.",
      author: "Emily Watson",
      date: "Jan 28, 2026",
      category: "Marketing",
      readTime: "6 min read",
    },
    {
      title: "The Rise of Micro-Interactions in UX",
      excerpt:
        "Why small design details make a big difference in user experience and how to implement them effectively.",
      author: "David Kim",
      date: "Jan 25, 2026",
      category: "UX Design",
      readTime: "4 min read",
    },
    {
      title: "Social Media Strategy for 2026",
      excerpt:
        "Platform-specific strategies and content types that are driving engagement and growth this year.",
      author: "Jessica Martinez",
      date: "Jan 20, 2026",
      category: "Social Media",
      readTime: "8 min read",
    },
    {
      title: "Optimizing Website Performance",
      excerpt:
        "Technical tips and best practices for achieving lightning-fast load times and better Core Web Vitals scores.",
      author: "Alex Thompson",
      date: "Jan 15, 2026",
      category: "Development",
      readTime: "10 min read",
    },
    {
      title: "Brand Identity: More Than Just a Logo",
      excerpt:
        "Understanding the elements of a complete brand identity system and why consistency matters.",
      author: "Rachel Green",
      date: "Jan 10, 2026",
      category: "Branding",
      readTime: "5 min read",
    },
    {
      title: "Video Marketing Trends You Can't Ignore",
      excerpt:
        "From short-form content to live streaming, explore the video formats that are capturing audience attention.",
      author: "Chris Anderson",
      date: "Jan 5, 2026",
      category: "Video Marketing",
      readTime: "6 min read",
    },
    {
      title: "Accessibility in Web Design",
      excerpt:
        "Creating inclusive digital experiences that work for everyone, with practical implementation tips.",
      author: "Maya Patel",
      date: "Dec 30, 2025",
      category: "Accessibility",
      readTime: "7 min read",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
      <main className="flex-grow">
        <PageHeader
          title="Blog"
          description="Insights, tips, and trends from the world of digital marketing, web development, and design. Stay ahead with our expert perspectives."
        />

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <SpotlightCard key={index} className="h-full flex flex-col">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 hover:text-purple-400 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-grow">{post.excerpt}</p>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <button className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors">
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
