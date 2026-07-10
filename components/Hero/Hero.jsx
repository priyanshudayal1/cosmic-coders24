"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassButton from "../ui/GlassButton";
import { Particles } from "../ui/particles";

// Fixed configs (not Math.random) so server & client render identically
const METEORS = [
  { top: "-5%", left: "10%", delay: "0s", duration: "6s" },
  { top: "-10%", left: "30%", delay: "1.8s", duration: "7.5s" },
  { top: "-5%", left: "45%", delay: "3.2s", duration: "5.5s" },
  { top: "-12%", left: "60%", delay: "0.9s", duration: "8s" },
  { top: "-8%", left: "75%", delay: "4.5s", duration: "6.5s" },
  { top: "-4%", left: "90%", delay: "2.6s", duration: "7s" },
];

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
        vy={-0.04}
      />

      {/* ── Aurora glows (indigo-blue shoulders + soft purple core, drift slowly) ── */}
      <div
        className="absolute top-[-25%] left-[-15%] w-[60%] h-[70%] rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-aurora will-change-transform"
        style={{ background: "rgb(var(--glow-blue))", opacity: 0.32 }}
      />
      <div
        className="absolute top-[-20%] right-[-15%] w-[55%] h-[65%] rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-aurora-slow will-change-transform"
        style={{ background: "rgb(var(--glow-indigo))", opacity: 0.3 }}
      />
      <div
        className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[58%] h-[48%] rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-aurora will-change-transform"
        style={{ background: "rgb(var(--glow-purple))", opacity: 0.26 }}
      />

      {/* ── Meteors ── */}
      {METEORS.map((m, i) => (
        <span
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full animate-meteor pointer-events-none"
          style={{
            top: m.top,
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
            background: "var(--site-accent-300)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
          }}
        >
          <span
            className="absolute top-1/2 -translate-y-1/2 left-0 h-px w-[70px]"
            style={{
              background:
                "linear-gradient(90deg, var(--site-accent-300), transparent)",
            }}
          />
        </span>
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto space-y-8">
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
            "radial-gradient(circle at 50% 0%, rgba(var(--site-glow), 0.08), var(--site-bg) 45%)",
        }}
      />

      {/* Bottom fade for seamless transition into next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-site-bg to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
