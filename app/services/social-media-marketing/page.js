import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { Share2, TrendingUp, Target, MessageCircle, BarChart3, Calendar } from "lucide-react";

export default function SocialMediaMarketing() {
    const features = [
        {
            icon: <Share2 className="w-6 h-6 text-purple-500" />,
            title: "Multi-Platform Management",
            description: "Comprehensive social media management across Facebook, Instagram, Twitter, LinkedIn, and more."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
            title: "Growth Strategies",
            description: "Data-driven strategies to increase followers, engagement, and brand awareness organically."
        },
        {
            icon: <Target className="w-6 h-6 text-purple-500" />,
            title: "Targeted Campaigns",
            description: "Precision-targeted ad campaigns to reach your ideal audience and maximize ROI."
        },
        {
            icon: <MessageCircle className="w-6 h-6 text-purple-500" />,
            title: "Community Engagement",
            description: "Active community management to build relationships and foster brand loyalty."
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
            title: "Analytics & Reporting",
            description: "Detailed performance metrics and insights to track progress and optimize campaigns."
        },
        {
            icon: <Calendar className="w-6 h-6 text-purple-500" />,
            title: "Content Planning",
            description: "Strategic content calendars with consistent posting schedules for maximum impact."
        }
    ];

    return (
        <ServicePageLayout
            title="Social Media Marketing"
            description="Amplify your brand's voice across social platforms. We create engaging content and strategic campaigns that connect with your audience and drive real results."
            features={features}
        />
    );
}
