"use client";

import React from "react";
import {
  Play,
  Film,
  Scissors,
  Music,
  Palette,
} from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import GlassButton from "@/components/ui/GlassButton";

export default function VideoEditingPortfolio() {
  const projects = [
    {
      title: "Product Launch Video",
      description:
        "Cinematic product reveal with motion graphics and dynamic transitions.",
      type: "Commercial",
      playlistId: "PL_6UKhKZJVxWkxJgDvSRpRW8WmpGuZt0z",
      link: "https://youtube.com/playlist?list=PL_6UKhKZJVxWkxJgDvSRpRW8WmpGuZt0z&si=xBs4j0PBcRBctPWM",
    },
    {
      title: "YouTube Channel Intro",
      description:
        "Branded intro sequence with custom animations and sound design.",
      type: "Branding",
      playlistId: "PL_6UKhKZJVxXUl7i39mZcRH6ITwMcVE8A",
      link: "https://youtube.com/playlist?list=PL_6UKhKZJVxXUl7i39mZcRH6ITwMcVE8A&si=yLl0YNgjr4aIf48S",
    },
    {
      title: "Social Media Ads",
      description:
        "High-converting short-form ads optimized for Instagram and TikTok.",
      type: "Advertising",
      playlistId: "PL_6UKhKZJVxW6muupLYbEbswcR1sVwXvk",
      link: "https://youtube.com/playlist?list=PL_6UKhKZJVxW6muupLYbEbswcR1sVwXvk&si=aX4t6EFiCTUWAcJ2",
    },
    {
      title: "Event Highlight Reel",
      description: "Highlight videos capturing important moments from events and occasions.",
      type: "Event",
      playlistId: "PL_6UKhKZJVxX_J2NHUasyOJUjHt9w8g9n",
      link: "https://youtube.com/playlist?list=PL_6UKhKZJVxX_J2NHUasyOJUjHt9w8g9n&si=3r6odGGAlwdv4hNA",
    },
    {
      title: "Cinematic Videos",
      description:
        "High-impact cinematic sequences with advanced color grading and visual effects.",
      type: "Cinematic",
      playlistId: "PL_6UKhKZJVxVL5vJw8TVPN8YmvfRFJ6XE",
      link: "https://youtube.com/playlist?list=PL_6UKhKZJVxVL5vJw8TVPN8YmvfRFJ6XE&si=BxPBvCYJJuyjcBq4",
    },
    {
      title: "E-Sport Videos",
      description:
        "Dynamic esports highlights and tournament coverage with fast-paced editing.",
      type: "Gaming",
      playlistId: "PL_6UKhKZJVxUrmV8-6oSN6LoNj30dH7OI",
      link: "https://youtube.com/playlist?list=PL_6UKhKZJVxUrmV8-6oSN6LoNj30dH7OI&si=_WeT0UKwDTKa5Fjb",
    },
  ];

  const features = [
    { icon: Film, title: "Creative Storytelling" },
    { icon: Scissors, title: "Seamless Transitions" },
    { icon: Music, title: "Custom Sound Design" },
    { icon: Palette, title: "Color Grading" },
  ];

  return (
    <div className="min-h-screen bg-site-bg text-white selection:bg-purple-500/30">
      <ServiceHero
        title="Video Editing"
        highlightedText="Projects"
        subtitle="From short-form social media content to cinematic brand videos, our projects demonstrate the power of strategic storytelling, seamless editing, motion graphics, and platform-optimized content that captivates viewers and delivers measurable impact."
        ctaText="Get Your Video Edited"
        ctaHref="/services/video-editing"
      />

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Edge"
            title="What Sets Our Editing Apart"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((item, idx) => (
              <SpotlightCard
                key={idx}
                className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Video Projects"
            subtitle="From quick social media reels to full-length corporate videos, see how we bring stories to life."
            titleClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight drop-shadow-lg relative z-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <SpotlightCard
                key={index}
                className="h-full bg-white/5 border-white/10 p-6 flex flex-col group hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6 w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${project.playlistId}`}
                    title={project.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/20">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 grow group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                <Link
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-auto"
                >
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Watch on YouTube</span>
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-linear-to-b from-site-card-from to-site-card-to p-6 sm:p-8 md:p-16 text-center relative overflow-hidden group"
            spotlightColor="rgba(163, 113, 247, 0.3)"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent pointer-events-none" />

            <SectionHeading
              eyebrow="Get Started"
              title="Need a professional video editing?"
              subtitle="Transform your raw footage into compelling stories that captivate your audience."
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GlassButton
                href="/services/video-editing"
                className="bg-white/10 hover:bg-white/20"
              >
                Explore Video Services
              </GlassButton>
              <GlassButton
                href="/about-contact"
                className="bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/30"
              >
                Contact Us
              </GlassButton>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
