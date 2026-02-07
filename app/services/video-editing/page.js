import ServicePageLayout from "@/components/Services/ServicePageLayout";
import { Video, Scissors, Wand2, Music, Sparkles, Zap } from "lucide-react";

export default function VideoEditing() {
    const features = [
        {
            icon: <Video className="w-6 h-6 text-purple-500" />,
            title: "Professional Editing",
            description: "Expert video editing with smooth transitions, color grading, and cinematic effects."
        },
        {
            icon: <Scissors className="w-6 h-6 text-purple-500" />,
            title: "Content Optimization",
            description: "Platform-specific editing for YouTube, Instagram, TikTok, and other social channels."
        },
        {
            icon: <Wand2 className="w-6 h-6 text-purple-500" />,
            title: "Motion Graphics",
            description: "Dynamic animations, lower thirds, and visual effects to enhance your videos."
        },
        {
            icon: <Music className="w-6 h-6 text-purple-500" />,
            title: "Audio Enhancement",
            description: "Professional audio mixing, sound design, and music integration for polished results."
        },
        {
            icon: <Sparkles className="w-6 h-6 text-purple-500" />,
            title: "Color Correction",
            description: "Advanced color grading to achieve the perfect look and maintain visual consistency."
        },
        {
            icon: <Zap className="w-6 h-6 text-purple-500" />,
            title: "Fast Turnaround",
            description: "Quick delivery without compromising quality, keeping your content schedule on track."
        }
    ];

    return (
        <ServicePageLayout
            title="Video Editing"
            description="Transform raw footage into compelling stories. Our professional video editing services bring your vision to life with cinematic quality and creative excellence."
            features={features}
        />
    );
}
