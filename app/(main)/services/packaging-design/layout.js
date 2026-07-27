import JsonLd from "@/components/shared/JsonLd";
import { serviceSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Product Packaging Design Services",
  description:
    "Creative product packaging and label design services that enhance shelf appeal, communicate your brand effectively, and attract more customers.",
  keywords: ["Packaging Design", "Product Label Design"],
  alternates: { canonical: "https://www.cosmiccoder24.com/services/packaging-design" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={serviceSchemas.packagingDesign} />
      {children}
    </>
  );
}
