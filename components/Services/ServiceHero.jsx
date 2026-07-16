"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";

const ServiceHero = ({
  title,
  subtitle,
  highlightedText,
  ctaText = "Get Started",
  ctaHref = "#contact",
  onCtaClick,
  showCta = true,
  compact = false,
}) => {
  return (
    <section
      className={`relative flex flex-col items-center justify-center pt-32 px-4 sm:px-6 overflow-hidden ${
        compact ? "pb-6" : "min-h-[50vh] pb-12"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[60vw] h-[60vw] bg-linear-to-t from-indigo-500/10 via-purple-500/10 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          {title}{" "}
          {highlightedText && (
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
              {highlightedText}
            </span>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto ${
            showCta ? "mb-10" : ""
          }`}
        >
          {subtitle}
        </motion.p>
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <GlassButton
              href={ctaHref}
              onClick={onCtaClick}
              className="px-8 py-4 text-lg bg-white/10 hover:bg-white/20 border-white/10"
            >
              {ctaText}
            </GlassButton>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceHero;
