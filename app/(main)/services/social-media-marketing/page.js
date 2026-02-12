"use client";

import React from "react";
import {
  Share2,
  TrendingUp,
  Target,
  MessageCircle,
  BarChart3,
  Calendar,
  Users,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Megaphone,
  Clock,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";

export default function SocialMediaMarketing() {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      {/* 1. Hero Section */}
      <ServiceHero
        title="Grow Your Brand Organically"
        highlightedText="on Social Media"
        subtitle="Engage customers, increase reach, and build authority on the platforms that matter."
        ctaText="Get Started"
      />

      {/* 2. Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            eyebrow="Introduction"
            title={
              <span className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl">
                Impactful Social Presence
              </span>
            }
            subtitle="In today's digital-first business world, Social Media Marketing is crucial for building brand presence, engaging with customers, and driving organic growth. Our services help you maximize your impact across popular social media platforms."
          />
          {/* Abstract Graphic/Icon placeholder */}
          <div className="flex justify-center mt-12">
            <div className="relative w-32 h-32">
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-purple-500/60 blur-2xl rounded-full"
              />
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative z-10"
              >
                <Share2
                  className="w-full h-full text-purple-400/80"
                  strokeWidth={0.5}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Platforms We Work On */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Platforms"
            title="Platforms We Work On"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Instagram */}
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-pink-500 group-hover:bg-pink-500/10 group-hover:border-pink-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                <Instagram size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Instagram
                </h3>
                <p className="text-sm text-gray-400">For brand storytelling</p>
              </div>
            </SpotlightCard>

            {/* Facebook */}
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-blue-500 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                <Facebook size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Facebook
                </h3>
                <p className="text-sm text-gray-400">
                  Connect with a wide audience
                </p>
              </div>
            </SpotlightCard>

            {/* LinkedIn */}
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-blue-400 group-hover:bg-blue-400/10 group-hover:border-blue-400/50 transition-all duration-300 shadow-inner shadow-white/5">
                <Linkedin size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  LinkedIn
                </h3>
                <p className="text-sm text-gray-400">Professional networking</p>
              </div>
            </SpotlightCard>

            {/* Twitter/X */}
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/50 transition-all duration-300 shadow-inner shadow-white/5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Twitter / X
                </h3>
                <p className="text-sm text-gray-400">Real-time engagement</p>
              </div>
            </SpotlightCard>

            {/* YouTube */}
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-red-500 group-hover:bg-red-500/10 group-hover:border-red-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                <Youtube size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  YouTube
                </h3>
                <p className="text-sm text-gray-400">Video content creation</p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 4. Benefits of Social Media Marketing */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Benefits"
            title="Benefits of Social Media Marketing"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Megaphone size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Build strong brand presence
                </h3>
                <p className="text-sm text-gray-400">
                  Establish your brand identity across social platforms and make
                  your voice heard.
                </p>
              </div>
            </SpotlightCard>

            {/* Card 2 */}
            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Users size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Drive organic engagement
                </h3>
                <p className="text-sm text-gray-400">
                  Increase interaction and engagement with your audience through
                  meaningful content.
                </p>
              </div>
            </SpotlightCard>

            {/* Card 3 */}
            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <TrendingUp size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Convert followers into leads
                </h3>
                <p className="text-sm text-gray-400">
                  Turn your social media followers into potential customers with
                  targeted strategies.
                </p>
              </div>
            </SpotlightCard>

            {/* Card 4 */}
            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Stay top-of-mind with customers
                </h3>
                <p className="text-sm text-gray-400">
                  Keep your brand at the forefront of your customers&apos; minds
                  with consistent activity.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 5. What to Expect */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Expectations"
            title="What to Expect"
            subtitle=""
          />
          <SpotlightCard className="w-full bg-white/5 border-white/10 p-8 flex flex-col md:flex-row items-center md:items-start gap-6 group hover:bg-white/10 transition-all duration-300">
            <div
              className="shrink-0 w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-400 
                        group-hover:text-white group-hover:bg-purple-600/20
                         group-hover:border-purple-600/50 
                         transition-all duration-300 shadow-inner shadow-white/5"
            >
              <Calendar size={32} strokeWidth={1.5} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Timeline for Growth
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Social media growth is not instant. Realistic results take 3–6
                months of consistent strategy, content, and engagement to build
                a loyal following and see significant ROI.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* 7. Contact Form */}
      <section id="contact" className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Start Growing"
            title="Ready to Grow Your Brand?"
            subtitle="Tell us your goals, and we'll craft a social strategy that delivers."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(168, 85, 247, 0.2)"
          >
            <ContactForm serviceName="Social Media Marketing" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
