"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Testimonials from "@/components/features/Testimonials";
import SpotlightCard from "@/components/SpotlightCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function AboutContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to submit query");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0F061A] text-white overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 bg-[#0F061A] pointer-events-none" />

      {/* Spotlights/Beams - Static Flares */}
      <div className="fixed bottom-0 left-[-20%] w-[60%] h-[60%] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="fixed bottom-0 right-[-20%] w-[60%] h-[60%] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center space-y-20">
        {/* --- Who We Are Section --- */}
        <motion.section
          className="text-center max-w-4xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeIn}
        >
          <SectionHeading
            eyebrow="About Us"
            title="Who We Are"
            subtitle="We are a dedicated team of creative professionals committed to building brands that stand out in the digital space. Our expertise spans web development, marketing, and design, ensuring your brand reaches its full potential."
          />
        </motion.section>

        {/* --- Testimonials Section (Structure Ref) --- */}
        <motion.section
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeIn}
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients Say"
            subtitle="Real feedback from teams we have helped grow, launch, and scale."
          />

          <Testimonials />
        </motion.section>

        {/* --- Contact Contact Section --- */}
        <motion.section
          className="w-full max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeIn}
        >
          <SectionHeading
            eyebrow="Contact"
            title="Start a Project"
            subtitle="Tell us what you are building, and we will respond within one business day."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <SpotlightCard
              className="space-y-8 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full"
              spotlightColor="rgba(168, 85, 247, 0.2)"
            >
              <div>
                <p className="text-lg font-semibold text-white mb-2">
                  Get in Touch
                </p>
                <p className="text-gray-400">
                  Have a project in mind? We&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300 group">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <span>contact@cosmiccoder24.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 group">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <span>+91 9713990593</span>
                </div>
                <div className="flex items-start space-x-4 text-gray-300 group">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <span>
                    I 04 Guru Arjan Dev Colony, GaurIghat, Jabalpur (M.P), India,
                    482008
                  </span>
                </div>
              </div>

              {/* Decorative Map Placeholder */}
              <div className="w-full h-48 bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=I%2004%20Guru%20Arjan%20Dev%20Colony%20GaurIghat%20Jabalpur%20India%20482008&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg) brightness(0.9)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                ></iframe>
              </div>
            </SpotlightCard>

            {/* Contact Form */}
            <SpotlightCard
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden"
              spotlightColor="rgba(168, 85, 247, 0.2)"
            >
              {/* Form Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />

              <p className="text-lg font-semibold text-white mb-6 text-center">
                General Inquiries & Support
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
                suppressHydrationWarning
              >
                <div className="space-y-2" suppressHydrationWarning>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300 ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2" suppressHydrationWarning>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300 ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2" suppressHydrationWarning>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-300 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-500 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="glass"
                  size="lg"
                  disabled={submitting}
                  suppressHydrationWarning
                  className="w-full rounded-full hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <LoadingSpinner size="sm" />
                      <span className="ml-2">Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span className="ml-1">Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </SpotlightCard>
          </div>
        </motion.section >
      </main >
    </div >
  );
}
