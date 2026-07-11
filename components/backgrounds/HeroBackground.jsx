import React from "react";

/**
 * HeroBackground — immersive cosmic sky: static glow, nebula clouds,
 * twinkling stars and shooting stars falling down-right.
 * -------------------------------------------------------------------------
 * Every animated layer animates ONLY transform/opacity (see globals.css
 * HERO SKY section), so each is rasterised once and every frame is GPU
 * compositing — no per-frame repaints. Reduced-motion users get the still
 * sky with shooting stars hidden.
 *
 * Positions/timings are fixed constants, not Math.random(), so the server
 * and client render identical markup (no hydration mismatch).
 */
const NEBULAE = [
  {
    style: { top: "-8%", left: "4%", width: "36rem", height: "24rem" },
    background: "radial-gradient(closest-side, rgba(149, 110, 232, 0.30), transparent)",
    delay: "0s",
  },
  {
    style: { top: "2%", right: "-6%", width: "40rem", height: "26rem" },
    background: "radial-gradient(closest-side, rgba(56, 116, 235, 0.28), transparent)",
    delay: "-14s",
  },
  {
    style: { top: "26%", left: "30%", width: "30rem", height: "18rem" },
    background: "radial-gradient(closest-side, rgba(209, 109, 176, 0.14), transparent)",
    delay: "-26s",
  },
];

const TWINKLES = [
  { top: "8%", left: "12%", size: "size-1", color: "bg-white/90", glow: true, delay: "0s", duration: "3.1s" },
  { top: "16%", left: "26%", size: "size-0.5", color: "bg-sky-200/80", glow: false, delay: "0.7s", duration: "2.6s" },
  { top: "6%", left: "38%", size: "size-0.5", color: "bg-white/70", glow: false, delay: "1.4s", duration: "3.8s" },
  { top: "21%", left: "47%", size: "size-1", color: "bg-violet-300/80", glow: true, delay: "2.1s", duration: "3.3s" },
  { top: "11%", left: "57%", size: "size-0.5", color: "bg-white/80", glow: false, delay: "0.4s", duration: "2.9s" },
  { top: "26%", left: "66%", size: "size-0.5", color: "bg-sky-300/70", glow: false, delay: "1.8s", duration: "3.6s" },
  { top: "7%", left: "74%", size: "size-1", color: "bg-white/90", glow: true, delay: "2.6s", duration: "2.8s" },
  { top: "18%", left: "85%", size: "size-0.5", color: "bg-violet-200/80", glow: false, delay: "1.1s", duration: "3.4s" },
  { top: "31%", left: "18%", size: "size-0.5", color: "bg-white/60", glow: false, delay: "2.9s", duration: "4s" },
  { top: "36%", left: "78%", size: "size-0.5", color: "bg-sky-200/60", glow: false, delay: "0.9s", duration: "3.2s" },
  { top: "40%", left: "8%", size: "size-0.5", color: "bg-white/50", glow: false, delay: "1.6s", duration: "3.7s" },
  { top: "33%", left: "55%", size: "size-0.5", color: "bg-white/60", glow: false, delay: "2.3s", duration: "2.7s" },
];

const SHOOTING_STARS = [
  { top: "2%", left: "6%", width: "5rem", delay: "0s", duration: "6.5s" },
  { top: "9%", left: "34%", width: "6.5rem", delay: "2.4s", duration: "7.8s" },
  { top: "1%", left: "56%", width: "4.5rem", delay: "5.1s", duration: "6s" },
  { top: "13%", left: "70%", width: "7rem", delay: "8s", duration: "8.4s" },
  { top: "6%", left: "20%", width: "5.5rem", delay: "10.6s", duration: "6.8s" },
  { top: "17%", left: "48%", width: "6rem", delay: "13.2s", duration: "7.2s" },
];

export default function HeroBackground({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Static GitHub-style glow */}
      <div className="hero-glow absolute inset-0" />

      {/* Milky-way band — static diagonal wash */}
      <div className="milky-way absolute -left-[20%] top-[4%] h-96 w-[140%] opacity-50" />

      {/* Constellation — static, faint */}
      <svg
        className="absolute left-[6%] top-[16%] hidden w-64 opacity-60 md:block"
        viewBox="0 0 260 160"
        fill="none"
      >
        <path
          d="M18 92 L74 34 L138 58 L196 22 M138 58 L152 118 L214 132"
          stroke="rgba(230, 238, 255, 0.14)"
          strokeWidth="1"
        />
        {[
          [18, 92],
          [74, 34],
          [138, 58],
          [196, 22],
          [152, 118],
          [214, 132],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 2 ? 2.4 : 1.6}
            fill="rgba(230, 238, 255, 0.75)"
          />
        ))}
      </svg>

      {/* Mini planet with orbiting moon — desktop only */}
      <div className="absolute right-[9%] top-[20%] hidden md:block">
        <div className="relative size-14">
          <div className="mini-planet absolute inset-0 rounded-full" />
          <div className="mini-planet-ring absolute -inset-x-5 top-1/2 h-7 -translate-y-1/2" />
          <div className="moon-orbit absolute -inset-4">
            <span className="mini-moon absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full" />
          </div>
        </div>
      </div>

      {/* Nebula clouds */}
      {NEBULAE.map((n, i) => (
        <div
          key={`nebula-${i}`}
          className="nebula absolute"
          style={{
            ...n.style,
            backgroundImage: n.background,
            animationDelay: n.delay,
          }}
        />
      ))}

      {/* Twinkling stars */}
      {TWINKLES.map((t, i) => (
        <span
          key={`twinkle-${i}`}
          className={`star-twinkle absolute rounded-full ${t.size} ${t.color} ${
            t.glow ? "shadow-[0_0_8px_2px_rgba(133,195,255,0.35)]" : ""
          }`}
          style={{
            top: t.top,
            left: t.left,
            animationDelay: t.delay,
            animationDuration: t.duration,
          }}
        />
      ))}

      {/* Shooting stars — bright head on the right end, falling down-right */}
      {SHOOTING_STARS.map((s, i) => (
        <span
          key={`shooting-${i}`}
          className="star-fall absolute h-px rounded-full bg-linear-to-l from-white via-sky-300/70 to-transparent"
          style={{
            top: s.top,
            left: s.left,
            width: s.width,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}
