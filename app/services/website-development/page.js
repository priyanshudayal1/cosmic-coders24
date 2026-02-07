import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { Code, Smartphone, Zap, Shield, Users, Rocket } from "lucide-react";

export default function WebsiteDevelopment() {
    const features = [
        {
            icon: <Code className="w-6 h-6 text-purple-500" />,
            title: "Custom Web Development",
            description: "Tailored websites built from scratch to match your unique business requirements and brand identity."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-purple-500" />,
            title: "Responsive Design",
            description: "Mobile-first approach ensuring your website looks stunning on all devices and screen sizes."
        },
        {
            icon: <Zap className="w-6 h-6 text-purple-500" />,
            title: "Lightning Fast Performance",
            description: "Optimized code and modern frameworks for blazing-fast load times and smooth user experience."
        },
        {
            icon: <Shield className="w-6 h-6 text-purple-500" />,
            title: "Security First",
            description: "Industry-standard security practices to protect your website and user data from threats."
        },
        {
            icon: <Users className="w-6 h-6 text-purple-500" />,
            title: "User-Centric Approach",
            description: "Intuitive interfaces designed with your users in mind for maximum engagement and conversion."
        },
        {
            icon: <Rocket className="w-6 h-6 text-purple-500" />,
            title: "Scalable Solutions",
            description: "Future-proof architecture that grows with your business needs and handles increasing traffic."
        }
    ];

    return (
        <ServicePageLayout
            title="Website Development"
            description="Transform your digital presence with cutting-edge web solutions. We craft beautiful, high-performance websites that drive results and engage your audience."
            features={features}
        />
    );
}
