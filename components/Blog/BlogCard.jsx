"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import SpotlightCard from "../SpotlightCard";

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <SpotlightCard className="h-full bg-white/10 border-white/10 p-0 flex flex-col group hover:bg-white/20 transition-colors duration-300">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-3xl border-b border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0F061A] to-transparent opacity-60" />

          {/* Badge */}
          <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider shadow-lg">
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 mb-4">
            <div className="flex items-center gap-1.5 shrink-0">
              <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="whitespace-nowrap">{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 min-w-0">
              <User className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="truncate">{post.author}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center text-sm font-medium text-purple-400 group-hover:text-white transition-colors mt-auto">
            <span>Read Article</span>
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
};

export default BlogCard;
