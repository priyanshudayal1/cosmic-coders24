"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Send, CheckCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import SpotlightCard from "../SpotlightCard";

const CareersSection = () => {
    const [file, setFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
            setFile(null);
            // Reset after a few seconds
            setTimeout(() => setSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <section className="w-full py-20 relative overflow-hidden" id="careers">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Pitch */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeading
                            eyebrow="Join Our Team"
                            title="Shape the Future with Us"
                            subtitle="We're always looking for passionate minds to help us build the next generation of digital experiences. If you love code, design, and innovation, we want to hear from you."
                        />

                        <div className="mt-8 flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                                    <CheckCircle className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Remote-First Culture</h4>
                                    <p className="text-gray-400 text-sm mt-1">Work from anywhere in the world. We value output over hours.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                                    <CheckCircle className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Continuous Growth</h4>
                                    <p className="text-gray-400 text-sm mt-1">Generous learning budget and mentorship opportunities to help you level up.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                                    <CheckCircle className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Competitive Compensation</h4>
                                    <p className="text-gray-400 text-sm mt-1">Salary, equity, and benefits that reflect your impact and expertise.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Application Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <SpotlightCard
                            className="bg-white/5 border-white/10 p-8 pt-10 rounded-3xl backdrop-blur-sm relative overflow-hidden"
                            spotlightColor="rgba(168, 85, 247, 0.2)"
                        >
                            {/* decorative glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full pointer-events-none" />

                            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Drop Your Resume</h3>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Resume / CV</label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            id="resume-upload"
                                            className="hidden"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <label
                                            htmlFor="resume-upload"
                                            className="flex items-center justify-center gap-2 w-full border border-dashed border-white/20 bg-black/20 hover:bg-white/5 hover:border-purple-500/50 rounded-xl p-8 cursor-pointer transition-all duration-300 group"
                                        >
                                            {file ? (
                                                <div className="flex items-center gap-2 text-purple-400">
                                                    <CheckCircle className="w-5 h-5" />
                                                    <span className="font-medium truncate max-w-[200px]">{file.name}</span>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center gap-2 text-gray-500 group-hover:text-gray-300">
                                                    <Upload className="w-6 h-6 mb-1" />
                                                    <span className="text-sm">Click to upload or drag and drop</span>
                                                    <span className="text-xs text-gray-600">PDF, DOC up to 10MB</span>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    variant="glass"
                                    size="lg"
                                    className="w-full mt-4 rounded-full hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                                >
                                    {submitted ? (
                                        <>
                                            <CheckCircle className="w-4 h-4" />
                                            <span>Application Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Submit Application</span>
                                            <Send className="w-4 h-4 ml-1" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CareersSection;
