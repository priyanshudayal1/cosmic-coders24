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
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full border border-white/10 bg-black/30 backdrop-blur-md shadow-lg">
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
                            { label: "Web Development", href: "/services/web-development" },
                            { label: "App Development", href: "/services/app-development" },
                            { label: "UI/UX Design", href: "/services/ui-ux-design" },
                            { label: "SEO Optimization", href: "/services/seo" },
                            { label: "Content Writing", href: "/services/content-writing" },
                            { label: "Digital Marketing", href: "/services/digital-marketing" },
                            { label: "Cloud Solutions", href: "/services/cloud-solutions" },
                            { label: "Consulting", href: "/services/consulting" },
                        ]}
                    />
                    <NavItem
                        title="Portfolio"
                        dropdownItems={[
                            { label: "E-commerce", href: "/portfolio/ecommerce" },
                            { label: "Healthcare", href: "/portfolio/healthcare" },
                            { label: "Education", href: "/portfolio/education" },
                            { label: "Finance", href: "/portfolio/finance" },
                            { label: "Real Estate", href: "/portfolio/real-estate" },
                            { label: "Entertainment", href: "/portfolio/entertainment" },
                        ]}
                    />
                    <NavItem
                        title="Results"
                        dropdownItems={[
                            { label: "Case Studies", href: "/results/case-studies" },
                            { label: "Testimonials", href: "/results/testimonials" },
                        ]}
                    />
                    <NavItem title="Blog" href="/blog" />
                    <NavItem title="Careers" href="/careers" />
                    <NavItem title="About & Contact" href="/about-contact" />
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/get-started"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-6 py-2 rounded-full transition-all duration-300 font-medium backdrop-blur-sm"
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
                            { label: "Web Development", href: "/services/web-development" },
                            { label: "App Development", href: "/services/app-development" },
                            { label: "UI/UX Design", href: "/services/ui-ux-design" },
                            { label: "SEO Optimization", href: "/services/seo" },
                            { label: "Content Writing", href: "/services/content-writing" },
                            { label: "Digital Marketing", href: "/services/digital-marketing" },
                            { label: "Cloud Solutions", href: "/services/cloud-solutions" },
                            { label: "Consulting", href: "/services/consulting" },
                        ]}
                    />
                    <NavItem
                        title="Portfolio"
                        mobile
                        dropdownItems={[
                            { label: "E-commerce", href: "/portfolio/ecommerce" },
                            { label: "Healthcare", href: "/portfolio/healthcare" },
                            { label: "Education", href: "/portfolio/education" },
                            { label: "Finance", href: "/portfolio/finance" },
                            { label: "Real Estate", href: "/portfolio/real-estate" },
                            { label: "Entertainment", href: "/portfolio/entertainment" },
                        ]}
                    />
                    <NavItem
                        title="Results"
                        mobile
                        dropdownItems={[
                            { label: "Case Studies", href: "/results/case-studies" },
                            { label: "Testimonials", href: "/results/testimonials" },
                        ]}
                    />
                    <NavItem title="Blog" href="/blog" mobile />
                    <NavItem title="Careers" href="/careers" mobile />
                    <NavItem title="About & Contact" href="/about-contact" mobile />
                    <div className="pt-2">
                        <Link
                            href="/get-started"
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
