import JsonLd from "@/components/shared/JsonLd";
import { portfolioSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Branding & Logo Design Portfolio",
  description:
    "Explore our branding portfolio showcasing logo design, brand identity, visual identity systems, stationery design, and complete branding solutions.",
  keywords: ["Branding Portfolio"],
  alternates: { canonical: "https://www.cosmiccoder24.com/portfolio/branding-logo-design" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={portfolioSchemas.brandingLogoDesign} />
      {children}
    </>
  );
}
