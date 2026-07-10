"use client";

import React from "react";
import {
  Palette,
  Layers,
  Share2,
  FileText,
  BarChart,
  Calendar,
  PenTool,
  CheckCircle,
  Eye,
  TrendingUp,
  ClipboardList,
  Lightbulb,
  Brush,
  Zap,
} from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";
import TechStack, { DESIGN_TOOLS } from "@/components/features/TechStack";

export default function GraphicsDesign() {
  return (
    <div className="min-h-screen bg-site-bg text-white selection:bg-purple-500/30">
      {/* Hero Section */}
      <ServiceHero
        title="Graphics That Communicate"
        highlightedText="Your Brand Clearly"
        subtitle="From social media creatives to professional brochures, our designs help your brand stand out and connect with your audience."
        ctaText="Get Custom Designs"
        ctaHref="#contact"
      />

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Best Graphic Design Service In Jabalpur"
            title="Why Professional Graphics Matter"
            subtitle="Professional graphic design plays an important role in shaping brand identity and improving audience engagement. Strong visuals support clear communication and create a consistent presence across digital and marketing platforms."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <Eye size={24} className="text-purple-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  First Impressions Count
                </h3>
                <p className="text-sm text-gray-400">
                  Strong visuals help capture attention quickly and create a positive first impression.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <TrendingUp size={24} className="text-purple-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Boost Engagement
                </h3>
                <p className="text-sm text-gray-400">
                  Well-designed graphics encourage higher interaction across social media and marketing channels.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <Layers size={24} className="text-purple-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Brand Consistency
                </h3>
                <p className="text-sm text-gray-400">
                  Consistent visual design strengthens recognition across all customer touchpoints.
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
            title="Types of Graphics We Offer"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Share2 size={28} strokeWidth={1.5} />
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
                <BarChart size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Corporate Graphics
              </h3>
              <p className="text-sm text-gray-400">
                Reports, infographics, presentations
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Calendar size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Event & Campaign Designs
              </h3>
              <p className="text-sm text-gray-400">Event invites, campaigns</p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Palette size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Digital Art & Illustrations
              </h3>
              <p className="text-sm text-gray-400">
                Custom characters, scenes, and assets
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <PenTool size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Custom Requests
              </h3>
              <p className="text-sm text-gray-400">Tailor-made designs</p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Workflow"
            title="Our Design Process"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <ClipboardList size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Requirement Gathering
              </h3>
              <p className="text-sm text-gray-400">
                Understanding client needs and vision
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <Lightbulb size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Concept & Drafting
              </h3>
              <p className="text-sm text-gray-400">
                Initial creative ideas and sketches
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <Brush size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Design & Refinement
              </h3>
              <p className="text-sm text-gray-400">
                Feedback incorporation and improvements
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                <CheckCircle size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Final Delivery
              </h3>
              <p className="text-sm text-gray-400">
                Print-ready and digital formats
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
                  High-quality files
                </h3>
                <p className="text-sm text-gray-400">
                  JPG, PNG, PDF formats suitable for all uses.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <FileText size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Source files
                </h3>
                <p className="text-sm text-gray-400">
                  AI, PSD, and editable formats where applicable.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Layers size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Multi-format versions
                </h3>
                <p className="text-sm text-gray-400">
                  Optimized files for social media, print, and web.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="bg-white/5 border-white/10 p-6 h-full group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <Zap size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Timely Delivery
                </h3>
                <p className="text-sm text-gray-400">
                  Fast delivery and Revisions as per package.
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
        subtitle="We use industry-standard software to create high-quality, scalable designs."
      />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Let's Design Something Extraordinary"
            subtitle="Share your requirements and we'll craft designs that fit your brand."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(88, 166, 255, 0.2)"
          >
            <ContactForm serviceName="Graphics Design" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
