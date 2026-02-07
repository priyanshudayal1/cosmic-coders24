import Navbar from "@/components/Navbar/Navbar";

export default function PortfolioWebsiteDevelopment() {
    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />
            <main className="flex flex-col items-center justify-center flex-grow pt-20 px-8">
                <h1 className="text-4xl font-bold mb-8">Website & Software Development Portfolio</h1>
                <p className="text-gray-400 max-w-2xl text-center">
                    Check out our latest website and software development projects.
                </p>
            </main>
        </div>
    );
}
