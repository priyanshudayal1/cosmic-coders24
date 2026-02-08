"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassButton from "../ui/GlassButton";
import BlogCard from "./BlogCard";

const blogPosts = [
    {
        id: 1,
        title: "The Future of AI in Web Development",
        excerpt: "Explore how artificial intelligence is reshaping the way we build, design, and optimize websites for the modern web.",
        date: "Oct 15, 2023",
        author: "Alex Morgan",
        category: "Technology",
        slug: "future-of-ai-web-dev",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Mastering SEO in 2024: A Comprehensive Guide",
        excerpt: "Stay ahead of the competition with the latest SEO strategies, improved ranking factors, and content optimization tips.",
        date: "Nov 02, 2023",
        author: "Sarah Jenkins",
        category: "Marketing",
        slug: "mastering-seo-2024",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Designing for Accessibility: Why It Matters",
        excerpt: "Learn why inclusive design is crucial for user experience and how to implement accessibility standards in your projects.",
        date: "Nov 18, 2023",
        author: "David Chen",
        category: "Design",
        slug: "designing-for-accessibility",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
    }
];

const BlogSection = () => {
    return (
        <section className="w-full py-20 relative" id="blog">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <SectionHeading
                    eyebrow="Our Blog"
                    title="Latest Insights"
                    subtitle="Expert articles, industry trends, and tips to help you stay ahead in the digital landscape."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <BlogCard post={post} />
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <GlassButton
                        href="/blog"
                        className="flex items-center gap-2 text-lg px-8 py-4 bg-white/5 hover:bg-white/10 hover:scale-105 transition-all duration-300 rounded-full border border-white/10 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                    >
                        <span>View All Posts</span>
                        <ArrowRight className="w-5 h-5 ml-1" />
                    </GlassButton>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
