"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Card = ({ children, className, index = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative p-8 rounded-3xl bg-white/10 border border-white/10 overflow-hidden hover:bg-white/20 transition-colors duration-300",
        className,
      )}
      {...props}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default Card;
