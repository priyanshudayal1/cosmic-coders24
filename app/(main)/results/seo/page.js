"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";

const PDFModal = dynamic(() => import("@/components/ui/PDFModal"), {
  ssr: false,
});

import { prefetchPdf } from "@/lib/prefetchPdf";
import SpotlightCard from "@/components/ui/SpotlightCard";
import LeadForm from "@/components/Form/LeadForm";
import GlassButton from "@/components/ui/GlassButton";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { Particles } from "@/components/ui/particles";
import ImageCarousel from "@/components/ui/ImageCarousel";

const dashboardImages = [
  { src: "/assets/results/dashboard-1.png", alt: "SEO performance dashboard" },
  { src: "/assets/results/dashboard-2.png", alt: "SEO performance dashboard" },
  { src: "/assets/results/dashboard-3.png", alt: "SEO performance dashboard" },
  { src: "/assets/results/dashboard-4.png", alt: "SEO performance dashboard" },
  { src: "/assets/results/dashboard-5.png", alt: "SEO performance dashboard" },
  { src: "/assets/results/dashboard-6.png", alt: "SEO performance dashboard" },
];

export default function SEOResults() {

  const [activePdf, setActivePdf] = useState(null);

  const caseStudies = [
    {
      category: "GBP Growth",
      title: "Vastu & Astrology Expert, Jabalpur",
      description:
        "12 months of continuous GBP management delivering a #1 Google ranking in Jabalpur for core search terms and 900 Business Profile interactions.",
      image: "/assets/results/tile-1.png",
      spotlight: "rgba(59, 130, 246, 0.2)",
      pdfUrl: "/assets/results/astrologer-gmb-case-study.pdf",
      pdfTitle: "Astrologer GMB Case Study"
    },
    {
      category: "Local SEO Case Study",
      title: "Pet Product Shop, Jabalpur",
      description:
        "From a suspended listing to a Top 3 ranking in Jabalpur — 1 year of continuous GBP management, 1,000+ total profile reach, and 300+ calls generated.",
      image: "/assets/results/tile-2.png",
      spotlight: "rgba(88, 166, 255, 0.2)",
      pdfUrl: "/assets/results/petshop-gbp-case-study.pdf",
      pdfTitle: "Pet Product Shop GBP Case Study"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-(family-name:--font-geist-sans) bg-site-bg text-white">
      <main className="grow">
        <div className="relative">
          {/* ── Particles & Glow backdrop for PageHeader ── */}
          <motion.div
            className="absolute -top-10 -bottom-10 left-1/2 -translate-x-1/2 w-[220%] max-w-[1400px] pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(88,166,255,0.10) 0%, rgba(163,113,247,0.03) 50%, transparent 75%)",
              }}
            />
            <Particles
              className="absolute inset-0 w-full h-full"
              quantity={80}
              staticity={40}
              ease={60}
              size={0.5}
              color="#ffffff"
              vx={0}
              vy={-0.05}
            />
          </motion.div>
          <PageHeader
            eyebrow="Best SEO Company"
            title="Proven SEO Results That Drive Growth"
          />
        </div>

        <div className="flex justify-center">
          {/* Optional: Add a general CTA or summary stats here if needed */}
        </div>

        <section className="py-10 md:py-14">
          <ImageCarousel
            images={dashboardImages}
            duration="55s"
            fadeColor="var(--site-bg)"
            href="#case-studies"
          />
        </section>

        <section id="case-studies" className="py-20 px-4 scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Our Work"
              title="Case Studies"
              subtitle="Detailed performance breakdowns showing consistent growth in calls, views, and rankings."
            />

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <SpotlightCard
                  key={index}
                  className="p-0 h-full flex flex-col group bg-white/5 border-white/10"
                  spotlightColor={study.spotlight}
                >
                  <div className="w-full bg-white relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.pdfTitle}
                      loading="lazy"
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  <div className="p-8 flex flex-col grow">
                    <span className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                      {study.description}
                    </p>
                    <GlassButton
                      onMouseEnter={() => prefetchPdf(study.pdfUrl)}
                      onClick={() => setActivePdf({ url: study.pdfUrl, title: study.pdfTitle })}
                      className="w-full text-center text-sm cursor-pointer"
                    >
                      View Case Study PDF
                    </GlassButton>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            <PDFModal
              isOpen={!!activePdf}
              onClose={() => setActivePdf(null)}
              pdfUrl={activePdf?.url}
              title={activePdf?.title}
            />

            {/* Footer Section with LeadForm */}
            <div className="max-w-4xl mx-auto relative">
              {/* ── Particles & Glow backdrop for CTA section ── */}
              <motion.div
                className="absolute -top-10 -bottom-10 left-1/2 -translate-x-1/2 w-[220%] max-w-[1400px] pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(88,166,255,0.10) 0%, rgba(163,113,247,0.03) 50%, transparent 75%)",
                  }}
                />
                <Particles
                  className="absolute inset-0 w-full h-full"
                  quantity={80}
                  staticity={40}
                  ease={60}
                  size={0.5}
                  color="#ffffff"
                  vx={0}
                  vy={-0.05}
                />
              </motion.div>

              <Eyebrow text="Start Your Growth Journey" />
              <div className="text-center mb-12 relative z-10">
                <p className="text-xl md:text-2xl font-medium text-gray-300 italic leading-relaxed">
                  &quot;From improved search rankings to increased conversions, the results exceeded our expectations and delivered lasting business growth.&quot;
                </p>
              </div>


              <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-2xl font-bold mb-8 text-center relative z-10">
                  Contact Us
                </h2>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
