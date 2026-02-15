"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import PageHeader from "@/components/shared/PageHeader";

const PDFModal = dynamic(() => import("@/components/ui/PDFModal"), {
  ssr: false,
});

import { prefetchPdf } from "@/lib/prefetchPdf";
import SpotlightCard from "@/components/SpotlightCard";
import LeadForm from "@/components/Form/LeadForm";
import GlassButton from "@/components/ui/GlassButton";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { TrendingUp, BarChart3, LineChart, MapPin, Store } from "lucide-react";

export default function SEOResults() {

  const [activePdf, setActivePdf] = useState(null);

  const caseStudies = [
    {
      category: "GMB Growth",
      title: "PetSquare (Aug 2025)",
      description:
        "Achieved +144% increase in calls and +177% in profile views. Keyword rankings improved from position 45 to Top 10.",
      Icon: MapPin,
      gradient: "from-blue-500/20 to-cyan-500/20",
      spotlight: "rgba(59, 130, 246, 0.2)",
      pdfUrl: "/PET SQUARE-GMB REPORT (JANUARY - AUGUST).pdf",
      pdfTitle: "PetSquare GMB Report (Jan - Aug 2025)"
    },
    {
      category: "GMB Growth",
      title: "PetSquare (Oct 2025)",
      description:
        "6x growth in calls and +692% increase in visibility. Ranked Top 5 for 'pet store in jabalpur'.",
      Icon: TrendingUp,
      gradient: "from-purple-500/20 to-pink-500/20",
      spotlight: "rgba(168, 85, 247, 0.2)",
      pdfUrl: "/PET SQUARE-GMB REPORT (MAY - OCTOBER).pdf",
      pdfTitle: "PetSquare GMB Report (May - Oct 2025)"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-(family-name:--font-geist-sans) bg-[#0F061A] text-white">
      <main className="grow">
        <PageHeader
          eyebrow="SEO Results"
          title="Proven SEO Results That Drive Growth"
          description="See how we've helped PetSquare dominate local search with improved rankings, traffic, and leads through GMB Optimization."
        />

        <div className="flex justify-center">
          {/* Optional: Add a general CTA or summary stats here if needed */}
        </div>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="GMB Performance Reports"
              title="PetSquare Growth Journey"
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
                  <div
                    className={`h-48 w-full bg-linear-to-br ${study.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all duration-300">
                      <study.Icon className="w-16 h-16" />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-[#1A0B2E] to-transparent opacity-60" />
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
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xl md:text-2xl font-medium text-gray-300 italic leading-relaxed">
                  "Our organic traffic skyrocketed within months. The ROI from
                  SEO has been incredible."
                </p>
              </div>

              <Eyebrow text="Start Your Growth Journey" />

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
