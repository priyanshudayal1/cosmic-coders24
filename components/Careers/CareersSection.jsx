"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ResumeForm from "./ResumeForm";

const CareersSection = () => {

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
                    <ResumeForm showRoleDropdown={true} />
                </div>
            </div>
        </section>
    );
};

export default CareersSection;
