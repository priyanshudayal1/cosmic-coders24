"use client";

import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";

const SectionHeading = ({ title, subtitle, eyebrow }) => {
  return (
    <div className="flex flex-col items-center text-center mb-16 relative z-10">
      {/* Eyebrow with decorative lines and stars */}
      <Eyebrow text={eyebrow} />

      {/* Main Title */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
        >
          {title}
        </motion.h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-xl leading-relaxed mix-blend-plus-lighter"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
