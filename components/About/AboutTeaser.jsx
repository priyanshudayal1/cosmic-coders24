"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassButton from "../ui/GlassButton";

const AboutTeaser = () => {
  return (
    <section
      className="w-full py-20 relative overflow-hidden"
      id="about-teaser"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-125 h-125 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-75 h-75 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
        <SectionHeading eyebrow="Who We Are" title="Cosmic Coders" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-3xl">
            We are a team of visionary developers and designers dedicated to
            crafting digital experiences that transcend the ordinary. Our
            mission is to empower businesses with innovative technology and
            stunning aesthetics that drive real growth.
          </p>

          <GlassButton
            href="/about-contact"
            className="flex items-center gap-2 text-lg px-8 py-4 bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 rounded-full border border-white/10 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          >
            <span>About & Contact Page</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeaser;
