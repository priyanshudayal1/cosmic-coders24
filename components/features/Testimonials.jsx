"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, User, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data.reviews || []);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const next = () => {
    if (reviews.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    if (reviews.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
  };

  const getCardStyle = (index) => {
    const total = reviews.length;
    if (total === 0) return {};

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

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-20 h-96">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || reviews.length === 0) {
    // Optional: Render nothing or a fallback message if prefered, but keeping it empty for now as requested to remove hardcoded data.
    // You might want to display a message like "No reviews available yet."
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 overflow-hidden relative lx-indigo">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Clients Say"
        subtitle="Real feedback from teams we have helped grow, launch, and scale."
      />
      {/* Carousel Container */}
      <div
        className="relative w-full max-w-7xl h-80 md:h-[22rem] flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {reviews.map((item, index) => {
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
                  "absolute top-1/2 left-1/2 w-[92%] sm:w-[380px] md:w-[400px]",
                  "p-5 md:p-6 rounded-2xl border",
                  "flex flex-col justify-between h-64",
                  "backdrop-blur-xl transition-colors duration-500",
                  style.diff === 0
                    ? "bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(88,166,255,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]"
                    : "bg-white/5 border-white/[0.06]",
                )}
                style={{
                  y: "-50%",
                  WebkitBackdropFilter: "blur(24px)",
                  backdropFilter: "blur(24px)",
                }}
              >
                {/* Top: Avatar + Name */}
                <div className="flex items-start md:items-center gap-3 md:gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500 p-[2px] shrink-0 mt-1 md:mt-0">
                    <div className="w-full h-full rounded-full bg-[#0f0e13] overflow-hidden relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/[0.04] flex items-center justify-center">
                          <User className="w-5 h-5 md:w-6 md:h-6 text-white/40" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm md:text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400/80 truncate font-medium">
                      {item.role}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                      <div className="flex gap-0.5 items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-3 md:w-3.5 h-3 md:h-3.5",
                              i < item.rating
                                ? "fill-yellow-500 text-yellow-500"
                                : "fill-gray-600/20 text-gray-600",
                            )}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] md:text-xs text-gray-400 font-medium pt-0.5 truncate">
                        {item.relative_time_description}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative flex-1 flex flex-col justify-center">
                  <Quote className="absolute -top-1 -left-1 text-purple-500/15 w-7 h-7 transform scale-x-[-1] scale-y-[-1]" />
                  <Quote className="absolute -bottom-1 right-0 text-purple-500/15 w-7 h-7 " />
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
          disabled={reviews.length <= 1}
        >
          <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        <div className="flex gap-2.5">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                idx === activeIndex
                  ? "w-7 bg-purple-500 shadow-[0_0_10px_rgba(88,166,255,0.5)]"
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
          disabled={reviews.length <= 1}
        >
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}
