import JsonLd from "@/components/shared/JsonLd";
import { serviceSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Creative Graphic Design Services for Businesses",
  description:
    "Professional graphic design services for brochures, social media creatives, banners, flyers, business cards, and marketing materials that strengthen your brand presence.",
  keywords: ["Graphic Design", "Marketing Design", "Creative Design"],
  alternates: { canonical: "https://www.cosmiccoder24.com/services/graphics-design" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={serviceSchemas.graphicsDesign} />
      {children}
    </>
  );
}
