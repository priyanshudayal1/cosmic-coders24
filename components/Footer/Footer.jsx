"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#150824] border-t border-white/5 pt-10 pb-10 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[300px] bg-purple-700/20 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <Image
                src="/assets/main-logo/Blue-Typo.png"
                alt="Cosmic Coders"
                width={180}
                height={40}
              />
              <Image
                src="/assets/main-logo/Blue-24.png"
                alt="24"
                width={36}
                height={36}
                className="rounded"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital experiences that transcend the ordinary. We build
              the future of the web with innovation and style.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/cosmiccoder24/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/cosmic_coder_24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cosmiccoder24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/cosmiccoder24/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@CosmicCoder24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-purple-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-purple-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="hover:text-purple-400 transition-colors"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-purple-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-purple-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/about-contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  About & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (Optional secondary list) */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                Web Development
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                UI/UX Design
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                Digital Marketing
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                SEO Optimization
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                Brand Identity
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-500 shrink-0" />
                <span>
                  I 04 Guru Arjan Dev Colony, GaurIghat, Jabalpur (M.P), India,
                  482008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                <span>+91 9713990593</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                <span>contact@cosmiccoder24.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Cosmic Coders. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
