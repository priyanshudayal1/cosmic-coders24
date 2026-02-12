"use client";

import React from "react";
import GlassButton from "@/components/ui/GlassButton";

const ServiceHero = ({
  title,
  subtitle,
  highlightedText,
  ctaText = "Get Started",
  ctaHref = "#contact",
}) => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[60vw] h-[60vw] bg-linear-to-t from-indigo-500/10 via-purple-500/10 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
          {title}{" "}
          {highlightedText && (
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
              {highlightedText}
            </span>
          )}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="flex justify-center">
          <GlassButton
            href={ctaHref}
            className="px-8 py-4 text-lg bg-white/10 hover:bg-white/20 border-white/10"
          >
            {ctaText}
          </GlassButton>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
