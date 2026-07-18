"use client";

import React from "react";
import {
  Package,
  Layers,
  Box,
  Leaf,
  ShieldCheck,
  Zap,
  Tag,
  Gift,
  Search,
  PenTool,
  Printer,
  ShoppingBag,
  Wine,
  Utensils,
  Truck,
  CheckCircle,
  FileCheck,
} from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";
import TechStack, { DESIGN_TOOLS } from "@/components/features/TechStack";

export default function PackagingDesign() {
  return (
    <div className="min-h-screen bg-site-bg text-white selection:bg-purple-500/30">
      {/* Hero Section */}
      <ServiceHero
        title="Packaging That Elevates"
        highlightedText="Your Product Presence"
        subtitle="Strategic packaging design created to attract attention, communicate product value, and strengthen brand identity across retail shelves and digital marketplaces."
        ctaText="Start Your Packaging Design"
        ctaHref="#contact"
      />

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Best Packaging Design Service In Jabalpur"
            title="Why Packaging Design Matters"
            subtitle="Packaging plays an important role in shaping product perception, strengthening brand identity, and influencing purchasing decisions. It often serves as the first interaction customers have with a product."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <ShieldCheck
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Build Trust
                </h3>
                <p className="text-sm text-gray-400">
                  Professional packaging creates a strong first impression and strengthens product credibility.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <Tag size={24} className="text-purple-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Brand Identity
                </h3>
                <p className="text-sm text-gray-400">
                  Consistent visual elements help communicate brand story and product value.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <Zap size={24} className="text-purple-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Boost Sales
                </h3>
                <p className="text-sm text-gray-400">
                  Distinct packaging design helps products stand out and attract customer attention.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Services"
            title="Types of Packaging We Create"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Box size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Box Packaging
              </h3>
              <p className="text-sm text-gray-400">
                Retail boxes, shipping mailers, and custom packaging structures.
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Wine size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Bottle & Label Design
              </h3>
              <p className="text-sm text-gray-400">
                Designs for bottles, jars, pouches, labels, and product tags.
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Utensils size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Food & Beverage Packaging
              </h3>
              <p className="text-sm text-gray-400">
                Packaging designs suitable for food and beverage products with clear product presentation.
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <ShoppingBag size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                E-commerce Packaging
              </h3>
              <p className="text-sm text-gray-400">
                Packaging concepts designed to enhance online brand presentation and unboxing experience.
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Package size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Luxury / Premium Packaging
              </h3>
              <p className="text-sm text-gray-400">
                Premium packaging styles including rigid boxes and specialized finishing elements.
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <PenTool size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Custom Requests
              </h3>
              <p className="text-sm text-gray-400">
                Packaging designs tailored to unique product requirements.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Workflow"
            title="Our Packaging Design Process"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <Search size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Concept & Research
              </h3>
              <p className="text-sm text-gray-400">
                Market analysis and creative direction
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <PenTool size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Initial Sketches & Mockups
              </h3>
              <p className="text-sm text-gray-400">
                Visualizing ideas before digital design
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <Layers size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Refinement & Customization
              </h3>
              <p className="text-sm text-gray-400">
                Perfecting the details and finishes
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <Printer size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Final Design Delivery
              </h3>
              <p className="text-sm text-gray-400">
                Print-ready files and specs
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Deliverables"
            title="What You'll Receive"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <CheckCircle size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Production-Ready Files
                </h3>
                <p className="text-sm text-gray-400">
                  AI, PDF, and EPS formats prepared for printing and manufacturing.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <FileCheck size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Die-Line Templates
                </h3>
                <p className="text-sm text-gray-400">
                  Structural templates designed for accurate cutting and folding.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Layers size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  3D Mockups
                </h3>
                <p className="text-sm text-gray-400">
                  High-resolution visual previews useful for presentations and marketing materials.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Zap size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Print Consultation
                </h3>
                <p className="text-sm text-gray-400">
                  Guidance on suitable materials, finishes, and printing considerations.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack
        items={DESIGN_TOOLS}
        showSingleRow={true}
        eyebrow="Tools We Use"
        title="Designed With Professional Tools"
        subtitle="We craft standout packaging using industry-standard design software."
      />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Let's Design Your Perfect Packaging"
            subtitle="Share your product details and we'll craft the perfect packaging solution."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(88, 166, 255, 0.2)"
          >
            <ContactForm serviceName="Packaging Design" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
