import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { Play } from "lucide-react";

export default function VideoEditingPortfolio() {
  const projects = [
    {
      title: "Product Launch Video",
      description:
        "Cinematic product reveal with motion graphics and dynamic transitions.",
      duration: "2:30",
      type: "Commercial",
      image: "🎬",
    },
    {
      title: "YouTube Channel Intro",
      description:
        "Branded intro sequence with custom animations and sound design.",
      duration: "0:15",
      type: "Branding",
      image: "▶️",
    },
    {
      title: "Social Media Ads",
      description:
        "High-converting short-form ads optimized for Instagram and TikTok.",
      duration: "0:30",
      type: "Advertising",
      image: "📱",
    },
    {
      title: "Corporate Training",
      description:
        "Educational video series with screen recordings and animations.",
      duration: "15:00",
      type: "Educational",
      image: "🎓",
    },
    {
      title: "Event Highlight Reel",
      description: "Conference recap video with interviews and b-roll footage.",
      duration: "5:00",
      type: "Event",
      image: "🎉",
    },
    {
      title: "Testimonial Compilation",
      description:
        "Customer testimonial video with professional color grading.",
      duration: "3:45",
      type: "Marketing",
      image: "💬",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
      <main className="flex-grow">
        <PageHeader
          title="Video Editing Portfolio"
          description="Watch our video editing work come to life. From commercials to social content, we create videos that engage, inspire, and convert."
        />

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <SpotlightCard key={index} className="h-full flex flex-col">
                  <div className="text-6xl mb-6">{project.image}</div>
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {project.type}
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <Play className="w-4 h-4" />
                    <span>Watch Video</span>
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
