"use client";

import React from "react";
import {
  Video,
  Clapperboard,
  Film,
  Scissors,
  Music,
  Wand2,
  MonitorPlay,
  Share2,
  Mic,
  Palette,
  Smartphone,
  CheckCircle,
  Play,
  Tv,
  Zap,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";

export default function VideoEditing() {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      {/* Hero Section */}
      <ServiceHero
        title="Transform Your Raw Footage"
        highlightedText="Into Compelling Stories"
        subtitle="From reels to promos, we craft videos that engage, inspire, and convert."
        ctaText="Get Your Video Edited"
        ctaHref="#contact"
      />

      {/* Impact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Impact"
            title="Why Professional Editing Matters"
            subtitle="Polished videos boost engagement, conversions, and brand credibility. Our professional editing ensures your content stands out in the crowded digital landscape."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <TrendingUp size={24} className="text-purple-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Boost Engagement
                </h3>
                <p className="text-sm text-gray-400">
                  High-quality visuals keep viewers watching longer
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <CheckCircle
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Build Credibility
                </h3>
                <p className="text-sm text-gray-400">
                  Professional editing builds trust with your audience
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <Zap size={24} className="text-purple-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Drive Action
                </h3>
                <p className="text-sm text-gray-400">
                  Compelling stories convert viewers into customers
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Services"
            title="Types of Videos We Edit"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Smartphone size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Social Media Reels/Shorts
              </h3>
              <p className="text-sm text-gray-400">
                TikTok, Instagram Reels, YouTube Shorts
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Briefcase size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Corporate Videos
              </h3>
              <p className="text-sm text-gray-400">
                Presentations, training, explainers
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Tv size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Promotional Videos
              </h3>
              <p className="text-sm text-gray-400">
                Ads, launches, event promos
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <MonitorPlay size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                YouTube Videos
              </h3>
              <p className="text-sm text-gray-400">
                Vlogs, tutorials, podcasts
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Clapperboard size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Event Highlights
              </h3>
              <p className="text-sm text-gray-400">
                Tailor-made edits on request
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Wand2 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Custom Projects
              </h3>
              <p className="text-sm text-gray-400">
                Unique video projects tailored to your specific requirements
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Features"
            title="What Sets Our Editing Apart"
            subtitle=""
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {/* 5 column grid on medium and larger screens using md:grid-cols-5 is tricky with equal widths if not careful, 
                 using flex-wrap or simpler grid is safer for responsive. 
                 But let's stick to the grid for alignment described in image, using flex on mobile/tablet */}

            {[
              { icon: Film, title: "Creative Storytelling" },
              { icon: Scissors, title: "Seamless Transitions" },
              { icon: Music, title: "Custom Sound Design" },
              { icon: Palette, title: "Color Grading" },
              { icon: Share2, title: "Platform Optimization" },
            ].map((feature, idx) => (
              <SpotlightCard
                key={idx}
                className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {feature.title}
                </h3>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Get Your Videos Edited By Us"
            subtitle="Tell us your vision, and we'll bring it to life with precision and creativity."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(168, 85, 247, 0.2)"
          >
            <ContactForm serviceName="Video Editing" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
