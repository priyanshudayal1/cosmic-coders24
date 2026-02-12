"use client";

import React from "react";
import {
  FileText,
  Package,
  ListTodo,
  Users,
  Banknote,
  Settings,
  TrendingUp,
  Shield,
  CheckCircle,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      {/* 1. Hero Section */}
      <ServiceHero
        title="Custom Software Solutions"
        highlightedText="to Simplify & Scale Your Business"
        subtitle="From billing systems to project management tools, we build exactly what your business needs."
        ctaText="Get Your Custom Software"
      />

      {/* 2. What is Software Development? */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            eyebrow="What is Software Development?"
            title="Custom Software That Automates, Scales & Simplifies Your Business"
            subtitle="Custom software is designed specifically to meet the unique needs of a business, offering greater flexibility and functionality than off-the-shelf solutions."
          />
          {/* Abstract Graphic/Icon placeholder */}
          <div className="flex justify-center">
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
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full relative z-10"
              >
                <Settings
                  className="w-full h-full text-purple-400/80 animate-spin-slow"
                  strokeWidth={0.5}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Possible Use Cases */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Use Cases"
            title="Possible Use Cases"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                <FileText size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Billing & Invoicing Software
              </h3>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                <Package size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Inventory & Stock Management
              </h3>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                <ListTodo size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Project Management Tools
              </h3>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">CRM Systems</h3>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                <Banknote size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                HR & Payroll Systems
              </h3>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                <Settings size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Custom Solutions
              </h3>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 4. Why Custom Software? */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Benefits"
            title="Why Custom Software?"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Settings size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Tailored for your business process
                </h3>
                <p className="text-sm text-gray-400">
                  Built to fit your unique workflows perfectly, eliminating
                  unnecessary features and complexity found in generic software.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <TrendingUp size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Scalable & future-ready
                </h3>
                <p className="text-sm text-gray-400">
                  Designed with growth in mind, allowing for seamless updates
                  and new feature integrations as your business evolves.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Banknote size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Cost-effective in the long run
                </h3>
                <p className="text-sm text-gray-400">
                  Avoid recurring subscription fees of SaaS products and own
                  your solution completely with no hidden costs.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Shield size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Secure & reliable
                </h3>
                <p className="text-sm text-gray-400">
                  Implemented with top-tier security protocols specifically
                  designed for your data protection and compliance needs.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 5. Imagine the Possibilities */}
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
              eyebrow="Transformation"
              title="Imagine the Possibilities"
              subtitle="See How Custom Software Can Transform Your Workflow"
            />

            <div className="mt-12 flex justify-center">
              {/* CSS Bar Chart Illustration */}
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 max-w-2xl w-full relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 to-transparent pointer-events-none" />
                <div className="flex items-end justify-between h-64 px-4 md:px-12 gap-4 md:gap-8">
                  {/* Bar 1 */}
                  <div className="w-full bg-white/5 rounded-t-lg h-[40%] relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-white/10 rounded-t-lg h-[60%] group-hover:h-[80%] transition-all duration-500 ease-out"></div>
                  </div>
                  {/* Bar 2 */}
                  <div className="w-full bg-white/5 rounded-t-lg h-[60%] relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-white/15 rounded-t-lg h-[40%] group-hover:h-[60%] transition-all duration-500 ease-out delay-75"></div>
                  </div>
                  {/* Bar 3 */}
                  <div className="w-full bg-white/5 rounded-t-lg h-[80%] relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-white/20 rounded-t-lg h-[50%] group-hover:h-[70%] transition-all duration-500 ease-out delay-150"></div>
                  </div>
                  {/* Bar 4 - Highlighted */}
                  <div className="w-full bg-white/5 rounded-t-lg h-[100%] relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-[#a855f7] rounded-t-lg h-[70%] group-hover:h-[90%] transition-all duration-500 ease-out delay-200 shadow-[0_0_30px_rgba(168,85,247,0.6)]"></div>
                  </div>
                  {/* Bar 5 */}
                  <div className="w-full bg-white/5 rounded-t-lg h-[70%] relative group border-t border-x border-white/5">
                    <div className="absolute bottom-0 w-full bg-white/10 rounded-t-lg h-[60%] group-hover:h-[80%] transition-all duration-500 ease-out delay-300"></div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between px-4 md:px-12 text-[10px] sm:text-xs font-medium text-purple-200/70 font-mono tracking-wider">
                  <span>EFFICIENCY</span>
                  <span>SPEED</span>
                  <span>ACCURACY</span>
                  <span>GROWTH</span>
                  <span>REVENUE</span>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-gray-400 max-w-2xl mx-auto">
                Transform manual, time-consuming processes into automated,
                efficient workflows. Watch your productivity soar and error
                rates drop.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* 6. Contact Form */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Start Building"
            title="Ready to Build Your Software?"
            subtitle="Tell us your requirements, and we'll craft a tailored solution."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(168, 85, 247, 0.2)"
          >
            <ContactForm serviceName="Software Development" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
