import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function GlassCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "group relative p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20",
        className,
      )}
      {...props}
    >
      {/* Internal Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
