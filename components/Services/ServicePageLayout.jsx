"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import GlassButton from "@/components/ui/GlassButton";

const ServicePageLayout = ({ title, description, features, children }) => {
    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />

            <main className="flex-grow">
                <PageHeader title={title} description={description} />

                {/* Custom Content Section */}
                {children && (
                    <section className="py-10 px-4 max-w-7xl mx-auto">
                        {children}
                    </section>
                )}

                {/* Features Section */}
                {features && features.length > 0 && (
                    <section className="py-20 px-4 relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-purple-900/5 pointer-events-none" />
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <SpotlightCard key={index} className="h-full">
                                        <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                                            {feature.icon || <div className="w-6 h-6 bg-purple-500 rounded-full" />}
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-20 px-4 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/20 to-black border border-white/10 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-purple-500/5 blur-3xl pointer-events-none" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Elevate Your Business?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                            Let's collaborate to build something extraordinary. Contact us today to discuss your project.
                        </p>
                        <div className="relative z-10">
                            <GlassButton href="/about-contact">Get Started Now</GlassButton>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ServicePageLayout;
