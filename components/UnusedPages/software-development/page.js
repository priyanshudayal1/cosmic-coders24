"use client";

import React from "react";
import {
  ExternalLink,
  FileText,
  Package,
  ListTodo,
  Users,
  Banknote,
  Plug,
  Settings,
  TrendingUp,
  Shield,
  Code,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import GlassButton from "@/components/ui/GlassButton";

export default function SoftwareDevelopmentPortfolio() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "Enterprise-grade inventory tracking with barcode scanning and automated reordering.",
      tech: ["Python", "Django", "PostgreSQL", "Redis"],
      icon: Package,
    },
    {
      title: "CRM Platform",
      description:
        "Customer relationship management with sales pipeline and email automation.",
      tech: ["Java", "Spring Boot", "MySQL", "React"],
      icon: Users,
    },
    {
      title: "Financial Analytics Tool",
      description:
        "Advanced financial modeling and forecasting software for investment firms.",
      tech: ["Python", "Pandas", "NumPy", "Flask"],
      icon: Banknote,
    },
    {
      title: "Healthcare Management",
      description:
        "Patient management system with appointment scheduling and medical records.",
      tech: ["C#", ".NET", "SQL Server", "Angular"],
      icon: FileText,
    },
    {
      title: "Project Management Suite",
      description:
        "Collaborative project tracking with Gantt charts and resource allocation.",
      tech: ["Node.js", "Express", "MongoDB", "Vue.js"],
      icon: ListTodo,
    },
    {
      title: "IoT Monitoring Platform",
      description:
        "Real-time device monitoring and control for smart manufacturing.",
      tech: ["Python", "MQTT", "InfluxDB", "Grafana"],
      icon: Plug,
    },
  ];

  const advantages = [
    {
      icon: Settings,
      title: "Custom Built",
      description: "Tailored to your workflows",
    },
    {
      icon: TrendingUp,
      title: "Scalable",
      description: "Grows with your business",
    },
    { icon: Shield, title: "Secure", description: "Enterprise-grade security" },
    { icon: Code, title: "Modern Stack", description: "Latest technologies" },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      <ServiceHero
        title="Software Development"
        highlightedText="Portfolio"
        subtitle="Discover our custom software solutions that streamline operations and drive business growth. From enterprise applications to specialized tools."
        ctaText="Get Your Custom Software"
        ctaHref="/services/software-development"
      />

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Why Us"
            title="Our Development Edge"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {advantages.map((item, idx) => (
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
            title="Featured Software Projects"
            subtitle="From billing systems to IoT platforms, each project is engineered to solve real business challenges."
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
              eyebrow="Build With Us"
              title="Have a Software Idea?"
              subtitle="We turn complex business challenges into elegant, scalable software solutions."
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GlassButton
                href="/services/software-development"
                className="bg-white/10 hover:bg-white/20"
              >
                Explore Software Services
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
