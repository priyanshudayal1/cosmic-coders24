"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassButton from "../ui/GlassButton";
import BlogCard from "./BlogCard";
import { formatDate } from "@/utils/dateUtils";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs?limit=3");
        if (res.ok) {
          const data = await res.json();
          const formatted = data.map((blog) => ({
            id: blog.id,
            title: blog.title,
            excerpt: blog.excerpt,
            date: formatDate(blog.createdAt),
            author: blog.author || blog.authorEmail || "Admin",
            category: blog.category || "Uncategorized",
            slug: blog.id,
            image:
              blog.image ||
              "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
          }));
          setBlogPosts(formatted);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return null; // Or a skeleton

  if (blogPosts.length === 0) return null;

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
