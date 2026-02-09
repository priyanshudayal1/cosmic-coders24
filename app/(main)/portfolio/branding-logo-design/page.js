import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { Palette, Package } from "lucide-react";

export default function BrandingLogoDesignPortfolio() {
  const projects = [
    {
      title: "Tech Startup Branding",
      description:
        "Complete brand identity including logo, color system, and brand guidelines.",
      deliverables: ["Logo Design", "Brand Guidelines", "Business Cards"],
      image: "🚀",
    },
    {
      title: "Restaurant Rebrand",
      description: "Modern logo redesign with menu design and signage system.",
      deliverables: ["Logo Redesign", "Menu Design", "Signage"],
      image: "🍽️",
    },
    {
      title: "E-Commerce Packaging",
      description:
        "Sustainable packaging design with unboxing experience focus.",
      deliverables: ["Box Design", "Tissue Paper", "Stickers"],
      image: "📦",
    },
    {
      title: "Fitness Brand Identity",
      description:
        "Athletic brand with bold typography and energetic color palette.",
      deliverables: ["Logo", "Brand Book", "Apparel Mockups"],
      image: "💪",
    },
    {
      title: "Luxury Product Packaging",
      description: "Premium packaging with foil stamping and embossed details.",
      deliverables: ["Package Design", "Label Design", "Gift Box"],
      image: "💎",
    },
    {
      title: "Coffee Brand",
      description: "Artisanal coffee brand with bag design and loyalty card.",
      deliverables: ["Logo", "Bag Design", "Loyalty Card"],
      image: "☕",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
      <main className="flex-grow">
        <PageHeader
          title="Branding & Logo Design Portfolio"
          description="Explore our brand identity and packaging design work. We create memorable brands that resonate with audiences and stand the test of time."
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
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-500 font-semibold">
                      Deliverables:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <Palette className="w-4 h-4" />
                    <span>View Brand</span>
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
