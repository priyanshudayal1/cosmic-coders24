"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart, TrendingUp, ArrowRight } from "lucide-react";
import SpotlightCard from "../SpotlightCard";
import SectionHeading from "../ui/SectionHeading";
import GlassButton from "../ui/GlassButton";

const Results = () => {
  return (
    <section className="w-full py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Proven Results"
          title="We deliver results that matter"
          subtitle="Our data-driven approach ensures measurable growth and ROI for your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* SMM Results Card */}
          <SpotlightCard className="flex flex-col items-center text-center group bg-white/5 border-white/10">
            <div className="w-full flex justify-center mb-8">
              {/* Mock Bar Chart */}
              <div className="flex items-end gap-3 h-32">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "40%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="w-8 bg-white/10 rounded-t-sm"
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "65%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-8 bg-white/20 rounded-t-sm"
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "50%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-8 bg-white/10 rounded-t-sm"
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "85%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-8 bg-purple-500/80 rounded-t-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "30%" }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="w-8 bg-white/10 rounded-t-sm"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Social Media Marketing Results
            </h3>
            <p className="text-gray-400">
              Consistent engagement growth and audience reach expansion across
              all platforms.
            </p>
          </SpotlightCard>

          {/* SEO Results Card */}
          <SpotlightCard className="flex flex-col items-center text-center group bg-white/5 border-white/10">
            <div className="w-full flex justify-center mb-8 relative h-32">
              {/* Mock Line Chart SVG */}
              <svg
                viewBox="0 0 200 100"
                className="w-full max-w-48 h-full overflow-visible"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M0,80 C40,80 50,30 80,50 C110,70 130,10 200,20"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Dot points */}
                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1 }}
                  cx="0"
                  cy="80"
                  r="4"
                  fill="#818cf8"
                />
                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                  cx="80"
                  cy="50"
                  r="4"
                  fill="#a78bfa"
                />
                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.4 }}
                  cx="200"
                  cy="20"
                  r="4"
                  fill="#c084fc"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">SEO Results</h3>
            <p className="text-gray-400">
              Significant ranking improvements and organic traffic boost for
              targeted keywords.
            </p>
          </SpotlightCard>
        </div>

        <div className="flex justify-center">
          <GlassButton className="rounded-full shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center">
            View Full Results
            <ArrowRight className="w-4 h-4 ml-2" />
          </GlassButton>
        </div>
      </div>
    </section>
  );
};

export default Results;
