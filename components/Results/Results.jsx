"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "../ui/SectionHeading";
import GlassButton from "../ui/GlassButton";

// Build a smooth Catmull-Rom spline through the points (rendered as cubic beziers)
const buildSmoothPath = (pts) => {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
};

const Results = () => {
  const seoGrowthData = [42, 55, 63, 78, 91, 108];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const maxValue = 120;

  // Plot geometry within the 420 x 180 viewBox
  const left = 46;
  const right = 404;
  const top = 20;
  const base = 142;
  const plotW = right - left;
  const plotH = base - top;

  const points = seoGrowthData.map((value, i) => ({
    x: left + (i / (seoGrowthData.length - 1)) * plotW,
    y: base - (value / maxValue) * plotH,
    value,
    label: months[i],
  }));

  const linePath = buildSmoothPath(points);
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${base} L ${points[0].x} ${base} Z`;
  const gridValues = [120, 90, 60, 30, 0];
  const drawDuration = 1.7;

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
            </div>

            <div className="w-full flex justify-center mb-8 relative h-52 rounded-xl border border-white/10 bg-black/20 p-3 overflow-hidden">
              <svg
                viewBox="0 0 420 180"
                className="w-full h-full"
                role="img"
                aria-label="Area chart showing monthly organic traffic growth"
              >
                <defs>
                  <linearGradient id="seoAreaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#79c0ff" stopOpacity="0.45" />
                    <stop offset="55%" stopColor="#a371f7" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#1f6feb" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="seoLineStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#c4b5fd" />
                    <stop offset="100%" stopColor="#1f6feb" />
                  </linearGradient>
                  <filter
                    id="seoGlow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Grid lines + Y-axis labels */}
                {gridValues.map((value, i) => {
                  const y = base - (value / maxValue) * plotH;
                  return (
                    <g key={value}>
                      <line
                        x1={left}
                        y1={y}
                        x2={right}
                        y2={y}
                        stroke="rgba(255,255,255,0.10)"
                        strokeWidth="1"
                        strokeDasharray="3 5"
                      />
                      <text
                        x={left - 10}
                        y={y + 3.5}
                        fill="rgba(255,255,255,0.55)"
                        fontSize="10"
                        textAnchor="end"
                      >
                        {value}k
                      </text>
                    </g>
                  );
                })}

                {/* Gradient area fill */}
                <motion.path
                  d={areaPath}
                  fill="url(#seoAreaFill)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                />

                {/* Animated line that draws itself in */}
                <motion.path
                  d={linePath}
                  fill="none"
                  stroke="url(#seoLineStroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#seoGlow)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: drawDuration, ease: "easeInOut" }}
                />

                {/* Data points + value labels + month labels */}
                {points.map((p, index) => {
                  const dotDelay =
                    0.15 + (index / (points.length - 1)) * drawDuration;
                  return (
                    <g key={`${p.label}-${p.value}`}>
                      {/* glow halo */}
                      <motion.circle
                        cx={p.x}
                        cy={p.y}
                        r="7"
                        fill="#79c0ff"
                        opacity="0.25"
                        style={{
                          transformBox: "fill-box",
                          transformOrigin: "center",
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.4,
                          delay: dotDelay,
                          ease: "backOut",
                        }}
                      />
                      {/* solid point */}
                      <motion.circle
                        cx={p.x}
                        cy={p.y}
                        r="3.5"
                        fill="var(--site-bg)"
                        stroke="#c4b5fd"
                        strokeWidth="2"
                        style={{
                          transformBox: "fill-box",
                          transformOrigin: "center",
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.4,
                          delay: dotDelay,
                          ease: "backOut",
                        }}
                      />
                      {/* value label */}
                      <motion.text
                        x={p.x}
                        y={p.y - 12}
                        fill="rgba(255,255,255,0.85)"
                        fontSize="10"
                        fontWeight="600"
                        textAnchor="middle"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.35,
                          delay: dotDelay + 0.15,
                          ease: "easeOut",
                        }}
                      >
                        {p.value}k
                      </motion.text>
                      {/* month label */}
                      <text
                        x={p.x}
                        y="164"
                        fill="rgba(255,255,255,0.6)"
                        fontSize="11"
                        textAnchor="middle"
                      >
                        {p.label}
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
            className="rounded-full shadow-[0_0_20px_rgba(31,111,235,0.3)] hover:shadow-[0_0_30px_rgba(31,111,235,0.5)] flex items-center"
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
