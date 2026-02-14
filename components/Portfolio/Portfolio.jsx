"use client";

import Link from "next/link";

import React from "react";
import {
  ShoppingCart,
  Smartphone,
  Palette,
  Zap,
  Video,
  Package,
} from "lucide-react";
import SpotlightCard from "../SpotlightCard"; // Updated import
import SectionHeading from "../ui/SectionHeading";

const portfolioItems = [
  {
    title: "E-commerce Website",
    category: "Web Development",
    icon: ShoppingCart,
    imageColor: "from-blue-500/20 to-purple-500/20",
    spotlightColor: "rgba(59, 130, 246, 0.2)",
    description:
      "A full-featured online store with secure payment integration and real-time inventory management.",
    href: "/portfolio/website-development",
  },
  {
    title: "Tech Brand Identity",
    category: "Branding",
    icon: Zap,
    imageColor: "from-orange-500/20 to-red-500/20",
    spotlightColor: "rgba(249, 115, 22, 0.2)",
    description:
      "Complete brand overhaul for a tech startup, including logo design, color palette, and typography guidelines.",
    href: "/portfolio/branding-logo-design",
  },
  {
    title: "Digital Art Collection",
    category: "Graphics",
    icon: Palette,
    imageColor: "from-pink-500/20 to-rose-500/20",
    spotlightColor: "rgba(236, 72, 153, 0.2)",
    description:
      "A series of abstract digital artworks created for a high-profile NFT collection launch.",
    href: "/portfolio/graphics-designing",
  },
  {
    title: "Corporate promo",
    category: "Video Editing",
    icon: Video,
    imageColor: "from-indigo-500/20 to-cyan-500/20",
    spotlightColor: "rgba(99, 102, 241, 0.2)",
    description:
      "High-energy promotional video showcasing company culture and values for recruitment campaigns.",
    href: "/portfolio/video-editing",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work"
          subtitle="A glimpse into the diverse projects we have delivered for our clients across the globe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.href} className="block h-full group">
                <SpotlightCard
                  className="p-0 h-full flex flex-col bg-white/10 border-white/10 hover:bg-white/20 transition-colors duration-300"
                  spotlightColor={item.spotlightColor}
                >
                  {/* Image Placeholder Area */}
                  <div
                    className={`h-40 w-full bg-linear-to-br ${item.imageColor} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white/20 group-hover:text-white/40 group-hover:scale-110 transition-all duration-300" />
                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0F061A] to-transparent opacity-60" />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col grow">
                    <span className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                      {item.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors mt-auto">
                      View Case Study
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
