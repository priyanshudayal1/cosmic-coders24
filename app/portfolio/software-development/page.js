import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { ExternalLink } from "lucide-react";

export default function SoftwareDevelopmentPortfolio() {
    const projects = [
        {
            title: "Inventory Management System",
            description: "Enterprise-grade inventory tracking with barcode scanning and automated reordering.",
            tech: ["Python", "Django", "PostgreSQL", "Redis"],
            image: "📦"
        },
        {
            title: "CRM Platform",
            description: "Customer relationship management with sales pipeline and email automation.",
            tech: ["Java", "Spring Boot", "MySQL", "React"],
            image: "👥"
        },
        {
            title: "Financial Analytics Tool",
            description: "Advanced financial modeling and forecasting software for investment firms.",
            tech: ["Python", "Pandas", "NumPy", "Flask"],
            image: "💰"
        },
        {
            title: "Healthcare Management",
            description: "Patient management system with appointment scheduling and medical records.",
            tech: ["C#", ".NET", "SQL Server", "Angular"],
            image: "🏥"
        },
        {
            title: "Project Management Suite",
            description: "Collaborative project tracking with Gantt charts and resource allocation.",
            tech: ["Node.js", "Express", "MongoDB", "Vue.js"],
            image: "📋"
        },
        {
            title: "IoT Monitoring Platform",
            description: "Real-time device monitoring and control for smart manufacturing.",
            tech: ["Python", "MQTT", "InfluxDB", "Grafana"],
            image: "🔌"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />

            <main className="flex-grow">
                <PageHeader
                    title="Software Development Portfolio"
                    description="Discover our custom software solutions that streamline operations and drive business growth. From enterprise applications to specialized tools."
                />

                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <SpotlightCard key={index} className="h-full flex flex-col">
                                    <div className="text-6xl mb-6">{project.image}</div>
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                                        <span>View Project</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
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
