"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import NavItem from "./NavItem";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl border border-white/5 bg-[#030014]/50 backdrop-blur-md shadow-lg">
            <div className="px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-white font-bold text-xl tracking-wide flex items-center gap-2"
                >
                    <span className="text-2xl">❄️</span> Cosmic Coders
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavItem
                        title="Services"
                        dropdownItems={[
                            { label: "Website Development", href: "/services/website-development" },
                            { label: "Software Development", href: "/services/software-development" },
                            { label: "Social Media Marketing", href: "/services/social-media-marketing" },
                            { label: "SEO", href: "/services/seo" },
                            { label: "Branding & Logo Design", href: "/services/branding-logo-design" },
                            { label: "Graphics & Packaging Design", href: "/services/graphics-packaging-design" },
                            { label: "Video Editing", href: "/services/video-editing" },
                        ]}
                    />
                    <NavItem
                        title="Portfolio"
                        dropdownItems={[
                            { label: "Website Development", href: "/portfolio/website-development" },
                            { label: "Software Development", href: "/portfolio/software-development" },
                            { label: "Social Media Marketing", href: "/portfolio/social-media-marketing" },
                            { label: "Graphics Designing", href: "/portfolio/graphics-designing" },
                            { label: "Video Editing", href: "/portfolio/video-editing" },
                            { label: "Branding & Logo Design", href: "/portfolio/branding-logo-design" },
                        ]}
                    />
                    <NavItem
                        title="Results"
                        dropdownItems={[
                            { label: "Social Media Marketing", href: "/results/social-media-marketing" },
                            { label: "SEO Results", href: "/results/seo" },
                        ]}
                    />
                    <NavItem title="Blog" href="/blog" />
                    <NavItem title="Careers" href="/careers" />
                    <NavItem title="About & Contact" href="/about-contact" />
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/about-contact"
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-2 rounded-full transition-all duration-300 font-medium backdrop-blur-sm"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-gray-300 transition-colors focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-4">
                    <NavItem
                        title="Services"
                        mobile
                        dropdownItems={[
                            { label: "Website Development", href: "/services/website-development" },
                            { label: "Software Development", href: "/services/software-development" },
                            { label: "Social Media Marketing", href: "/services/social-media-marketing" },
                            { label: "SEO", href: "/services/seo" },
                            { label: "Branding & Logo Design", href: "/services/branding-logo-design" },
                            { label: "Graphics & Packaging Design", href: "/services/graphics-packaging-design" },
                            { label: "Video Editing", href: "/services/video-editing" },
                        ]}
                    />
                    <NavItem
                        title="Portfolio"
                        mobile
                        dropdownItems={[
                            { label: "Website Development", href: "/portfolio/website-development" },
                            { label: "Software Development", href: "/portfolio/software-development" },
                            { label: "Social Media Marketing", href: "/portfolio/social-media-marketing" },
                            { label: "Graphics Designing", href: "/portfolio/graphics-designing" },
                            { label: "Video Editing", href: "/portfolio/video-editing" },
                            { label: "Branding & Logo Design", href: "/portfolio/branding-logo-design" },
                        ]}
                    />
                    <NavItem
                        title="Results"
                        mobile
                        dropdownItems={[
                            { label: "Social Media Marketing", href: "/results/social-media-marketing" },
                            { label: "SEO Results", href: "/results/seo" },
                        ]}
                    />
                    <NavItem title="Blog" href="/blog" mobile />
                    <NavItem title="Careers" href="/careers" mobile />
                    <NavItem title="About & Contact" href="/about-contact" mobile />
                    <div className="pt-2">
                        <Link
                            href="/about-contact"
                            className="block w-full text-center bg-white/10 hover:bg-white/20 text-white border border-white/10 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

