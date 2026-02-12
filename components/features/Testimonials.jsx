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

  const getCardStyle = (index) => {
    const total = testimonials.length;
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total;

    // Tighter spacing so more cards are visible with blur
    const offsetPercent = 80;
    let x = `calc(-50% + ${diff * offsetPercent}%)`;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    let blur = "0px";

    if (diff === 0) {
      scale = 1;
      opacity = 1;
      zIndex = 10;
      blur = "0px";
    } else if (Math.abs(diff) === 1) {
      scale = 0.92;
      opacity = 0.5;
      zIndex = 5;
      blur = "1.5px";
    } else if (Math.abs(diff) === 2) {
      scale = 0.85;
      opacity = 0.25;
      zIndex = 2;
      blur = "4px";
    } else {
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
      <div className="relative w-full max-w-7xl h-80 md:h-[22rem] flex items-center justify-center">
        <AnimatePresence initial={false} mode="popLayout">
          {testimonials.map((item, index) => {
            const style = getCardStyle(index);

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
                  ease: [0.32, 0.72, 0, 1],
                }}
                className={cn(
                  "absolute top-1/2 left-1/2 w-[75%] sm:w-[380px] md:w-[420px] lg:w-[440px]",
                  "p-6 md:p-7 rounded-2xl border",
                  "flex flex-col justify-between h-64 md:h-72",
                  "backdrop-blur-xl transition-colors duration-500",
                  style.diff === 0
                    ? "bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(168,85,247,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]"
                    : "bg-white/5 border-white/[0.06]",
                )}
                style={{
                  y: "-50%",
                  WebkitBackdropFilter: "blur(24px)",
                  backdropFilter: "blur(24px)",
                }}
              >
                {/* Top: Avatar + Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500 p-[2px] shrink-0">
                    <div className="w-full h-full rounded-full bg-[#0f0e13] overflow-hidden relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : item.id === 2 ? (
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/[0.04] flex items-center justify-center">
                          <User className="w-6 h-6 text-white/40" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400/80 truncate font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative flex-1 flex flex-col justify-center">
                  <Quote className="absolute -top-4 -left-1 text-purple-500/15 w-10 h-10 transform scale-x-[-1]" />
                  <p
                    className={cn(
                      "text-sm md:text-[15px] leading-relaxed relative z-10 transition-colors duration-300 line-clamp-5",
                      style.diff === 0 ? "text-gray-300" : "text-gray-500",
                    )}
                  >
                    {item.text}
                  </p>
                </div>

                {/* Decorative glass dots */}
                <div className="absolute top-6 right-6 flex flex-col gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
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
          className="p-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-purple-500/50 transition-all active:scale-95 group"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        <div className="flex gap-2.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                idx === activeIndex
                  ? "w-7 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  : "w-1.5 bg-gray-700 hover:bg-gray-500",
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-purple-500/50 transition-all active:scale-95 group"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}
