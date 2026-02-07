import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/shared/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Careers() {
    const positions = [
        {
            title: "Senior Full-Stack Developer",
            department: "Engineering",
            location: "Remote / Hybrid",
            type: "Full-time",
            description: "Join our development team to build cutting-edge web applications using Next.js, React, and Node.js.",
            requirements: ["5+ years experience", "React/Next.js expertise", "Strong problem-solving skills"]
        },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            description: "Create beautiful, user-centric designs for web and mobile applications that delight our clients.",
            requirements: ["3+ years experience", "Figma proficiency", "Portfolio required"]
        },
        {
            title: "Social Media Manager",
            department: "Marketing",
            location: "On-site",
            type: "Full-time",
            description: "Manage social media campaigns across multiple platforms and drive engagement for our clients.",
            requirements: ["2+ years experience", "Platform expertise", "Creative mindset"]
        },
        {
            title: "SEO Specialist",
            department: "Marketing",
            location: "Remote / Hybrid",
            type: "Full-time",
            description: "Develop and execute SEO strategies to improve organic rankings and drive qualified traffic.",
            requirements: ["3+ years experience", "Technical SEO knowledge", "Analytics expertise"]
        },
        {
            title: "Video Editor",
            department: "Creative",
            location: "Remote",
            type: "Contract",
            description: "Edit compelling video content for social media, commercials, and marketing campaigns.",
            requirements: ["2+ years experience", "Adobe Premiere/After Effects", "Creative portfolio"]
        },
        {
            title: "Brand Strategist",
            department: "Strategy",
            location: "Hybrid",
            type: "Full-time",
            description: "Develop comprehensive brand strategies and positioning for clients across various industries.",
            requirements: ["4+ years experience", "Strategic thinking", "Client management"]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />

            <main className="flex-grow">
                <PageHeader
                    title="Join Our Team"
                    description="Be part of a creative, innovative team that's shaping the future of digital experiences. We're always looking for talented individuals who are passionate about their craft."
                />

                {/* Why Join Us Section */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Cosmic Coders?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="text-center">
                                <div className="text-4xl mb-4">🚀</div>
                                <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
                                <p className="text-gray-400">Continuous learning and career advancement in a fast-paced environment.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🌍</div>
                                <h3 className="text-xl font-bold mb-2">Remote-First Culture</h3>
                                <p className="text-gray-400">Work from anywhere with flexible hours and work-life balance.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">💡</div>
                                <h3 className="text-xl font-bold mb-2">Innovative Projects</h3>
                                <p className="text-gray-400">Work on cutting-edge projects with top-tier clients and technologies.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
                        <div className="space-y-6">
                            {positions.map((position, index) => (
                                <SpotlightCard key={index}>
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-2xl font-bold">{position.title}</h3>
                                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                                                    {position.department}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 mb-4">{position.description}</p>

                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{position.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{position.type}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span>{position.requirements[0]}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {position.requirements.map((req, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs">
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="lg:shrink-0">
                                            <Link
                                                href="#"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-semibold"
                                            >
                                                <span>Apply Now</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-900/20 to-black border border-white/10 rounded-3xl p-12">
                        <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
                        <p className="text-gray-400 mb-8">
                            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <Link
                            href="/about-contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-colors font-semibold"
                        >
                            <span>Contact Us</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
