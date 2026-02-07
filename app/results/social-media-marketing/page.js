import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { TrendingUp, Users, Target, DollarSign, Award, BarChart3 } from "lucide-react";

export default function SocialMediaMarketingResults() {
    const results = [
        {
            client: "Fashion E-Commerce",
            icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
            metric: "+425%",
            description: "Increase in Instagram engagement rate",
            timeframe: "6 months"
        },
        {
            client: "Local Restaurant Chain",
            icon: <Users className="w-8 h-8 text-purple-500" />,
            metric: "150K+",
            description: "New followers across all platforms",
            timeframe: "12 months"
        },
        {
            client: "Tech Startup",
            icon: <Target className="w-8 h-8 text-purple-500" />,
            metric: "8.2x",
            description: "Return on ad spend (ROAS)",
            timeframe: "3 months"
        },
        {
            client: "Fitness Brand",
            icon: <DollarSign className="w-8 h-8 text-purple-500" />,
            metric: "$250K+",
            description: "Revenue generated from social campaigns",
            timeframe: "9 months"
        },
        {
            client: "Beauty Products",
            icon: <Award className="w-8 h-8 text-purple-500" />,
            metric: "12M+",
            description: "Impressions on viral TikTok campaign",
            timeframe: "2 months"
        },
        {
            client: "B2B SaaS Company",
            icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
            metric: "500+",
            description: "Qualified leads from LinkedIn",
            timeframe: "6 months"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />

            <main className="flex-grow">
                <PageHeader
                    title="Social Media Marketing Results"
                    description="Real numbers, real impact. See how our social media strategies have transformed brands and delivered measurable ROI for our clients."
                />

                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Stats Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                    50+
                                </div>
                                <div className="text-gray-400">Successful Campaigns</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                    2M+
                                </div>
                                <div className="text-gray-400">Followers Gained</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                    15.8%
                                </div>
                                <div className="text-gray-400">Avg. Engagement Rate</div>
                            </div>
                        </div>

                        {/* Case Studies */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {results.map((result, index) => (
                                <SpotlightCard key={index} className="h-full">
                                    <div className="mb-6">{result.icon}</div>
                                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 mb-3">
                                        {result.metric}
                                    </div>
                                    <p className="text-lg mb-2">{result.description}</p>
                                    <div className="text-sm text-gray-500 mb-4">in {result.timeframe}</div>
                                    <div className="pt-4 border-t border-white/10">
                                        <div className="text-sm text-purple-400 font-semibold">{result.client}</div>
                                    </div>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
