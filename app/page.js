import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
      <Navbar />
      <Hero />
      <Services />
      <main className="flex flex-col gap-8 items-center sm:items-start pt-20 px-8 pb-20 sm:p-20 text-center sm:text-left">
        {/* Placeholder content to enable scrolling and test sticky navbar */}
      </main>
    </div>
  );
}
