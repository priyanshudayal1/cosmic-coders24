import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { Search, TrendingUp, Target, MapPin, Award, BarChart3 } from "lucide-react";

export default function SEOResults() {
    const results = [
        {
            client: "E-Commerce Store",
            icon: <Search className="w-8 h-8 text-purple-500" />,
            metric: "+380%",
            description: "Increase in organic traffic",
            timeframe: "12 months"
        },
        {
            client: "Law Firm",
            icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
            metric: "#1",
            description: "Rankings for 45+ target keywords",
            timeframe: "8 months"
        },
        {
            client: "SaaS Platform",
            icon: <Target className="w-8 h-8 text-purple-500" />,
            metric: "250%",
            description: "Growth in qualified leads",
            timeframe: "6 months"
        },
        {
            client: "Local Service Business",
            icon: <MapPin className="w-8 h-8 text-purple-500" />,
            metric: "3x",
            description: "Increase in Google Maps visibility",
            timeframe: "4 months"
        },
        {
            client: "Healthcare Provider",
            icon: <Award className="w-8 h-8 text-purple-500" />,
            metric: "DA 65",
            description: "Domain authority improvement from DA 28",
            timeframe: "18 months"
        },
        {
            client: "Online Education",
            icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
            metric: "$500K+",
            description: "Revenue from organic search",
            timeframe: "12 months"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />

            <main className="flex-grow">
                <PageHeader
                    title="SEO Results"
                    description="Proven search engine optimization success stories. Our data-driven SEO strategies consistently deliver top rankings and sustainable organic growth."
                />

                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Stats Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                    1,200+
                                </div>
                                <div className="text-gray-400">Keywords Ranked #1</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                    5.2M+
                                </div>
                                <div className="text-gray-400">Monthly Organic Visits</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                    98%
                                </div>
                                <div className="text-gray-400">Client Retention Rate</div>
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
