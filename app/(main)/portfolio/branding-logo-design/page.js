"use client";

import React from "react";
import {
  Rocket,
  UtensilsCrossed,
  Package,
  Dumbbell,
  Gem,
  Coffee,
  Palette,
  Crown,
  FileText,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import GlassButton from "@/components/ui/GlassButton";

export default function BrandingLogoDesignPortfolio() {
  const projects = [
    {
      title: "Tech Startup Branding",
      description:
        "Complete brand identity including logo, color system, and brand guidelines.",
      deliverables: ["Logo Design", "Brand Guidelines", "Business Cards"],
      icon: Rocket,
    },
    {
      title: "Restaurant Rebrand",
      description: "Modern logo redesign with menu design and signage system.",
      deliverables: ["Logo Redesign", "Menu Design", "Signage"],
      icon: UtensilsCrossed,
    },
    {
      title: "E-Commerce Packaging",
      description:
        "Sustainable packaging design with unboxing experience focus.",
      deliverables: ["Box Design", "Tissue Paper", "Stickers"],
      icon: Package,
    },
    {
      title: "Fitness Brand Identity",
      description:
        "Athletic brand with bold typography and energetic color palette.",
      deliverables: ["Logo", "Brand Book", "Apparel Mockups"],
      icon: Dumbbell,
    },
    {
      title: "Luxury Product Packaging",
      description: "Premium packaging with foil stamping and embossed details.",
      deliverables: ["Package Design", "Label Design", "Gift Box"],
      icon: Gem,
    },
    {
      title: "Coffee Brand",
      description: "Artisanal coffee brand with bag design and loyalty card.",
      deliverables: ["Logo", "Bag Design", "Loyalty Card"],
      icon: Coffee,
    },
  ];

  const highlights = [
    {
      icon: Crown,
      title: "Brand Strategy",
      description: "Research-driven identity systems",
    },
    {
      icon: Palette,
      title: "Visual Identity",
      description: "Logos, colors, and typography",
    },
    {
      icon: FileText,
      title: "Collateral Design",
      description: "Stationery and brand assets",
    },
    {
      icon: Sparkles,
      title: "Rebranding",
      description: "Modernizing existing brands",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      <ServiceHero
        title="Branding & Logo Design"
        highlightedText="Portfolio"
        subtitle="Explore our brand identity and packaging design work. We create memorable brands that resonate with audiences and stand the test of time."
        ctaText="Start Your Brand"
        ctaHref="/services/branding-logo-design"
      />

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Our Branding Expertise"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, idx) => (
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
            title="Featured Branding Projects"
            subtitle="Each project reflects our commitment to creating impactful, lasting brand identities."
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
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 grow group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-auto">
                  <Palette className="w-4 h-4" />
                  <span className="text-sm font-medium">View Brand</span>
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
              title="Want a Brand That Stands Out?"
              subtitle="Let us craft a unique identity for your business that resonates with your audience and drives growth."
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GlassButton
                href="/services/branding-logo-design"
                className="bg-white/10 hover:bg-white/20"
              >
                Explore Branding Services
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
