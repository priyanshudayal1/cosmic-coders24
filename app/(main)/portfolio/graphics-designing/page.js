import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { Palette } from "lucide-react";

export default function GraphicsDesigningPortfolio() {
  const projects = [
    {
      title: "Social Media Templates",
      description:
        "Cohesive Instagram feed templates with consistent branding and visual appeal.",
      category: "Social Media",
      image: "📱",
    },
    {
      title: "Marketing Collateral",
      description:
        "Brochures, flyers, and promotional materials for product launches.",
      category: "Print Design",
      image: "📄",
    },
    {
      title: "Infographics",
      description:
        "Data visualization and educational infographics for content marketing.",
      category: "Information Design",
      image: "📊",
    },
    {
      title: "Event Graphics",
      description:
        "Conference banners, booth designs, and event promotional materials.",
      category: "Event Design",
      image: "🎪",
    },
    {
      title: "Email Templates",
      description:
        "Responsive email newsletter designs with high conversion rates.",
      category: "Digital Marketing",
      image: "✉️",
    },
    {
      title: "Presentation Decks",
      description:
        "Professional pitch decks and corporate presentation templates.",
      category: "Business",
      image: "📽️",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#0F061A] text-white">
      <main className="flex-grow">
        <PageHeader
          title="Graphics Designing Portfolio"
          description="Browse our creative graphics work spanning social media, marketing materials, and digital design. Each piece crafted to captivate and convert."
        />

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <SpotlightCard key={index} className="h-full flex flex-col">
                  <div className="text-6xl mb-6">{project.image}</div>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <Palette className="w-4 h-4" />
                    <span>View Designs</span>
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
