"use client";

import React from "react";
import {
  ExternalLink,
  ShoppingCart,
  BarChart3,
  Building2,
  Home,
  BookOpen,
  UtensilsCrossed,
  Code,
  Smartphone,
  Search,
  Zap,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import GlassButton from "@/components/ui/GlassButton";

export default function WebsiteDevelopmentPortfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern online shopping experience with seamless checkout and inventory management.",
      tech: ["Next.js", "React", "Stripe", "MongoDB"],
      icon: ShoppingCart,
    },
    {
      title: "SaaS Dashboard",
      description:
        "Analytics dashboard for business intelligence with real-time data visualization.",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      icon: BarChart3,
    },
    {
      title: "Corporate Website",
      description:
        "Professional corporate presence with CMS integration and multilingual support.",
      tech: ["Next.js", "Tailwind CSS", "Contentful"],
      icon: Building2,
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search and virtual tours.",
      tech: ["React", "Google Maps API", "Firebase"],
      icon: Home,
    },
    {
      title: "Educational Platform",
      description:
        "Online learning management system with video streaming and progress tracking.",
      tech: ["Next.js", "AWS", "Stripe", "MySQL"],
      icon: BookOpen,
    },
    {
      title: "Restaurant Booking",
      description:
        "Table reservation system with menu management and customer reviews.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      icon: UtensilsCrossed,
    },
  ];

  const strengths = [
    { icon: Code, title: "Full-Stack", description: "End-to-end development" },
    {
      icon: Smartphone,
      title: "Responsive",
      description: "Mobile-first design",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built for visibility",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast loading",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      <ServiceHero
        title="Website Development"
        highlightedText="Portfolio"
        subtitle="Explore our collection of stunning websites and web applications. Each project showcases our commitment to excellence, innovation, and user-centric design."
        ctaText="Get Your Website"
        ctaHref="/services/website-development"
      />

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Approach"
            title="Built for Performance & Scale"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {strengths.map((item, idx) => (
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
            title="Featured Web Projects"
            subtitle="From e-commerce platforms to SaaS dashboards, see how we craft digital experiences that convert."
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-auto">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4" />
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
              eyebrow="Let's Build"
              title="Ready to Build Your Website?"
              subtitle="From startups to enterprises, we create websites that drive real business results."
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GlassButton
                href="/services/website-development"
                className="bg-white/10 hover:bg-white/20"
              >
                Explore Web Services
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
