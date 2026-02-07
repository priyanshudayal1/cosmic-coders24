"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Eyebrow = ({ text, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn("flex items-center justify-center gap-0 mb-4", className)}
        >
            {/* Left Fade Line */}
            <div className="h-[2px] w-24 sm:w-40 bg-linear-to-l from-purple-500 to-transparent opacity-80" />

            {/* Left Icon */}
            <span className="text-purple-200 text-lg leading-none drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] -ml-px relative -top-[1.05px]">✦</span>

            {/* Eyebrow Text */}
            <span className="px-4 text-sm font-semibold tracking-[0.2em] uppercase bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-white to-purple-200 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                {text}
            </span>

            {/* Right Icon */}
            <span className="text-purple-200 text-lg leading-none drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] -mr-px relative -top-[1.05px]">✦</span>

            {/* Right Fade Line */}
            <div className="h-[2px] w-24 sm:w-40 bg-linear-to-r from-purple-500 to-transparent opacity-80" />
        </motion.div>
    );
};

export default Eyebrow;
