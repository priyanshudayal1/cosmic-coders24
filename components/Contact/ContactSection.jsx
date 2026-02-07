"use client";

import React from "react";
import SectionHeading from "../ui/SectionHeading";
import SpotlightCard from "../SpotlightCard";
import LeadForm from "../Form/LeadForm";

const ContactSection = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden" id="contact">
      {/* Background Gradients */}
      <div className="absolute center w-200 h-200 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 left-1/2" />

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
          <LeadForm />
        </SpotlightCard>
      </div>
    </section>
  );
};

export default ContactSection;
