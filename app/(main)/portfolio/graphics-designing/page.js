"use client";

import React from "react";
import {
  Smartphone,
  FileText,
  BarChart3,
  PartyPopper,
  Mail,
  Presentation,
  Palette,
  Share2,
  Layers,
  PenTool,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import GlassButton from "@/components/ui/GlassButton";

export default function GraphicsDesigningPortfolio() {
  const projects = [
    {
      title: "Social Media Templates",
      description:
        "Cohesive Instagram feed templates with consistent branding and visual appeal.",
      category: "Social Media",
      icon: Smartphone,
    },
    {
      title: "Marketing Collateral",
      description:
        "Brochures, flyers, and promotional materials for product launches.",
      category: "Print Design",
      icon: FileText,
    },
    {
      title: "Infographics",
      description:
        "Data visualization and educational infographics for content marketing.",
      category: "Information Design",
      icon: BarChart3,
    },
    {
      title: "Event Graphics",
      description:
        "Conference banners, booth designs, and event promotional materials.",
      category: "Event Design",
      icon: PartyPopper,
    },
    {
      title: "Email Templates",
      description:
        "Responsive email newsletter designs with high conversion rates.",
      category: "Digital Marketing",
      icon: Mail,
    },
    {
      title: "Presentation Decks",
      description:
        "Professional pitch decks and corporate presentation templates.",
      category: "Business",
      icon: Presentation,
    },
  ];

  const capabilities = [
    {
      icon: Share2,
      title: "Social Media",
      description: "Posts, stories, and carousels",
    },
    {
      icon: Layers,
      title: "Print Design",
      description: "Flyers, brochures, and posters",
    },
    {
      icon: PenTool,
      title: "Custom Art",
      description: "Illustrations and digital art",
    },
    {
      icon: Palette,
      title: "Brand Visuals",
      description: "Cohesive brand graphics",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      <ServiceHero
        title="Graphics Designing"
        highlightedText="Portfolio"
        subtitle="Browse our creative graphics work spanning social media, marketing materials, and digital design. Each piece crafted to captivate and convert."
        ctaText="Get Custom Designs"
        ctaHref="/services/graphics-design"
      />

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Capabilities"
            title="What We Design"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {capabilities.map((item, idx) => (
              <SpotlightCard
                key={idx}
                className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Design Projects"
            subtitle="Every design tells a story. Here are some of our favorite projects that showcase creativity at its finest."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <SpotlightCard
                key={index}
                className="h-full bg-white/5 border-white/10 p-6 flex flex-col group hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <project.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/20">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 grow group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-auto">
                  <Palette className="w-4 h-4" />
                  <span className="text-sm font-medium">View Designs</span>
                </button>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-linear-to-b from-[#1a152e] to-[#050110] p-6 sm:p-8 md:p-16 text-center relative overflow-hidden group"
            spotlightColor="rgba(139, 92, 246, 0.3)"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent pointer-events-none" />

            <SectionHeading
              eyebrow="Ready?"
              title="Need Eye-Catching Graphics?"
              subtitle="From social media posts to marketing materials, we design visuals that captivate your audience."
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GlassButton
                href="/services/graphics-design"
                className="bg-white/10 hover:bg-white/20"
              >
                Explore Graphics Services
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
