"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, User } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Eleanor Pena",
    role: "Nursing Assistant",
    text: "The workflow automation has saved us countless hours. It's intuitive, fast, and exactly what our team needed to scale efficiently.",
    image: null,
  },
  {
    id: 2,
    name: "Dr. Ari Zelmanow",
    role: "Head of UX Research",
    text: "Genway dramatically reduces the time and effort required to uncover high-quality insights, empowering researchers with fast, accurate, and scalable results through advanced AI technology.",
    image: null, // Using generic User icon if no image
  },
  {
    id: 3,
    name: "Wade Warren",
    role: "President of Sales",
    text: "Our sales outreach improved significantly with the automated tools provided. We've seen a 40% increase in response rates.",
    image: null,
  },
  {
    id: 4,
    name: "Jane Cooper",
    role: "Product Manager",
    text: "The analytics dashboard is a game changer. We can finally see the impact of our campaigns in real-time.",
    image: null,
  },
  {
    id: 5,
    name: "Robert Fox",
    role: "marketing Coordinator",
    text: "Customer support is top-notch. Any issues we had were resolved within minutes. seamless integration.",
    image: null,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Improved calculation to determine position
  const getCardStyle = (index) => {
    const total = testimonials.length;
    // Calculate distance accounting for wrap-around
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total;

    // We only want to show: -1 (prev), 0 (active), 1 (next)
    // plus items animating in/out

    // Determine the visual position index
    // 0 is center, -1 is left, 1 is right
    // Others are hidden or far off

    const isActive = diff === 0;
    const isPrev = diff === -1;
    const isNext = diff === 1;

    // For smooth sliding, we need to map all items to a position
    // Center: 0
    // Left: -100%
    // Right: 100%
    // Far Left: -200%
    // Far Right: 200%

    // Scale and opacity
    // Active: scale 1, opacity 1
    // Neighbors: scale 0.9, opacity 0.4
    // Far: scale 0.8, opacity 0

    // Z-index
    // Active: 10
    // Neighbors: 5
    // Far: 0

    let x = "0%";
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    let blur = "0px";

    if (diff === 0) {
      x = "-50%";
      scale = 1;
      opacity = 1;
      zIndex = 10;
      blur = "0px";
    } else if (diff === -1) {
      x = "calc(-50% - 105%)"; // Slight gap
      scale = 0.9;
      opacity = 0.4;
      zIndex = 5;
      blur = "2px";
    } else if (diff === 1) {
      x = "calc(-50% + 105%)";
      scale = 0.9;
      opacity = 0.4;
      zIndex = 5;
      blur = "2px";
    } else if (diff < -1) {
      x = "calc(-50% - 210%)";
      scale = 0.8;
      opacity = 0;
      zIndex = 0;
      blur = "10px";
    } else if (diff > 1) {
      x = "calc(-50% + 210%)";
      scale = 0.8;
      opacity = 0;
      zIndex = 0;
      blur = "10px";
    }

    return { x, scale, opacity, zIndex, blur, diff };
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 overflow-hidden relative">
      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl h-96 flex items-center justify-center">
        <AnimatePresence initial={false} mode="popLayout">
          {testimonials.map((item, index) => {
            const style = getCardStyle(index);
            // Optimization: Only render if within range -2 to 2 to minimize DOM depth, 
            // but for wrapping to work smoothly we generally keep them all or handle wrapping logic.
            // With 5 items, rendering all is fine.

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  filter: `blur(${style.blur})`,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1], // Custom bezier for smooth "straight" slide
                }}
                className={cn(
                  "absolute top-1/2 left-1/2 w-[85%] md:w-[600px] lg:w-[700px] p-8 md:p-10 rounded-3xl border flex flex-col justify-between h-80 md:h-96 transition-colors duration-500",
                  style.diff === 0
                    ? "bg-[#0f0e13] border-purple-500/50 shadow-[0_0_60px_rgba(168,85,247,0.2)]"
                    : "bg-[#0f0e13]/80 border-white/5",
                )}
                style={{
                  y: "-50%",
                }}
              >
                {/* Content */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-full bg-linear-to-tr from-purple-400 to-blue-500 p-[2px] shrink-0">
                    <div className="w-full h-full rounded-full bg-[#0f0e13] overflow-hidden relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        item.id === 2 ? (
                          <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                            <User className="w-7 h-7 text-white/50" />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-xl truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 truncate font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="relative flex-1 flex flex-col justify-center">
                  <Quote className="absolute -top-6 -left-2 text-purple-500/20 w-12 h-12 transform scale-x-[-1]" />
                  <p className={cn(
                    "text-lg md:text-xl leading-relaxed relative z-10 transition-colors duration-300",
                    style.diff === 0 ? "text-gray-200" : "text-gray-500"
                  )}>
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-8 mt-8 z-30">
        <button
          onClick={prev}
          className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-purple-500/50 transition-all active:scale-95 group"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        <div className="flex gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                idx === activeIndex
                  ? "w-8 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  : "w-1.5 bg-gray-700 hover:bg-gray-500",
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-purple-500/50 transition-all active:scale-95 group"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}
