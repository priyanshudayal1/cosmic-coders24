"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Aurora from "../backgrounds/Aurora";

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030014] text-white pt-20">
            {/* Aurora Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-60">
                <Aurora
                    colorStops={["#000000", "#1a0b2e", "#4300bf"]}
                    blend={0.5}
                    amplitude={1.2}
                    speed={0.3}
                />
            </div>

            {/* Spotlights/Beams */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />


            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-8">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                >
                    <span className="font-medium text-gray-400 text-xs uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">V3.0 Update</span>
                    <span>Smarter Interviews</span>
                    <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl"
                >
                    Supercharge your <br />
                    research with AI
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
                >
                    Generate insights with depth and scale using AI-interviewers
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-8"
                >
                    <Link
                        href="/try-free"
                        className="px-8 py-3.5 bg-white/10 text-white rounded-xl font-medium border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
                    >
                        Try For Free
                    </Link>
                    <Link
                        href="/schedule-demo"
                        className="px-8 py-3.5 bg-transparent text-white border border-white/10 rounded-xl font-medium hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                    >
                        Schedule A Demo
                    </Link>
                </motion.div>
            </div>

            {/* Glowing Orb/Planet */}
            <div className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-gradient-to-t from-[#5227FF] via-[#7c3aed] to-transparent opacity-20 blur-[100px] rounded-full pointer-events-none" />

            {/* Bottom Gradient Fade for seamless transition */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none" />
        </div>
    );
};

export default Hero;
