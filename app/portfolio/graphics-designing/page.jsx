import Navbar from "@/components/Navbar/Navbar";

export default function PortfolioGraphicsDesigning() {
    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />
            <main className="flex flex-col items-center justify-center flex-grow pt-20 px-8">
                <h1 className="text-4xl font-bold mb-8">Graphics Designing Portfolio</h1>
                <p className="text-gray-400 max-w-2xl text-center">
                    A showcase of our creative graphic design work.
                </p>
            </main>
        </div>
    );
}
