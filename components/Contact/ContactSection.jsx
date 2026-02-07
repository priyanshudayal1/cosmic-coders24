"use client";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import SpotlightCard from "../SpotlightCard";

const ContactSection = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <section className="w-full py-20 relative overflow-hidden" id="contact">
            {/* Background Gradients */}
            <div className="absolute center w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 left-1/2" />

            <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
                <SectionHeading
                    eyebrow="Contact Us"
                    title="Let's Work Together"
                    subtitle="Ready to start your next project? Fill out the form below and we will get back to you shortly."
                />

                <SpotlightCard
                    className="bg-white/5 border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden"
                    spotlightColor="rgba(168, 85, 247, 0.2)"
                >
                    {/* simple form layout */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Tell us about your project..."
                                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                                required
                            />
                        </div>

                        <div className="flex justify-center mt-4">
                            <Button
                                type="submit"
                                variant="glass"
                                size="lg"
                                className="w-full md:w-auto min-w-[200px] rounded-full hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                            >
                                {submitted ? (
                                    <>
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Message Sent!</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4 ml-1" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </SpotlightCard>
            </div>
        </section>
    );
};

export default ContactSection;
