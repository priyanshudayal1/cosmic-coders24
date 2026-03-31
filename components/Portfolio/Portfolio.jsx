"use client";

import Link from "next/link";

import React from "react";
import Image from "next/image";
import SpotlightCard from "@/components/ui/SpotlightCard"; // Updated import
import SectionHeading from "../ui/SectionHeading";

const portfolioItems = [
  {
    title: "Website Development",
    category: "Website Development",
    imageSrc: "/assets/Website_Dashboard.png",
    imageColor: "from-blue-500/20 to-purple-500/20",
    spotlightColor: "rgba(59, 130, 246, 0.2)",
    description:
      "High-performance websites and E-Commerce solutions built with responsive design, SEO-ready structure, and seamless user experience for better engagement and growth.",
    href: "/portfolio/website-development",
  },
  {
    title: "Branding",
    category: "Branding",
    imageSrc: "/assets/Branding.png",
    imageColor: "from-orange-500/20 to-red-500/20",
    spotlightColor: "rgba(249, 115, 22, 0.2)",
    description:
      "Complete brand launch solutions for new or growing businesses, including logo design, color palette, and typography guidelines.",
    href: "/portfolio/branding-logo-design",
  },
  {
    title: "Graphic Design",
    category: "Graphic Design",
    imageSrc: "/assets/Graphic_Design.png",
    imageColor: "from-pink-500/20 to-rose-500/20",
    spotlightColor: "rgba(236, 72, 153, 0.2)",
    description:
      "Creative digital artworks designed for a premium project, focused on delivering visually appealing and impactful designs.",
    href: "/portfolio/graphics-designing",
  },
  {
    title: "Video Editing",
    category: "Video Editing",
    imageSrc: "/assets/Video_Editing.png",
    imageColor: "from-indigo-500/20 to-cyan-500/20",
    spotlightColor: "rgba(99, 102, 241, 0.2)",
    description:
      "High-quality video edits created for a premium project, focused on delivering engaging visuals and a smooth, impactful viewing experience.",
    href: "/portfolio/video-editing",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-360 mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work"
          subtitle="A glimpse into the diverse projects we have delivered for our clients across the globe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {portfolioItems.map((item, index) => {
            return (
              <Link key={index} href={item.href} className="block h-full group">
                <SpotlightCard
                  className="p-0 h-full flex flex-col bg-white/10 border-white/10 hover:bg-white/20 transition-colors duration-300"
                  spotlightColor={item.spotlightColor}
                >
                  {/* Image Area */}
                  <div
                    className={`h-64 w-full bg-linear-to-br ${item.imageColor} relative overflow-hidden flex items-center justify-center`}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={160}
                      height={160}
                      className="w-40 h-40 object-contain group-hover:scale-110 transition-all duration-300 opacity-80 group-hover:opacity-100"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0F061A] to-transparent opacity-60 pointer-events-none" />
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
                      View Project
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
