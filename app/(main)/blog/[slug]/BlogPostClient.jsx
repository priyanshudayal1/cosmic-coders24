"use client";

import Image from "next/image";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPostClient({ post }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#030014] text-white">
      <article className="flex-grow">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            <div className="mb-6">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-6 text-gray-400 mb-12 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-purple-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>{post.date}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none mb-20 prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white prose-em:text-zinc-300 prose-code:text-purple-400 prose-code:bg-zinc-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:text-zinc-400 prose-blockquote:italic prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 hover:prose-a:underline prose-li:text-zinc-300 prose-ul:text-zinc-300 prose-ol:text-zinc-300 prose-hr:border-zinc-700 prose-img:rounded-lg prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
