"use client";

import React from "react";
import {
  Search,
  TrendingUp,
  MapPin,
  Globe,
  Target,
  Clock,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";

export default function SEO() {
  return (
    <div className="min-h-screen bg-[#0F061A] text-white selection:bg-purple-500/30">
      {/* 1. Hero Section */}
      <ServiceHero
        title="Found Where It Matters"
        highlightedText="Google Search & Maps"
        subtitle="Get discovered by customers searching for your services. We optimize your presence on Google Search and Maps."
        ctaText="Start Ranking Today"
      />

      {/* 2. Why SEO is Important */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            eyebrow="Importance"
            title="Why SEO is Important"
            subtitle="A website without visibility is like a store without customers. SEO ensures your business appears where your audience is searching — on Google Search & Maps."
          />
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
                <Search
                  className="w-full h-full text-purple-400/80 animate-pulse"
                  strokeWidth={0.5}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Types of SEO Services */}
      <section className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Services"
            title="Types of SEO Services"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Website SEO */}
            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col h-full p-8 text-center">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                  <Globe size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  Website SEO
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                  On-page SEO, Technical SEO, Content Optimization, Keyword
                  Ranking
                </p>
              </div>
            </SpotlightCard>

            {/* Local SEO */}
            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col h-full p-8 text-center">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                  <MapPin size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  Local SEO (Google My Business)
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                  GMB Setup, Local keyword targeting, Reviews management, Maps
                  ranking
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 4. SEO Packages */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Pricing" title="SEO Packages" subtitle="" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Basic SEO */}
            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                  Basic SEO
                </h3>
                <p className="text-gray-400 text-sm mb-6">For startups</p>
                <ul className="text-left space-y-3 mb-8 grow">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Basic keyword research</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>On-page optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Monthly reporting</span>
                  </li>
                </ul>
                <GlassButton href="#contact" className="w-full text-center">
                  Get Started
                </GlassButton>
              </div>
            </SpotlightCard>

            {/* Standard SEO - Highlighted */}
            <SpotlightCard className="h-full bg-white/5 border-purple-500/50 group hover:bg-white/10 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                POPULAR
              </div>
              <div className="flex flex-col h-full p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                  Standard SEO
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  For growing businesses
                </p>
                <ul className="text-left space-y-3 mb-8 grow">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Advanced keyword research</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Technical SEO audit</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Content optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Link building</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Bi-weekly reporting</span>
                  </li>
                </ul>
                <GlassButton
                  href="#contact"
                  className="w-full text-center bg-purple-500/20 border-purple-500/50"
                >
                  Get Started
                </GlassButton>
              </div>
            </SpotlightCard>

            {/* Advanced SEO */}
            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                  Advanced SEO
                </h3>
                <p className="text-gray-400 text-sm mb-6">For enterprise</p>
                <ul className="text-left space-y-3 mb-8 grow">
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Comprehensive SEO strategy</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Competitor analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Advanced link building</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Local SEO & GMB</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle
                      size={16}
                      className="text-purple-400 mt-0.5 shrink-0"
                    />
                    <span>Weekly reporting & consultation</span>
                  </li>
                </ul>
                <GlassButton href="#contact" className="w-full text-center">
                  Get Started
                </GlassButton>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 5. Proven SEO Results */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-linear-to-b from-[#35254f] to-[#0F061A] p-8 md:p-16 text-center relative overflow-hidden group"
            spotlightColor="rgba(139, 92, 246, 0.3)"
          >
            {/* Header glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm user-select-none pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent user-select-none pointer-events-none" />

            <SectionHeading
              eyebrow="Results"
              title="Proven SEO Results"
              subtitle="Watch Your Rankings Climb and Traffic Soar"
            />

            <div className="mt-12 flex justify-center">
              {/* Bar Chart Illustration */}
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 max-w-2xl w-full relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 to-transparent pointer-events-none" />
                <div className="flex items-end justify-between h-64 px-4 md:px-12 gap-4 md:gap-8">
                  {/* Bar 1 */}
                  <div className="w-full bg-white/5 rounded-t-lg h-[20%] relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-white/10 rounded-t-lg h-[60%] group-hover:h-[80%] transition-all duration-500 ease-out"></div>
                  </div>
                  {/* Bar 2 */}
                  <div className="w-full bg-white/5 rounded-t-lg h-[40%] relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-white/15 rounded-t-lg h-[40%] group-hover:h-[60%] transition-all duration-500 ease-out delay-75"></div>
                  </div>
                  {/* Bar 3 */}
                  <div className="w-full bg-white/5 rounded-t-lg h-[60%] relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-white/20 rounded-t-lg h-[50%] group-hover:h-[70%] transition-all duration-500 ease-out delay-150"></div>
                  </div>
                  {/* Bar 4 */}
                  <div className="w-full bg-white/5 rounded-t-lg h-[80%] relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-white/20 rounded-t-lg h-[60%] group-hover:h-[80%] transition-all duration-500 ease-out delay-200"></div>
                  </div>
                  {/* Bar 5 - Highlighted */}
                  <div className="w-full bg-white/5 rounded-t-lg h-full relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-[#a855f7] rounded-t-lg h-[70%] group-hover:h-[90%] transition-all duration-500 ease-out delay-300 shadow-[0_0_30px_rgba(168,85,247,0.6)]"></div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between px-4 md:px-12 text-[10px] sm:text-xs font-medium text-purple-200/70 font-mono tracking-wider">
                  <span>MONTH 1</span>
                  <span>MONTH 2</span>
                  <span>MONTH 3</span>
                  <span>MONTH 4</span>
                  <span>MONTH 5</span>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                SEO is a long-term strategy. Expect results to improve over time
                as our experts work on your campaigns regularly.
              </p>
              <GlassButton
                href="/results/seo"
                className="bg-white/10 hover:bg-white/20"
              >
                See More Results
              </GlassButton>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* 6. Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Request Your SEO Proposal"
            subtitle="Tell us about your business and we'll create a customized SEO strategy for you."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(168, 85, 247, 0.2)"
          >
            <ContactForm serviceName="SEO" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
