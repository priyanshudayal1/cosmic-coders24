import Services from "@/components/Services/Services";

export default function ServicesPage() {
    // Services already has py-20 (80px) internally. As a standalone page it is the
    // first element under the fixed navbar, so add pt-12 (48px) to bring the total
    // top offset to 128px — matching the pt-32 clearance used across the other pages
    // and keeping the heading from hiding behind the navbar.
    return (
        <div className="pt-12">
            <Services />
        </div>
    );
}
