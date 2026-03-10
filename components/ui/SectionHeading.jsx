"use client";

import React from "react";
import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { Particles } from "./particles";

const SectionHeading = ({ title, subtitle, eyebrow }) => {
  return (
    <div className="flex flex-col items-center text-center mb-16 relative z-10">
      {/* ── Particles & Glow backdrop ── */}
      <motion.div
        className="absolute -top-10 -bottom-10 left-1/2 -translate-x-1/2 w-[220%] max-w-[1400px] pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Subtle central purple glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(168,85,247,0.10) 0%, rgba(139,92,246,0.03) 50%, transparent 75%)",
          }}
        />

        {/* Interactive particles */}
        <Particles
          className="absolute inset-0 w-full h-full"
          quantity={80}
          staticity={40}
          ease={60}
          size={0.5}
          color="#a855f7"
          vx={0}
          vy={-0.05}
        />
      </motion.div>

      {/* Eyebrow with decorative lines and stars */}
      {eyebrow && <Eyebrow text={eyebrow} />}

      {/* Main Title */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg relative z-10"
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
          className="text-gray-400 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed mix-blend-plus-lighter relative z-10"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
