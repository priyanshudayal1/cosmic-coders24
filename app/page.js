import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Results from "@/components/Results/Results";
import SpotlightCard from "@/components/SpotlightCard";
import AboutTeaser from "@/components/About/AboutTeaser";
import Testimonials from "@/components/features/Testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogSection from "@/components/Blog/BlogSection";
import CareersSection from "@/components/Careers/CareersSection";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
      <Hero />
      <Services />
      <Portfolio />
      <Results />
      <AboutTeaser />
      <div className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Testimonials"
          title="Client Stories"
          subtitle="Hear from those who have experienced our services."
        />
        <Testimonials />
      </div>
      <BlogSection />
      <CareersSection />
      <ContactSection />
    </div>
  );
}
