"use client";

import React from "react";
import {
  TrendingUp,
  Heart,
  Eye,
  ShoppingBag,
  Dumbbell,
  Store,
  Shirt,
  Pizza,
  Laptop,
  Megaphone,
  Users,
  BarChart3,
  Target,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import GlassButton from "@/components/ui/GlassButton";

export default function SocialMediaMarketingPortfolio() {
  const campaigns = [
    {
      title: "Fashion Brand Launch",
      description:
        "Instagram campaign that grew followers from 0 to 50K in 3 months with viral reels.",
      metrics: { engagement: "12.5%", reach: "2.3M", followers: "+50K" },
      platform: "Instagram",
      icon: Shirt,
    },
    {
      title: "Restaurant Promotion",
      description:
        "Multi-platform campaign driving 300% increase in reservations and foot traffic.",
      metrics: { engagement: "8.2%", reach: "850K", conversions: "+300%" },
      platform: "Facebook & Instagram",
      icon: Pizza,
    },
    {
      title: "Tech Product Launch",
      description:
        "LinkedIn B2B campaign generating 500+ qualified leads for SaaS product.",
      metrics: { engagement: "15.3%", reach: "1.2M", leads: "500+" },
      platform: "LinkedIn",
      icon: Laptop,
    },
    {
      title: "Fitness Influencer",
      description:
        "TikTok growth strategy achieving 100K followers and brand partnerships.",
      metrics: { engagement: "18.7%", reach: "5M", followers: "+100K" },
      platform: "TikTok",
      icon: Dumbbell,
    },
    {
      title: "E-Commerce Brand",
      description:
        "Pinterest strategy driving 200% increase in website traffic and sales.",
      metrics: { engagement: "9.8%", reach: "1.5M", traffic: "+200%" },
      platform: "Pinterest",
      icon: ShoppingBag,
    },
    {
      title: "Local Business",
      description:
        "Community-focused campaign building loyal customer base and reviews.",
      metrics: { engagement: "14.2%", reach: "450K", reviews: "250+" },
      platform: "Google & Facebook",
      icon: Store,
    },
  ];

  const strengths = [
    {
      icon: Megaphone,
      title: "Brand Awareness",
      description: "Build strong social presence",
    },
    {
      icon: Users,
      title: "Community Growth",
      description: "Engage and grow your audience",
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Measurable campaign results",
    },
    {
      icon: Target,
      title: "Targeted Reach",
      description: "Connect with the right audience",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      <ServiceHero
        title="Social Media Marketing"
        highlightedText="Portfolio"
        subtitle="See how we've helped brands grow their social presence, engage audiences, and drive measurable results across all major platforms."
        ctaText="Grow Your Brand"
        ctaHref="/services/social-media-marketing"
      />

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Strengths"
            title="How We Drive Social Growth"
            subtitle=""
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {strengths.map((item, idx) => (
              <SpotlightCard
                key={idx}
                className="h-full bg-white/5 border-white/10 p-6 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 mx-auto">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Case Studies"
            title="Campaign Success Stories"
            subtitle="Real results from real campaigns. See how we transformed social presence into measurable business growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {campaigns.map((campaign, index) => (
              <SpotlightCard
                key={index}
                className="h-full bg-white/5 border-white/10 p-6 flex flex-col group hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                  <campaign.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/20">
                    {campaign.platform}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  {campaign.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 grow group-hover:text-gray-300 transition-colors duration-300">
                  {campaign.description}
                </p>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold">
                      {campaign.metrics.engagement}
                    </div>
                    <div className="text-xs text-gray-500">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold">
                      {campaign.metrics.reach}
                    </div>
                    <div className="text-xs text-gray-500">Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold">
                      {campaign.metrics.followers ||
                        campaign.metrics.leads ||
                        campaign.metrics.conversions ||
                        campaign.metrics.traffic ||
                        campaign.metrics.reviews}
                    </div>
                    <div className="text-xs text-gray-500">Growth</div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SpotlightCard
            className="w-full rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-linear-to-b from-[#1a152e] to-[#050110] p-6 sm:p-8 md:p-16 text-center relative overflow-hidden group"
            spotlightColor="rgba(139, 92, 246, 0.3)"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent blur-sm pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent pointer-events-none" />

            <SectionHeading
              eyebrow="Get Started"
              title="Ready to Go Viral?"
              subtitle="Let us build a social media strategy that grows your brand and drives real results."
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GlassButton
                href="/services/social-media-marketing"
                className="bg-white/10 hover:bg-white/20"
              >
                Explore SMM Services
              </GlassButton>
              <GlassButton
                href="/about-contact"
                className="bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/30"
              >
                Contact Us
              </GlassButton>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
