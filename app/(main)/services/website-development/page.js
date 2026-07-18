"use client";

import React from "react";
import {
  Code,
  Smartphone,
  Zap,
  Shield,
  CheckCircle,
  Search,
  Layout,
  Monitor,
  Server,
} from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";
import TechStack, { WEB_DEV_TOOLS } from "@/components/features/TechStack";

export default function WebsiteDevelopment() {
  return (
    <div className="min-h-screen bg-site-bg text-white selection:bg-purple-500/30">
      {/* 1. Hero Section */}
      <ServiceHero
        title="Build Websites That"
        highlightedText="Convert, Not Just Exist."
        subtitle="From no-code to full-stack custom websites, we craft digital experiences that attract, engage, and convert."
        ctaText="Get Your Website Today"
      />

      {/* 2. What is Website Development? */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Best Website Development Services In Jabalpur"
            title="Website Development — From Idea to Launch"
            subtitle="From no-code to fully custom solutions, we build websites that fit your needs and scale with your growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col h-full p-6">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Code size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  No-Code Websites
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow group-hover:text-gray-300 transition-colors duration-300">
                  Fast & affordable starter websites (Wix, Webflow,
                  Squarespace).
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col h-full p-6">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Layout size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  Semi-Code Websites
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow group-hover:text-gray-300 transition-colors duration-300">
                  Flexible and scalable with low-code editors like Wix Editor X,
                  Webflow Advanced.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col h-full p-6">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Monitor size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  Custom Websites <span className="inline-block">(MERN/Next.js)</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow group-hover:text-gray-300 transition-colors duration-300">
                  Fully coded, SEO-friendly, scalable solutions for serious
                  businesses.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 3. If You're Not Online */}
      <section className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Build Your Digital Presence with a Powerful Website"
            title="Build Your Digital Presence with a Powerful Website"
            subtitle="In today’s digital environment, a website helps businesses establish credibility, reach a wider audience, and support long-term digital growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Shield size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Trust Factor
                </h3>
                <p className="text-sm text-gray-400">
                  Most customers search online before making a decision—your website strengthens credibility and trust.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <CheckCircle size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  24/7 Presence
                </h3>
                <p className="text-sm text-gray-400">
                  A website keeps your business accessible anytime, allowing customers to discover services, products, and information without time limitations.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Zap size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Competitive Edge
                </h3>
                <p className="text-sm text-gray-400">
                  A professionally developed website helps businesses stand out in competitive markets and present services more effectively than competitors without a strong digital presence.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Search size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  SEO Visibility
                </h3>
                <p className="text-sm text-gray-400">
                  Search-friendly website structure improves discoverability on search engines, helping potential customers find businesses through relevant online searches.
                </p>
              </div>
            </SpotlightCard>
          </div>

          <div className="mt-16 text-center">
            <GlassButton
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 border-white/10"
            >
              Let&apos;s Build Yours Today
            </GlassButton>
          </div>
        </div>
      </section>

      {/* 4. Our Work */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Work"
            title="From Startups to Enterprises: Driving Real Growth"
            subtitle="Explore websites built to enhance user experience, boost performance, and support long-term growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <SpotlightCard
              className="p-0 h-full flex flex-col group bg-white/5 border-white/10"
              spotlightColor="rgba(59, 130, 246, 0.2)"
            >
              <div className="h-48 w-full bg-linear-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all duration-300">
                  <Monitor className="w-16 h-16" />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-site-bg to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col grow">
                <span className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
                  E-Commerce
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Ecommerce Platform
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                  Scalable online store designed for smooth shopping experiences with secure payment integration and optimized product management.
                </p>
                <GlassButton
                  href="/portfolio/website-development"
                  className="w-full text-center text-sm"
                >
                  View Case Study
                </GlassButton>
              </div>
            </SpotlightCard>

            {/* Project 2 */}
            <SpotlightCard
              className="p-0 h-full flex flex-col group bg-white/5 border-white/10"
              spotlightColor="rgba(16, 185, 129, 0.2)"
            >
              <div className="h-48 w-full bg-linear-to-br from-emerald-500/20 to-teal-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all duration-300">
                  <Layout className="w-16 h-16" />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-site-bg to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col grow">
                <span className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
                  Portfolio
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Portfolio Showcase
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                  Creative portfolio websites designed to highlight projects, visual identity, and interactive user experiences.
                </p>
                <GlassButton
                  href="/portfolio/website-development"
                  className="w-full text-center text-sm"
                >
                  View Case Study
                </GlassButton>
              </div>
            </SpotlightCard>

            {/* Project 3 */}
            <SpotlightCard
              className="p-0 h-full flex flex-col group bg-white/5 border-white/10"
              spotlightColor="rgba(249, 115, 22, 0.2)"
            >
              <div className="h-48 w-full bg-linear-to-br from-orange-500/20 to-red-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all duration-300">
                  <Server className="w-16 h-16" />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-site-bg to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col grow">
                <span className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
                  Corporate
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Corporate Website
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                  Professional business websites focused on clear communication, strong branding, and user-friendly navigation for enterprise organizations.
                </p>
                <GlassButton
                  href="/portfolio/website-development"
                  className="w-full text-center text-sm"
                >
                  View Case Study
                </GlassButton>
              </div>
            </SpotlightCard>
          </div>

          <div className="text-center">
            <GlassButton
              href="/portfolio"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 border-white/10"
            >
              View More Projects
            </GlassButton>
          </div>
        </div>
      </section>

      {/* 5. Why Choose CosmicCoder24? */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-linear-to-b from-site-card-from to-site-card-to p-8 md:p-16 text-center relative overflow-hidden group"
            spotlightColor="rgba(163, 113, 247, 0.3)"
          >
            {/* Header glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm user-select-none pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent user-select-none pointer-events-none" />

            <SectionHeading
              eyebrow="Why Choose Us"
              title="Built to Perform. Designed to Grow."
              subtitle="We create digital experiences that blend speed, seamless usability, and scalability to support your business as it evolves."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <Card className="text-left flex flex-col items-start bg-white/5 border-white/5 hover:border-purple-500/20 group/card">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover/card:text-white group-hover/card:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Search size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  SEO-Friendly Architecture
                </h3>
                <p className="text-sm text-gray-400 group-hover/card:text-gray-300 transition-colors">
                  Built on modern frameworks like Next.js to support faster indexing, structured performance, and stronger search visibility.
                </p>
              </Card>

              {/* Feature 2 */}
              <Card className="text-left flex flex-col items-start bg-white/5 border-white/5 hover:border-purple-500/20 group/card">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover/card:text-white group-hover/card:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Smartphone size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Mobile-First Design
                </h3>
                <p className="text-sm text-gray-400 group-hover/card:text-gray-300 transition-colors">
                  Responsive layouts designed to deliver consistent user experiences across mobile, tablet, and desktop devices.
                </p>
              </Card>

              {/* Feature 3 */}
              <Card className="text-left flex flex-col items-start bg-white/5 border-white/5 hover:border-purple-500/20 group/card">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover/card:text-white group-hover/card:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Layout size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Clean UI/UX
                </h3>
                <p className="text-sm text-gray-400 group-hover/card:text-gray-300 transition-colors">
                  Simple, intuitive interfaces focused on usability, clear navigation, and better user engagement.
                </p>
              </Card>

              {/* Feature 4 */}
              <Card className="text-left flex flex-col items-start bg-white/5 border-white/5 hover:border-purple-500/20 group/card">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover/card:text-white group-hover/card:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Zap size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  High Performance
                </h3>
                <p className="text-sm text-gray-400 group-hover/card:text-gray-300 transition-colors">
                  Optimized website structure focused on fast loading speed, stability, and secure digital environments.
                </p>
              </Card>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack
        items={WEB_DEV_TOOLS}
        showSingleRow={true}
        eyebrow="Our Tech Stack"
        title="Technologies We Work With"
        subtitle="We use modern, industry-standard technologies to build fast, scalable websites."
      />

      {/* 6. Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Contact Us"
            title="Ready to Build Your Website?"
            subtitle="Fill in the details and we'll get in touch with you."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(88, 166, 255, 0.2)"
          >
            <ContactForm serviceName="Website Development" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
