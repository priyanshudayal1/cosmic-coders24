"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassButton from "../ui/GlassButton";
import { Particles } from "../ui/particles";
import HeroBackground from "../backgrounds/HeroBackground";
import MagicRings from "../backgrounds/MagicRings";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-site-bg text-white pt-28">
      {/* ── Starfield ── */}
      <Particles
        className="absolute inset-0 w-full h-full z-0"
        quantity={140}
        staticity={35}
        ease={60}
        size={0.6}
        color="#ffffff"
        vx={0}
        vy={0.05}
      />

      {/* ── Static cosmic glow + shooting stars (no per-frame repaints) ── */}
      {/* <HeroBackground /> */}

      {/* ── Magic rings halo behind the headline ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* THREE.Color cannot parse var(), so these mirror the literal
            --site-secondary-400 / --site-accent-400 values. */}
        <MagicRings
          color="#a992ea"
          colorTwo="#61a6fa"
          speed={0.55}
          ringCount={5}
          opacity={0.5}
          lineThickness={1.6}
          noiseAmount={0.04}
          scaleRate={0.14}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-site-border bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-slate-200/90 backdrop-blur-sm tracking-wide"
        >
          <span className="text-purple-300">✦</span>
          Full-Service Digital Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-2xl"
        >
          <span className="block sm:inline sm:whitespace-nowrap">
            We Build Digital Experiences
          </span>
          <br className="hidden sm:block" />
          <span
            className="block sm:inline bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--site-accent-300), var(--site-accent-400) 35%, var(--site-secondary-400) 70%, var(--site-pink))",
            }}
          >
            That Drive Visibility &amp; Real Growth
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl text-base sm:text-lg text-slate-300/85 leading-relaxed"
        >
          Websites, SEO and growth engineering for brands that want to stand
          out — designed, built and launched by one dedicated crew.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
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

      {/* ── Outer orbit ring — faint second ring above the horizon ── */}
      <div
        className="absolute bottom-[-58vw] md:bottom-[-44vw] left-1/2 -translate-x-1/2 w-[172vw] md:w-[130vw] aspect-square rounded-full pointer-events-none border border-white/5"
      />

      {/* ── Glowing horizon arc (GitHub Universe style) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.9 }}
        className="absolute bottom-[-55vw] md:bottom-[-42vw] left-1/2 -translate-x-1/2 w-[160vw] md:w-[120vw] aspect-square rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(var(--site-glow), 0.5)",
          boxShadow:
            "0 -20px 80px 10px rgba(var(--site-glow), 0.25), inset 0 20px 120px 0 rgba(var(--site-glow), 0.12)",
          background:
            "radial-gradient(circle at 50% 0%, rgba(var(--site-glow), 0.10), rgba(var(--site-glow), 0.03) 28%, transparent 50%)",
        }}
      />

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <div className="scroll-hint flex flex-col items-center gap-1.5 text-slate-400/70">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-slate-400/40 p-1">
            <span className="h-1.5 w-0.5 rounded-full bg-slate-300/80" />
          </span>
        </div>
      </motion.div>

      {/* Bottom fade for seamless transition into next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-site-bg to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
