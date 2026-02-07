import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
      <Navbar />
      <Hero />
      <main className="flex flex-col gap-8 items-center sm:items-start pt-20 px-8 pb-20 sm:p-20 text-center sm:text-left">
        {/* Placeholder content to enable scrolling and test sticky navbar */}

        <div className="mt-20 space-y-20 w-full max-w-4xl text-left">
          {[1, 2, 3].map((i) => (
            <section key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Section {i}</h2>
              <p className="text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
