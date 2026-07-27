import JsonLd from "@/components/shared/JsonLd";
import { serviceSchemas } from "@/lib/schemas";

export const metadata = {
  title: "SEO Services & Local SEO Solutions for Businesses",
  description:
    "Increase your Google rankings with our professional SEO services. We provide on-page SEO, technical SEO, local SEO, content optimization, and link-building strategies that drive long-term organic growth.",
  keywords: ["SEO Services", "Local SEO", "Search Engine Optimization"],
  alternates: { canonical: "https://www.cosmiccoder24.com/services/seo" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={serviceSchemas.seoServices} />
      {children}
    </>
  );
}
