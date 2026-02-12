"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DarkVeil from "../backgrounds/DarkVeil";
import GlassButton from "../ui/GlassButton";
import FloatingLines from "../backgrounds/FloatingLines";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0F061A] text-white pt-20">
      {/* FloatingLines Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-60">
        {/* <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={5}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div> */}
      </div>

      {/* Spotlights/Beams */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-purple-600/40 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-indigo-500/35 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Additional Purple Accent */}
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[40%] h-[40%] bg-violet-500/30 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-8">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl"
        >
          We Build Digital Experiences
          <br />
          That Glow in the Dark
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          Websites, branding, SEO, and performance-driven marketing—crafted to
          help modern businesses establish credibility, attract attention, and
          convert consistently.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <GlassButton
            href="/services"
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20"
          >
            Explore Services
          </GlassButton>
          <GlassButton
            href="/about-contact"
            className="px-8 py-3.5 bg-transparent hover:bg-white/5"
          >
            Contact Us
          </GlassButton>
        </motion.div>
      </div>

      {/* Glowing Orb/Planet */}
      <div className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-linear-to-t from-indigo-700 via-purple-600 to-transparent opacity-30 blur-[100px] rounded-full pointer-events-none" />

      {/* Bottom Gradient Fade for seamless transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0F061A] to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
