"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import GlassButton from "../ui/GlassButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isBlogPost = pathname?.startsWith("/blog/") && pathname !== "/blog";

  useEffect(() => {
    if (!isBlogPost) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPost]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl border border-white/5 bg-[#030014]/50 backdrop-blur-md shadow-lg transition-all duration-500 ${
        scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-wide flex items-center gap-2"
        >
          Cosmic Coders
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <NavItem
            title="Services"
            dropdownItems={[
              {
                label: "Website Development",
                href: "/services/website-development",
              },
              {
                label: "Software Development",
                href: "/services/software-development",
              },
              {
                label: "Social Media Marketing",
                href: "/services/social-media-marketing",
              },
              { label: "SEO", href: "/services/seo" },
              {
                label: "Branding & Logo Design",
                href: "/services/branding-logo-design",
              },
              {
                label: "Graphics Design",
                href: "/services/graphics-design",
              },
              {
                label: "Packaging Design",
                href: "/services/packaging-design",
              },
              { label: "Video Editing", href: "/services/video-editing" },
            ]}
          />
          <NavItem
            title="Portfolio"
            dropdownItems={[
              {
                label: "Website Development",
                href: "/portfolio/website-development",
              },
              {
                label: "Software Development",
                href: "/portfolio/software-development",
              },
              {
                label: "Social Media Marketing",
                href: "/portfolio/social-media-marketing",
              },
              {
                label: "Graphics Designing",
                href: "/portfolio/graphics-designing",
              },
              { label: "Video Editing", href: "/portfolio/video-editing" },
              {
                label: "Branding & Logo Design",
                href: "/portfolio/branding-logo-design",
              },
            ]}
          />
          <NavItem
            title="Results"
            dropdownItems={[
              {
                label: "Social Media Marketing",
                href: "/results/social-media-marketing",
              },
              { label: "SEO Results", href: "/results/seo" },
            ]}
          />
          <NavItem title="Blog" href="/blog" />
          <NavItem title="Careers" href="/careers" />
          <NavItem title="About & Contact" href="/about-contact" />
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <GlassButton href="/about-contact">Get Started</GlassButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
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
        <div className="lg:hidden absolute top-full left-0 w-full mt-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-4">
          <NavItem
            title="Services"
            mobile
            onNavigate={closeMobileMenu}
            dropdownItems={[
              {
                label: "Website Development",
                href: "/services/website-development",
              },
              {
                label: "Software Development",
                href: "/services/software-development",
              },
              {
                label: "Social Media Marketing",
                href: "/services/social-media-marketing",
              },
              { label: "SEO", href: "/services/seo" },
              {
                label: "Branding & Logo Design",
                href: "/services/branding-logo-design",
              },
              {
                label: "Graphics Design",
                href: "/services/graphics-design",
              },
              {
                label: "Packaging Design",
                href: "/services/packaging-design",
              },
              { label: "Video Editing", href: "/services/video-editing" },
            ]}
          />
          <NavItem
            title="Portfolio"
            mobile
            onNavigate={closeMobileMenu}
            dropdownItems={[
              {
                label: "Website Development",
                href: "/portfolio/website-development",
              },
              {
                label: "Software Development",
                href: "/portfolio/software-development",
              },
              {
                label: "Social Media Marketing",
                href: "/portfolio/social-media-marketing",
              },
              {
                label: "Graphics Designing",
                href: "/portfolio/graphics-designing",
              },
              { label: "Video Editing", href: "/portfolio/video-editing" },
              {
                label: "Branding & Logo Design",
                href: "/portfolio/branding-logo-design",
              },
            ]}
          />
          <NavItem
            title="Results"
            mobile
            onNavigate={closeMobileMenu}
            dropdownItems={[
              {
                label: "Social Media Marketing",
                href: "/results/social-media-marketing",
              },
              { label: "SEO Results", href: "/results/seo" },
            ]}
          />
          <NavItem
            title="Blog"
            href="/blog"
            mobile
            onNavigate={closeMobileMenu}
          />
          <NavItem
            title="Careers"
            href="/careers"
            mobile
            onNavigate={closeMobileMenu}
          />
          <NavItem
            title="About & Contact"
            href="/about-contact"
            mobile
            onNavigate={closeMobileMenu}
          />
          <div className="pt-2">
            <GlassButton
              href="/about-contact"
              className="block w-full text-center bg-white/10 hover:bg-white/20 py-3 rounded-xl"
              onClick={closeMobileMenu}
            >
              Get Started
            </GlassButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
