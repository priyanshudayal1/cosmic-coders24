import Image from "next/image";
import JsonLd from "@/components/shared/JsonLd";
import { organizationSchema } from "@/lib/schemas";
import HashScrollHandler from "@/components/ui/HashScrollHandler";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Results from "@/components/Results/Results";
import SpotlightCard from "@/components/ui/SpotlightCard";
import AboutTeaser from "@/components/About/AboutTeaser";
import TechStack from "@/components/features/TechStack";
import Testimonials from "@/components/features/Testimonials";
import CityCoverage from "@/components/features/CityCoverage";
import BlogSection from "@/components/Blog/BlogSection";
import CareersSection from "@/components/Careers/CareersSection";
import ContactSection from "@/components/Contact/ContactSection";

export const metadata = {
  title: "Best Website Development & Digital Marketing Company in Jabalpur",
  description:
    "Looking for the best website development and digital marketing company in Jabalpur? Cosmic Coder 24 offers website development, software development, SEO, branding, graphic design, and social media marketing to help businesses grow online.",
  keywords: [
    "Website Development Jabalpur",
    "SEO Company Jabalpur",
    "Software Development Jabalpur",
  ],
  alternates: { canonical: "https://www.cosmiccoder24.com/" },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-(family-name:--font-geist-sans) bg-site-bg text-white">
      <JsonLd data={organizationSchema} />
      <HashScrollHandler />
      <Hero />
      <Services />
      <Portfolio />
      <Results />
      <AboutTeaser />
      <TechStack />
      <Testimonials />
      <CityCoverage />
      <BlogSection />
      <CareersSection />
      <ContactSection />
    </div>
  );
}
