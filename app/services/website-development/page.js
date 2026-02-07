"use client";

import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Zap,
  Shield,
  CheckCircle,
  Search,
  Globe,
  Layout,
  Monitor,
  Server,
  Send,
} from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function WebsiteDevelopment() {
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormState((prev) => ({
        ...prev,
        name: "",
        business: "",
        email: "",
        phone: "",
        message: "",
      }));
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[60vw] h-[60vw] bg-linear-to-t from-indigo-500/10 via-purple-500/10 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Build Websites That{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
              Convert
            </span>
            , <br />
            Not Just Exist.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            From no-code to full-stack custom websites, we craft digital
            experiences that attract, engage, and convert.
          </p>
          <div className="flex justify-center">
            <GlassButton
              href="#contact"
              className="px-8 py-4 text-lg bg-white/10 hover:bg-white/20 border-white/10"
            >
              Get Your Website Today
            </GlassButton>
          </div>
        </div>
      </section>

      {/* 2. What is Website Development? */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What is Website Development?"
            title="Website Development — From Idea to Launch"
            subtitle="Website development involves creating websites, from simple no-code platforms to complex custom-coded solutions."
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
                  Custom Websites (MERN/Next.js)
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
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Why do your business need a website ?"
            title="Why do your business need a website ?"
            subtitle="In today’s digital age, a website is essential for any business to establish credibility, reach a wider audience, and drive growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col h-full p-6">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Shield size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  Trust Factor
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                  People Google before buying—your website builds credibility.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col h-full p-6">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <CheckCircle size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  24/7 Presence
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                  Your digital storefront never closes.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col h-full p-6">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Zap size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  Competitive Edge
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                  Stand out in today&apos;s crowded market.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
              <div className="flex flex-col h-full p-6">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Search size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  SEO Visibility
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                  Rank on Google and be found by customers.
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Work"
            title="From Startups to Enterprises: Websites That Drive Results"
            subtitle="Showcasing our diverse portfolio of successful website projects."
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
                <div className="absolute inset-0 bg-linear-to-t from-[#030014] to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col grow">
                <span className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
                  E-Commerce
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  E-commerce Platform
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                  A seamless shopping experience with secure payment
                  integration.
                </p>
                <GlassButton href="#" className="w-full text-center text-sm">
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
                <div className="absolute inset-0 bg-linear-to-t from-[#030014] to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col grow">
                <span className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
                  Portfolio
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Portfolio Showcase
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                  Showcasing creativity at its best with immersive interactions.
                </p>
                <GlassButton href="#" className="w-full text-center text-sm">
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
                <div className="absolute inset-0 bg-linear-to-t from-[#030014] to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col grow">
                <span className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
                  Corporate
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Corporate Site
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                  Professional, user-centric design for enterprise businesses.
                </p>
                <GlassButton href="#" className="w-full text-center text-sm">
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full rounded-[2.5rem] border border-white/10 bg-linear-to-b from-[#1a152e] to-[#050110] p-8 md:p-16 text-center relative overflow-hidden group"
            spotlightColor="rgba(139, 92, 246, 0.3)"
          >
            {/* Header glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm user-select-none pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent user-select-none pointer-events-none" />

            <SectionHeading
              eyebrow="Cosmic Advantage"
              title="Why Choose CosmicCoder24?"
              subtitle="We don't just write code; we engineer digital experiences that push boundaries."
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <Card className="text-left flex flex-col items-start bg-white/5 border-white/5 hover:border-purple-500/20 group/card">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover/card:text-white group-hover/card:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Search size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  SEO-First Architecture
                </h3>
                <p className="text-sm text-gray-400 group-hover/card:text-gray-300 transition-colors">
                  Built on Next.js for superior indexing and ranking
                  capabilities.
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
                  Responsive layouts that look perfect on every device screen.
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
                  Intuitive interfaces designed to maximize user engagement.
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
                  Optimized for lightning-fast load times and security.
                </p>
              </Card>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* 6. Contact Form */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Contact Us"
            title="Ready to Build Your Website?"
            subtitle="Fill in the details and we'll get in touch with you."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(168, 85, 247, 0.2)"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="business"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formState.business}
                    onChange={handleChange}
                    placeholder="Business Name"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-gray-400 ml-1"
                >
                  Service Required
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  defaultValue="Website Development"
                  readOnly
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:outline-none cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex justify-center mt-4">
                <GlassButton
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto min-w-50 rounded-full hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center justify-center"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 ml-2 inline-block" />
                      <span className="ml-2">Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-4 h-4 ml-1 inline-block" />
                    </>
                  )}
                </GlassButton>
              </div>
            </form>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
