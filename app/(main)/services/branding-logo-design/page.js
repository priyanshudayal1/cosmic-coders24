"use client";

import React from "react";
import {
  Palette,
  Sparkles,
  Crown,
  FileText,
  Layers,
  CheckCircle,
  Search,
  Pencil,
  Eye,
  Truck,
} from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";
import TechStack, { DESIGN_TOOLS } from "@/components/features/TechStack";

export default function BrandingLogoDesign() {
  return (
    <div className="min-h-screen bg-site-bg text-white selection:bg-purple-500/30">
      {/* Hero Section */}
      <ServiceHero
        title="Build Your Brand"
        highlightedText="Like Never Before"
        subtitle="We don't just design logos, we create brand identities that reflect your business, your story, and your vision. Every element is crafted with purpose, so when someone sees your brand, they instantly connect with what you stand for."
        ctaText="Start Your Brand"
      />

      {/* BRANDING SECTION */}

      {/* Why Branding is More Than Just a Logo */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Best Branding Services In Jabalpur"
            title="Why Branding is More Than Just a Logo"
            subtitle="A logo is just a symbol, but branding is how people feel about your business. It shapes the first impression, builds trust, and creates a sense of connection with your audience. When your branding is strong, people don't just recognize your business, they remember it and feel confident choosing it."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <CheckCircle
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Trust</h3>
                <p className="text-sm text-gray-400">
                  Strengthens credibility and builds customer confidence.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <CheckCircle
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Recognition
                </h3>
                <p className="text-sm text-gray-400">
                  Helps audiences quickly identify and remember your brand.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <CheckCircle
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Consistency
                </h3>
                <p className="text-sm text-gray-400">
                  Maintains a clear and unified presence across platforms.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* GRAPHICS DESIGN SECTION */}

      {/* Graphics That Speak Louder Than Words */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-linear-to-b from-site-card-from to-site-card-to p-8 md:p-16 text-center relative overflow-hidden group"
            spotlightColor="rgba(163, 113, 247, 0.3)"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm user-select-none pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent user-select-none pointer-events-none" />

            <SectionHeading
              eyebrow="Graphics Design"
              title="Graphics That Communicate Your Brand Clearly"
              subtitle="From social media creatives to professional brochures, our designs help your brand stand out and connect with your audience."
            />

            <div className="mt-12">
              <GlassButton
                href="#contact"
                className="bg-white/10 hover:bg-white/20"
              >
                Get Custom Designs
              </GlassButton>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Why Professional Graphics Matter */}
      <section className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Best Graphic Design Service In Jabalpur"
            title="Why Professional Graphics Matter"
            subtitle="Professional graphic design plays an important role in shaping brand identity and improving audience engagement. Strong visuals support clear communication and create a consistent presence across digital and marketing platforms."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <CheckCircle
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  First Impressions Count
                </h3>
                <p className="text-sm text-gray-400">
                  Strong visuals help capture attention quickly and create a positive first impression.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <CheckCircle
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Boost Engagement
                </h3>
                <p className="text-sm text-gray-400">
                  Well-designed graphics encourage higher interaction across social media and marketing channels.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex items-start gap-4 group hover:bg-white/10 transition-all duration-300">
              <CheckCircle
                size={24}
                className="text-purple-400 shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Brand Consistency
                </h3>
                <p className="text-sm text-gray-400">
                  Consistent visual design strengthens recognition across all customer touchpoints.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Types of Graphics We Offer */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Graphics Services"
            title="Types of Graphics We Offer"
            subtitle=""
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Layers size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Social Media Creatives
              </h3>
              <p className="text-sm text-gray-400">Posts, stories, carousels</p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <FileText size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Marketing Collateral
              </h3>
              <p className="text-sm text-gray-400">
                Flyers, posters, brochures
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Crown size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Corporate Graphics
              </h3>
              <p className="text-sm text-gray-400">
                Presentations, infographics, presentations
              </p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Event & Campaign Designs
              </h3>
              <p className="text-sm text-gray-400">Event posters, campaigns</p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Palette size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Product Graphics
              </h3>
              <p className="text-sm text-gray-400">Labels, packaging mockups</p>
            </SpotlightCard>

            <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300">
                <Pencil size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Custom Requests
              </h3>
              <p className="text-sm text-gray-400">Tailor-made designs</p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack
        items={DESIGN_TOOLS}
        showSingleRow={true}
        eyebrow="Tools We Use"
        title="Built With Professional Tools"
        subtitle="We use industry-standard design software to ensure the highest quality results."
      />

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Let's Build Your Brand Together"
            subtitle="Fill in your details to receive a customized branding proposal."
          />

          <SpotlightCard
            className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
            spotlightColor="rgba(88, 166, 255, 0.2)"
          >
            <ContactForm serviceName="Branding & Logo Design" />
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
