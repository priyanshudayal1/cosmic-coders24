"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "../ui/SectionHeading";
import GlassButton from "../ui/GlassButton";

const Results = () => {
  const gradientId = useId();
  const seoGrowthData = [42, 55, 63, 78, 91, 108];

  return (
    <section className="w-full py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Proven Results"
          title="We deliver results that matter"
          subtitle="Our data-driven approach ensures measurable growth and ROI for your business."
        />

        <div className="flex justify-center mb-12">
          {/* SEO Results Card */}
          <SpotlightCard className="w-full max-w-2xl flex flex-col items-center text-center group bg-white/5 border-white/10">
            <div className="w-full flex justify-between items-start mb-5">
              <div className="flex items-center gap-2 text-white/90">
                <BarChart3 className="w-5 h-5 text-indigo-300" />
                <span className="text-sm md:text-base font-semibold">
                  Organic Traffic Growth
                </span>
              </div>
              <div className="flex items-center gap-1 text-emerald-300 text-xs md:text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                +157% in 6 months
              </div>
            </div>

            <div className="w-full flex justify-center mb-8 relative h-44 rounded-xl border border-white/10 bg-black/20 p-3">
              <svg
                viewBox="0 0 420 180"
                className="w-full h-full"
                role="img"
                aria-label="SEO bar chart showing monthly organic traffic growth"
              >
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="1" />
                    <stop
                      offset="100%"
                      stopColor="#6366f1"
                      stopOpacity="0.55"
                    />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((row) => (
                  <line
                    key={row}
                    x1="42"
                    y1={22 + row * 30}
                    x2="392"
                    y2={22 + row * 30}
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                  />
                ))}

                {/* Y-axis labels */}
                {[120, 90, 60, 30, 0].map((value, i) => (
                  <text
                    key={value}
                    x="32"
                    y={26 + i * 30}
                    fill="rgba(255,255,255,0.6)"
                    fontSize="11"
                    textAnchor="end"
                  >
                    {value}k
                  </text>
                ))}

                {/* Bars and x-axis labels */}
                {seoGrowthData.map((value, index) => {
                  const barWidth = 36;
                  const gap = 22;
                  const x = 58 + index * (barWidth + gap);
                  const maxBarHeight = 118;
                  const yBase = 142;
                  const barHeight = (value / 120) * maxBarHeight;
                  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

                  return (
                    <g key={`${months[index]}-${value}`}>
                      <motion.rect
                        x={x}
                        y={yBase}
                        width={barWidth}
                        height="0"
                        rx="6"
                        fill={`url(#${gradientId})`}
                        initial={{ height: 0, y: yBase, opacity: 0 }}
                        whileInView={{
                          height: barHeight,
                          y: yBase - barHeight,
                          opacity: 1,
                        }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{
                          duration: 0.55,
                          delay: index * 0.12,
                          ease: "easeOut",
                        }}
                      />
                      <text
                        x={x + barWidth / 2}
                        y="160"
                        fill="rgba(255,255,255,0.65)"
                        fontSize="11"
                        textAnchor="middle"
                      >
                        {months[index]}
                      </text>
                    </g>
                  );
                })}
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
          <GlassButton
            href="/results/seo"
            className="rounded-full shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center"
          >
            View Full Results
            <ArrowRight className="w-4 h-4 ml-2" />
          </GlassButton>
        </div>
      </div>
    </section>
  );
};

export default Results;
