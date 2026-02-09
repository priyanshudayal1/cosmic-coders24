"use client";

import React from "react";
import {
    Share2,
    TrendingUp,
    Target,
    MessageCircle,
    BarChart3,
    Calendar,
    Users,
    Instagram,
    Facebook,
    Linkedin,
    Twitter,
    Youtube,
    Megaphone,
    Clock,
    CheckCircle
} from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceHero from "@/components/Services/ServiceHero";
import ContactForm from "@/components/Form/ContactForm";

export default function SocialMediaMarketing() {
    return (
        <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
            {/* 1. Hero Section */}
            <ServiceHero
                title="Grow Your Brand Organically"
                highlightedText="on Social Media"
                subtitle="Engage customers, increase reach, and build authority on the platforms that matter."
                ctaText="Get Started"
            />

            {/* 2. Introduction */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeading
                        eyebrow="Introduction"
                        title={<span className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl">Impactful Social Presence</span>}
                        subtitle="In today's digital-first business world, Social Media Marketing is crucial for building brand presence, engaging with customers, and driving organic growth. Our services help you maximize your impact across popular social media platforms."
                    />
                    {/* Abstract Graphic/Icon placeholder */}
                    <div className="flex justify-center mt-12">
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
                            <Share2 className="w-full h-full text-purple-400/80 relative z-10 animate-pulse" strokeWidth={0.5} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Platforms We Work On */}
            <section className="py-20 px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Platforms"
                        title="Platforms We Work On"
                        subtitle=""
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* Instagram */}
                        <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-pink-500 group-hover:bg-pink-500/10 group-hover:border-pink-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                                <Instagram size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Instagram</h3>
                                <p className="text-sm text-gray-400">For brand storytelling</p>
                            </div>
                        </SpotlightCard>

                        {/* Facebook */}
                        <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-blue-500 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                                <Facebook size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Facebook</h3>
                                <p className="text-sm text-gray-400">Connect with a wide audience</p>
                            </div>
                        </SpotlightCard>

                        {/* LinkedIn */}
                        <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-blue-400 group-hover:bg-blue-400/10 group-hover:border-blue-400/50 transition-all duration-300 shadow-inner shadow-white/5">
                                <Linkedin size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
                                <p className="text-sm text-gray-400">Professional networking</p>
                            </div>
                        </SpotlightCard>

                        {/* Twitter/X */}
                        <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/50 transition-all duration-300 shadow-inner shadow-white/5">
                                <Twitter size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Twitter / X</h3>
                                <p className="text-sm text-gray-400">Real-time engagement</p>
                            </div>
                        </SpotlightCard>

                        {/* YouTube */}
                        <SpotlightCard className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-red-500 group-hover:bg-red-500/10 group-hover:border-red-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                                <Youtube size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">YouTube</h3>
                                <p className="text-sm text-gray-400">Video content creation</p>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </section>

            {/* 4. Benefits of Social Media Marketing */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Benefits"
                        title="Benefits of Social Media Marketing"
                        subtitle=""
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
                            <div className="flex flex-col h-full p-6">
                                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                                    <Megaphone size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Build strong brand presence</h3>
                                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                                    Establish your brand identity across social platforms and make your voice heard.
                                </p>
                            </div>
                        </SpotlightCard>

                        {/* Card 2 */}
                        <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
                            <div className="flex flex-col h-full p-6">
                                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                                    <Users size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Drive organic engagement</h3>
                                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                                    Increase interaction and engagement with your audience through meaningful content.
                                </p>
                            </div>
                        </SpotlightCard>

                        {/* Card 3 */}
                        <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
                            <div className="flex flex-col h-full p-6">
                                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                                    <TrendingUp size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Convert followers into leads</h3>
                                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                                    Turn your social media followers into potential customers with targeted strategies.
                                </p>
                            </div>
                        </SpotlightCard>

                        {/* Card 4 */}
                        <SpotlightCard className="h-full bg-white/5 border-white/10 group hover:bg-white/10 transition-colors duration-300">
                            <div className="flex flex-col h-full p-6">
                                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                                    <Clock size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Stay top-of-mind with customers</h3>
                                <p className="text-gray-400 text-sm leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">
                                    Keep your brand at the forefront of your customers' minds with consistent activity.
                                </p>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </section>

            {/* 5. What to Expect */}
            <section className="py-20 px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Expectations"
                        title="What to Expect"
                        subtitle=""
                    />
                    <SpotlightCard className="w-full bg-white/5 border-white/10 p-8 flex flex-col md:flex-row items-center md:items-start gap-6 group hover:bg-white/10 transition-all duration-300">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#1a152e] border border-white/10 flex items-center justify-center text-purple-300 group-hover:text-orange-500 group-hover:bg-orange-500/10 group-hover:border-orange-500/50 transition-all duration-300 shadow-inner shadow-white/5">
                            <Calendar size={32} strokeWidth={1.5} />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Timeline for Growth</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                Social media growth is not instant. Realistic results take 3–6 months of consistent strategy, content, and engagement to build a loyal following and see significant ROI.
                            </p>
                        </div>
                    </SpotlightCard>
                </div>
            </section>

            {/* 6. Portfolio Teaser (Optional/Placeholder) */}
            <section className="py-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Our Work"
                        title="Portfolio Teaser"
                        subtitle="A glimpse into the brands we've helped grow."
                    />

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16 px-4">
                        {/* Placeholder 1 */}
                        <div className="flex flex-col items-center group relative">
                            <div className="w-48 h-48 rounded-full bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 overflow-hidden backdrop-blur-sm">
                                <span className="text-2xl font-bold text-white/30 group-hover:text-white transition-colors tracking-widest">BRAND</span>
                                <div className="absolute inset-0 bg-linear-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="flex gap-4 text-purple-400 group-hover:text-purple-300 transition-colors absolute -bottom-8 md:-bottom-12 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <Instagram size={20} />
                                <Facebook size={20} />
                            </div>
                        </div>
                        {/* Placeholder 2 */}
                        <div className="flex flex-col items-center group relative">
                            <div className="w-56 h-56 rounded-full bg-linear-to-br from-orange-500/20 to-red-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 overflow-hidden backdrop-blur-sm shadow-[0_0_50px_rgba(249,115,22,0.1)]">
                                <span className="text-3xl font-bold text-white/30 group-hover:text-white transition-colors tracking-widest">LUXE</span>
                                <div className="absolute inset-0 bg-linear-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="flex gap-4 text-purple-400 group-hover:text-orange-300 transition-colors absolute -bottom-8 md:-bottom-12 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <Linkedin size={20} />
                                <Twitter size={20} />
                            </div>
                        </div>
                        {/* Placeholder 3 */}
                        <div className="flex flex-col items-center group relative">
                            <div className="w-48 h-48 rounded-full bg-linear-to-br from-green-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 overflow-hidden backdrop-blur-sm">
                                <span className="text-2xl font-bold text-white/30 group-hover:text-white transition-colors tracking-widest">WILD</span>
                                <div className="absolute inset-0 bg-linear-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="flex gap-4 text-purple-400 group-hover:text-emerald-300 transition-colors absolute -bottom-8 md:-bottom-12 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <Instagram size={20} />
                                <Youtube size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="text-center relative z-20">
                        <GlassButton href="/portfolio" className="bg-[#FF6B6B] hover:bg-[#FF8787] text-white px-8 py-3 border-none shadow-[0_4px_14px_0_rgba(255,107,107,0.39)] hover:shadow-[0_6px_20px_rgba(255,107,107,0.23)] hover:-translate-y-0.5 transition-all duration-300">
                            See More Work
                        </GlassButton>
                    </div>
                </div>
            </section>


            {/* 7. Contact Form */}
            <section id="contact" className="py-20 px-6 bg-white/5">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading
                        eyebrow="Start Growing"
                        title="Ready to Grow Your Brand?"
                        subtitle="Tell us your goals, and we'll craft a social strategy that delivers."
                    />

                    <SpotlightCard
                        className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
                        spotlightColor="rgba(168, 85, 247, 0.2)"
                    >
                        <ContactForm serviceName="Social Media Marketing" />
                    </SpotlightCard>
                </div>
            </section>
        </div>
    );
}
