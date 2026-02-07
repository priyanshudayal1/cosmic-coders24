import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Results from "@/components/Results/Results";
import SpotlightCard from "@/components/SpotlightCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Results />
      <main className="flex flex-col gap-8 items-center sm:items-start pt-20 px-8 pb-20 sm:p-20 text-center sm:text-left">
        {/* Placeholder content to enable scrolling and test sticky navbar */}
        <SpotlightCard
          className="w-full max-w-md mx-auto min-h-[200px] flex items-center justify-center p-8 text-center bg-white/5 border-white/10"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <p className="text-gray-300">Spotlight Card Demo in Main section</p>
        </SpotlightCard>
      </main>
    </div>
  );
}
