import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { TrendingUp, Heart, Eye } from "lucide-react";

export default function SocialMediaMarketingPortfolio() {
  const campaigns = [
    {
      title: "Fashion Brand Launch",
      description:
        "Instagram campaign that grew followers from 0 to 50K in 3 months with viral reels.",
      metrics: { engagement: "12.5%", reach: "2.3M", followers: "+50K" },
      platform: "Instagram",
      image: "👗",
    },
    {
      title: "Restaurant Promotion",
      description:
        "Multi-platform campaign driving 300% increase in reservations and foot traffic.",
      metrics: { engagement: "8.2%", reach: "850K", conversions: "+300%" },
      platform: "Facebook & Instagram",
      image: "🍕",
    },
    {
      title: "Tech Product Launch",
      description:
        "LinkedIn B2B campaign generating 500+ qualified leads for SaaS product.",
      metrics: { engagement: "15.3%", reach: "1.2M", leads: "500+" },
      platform: "LinkedIn",
      image: "💻",
    },
    {
      title: "Fitness Influencer",
      description:
        "TikTok growth strategy achieving 100K followers and brand partnerships.",
      metrics: { engagement: "18.7%", reach: "5M", followers: "+100K" },
      platform: "TikTok",
      image: "💪",
    },
    {
      title: "E-Commerce Brand",
      description:
        "Pinterest strategy driving 200% increase in website traffic and sales.",
      metrics: { engagement: "9.8%", reach: "1.5M", traffic: "+200%" },
      platform: "Pinterest",
      image: "🛍️",
    },
    {
      title: "Local Business",
      description:
        "Community-focused campaign building loyal customer base and reviews.",
      metrics: { engagement: "14.2%", reach: "450K", reviews: "250+" },
      platform: "Google & Facebook",
      image: "🏪",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
      <main className="flex-grow">
        <PageHeader
          title="Social Media Marketing Portfolio"
          description="See how we've helped brands grow their social presence, engage audiences, and drive measurable results across all major platforms."
        />

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaigns.map((campaign, index) => (
                <SpotlightCard key={index} className="h-full flex flex-col">
                  <div className="text-6xl mb-6">{campaign.image}</div>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {campaign.platform}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{campaign.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">
                    {campaign.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-bold">
                        {campaign.metrics.engagement}
                      </div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
                        <Eye className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-bold">
                        {campaign.metrics.reach}
                      </div>
                      <div className="text-xs text-gray-500">Reach</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-bold">
                        {campaign.metrics.followers ||
                          campaign.metrics.leads ||
                          campaign.metrics.conversions ||
                          campaign.metrics.traffic ||
                          campaign.metrics.reviews}
                      </div>
                      <div className="text-xs text-gray-500">Growth</div>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
