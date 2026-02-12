import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { ExternalLink, Code } from "lucide-react";

export default function WebsiteDevelopmentPortfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern online shopping experience with seamless checkout and inventory management.",
      tech: ["Next.js", "React", "Stripe", "MongoDB"],
      image: "🛒",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Analytics dashboard for business intelligence with real-time data visualization.",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "📊",
    },
    {
      title: "Corporate Website",
      description:
        "Professional corporate presence with CMS integration and multilingual support.",
      tech: ["Next.js", "Tailwind CSS", "Contentful"],
      image: "🏢",
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search and virtual tours.",
      tech: ["React", "Google Maps API", "Firebase"],
      image: "🏠",
    },
    {
      title: "Educational Platform",
      description:
        "Online learning management system with video streaming and progress tracking.",
      tech: ["Next.js", "AWS", "Stripe", "MySQL"],
      image: "📚",
    },
    {
      title: "Restaurant Booking",
      description:
        "Table reservation system with menu management and customer reviews.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "🍽️",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#0F061A] text-white">
      <main className="flex-grow">
        <PageHeader
          title="Website Development Portfolio"
          description="Explore our collection of stunning websites and web applications. Each project showcases our commitment to excellence, innovation, and user-centric design."
        />

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <SpotlightCard key={index} className="h-full flex flex-col">
                  <div className="text-6xl mb-6">{project.image}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
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
    </div>
  );
}
