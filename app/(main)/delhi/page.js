"use client";

import React from "react";
import {
  Monitor,
  Code2,
  Share2,
  Search,
  PenTool,
  Palette,
  Video,
  Package,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import ServiceHero from "@/components/Services/ServiceHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ContactForm from "@/components/Form/ContactForm";
import GlassButton from "@/components/ui/GlassButton";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Custom, high-performance websites for Delhi businesses — responsive, SEO-friendly, and built to convert.",
    href: "/services/website-development",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Scalable software solutions tailored for Delhi enterprises, startups, and SMEs.",
    href: "/services/software-development",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Data-driven SEO strategies to rank your Delhi business higher on Google and drive organic traffic.",
    href: "/services/seo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Targeted social media campaigns to grow your brand presence across Delhi's competitive market.",
    href: "/services/social-media-marketing",
  },
  {
    icon: PenTool,
    title: "Branding & Logo Design",
    description:
      "Memorable brand identities crafted to help your Delhi business stand out and build trust.",
    href: "/services/branding-logo-design",
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description:
      "Stunning visual designs for digital marketing, social media, and print for Delhi brands.",
    href: "/services/graphics-design",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing services for commercials, reels, and corporate content in Delhi.",
    href: "/services/video-editing",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "Innovative packaging designs to help Delhi product brands stand out on shelves and online.",
    href: "/services/packaging-design",
  },
];

const reasons = [
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "We have delivered measurable results for businesses across India with consistent quality and on-time delivery.",
  },
  {
    icon: TrendingUp,
    title: "Result-Oriented Approach",
    description:
      "Every solution we build is focused on driving visibility, leads, and long-term business growth.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Our expert team of developers, designers, and marketers works as an extension of your business.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Services",
    description:
      "From strategy to execution — website, SEO, branding, and content — all under one roof.",
  },
];

export default function DelhiPage() {
  return (
    <div className="min-h-screen bg-site-bg text-white selection:bg-purple-500/30">
      <ServiceHero
        title="Best Software, Website Development, Local SEO &"
        highlightedText="Digital Marketing Company in Delhi"
        subtitle="Cosmic Coder 24 delivers cutting-edge digital solutions for Delhi businesses — custom websites, SEO, branding, and software development that drives real growth."
        ctaText="Get Started Today"
        ctaHref="#contact"
      />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Offer"
            title="Digital Services for Delhi Businesses"
            subtitle="From website development to SEO and branding, we offer a complete suite of digital services tailored for the Delhi market."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <SpotlightCard
                  key={index}
                  className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Delhi Businesses Trust Cosmic Coder 24"
            subtitle="We combine technical expertise with a deep understanding of what businesses in Delhi need to grow digitally."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <SpotlightCard
                  key={index}
                  className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Let's Grow Your Delhi Business"
            subtitle="Tell us about your project and we will get back to you within one business day."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(88, 166, 255, 0.2)"
          >
            <ContactForm serviceName="Delhi - General Inquiry" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
