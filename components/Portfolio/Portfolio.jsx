"use client";

import Link from "next/link";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "../ui/SectionHeading";

const portfolioItems = [
  {
    title: "Website Development",
    category: "Website Development",
    imageSrc: "/assets/Website_Dashboard.png",
    description:
      "High-performance websites and E-Commerce solutions built with responsive design, SEO-ready structure, and seamless user experience for better engagement and growth.",
    href: "/portfolio/website-development",
  },
  {
    title: "Branding",
    category: "Branding",
    imageSrc: "/assets/Branding.png",
    description:
      "Complete brand launch solutions for new or growing businesses, including logo design, color palette, and typography guidelines.",
    href: "/portfolio/branding-logo-design",
  },
  {
    title: "Graphic Design",
    category: "Graphic Design",
    imageSrc: "/assets/Graphic_Design.png",
    description:
      "Creative digital artworks designed for a premium project, focused on delivering visually appealing and impactful designs.",
    href: "/portfolio/graphics-designing",
  },
  {
    title: "Video Editing",
    category: "Video Editing",
    imageSrc: "/assets/Video_Editing.png",
    description:
      "High-quality video edits created for a premium project, focused on delivering engaging visuals and a smooth, impactful viewing experience.",
    href: "/portfolio/video-editing",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full py-10 lx-subtle">
      <div className="max-w-360 mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Our Work"
          subtitle="A glimpse into the diverse projects we have delivered for our clients across the globe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {portfolioItems.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
              <Link href={item.href} className="block h-full group">
                <SpotlightCard
                  className="p-0! h-full flex flex-col bg-white/10 border-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  {/* Image Area */}
                  <div className="h-48 w-full relative overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex flex-col grow">
                    <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3 block">
                      {item.category}
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                      {item.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors mt-auto">
                      View Project
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
