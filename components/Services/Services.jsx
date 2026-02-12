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
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard";
import SectionHeading from "../ui/SectionHeading";

const servicesData = [
  {
    title: "Website Development",
    icon: Monitor,
    description:
      "Custom, high-performance websites tailored to your brand's needs. We build responsive, SEO-friendly, and scalable web solutions using the latest technologies.",
  },
  {
    title: "Software Development",
    icon: Code2,
    description:
      "Robust and scalable software solutions to streamline your business operations. From enterprise applications to custom tools, we engineer efficiency.",
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    description:
      "Strategic social media campaigns to boost your brand presence and engage your audience. We create compelling content that drives growth and conversion.",
  },
  {
    title: "SEO",
    icon: Search,
    description:
      "Data-driven SEO strategies to improve your search engine rankings and drive organic traffic. We optimize your digital footprint for maximum visibility.",
  },
  {
    title: "Branding & Logo Design",
    icon: PenTool,
    description:
      "Unique and memorable brand identities that resonate with your audience. We craft logos and brand guidelines that tell your story effectively.",
  },
  {
    title: "Graphics Designing",
    icon: Palette,
    description:
      "Stunning visual designs for marketing materials, social media, and more. Our creative team delivers eye-catching graphics that communicate your message.",
  },
  {
    title: "Video Editing",
    icon: Video,
    description:
      "Professional video editing services to transform your footage into captivating stories. Perfect for commercials, social media reels, and corporate videos.",
  },
  {
    title: "Packaging Design",
    icon: Package,
    description:
      "Innovative packaging designs that stand out on the shelf. We combine aesthetics with functionality to create packaging that enhances your product's appeal.",
  },
];

const Services = () => {
  return (
    <section
      className="relative w-full py-20 px-4 md:px-8 bg-[#0F061A] overflow-hidden"
      id="services"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-100 h-100 bg-purple-700/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-blue-700/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Our Services"
          subtitle="We offer a full suite of services designed to help you scale, innovate, and dominate your market."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="h-full bg-white/10 border-white/10 group hover:bg-white/20 transition-colors duration-300">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/10 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 grow group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Learn More / Action (Visual only for now) */}
                    <div className="flex items-center text-sm font-medium text-purple-400 group-hover:text-white transition-colors duration-300 mt-auto">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
