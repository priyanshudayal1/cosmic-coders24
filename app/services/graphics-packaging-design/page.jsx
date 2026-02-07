import Navbar from "@/components/Navbar/Navbar";

export default function GraphicsPackagingDesign() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow pt-20 px-8">
        <h1 className="text-4xl font-bold mb-8">Graphics Designing & Packaging Design</h1>
        <p className="text-gray-400 max-w-2xl text-center">
          Stunning graphics and packaging designs that captivate your audience.
        </p>
      </main>
    </div>
  );
}
