import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import LeadForm from "@/components/Form/LeadForm";
import GlassButton from "@/components/ui/GlassButton";
import { Users, TrendingUp, Instagram } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";

export default function SocialMediaMarketingResults() {
  const caseStudies = [
    {
      category: "SOCIAL GROWTH",
      title: "+15,000 Followers",
      description:
        "Achieved in just 4 months through viral content strategies.",
      Icon: Instagram,
      gradient: "from-pink-500/20 to-purple-500/20",
      spotlight: "rgba(236, 72, 153, 0.2)",
    },
    {
      category: "BRAND AWARENESS",
      title: "2.5M Reach",
      description: "Explosive visibility across platforms in 90 days.",
      Icon: Users,
      gradient: "from-blue-500/20 to-cyan-500/20",
      spotlight: "rgba(59, 130, 246, 0.2)",
    },
    {
      category: "ENGAGEMENT",
      title: "+20% Engagement",
      description: "Consistent community interaction increase in 60 days.",
      Icon: TrendingUp,
      gradient: "from-green-500/20 to-emerald-500/20",
      spotlight: "rgba(16, 185, 129, 0.2)",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#0F061A] text-white">
      <main className="flex-grow">
        <PageHeader
          eyebrow="Social Media Marketing Results"
          title="Proven Social Media Growth for Our Clients"
          description="From followers to engagement to conversions, see the real results we've delivered."
        />

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
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
                    <div className="absolute inset-0 bg-linear-to-t from-[#0F061A] to-transparent opacity-60" />
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
                      View Case Study
                    </GlassButton>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Footer Section with LeadForm */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xl md:text-2xl font-medium text-gray-300 italic leading-relaxed">
                  "CosmicCoder24 grew our Instagram page from 3K to 20K in just
                  6 months — highly recommend!"
                </p>
              </div>

              <Eyebrow text="Start Your Growth Journey" />

              <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden mt-15">
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
