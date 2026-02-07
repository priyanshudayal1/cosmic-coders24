import Navbar from "@/components/Navbar/Navbar";

export default function Blog() {
    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />
            <main className="flex flex-col items-center justify-center flex-grow pt-20 px-8">
                <h1 className="text-4xl font-bold mb-8">Blog</h1>
                <p className="text-gray-400 max-w-2xl text-center">
                    Read our latest insights and updates.
                </p>
            </main>
        </div>
    );
}
