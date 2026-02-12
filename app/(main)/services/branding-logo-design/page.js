"use client";

import React from "react";
import {
  Palette,
  Sparkles,
  Crown,
  FileText,
  Layers,
  CheckCircle,
  Search,
  Pencil,
  Eye,
  Truck,
} from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";

export default function BrandingLogoDesign() {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      {/* Hero Section */}
      <ServiceHero
        title="Craft a Brand Identity"
        highlightedText="That Lasts a Lifetime"
        subtitle="We design logos and build memorable brands that are unforgettable."
        ctaText="Start Your Brand"
      />

      {/* BRANDING SECTION */}

      {/* Why Branding is More Than Just a Logo */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Branding"
            title="Why Branding is More Than Just a Logo"
            subtitle="Branding influences trust, recognition, and long-term growth. It's crucial for building credibility, making your brand stand out, and creating consistency across platforms."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <CheckCircle
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Trust</h3>
                <p className="text-sm text-gray-400">
                  Builds credibility instantly
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
                  Recognition
                </h3>
                <p className="text-sm text-gray-400">
                  Makes your brand stand out
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
                  Consistency
                </h3>
                <p className="text-sm text-gray-400">
                  Keeps your business memorable across platforms
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* What We Offer - Branding Services */}
      <section className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Services"
            title="What We Offer"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Crown size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Complete Brand Kits
                </h3>
                <p className="text-sm text-gray-400">
                  Includes typography, color palette, and logo variations.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <FileText size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Stationery & Collateral
                </h3>
                <p className="text-sm text-gray-400">
                  Business cards, letterheads, and branded templates.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Palette size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Logo Design
                </h3>
                <p className="text-sm text-gray-400">
                  Unique and versatile logos tailored for your brand.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Rebranding Services
                </h3>
                <p className="text-sm text-gray-400">
                  Modernize your old brand for today&apos;s market.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Our Branding Process */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Process"
            title="Our Branding Process"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <Search size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Initial Discovery
              </h3>
              <p className="text-sm text-gray-400">
                Understanding your brand audience, and vision
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <Pencil size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Concept Development
              </h3>
              <p className="text-sm text-gray-400">
                Initial sketches and creative directions
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <Eye size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Design & Refinement
              </h3>
              <p className="text-sm text-gray-400">
                Revisions, feedback, and strengthening identity
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <Truck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Final Delivery
              </h3>
              <p className="text-sm text-gray-400">
                Complete brand kit, files, and usage guidelines
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-20 px-4 sm:px-6 bg-white/5">
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
                  <Layers size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Multiple Logo Variations
                </h3>
                <p className="text-sm text-gray-400">
                  Primary, secondary, and icon formats included.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <FileText size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Brand Guidelines
                </h3>
                <p className="text-sm text-gray-400">
                  Typography, color palette, and usage rules (PDF).
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Palette size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Stationery Designs
                </h3>
                <p className="text-sm text-gray-400">
                  Business cards, letterheads, and collateral designs.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Social Media Assets
                </h3>
                <p className="text-sm text-gray-400">
                  Ready-to-use templates for your social channels.
                </p>
              </div>
            </SpotlightCard>
          </div>

          <div className="mt-12 text-center">
            <GlassButton
              href="/portfolio/branding-logo-design"
              className="bg-white/10 hover:bg-white/20"
            >
              Explore Full Branding Portfolio
            </GlassButton>
          </div>
        </div>
      </section>

      {/* GRAPHICS DESIGN SECTION */}

      {/* Graphics That Speak Louder Than Words */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-linear-to-b from-[#1a152e] to-[#050110] p-8 md:p-16 text-center relative overflow-hidden group"
            spotlightColor="rgba(139, 92, 246, 0.3)"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm user-select-none pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent user-select-none pointer-events-none" />

            <SectionHeading
              eyebrow="Graphics Design"
              title="Graphics That Speak Louder Than Words"
              subtitle="From social media creatives to professional brochures, our designs help your brand stand out and connect with your audience."
            />

            <div className="mt-12">
              <GlassButton
                href="#contact"
                className="bg-white/10 hover:bg-white/20"
              >
                Get Custom Designs
              </GlassButton>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Why Professional Graphics Matter */}
      <section className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Impact"
            title="Why Professional Graphics Matter"
            subtitle="Professional graphics make a significant impact on your brand identity and engagement. They are crucial for creating emotional messaging that drives visual presence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <CheckCircle
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  First Impressions Count
                </h3>
                <p className="text-sm text-gray-400">
                  Grab attention instantly
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
                  Boost Engagement
                </h3>
                <p className="text-sm text-gray-400">
                  Attractive visuals perform better online
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
                  Brand Consistency
                </h3>
                <p className="text-sm text-gray-400">
                  Cohesive visuals across all touchpoints
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Types of Graphics We Offer */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Graphics Services"
            title="Types of Graphics We Offer"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Layers size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Social Media Creatives
              </h3>
              <p className="text-sm text-gray-400">Posts, stories, carousels</p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <FileText size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Marketing Collateral
              </h3>
              <p className="text-sm text-gray-400">
                Flyers, posters, brochures
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Crown size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Corporate Graphics
              </h3>
              <p className="text-sm text-gray-400">
                Presentations, infographics, presentations
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Event & Campaign Designs
              </h3>
              <p className="text-sm text-gray-400">Event posters, campaigns</p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Palette size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Product Graphics
              </h3>
              <p className="text-sm text-gray-400">Labels, packaging mockups</p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Pencil size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Custom Requests
              </h3>
              <p className="text-sm text-gray-400">Tailor-made designs</p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Let's Build Your Brand Together"
            subtitle="Fill in your details to receive a customized branding proposal."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(168, 85, 247, 0.2)"
          >
            <ContactForm serviceName="Branding & Logo Design" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
