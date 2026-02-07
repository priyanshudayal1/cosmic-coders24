import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { Search, TrendingUp, FileText, Link2, MapPin, BarChart } from "lucide-react";

export default function SEO() {
    const features = [
        {
            icon: <Search className="w-6 h-6 text-purple-500" />,
            title: "Keyword Research",
            description: "In-depth keyword analysis to identify high-value opportunities and optimize your content strategy."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
            title: "On-Page Optimization",
            description: "Complete website optimization including meta tags, headers, content, and technical SEO elements."
        },
        {
            icon: <FileText className="w-6 h-6 text-purple-500" />,
            title: "Content Strategy",
            description: "SEO-optimized content creation that ranks well and provides value to your audience."
        },
        {
            icon: <Link2 className="w-6 h-6 text-purple-500" />,
            title: "Link Building",
            description: "High-quality backlink acquisition to boost domain authority and search rankings."
        },
        {
            icon: <MapPin className="w-6 h-6 text-purple-500" />,
            title: "Local SEO & GMB",
            description: "Google My Business optimization and local SEO strategies to dominate local search results."
        },
        {
            icon: <BarChart className="w-6 h-6 text-purple-500" />,
            title: "Performance Tracking",
            description: "Comprehensive analytics and reporting to measure rankings, traffic, and conversions."
        }
    ];

    return (
        <ServicePageLayout
            title="SEO & Local GMB Optimization"
            description="Dominate search engine results and attract more customers. Our proven SEO strategies increase visibility, drive organic traffic, and boost your online presence."
            features={features}
        />
    );
}
