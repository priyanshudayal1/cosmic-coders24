import Image from "next/image";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import BlogPostClient from "./BlogPostClient";

const blogPosts = {
  "future-of-ai-web-dev": {
    id: 1,
    title: "The Future of AI in Web Development",
    content: `<p>Artificial intelligence is revolutionizing the way we approach web development. From automated code generation to intelligent design systems, AI is becoming an indispensable tool for modern developers.</p>
    
    <h2>The Current State of AI in Web Development</h2>
    <p>Today's AI tools can assist with everything from writing boilerplate code to optimizing performance. Machine learning algorithms analyze user behavior to create more personalized experiences, while natural language processing enables more intuitive interfaces.</p>
    
    <h2>What's Coming Next</h2>
    <p>The future promises even more exciting developments. We're seeing the emergence of AI-powered design systems that can automatically generate responsive layouts, intelligent testing frameworks that predict bugs before they occur, and advanced optimization tools that continuously improve site performance.</p>
    
    <h2>Preparing for the AI-Driven Future</h2>
    <p>As developers, it's crucial to embrace these tools while maintaining our core skills. Understanding the fundamentals of web development remains essential, even as AI handles more routine tasks. The key is learning to work alongside AI, leveraging its strengths while applying human creativity and problem-solving.</p>`,
    date: "Oct 15, 2023",
    author: "Alex Morgan",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  "mastering-seo-2024": {
    id: 2,
    title: "Mastering SEO in 2024: A Comprehensive Guide",
    content: `<p>Search Engine Optimization continues to evolve, and staying ahead requires understanding the latest trends and best practices.</p>
    
    <h2>Core Web Vitals Matter More Than Ever</h2>
    <p>Google's emphasis on user experience metrics means that page speed, interactivity, and visual stability are crucial ranking factors. Optimizing these metrics should be a top priority.</p>
    
    <h2>Content Quality Over Quantity</h2>
    <p>Search engines are getting better at understanding content quality. Focus on creating comprehensive, valuable content that truly serves your audience's needs rather than churning out thin articles.</p>
    
    <h2>Technical SEO Fundamentals</h2>
    <p>Proper site structure, clean URLs, XML sitemaps, and mobile optimization remain essential. Don't neglect the technical foundation of your SEO strategy.</p>`,
    date: "Nov 02, 2023",
    author: "Sarah Jenkins",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
  },
  "designing-for-accessibility": {
    id: 3,
    title: "Designing for Accessibility: Why It Matters",
    content: `<p>Accessibility isn't just about compliance—it's about creating inclusive experiences that work for everyone.</p>
    
    <h2>The Business Case for Accessibility</h2>
    <p>Accessible websites reach a wider audience, improve SEO, and demonstrate social responsibility. It's not just the right thing to do; it's good business.</p>
    
    <h2>Key Accessibility Principles</h2>
    <p>Focus on semantic HTML, proper color contrast, keyboard navigation, and screen reader compatibility. These fundamentals ensure your site works for users with various disabilities.</p>
    
    <h2>Testing and Implementation</h2>
    <p>Use automated tools like WAVE and axe, but don't forget manual testing. Real user feedback from people with disabilities is invaluable.</p>`,
    date: "Nov 18, 2023",
    author: "David Chen",
    category: "Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
  },
  "web-design-trends-2026": {
    id: 1,
    title: "10 Web Design Trends Dominating 2026",
    content: `<p>The digital landscape is constantly evolving, and 2026 brings exciting new design trends that are reshaping how we create web experiences.</p>
    
    <h2>AI-Powered Interfaces</h2>
    <p>Artificial intelligence is no longer just a backend tool. Modern interfaces are incorporating AI-driven personalization, predictive UI elements, and intelligent content adaptation.</p>
    
    <h2>Immersive 3D Experiences</h2>
    <p>WebGL and WebGPU technologies are enabling stunning 3D experiences directly in the browser, creating more engaging and memorable user interactions.</p>`,
    date: "Feb 5, 2026",
    author: "Sarah Chen",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop"
  },
  "seo-age-of-ai": {
    id: 2,
    title: "SEO in the Age of AI: What You Need to Know",
    content: `<p>Artificial intelligence is transforming search engine optimization in unprecedented ways.</p>
    
    <h2>AI-Generated Content</h2>
    <p>While AI can help create content, search engines are getting better at detecting low-quality AI content. Focus on using AI as a tool to enhance human creativity, not replace it.</p>
    
    <h2>Voice Search Optimization</h2>
    <p>With AI assistants becoming more prevalent, optimizing for conversational queries is essential.</p>`,
    date: "Feb 3, 2026",
    author: "Michael Rodriguez",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
  },
  "high-converting-landing-pages": {
    id: 3,
    title: "Building High-Converting Landing Pages",
    content: `<p>A well-designed landing page can dramatically improve your conversion rates and ROI.</p>
    
    <h2>Clear Value Proposition</h2>
    <p>Your headline should immediately communicate what you offer and why it matters. Visitors should understand your value within seconds.</p>
    
    <h2>Strong Call-to-Action</h2>
    <p>Make your CTA prominent, action-oriented, and compelling. Use contrasting colors and clear, benefit-driven copy.</p>`,
    date: "Jan 28, 2026",
    author: "Emily Watson",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  "micro-interactions-ux": {
    id: 4,
    title: "The Rise of Micro-Interactions in UX",
    content: `<p>Small design details can make a big difference in user experience.</p>
    
    <h2>What Are Micro-Interactions?</h2>
    <p>Micro-interactions are subtle animations and feedback mechanisms that guide users and make interfaces feel more responsive and alive.</p>
    
    <h2>Best Practices</h2>
    <p>Keep them subtle, purposeful, and fast. Every micro-interaction should serve a clear function.</p>`,
    date: "Jan 25, 2026",
    author: "David Kim",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
  },
  "social-media-strategy-2026": {
    id: 5,
    title: "Social Media Strategy for 2026",
    content: `<p>Social media continues to evolve, and successful strategies must adapt to new platforms and user behaviors.</p>
    
    <h2>Platform-Specific Content</h2>
    <p>Each platform has its own culture and content preferences. Tailor your approach rather than cross-posting identical content.</p>
    
    <h2>Authenticity Over Polish</h2>
    <p>Users increasingly value authentic, behind-the-scenes content over highly produced material.</p>`,
    date: "Jan 20, 2026",
    author: "Jessica Martinez",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop"
  },
  "optimizing-website-performance": {
    id: 6,
    title: "Optimizing Website Performance",
    content: `<p>Website performance directly impacts user experience, SEO, and conversion rates.</p>
    
    <h2>Image Optimization</h2>
    <p>Use modern formats like WebP, implement lazy loading, and serve responsive images to dramatically reduce page weight.</p>
    
    <h2>Code Splitting</h2>
    <p>Load only the JavaScript needed for each page, deferring non-critical scripts to improve initial load times.</p>`,
    date: "Jan 15, 2026",
    author: "Alex Thompson",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  "brand-identity-guide": {
    id: 7,
    title: "Brand Identity: More Than Just a Logo",
    content: `<p>A complete brand identity system encompasses much more than a logo design.</p>
    
    <h2>Visual Elements</h2>
    <p>Color palettes, typography, imagery style, and graphic elements all work together to create a cohesive brand presence.</p>
    
    <h2>Brand Voice</h2>
    <p>How you communicate is just as important as how you look. Develop a consistent tone and messaging strategy.</p>`,
    date: "Jan 10, 2026",
    author: "Rachel Green",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop"
  },
  "video-marketing-trends": {
    id: 8,
    title: "Video Marketing Trends You Can't Ignore",
    content: `<p>Video content continues to dominate digital marketing, with new formats and platforms emerging constantly.</p>
    
    <h2>Short-Form Content</h2>
    <p>Platforms like TikTok and Instagram Reels have made short, engaging videos essential for reaching younger audiences.</p>
    
    <h2>Live Streaming</h2>
    <p>Live video creates authentic connections and drives engagement through real-time interaction.</p>`,
    date: "Jan 5, 2026",
    author: "Chris Anderson",
    category: "Video Marketing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
  },
  "accessibility-web-design": {
    id: 9,
    title: "Accessibility in Web Design",
    content: `<p>Creating inclusive digital experiences benefits everyone and is increasingly required by law.</p>
    
    <h2>WCAG Guidelines</h2>
    <p>Follow Web Content Accessibility Guidelines to ensure your site meets international accessibility standards.</p>
    
    <h2>Practical Implementation</h2>
    <p>Use semantic HTML, provide alt text for images, ensure keyboard navigation, and maintain sufficient color contrast.</p>`,
    date: "Dec 30, 2025",
    author: "Maya Patel",
    category: "Accessibility",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop"
  }
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-[#030014] text-white">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-purple-400 hover:text-purple-300">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <BlogPostClient post={post} />;
}
