import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-950 text-white relative">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pt-24 text-center sm:text-left">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Cosmic Coders
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Building the future of digital experiences with cutting-edge technology and design.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
            Start Building
          </button>
          <button className="px-8 py-3 bg-white/10 text-white border border-white/10 rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-sm">
            Learn More
          </button>
        </div>

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
