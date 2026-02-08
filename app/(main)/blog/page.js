import PageHeader from "@/components/shared/PageHeader";
import BlogCard from "@/components/Blog/BlogCard";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Web Design Trends Dominating 2026",
      excerpt: "Discover the latest design trends shaping the digital landscape, from AI-powered interfaces to immersive 3D experiences.",
      author: "Sarah Chen",
      date: "Feb 5, 2026",
      category: "Design",
      slug: "web-design-trends-2026",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "SEO in the Age of AI: What You Need to Know",
      excerpt: "How artificial intelligence is transforming search engine optimization and what strategies still work in 2026.",
      author: "Michael Rodriguez",
      date: "Feb 3, 2026",
      category: "SEO",
      slug: "seo-age-of-ai",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Building High-Converting Landing Pages",
      excerpt: "A comprehensive guide to creating landing pages that turn visitors into customers with proven conversion tactics.",
      author: "Emily Watson",
      date: "Jan 28, 2026",
      category: "Marketing",
      slug: "high-converting-landing-pages",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "The Rise of Micro-Interactions in UX",
      excerpt: "Why small design details make a big difference in user experience and how to implement them effectively.",
      author: "David Kim",
      date: "Jan 25, 2026",
      category: "UX Design",
      slug: "micro-interactions-ux",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Social Media Strategy for 2026",
      excerpt: "Platform-specific strategies and content types that are driving engagement and growth this year.",
      author: "Jessica Martinez",
      date: "Jan 20, 2026",
      category: "Social Media",
      slug: "social-media-strategy-2026",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Optimizing Website Performance",
      excerpt: "Technical tips and best practices for achieving lightning-fast load times and better Core Web Vitals scores.",
      author: "Alex Thompson",
      date: "Jan 15, 2026",
      category: "Development",
      slug: "optimizing-website-performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Brand Identity: More Than Just a Logo",
      excerpt: "Understanding the elements of a complete brand identity system and why consistency matters.",
      author: "Rachel Green",
      date: "Jan 10, 2026",
      category: "Branding",
      slug: "brand-identity-guide",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Video Marketing Trends You Can't Ignore",
      excerpt: "From short-form content to live streaming, explore the video formats that are capturing audience attention.",
      author: "Chris Anderson",
      date: "Jan 5, 2026",
      category: "Video Marketing",
      slug: "video-marketing-trends",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 9,
      title: "Accessibility in Web Design",
      excerpt: "Creating inclusive digital experiences that work for everyone, with practical implementation tips.",
      author: "Maya Patel",
      date: "Dec 30, 2025",
      category: "Accessibility",
      slug: "accessibility-web-design",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
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
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
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
