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
    Package
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionHeading from "../ui/SectionHeading";

const servicesData = [
    {
        title: "Website Development",
        icon: Monitor,
        description: "Custom, high-performance websites tailored to your brand's needs. We build responsive, SEO-friendly, and scalable web solutions using the latest technologies.",
    },
    {
        title: "Software Development",
        icon: Code2,
        description: "Robust and scalable software solutions to streamline your business operations. From enterprise applications to custom tools, we engineer efficiency.",
    },
    {
        title: "Social Media Marketing",
        icon: Share2,
        description: "Strategic social media campaigns to boost your brand presence and engage your audience. We create compelling content that drives growth and conversion.",
    },
    {
        title: "SEO",
        icon: Search,
        description: "Data-driven SEO strategies to improve your search engine rankings and drive organic traffic. We optimize your digital footprint for maximum visibility.",
    },
    {
        title: "Branding & Logo Design",
        icon: PenTool,
        description: "Unique and memorable brand identities that resonate with your audience. We craft logos and brand guidelines that tell your story effectively.",
    },
    {
        title: "Graphics Designing",
        icon: Palette,
        description: "Stunning visual designs for marketing materials, social media, and more. Our creative team delivers eye-catching graphics that communicate your message.",
    },
    {
        title: "Video Editing",
        icon: Video,
        description: "Professional video editing services to transform your footage into captivating stories. Perfect for commercials, social media reels, and corporate videos.",
    },
    {
        title: "Packaging Design",
        icon: Package,
        description: "Innovative packaging designs that stand out on the shelf. We combine aesthetics with functionality to create packaging that enhances your product's appeal.",
    }
];

const Services = () => {
    return (
        <section className="relative w-full py-20 px-4 md:px-8 bg-[#030014] overflow-hidden" id="services">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <SectionHeading
                    eyebrow="Our Services"
                    subtitle="We offer a full suite of services designed to help you scale, innovate, and dominate your market."
                />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
