import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { Terminal, Database, Cloud, GitBranch, Cpu, Lock } from "lucide-react";

export default function SoftwareDevelopment() {
    const features = [
        {
            icon: <Terminal className="w-6 h-6 text-purple-500" />,
            title: "Custom Software Solutions",
            description: "Bespoke applications designed to solve your specific business challenges and streamline operations."
        },
        {
            icon: <Database className="w-6 h-6 text-purple-500" />,
            title: "Database Architecture",
            description: "Robust and scalable database design for efficient data management and retrieval."
        },
        {
            icon: <Cloud className="w-6 h-6 text-purple-500" />,
            title: "Cloud Integration",
            description: "Seamless cloud deployment and integration with AWS, Azure, and Google Cloud Platform."
        },
        {
            icon: <GitBranch className="w-6 h-6 text-purple-500" />,
            title: "Agile Development",
            description: "Iterative development process with continuous feedback and rapid deployment cycles."
        },
        {
            icon: <Cpu className="w-6 h-6 text-purple-500" />,
            title: "High Performance",
            description: "Optimized code and architecture for maximum efficiency and minimal resource usage."
        },
        {
            icon: <Lock className="w-6 h-6 text-purple-500" />,
            title: "Enterprise Security",
            description: "Advanced security measures and compliance with industry standards to protect your data."
        }
    ];

    return (
        <ServicePageLayout
            title="Software Development"
            description="Build powerful, scalable software solutions tailored to your business needs. From enterprise applications to custom tools, we deliver excellence."
            features={features}
        />
    );
}
