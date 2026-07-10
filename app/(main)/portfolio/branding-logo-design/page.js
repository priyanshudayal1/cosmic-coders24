"use client";

import React from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import GlassButton from "@/components/ui/GlassButton";
import ImageCarousel from "@/components/ui/ImageCarousel";

// Alternating sequence: one orange (Vaishnav Travels) then one golden (Niematuh) design
const carouselImages = [
  { src: "/assets/portfolio/branding/branding-01.png", alt: "Vaishnav Travels branding" },
  { src: "/assets/portfolio/branding/branding-05.png", alt: "Niematuh Foodstuff branding" },
  { src: "/assets/portfolio/branding/branding-02.png", alt: "Vaishnav Travels branding" },
  { src: "/assets/portfolio/branding/branding-06.png", alt: "Niematuh Foodstuff branding" },
  { src: "/assets/portfolio/branding/branding-03.png", alt: "Vaishnav Travels branding" },
  { src: "/assets/portfolio/branding/branding-07.png", alt: "Niematuh Foodstuff branding" },
  { src: "/assets/portfolio/branding/branding-04.png", alt: "Vaishnav Travels branding" },
  { src: "/assets/portfolio/branding/branding-08.png", alt: "Niematuh Foodstuff branding" },
  { src: "/assets/portfolio/branding/branding-10.png", alt: "Vaishnav Travels branding" },
  { src: "/assets/portfolio/branding/branding-09.png", alt: "Niematuh Foodstuff branding" },
  { src: "/assets/portfolio/branding/branding-11.png", alt: "Vaishnav Travels branding" },
];

export default function BrandingLogoDesignPortfolio() {
  return (
    <div className="min-h-screen bg-site-bg text-white selection:bg-purple-500/30">
      <ServiceHero
        title="Branding & Logo Design"
        highlightedText="Projects"
        subtitle="Explore our brand identity, logo design, and packaging projects crafted to help businesses stand out in competitive markets. Each project combines strategic thinking, creative storytelling, and visual consistency to build memorable brands that connect with audiences and inspire long-term trust."
        ctaText="Start Your Brand"
        ctaHref="/services/branding-logo-design"
      />

      <section className="py-12 md:py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Branding Projects"
            subtitle="Each project reflects our commitment to creating impactful, lasting brand identities."
            titleClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight drop-shadow-lg relative z-10"
          />
        </div>
        <ImageCarousel images={carouselImages} duration="60s" />
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-linear-to-b from-site-card-from to-site-card-to p-6 sm:p-8 md:p-16 text-center relative overflow-hidden group"
            spotlightColor="rgba(163, 113, 247, 0.3)"
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
