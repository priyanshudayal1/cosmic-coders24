"use client";

import React, { useState } from "react";
import {
  UtensilsCrossed,
  Palette,
  Car,
  Globe,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import GlassButton from "@/components/ui/GlassButton";
import dynamic from "next/dynamic";

const PDFModal = dynamic(() => import("@/components/ui/PDFModal"), {
  ssr: false,
});

import { prefetchPdf } from "@/lib/prefetchPdf";

export default function BrandingLogoDesignPortfolio() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const projects = [
    {
      title: "Vaishnav Travels",
      description:
        "Complete rebranding for a trusted travel service with over 15 years of experience. The new identity balances professionalism with approachability, featuring a versatile logo system and a trustworthy color palette.",
      deliverables: ["Brand Identity", "Logo Design", "Stationery", "Vehicle Branding"],
      icon: Car,
      pdfPath: "/VAISHNAV TRAVELS.pdf",
    },
    {
      title: "Niematuh Foodstuff Trading",
      description:
        "Premium brand identity for a global agro-commodities trader. The design utilizes golden gradients and bold typography to establish authority and quality in the international market.",
      deliverables: ["Logo Design", "Brand Pattern", "Social Media Assets", "Packaging Design"],
      icon: UtensilsCrossed,
      pdfPath: "/NIEMATUH FOODSTUFF TRADING.pdf",
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



      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Branding Projects"
            subtitle="Each project reflects our commitment to creating impactful, lasting brand identities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
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
                <button
                  onMouseEnter={() => prefetchPdf(project.pdfPath)}
                  onClick={() => setSelectedPdf({ path: project.pdfPath, title: project.title })}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-auto"
                >
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

      <PDFModal
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        pdfUrl={selectedPdf?.path}
        title={selectedPdf?.title}
      />
    </div>
  );
}
