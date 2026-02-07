import Navbar from "@/components/Navbar/Navbar";

export default function Services() {
    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#030014] text-white">
            <Navbar />
            <main className="flex flex-col items-center justify-center flex-grow pt-20 px-8">
                <h1 className="text-4xl font-bold mb-8">Our Services</h1>
                <p className="text-gray-400 max-w-2xl text-center">
                    Explore the wide range of services we offer to help your business grow.
                </p>
            </main>
        </div>
    );
}
