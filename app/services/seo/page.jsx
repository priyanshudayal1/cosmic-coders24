import Navbar from "@/components/Navbar/Navbar";

export default function SEO() {
    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />
            <main className="flex flex-col items-center justify-center flex-grow pt-20 px-8">
                <h1 className="text-4xl font-bold mb-8">SEO (Website SEO + Local GMB)</h1>
                <p className="text-gray-400 max-w-2xl text-center">
                    Improve your search engine rankings and local visibility.
                </p>
            </main>
        </div>
    );
}
