import JsonLd from "@/components/shared/JsonLd";
import { serviceSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Branding & Logo Design Services for Businesses",
  description:
    "Create a memorable brand identity with custom logo design, brand strategy, visual identity, business stationery, and branding solutions tailored to your business goals.",
  keywords: ["Branding Services", "Logo Design", "Brand Identity"],
  alternates: { canonical: "https://www.cosmiccoder24.com/services/branding-logo-design" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={serviceSchemas.brandingLogoDesign} />
      {children}
    </>
  );
}
