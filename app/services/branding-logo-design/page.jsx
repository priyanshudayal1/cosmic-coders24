import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { Palette, Sparkles, Target, Layers, Award, RefreshCw } from "lucide-react";

export default function BrandingLogoDesign() {
    const features = [
        {
            icon: <Palette className="w-6 h-6 text-purple-500" />,
            title: "Custom Logo Design",
            description: "Unique, memorable logos that capture your brand essence and stand out in the market."
        },
        {
            icon: <Sparkles className="w-6 h-6 text-purple-500" />,
            title: "Brand Identity",
            description: "Complete brand identity systems including color palettes, typography, and visual guidelines."
        },
        {
            icon: <Target className="w-6 h-6 text-purple-500" />,
            title: "Brand Strategy",
            description: "Strategic positioning and messaging to differentiate your brand and connect with your audience."
        },
        {
            icon: <Layers className="w-6 h-6 text-purple-500" />,
            title: "Brand Guidelines",
            description: "Comprehensive brand books ensuring consistent application across all touchpoints."
        },
        {
            icon: <Award className="w-6 h-6 text-purple-500" />,
            title: "Professional Quality",
            description: "Industry-leading design standards with multiple concepts and unlimited revisions."
        },
        {
            icon: <RefreshCw className="w-6 h-6 text-purple-500" />,
            title: "Brand Refresh",
            description: "Modernize existing brands while maintaining recognition and equity."
        }
    ];

    return (
        <ServicePageLayout
            title="Branding & Logo Design"
            description="Create a powerful brand identity that resonates with your audience. From logos to complete brand systems, we craft visual identities that leave lasting impressions."
            features={features}
        />
    );
}
