"use client";

import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";

const PageHeader = ({ title, description, eyebrow }) => {
  return (
    <div className="w-full min-h-[40vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-10">
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow text={eyebrow} />
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-purple-400 mb-6 tracking-tight"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default PageHeader;
