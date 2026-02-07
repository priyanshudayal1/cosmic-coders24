"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SectionHeading = ({ title, subtitle, eyebrow }) => {
    return (
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
            {/* Eyebrow with decorative lines and stars */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
            >
                {/* Left Fade Line */}
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-purple-500 to-transparent opacity-70" />

                {/* Left Star */}
                <span className="text-purple-400 text-xs">✦</span>

                {/* Eyebrow Text */}
                <span className="text-sm font-medium text-gray-300 tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">
                    {eyebrow}
                </span>

                {/* Right Star */}
                <span className="text-purple-400 text-xs">✦</span>

                {/* Right Fade Line */}
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-purple-500 to-transparent opacity-70" />
            </motion.div>

            {/* Main Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
            >
                {title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 max-w-2xl text-lg leading-relaxed mix-blend-plus-lighter"
            >
                {subtitle}
            </motion.p>
        </div>
    );
};

export default SectionHeading;
