import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { Image, Package, Printer, Layers, Sparkles, CheckCircle } from "lucide-react";

export default function GraphicsPackagingDesign() {
    const features = [
        {
            icon: <Image className="w-6 h-6 text-purple-500" />,
            title: "Graphics Design",
            description: "Eye-catching graphics for social media, marketing materials, presentations, and digital platforms."
        },
        {
            icon: <Package className="w-6 h-6 text-purple-500" />,
            title: "Packaging Design",
            description: "Stunning product packaging that stands out on shelves and creates memorable unboxing experiences."
        },
        {
            icon: <Printer className="w-6 h-6 text-purple-500" />,
            title: "Print-Ready Files",
            description: "Professional print preparation with proper color profiles, bleeds, and specifications."
        },
        {
            icon: <Layers className="w-6 h-6 text-purple-500" />,
            title: "Multi-Format Delivery",
            description: "Designs delivered in all necessary formats for both digital and print applications."
        },
        {
            icon: <Sparkles className="w-6 h-6 text-purple-500" />,
            title: "Creative Concepts",
            description: "Innovative design solutions that align with your brand and captivate your target audience."
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
            title: "Quality Assurance",
            description: "Rigorous quality checks ensuring pixel-perfect designs ready for production."
        }
    ];

    return (
        <ServicePageLayout
            title="Graphics & Packaging Design"
            description="Elevate your visual communication with stunning graphics and packaging. We create designs that capture attention, communicate value, and drive sales."
            features={features}
        />
    );
}
