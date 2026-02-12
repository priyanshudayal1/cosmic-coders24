import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import LeadForm from "@/components/Form/LeadForm";
import GlassButton from "@/components/ui/GlassButton";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { TrendingUp, BarChart3, LineChart, MapPin, Store } from "lucide-react";

export default function SEOResults() {
  const websiteSeoStudies = [
    {
      category: "Tech Innovations",
      title: "120% Increase",
      description:
        "Organic traffic growth achieved in 6 months through technical SEO and content optimization.",
      Icon: TrendingUp,
      gradient: "from-blue-500/20 to-cyan-500/20",
      spotlight: "rgba(59, 130, 246, 0.2)",
    },
    {
      category: "Retail Giants",
      title: "2x Conversions",
      description:
        "Doubled conversion rates with targeted keyword strategy and on-page optimization.",
      Icon: BarChart3,
      gradient: "from-purple-500/20 to-pink-500/20",
      spotlight: "rgba(168, 85, 247, 0.2)",
    },
  ];

  const localSeoStudies = [
    {
      category: "Local Beverages",
      title: "300% Increase",
      description: "In map views & calls in 3 months.",
      Icon: MapPin,
      gradient: "from-amber-500/20 to-orange-500/20",
      spotlight: "rgba(245, 158, 11, 0.2)",
    },
    {
      category: "City Grocer",
      title: "Local Engagement",
      description: "Significant rise in local customer engagement.",
      Icon: Store,
      gradient: "from-green-500/20 to-emerald-500/20",
      spotlight: "rgba(16, 185, 129, 0.2)",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-(family-name:--font-geist-sans) bg-[#0F061A] text-white">
      <main className="grow">
        <PageHeader
          eyebrow="SEO Results"
          title="Proven SEO Results That Drive Growth"
          description="See how we've helped brands improve rankings, traffic, and leads through Website SEO & Local GMB."
        />

        <div className="flex justify-center">
          <GlassButton className="px-8 py-4 text-lg bg-white/10 hover:bg-white/20 border-white/10 mb-20">
            View Full SEO Case Studies
          </GlassButton>
        </div>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Website SEO Results"
              title="Improved rankings, traffic, and organic visibility"
              subtitle="Long-term SEO growth with improved keyword rankings, organic traffic, and conversions."
            />

            {/* Website SEO Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-5xl mx-auto">
              {websiteSeoStudies.map((study, index) => (
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
                      href="#"
                      className="w-full text-center text-sm"
                    >
                      View Case Study PDF
                    </GlassButton>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            <SectionHeading
              eyebrow="Local SEO & GMB Results"
              title="Growth in calls, directions, and local reach with GMB optimization"
              subtitle="Helping businesses dominate local search and Google Maps visibility."
            />

            {/* Local SEO Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
              {localSeoStudies.map((study, index) => (
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
                      href="#"
                      className="w-full text-center text-sm"
                    >
                      View Case Study PDF
                    </GlassButton>
                  </div>
                </SpotlightCard>
              ))}
            </div>

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
