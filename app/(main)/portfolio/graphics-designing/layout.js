import JsonLd from "@/components/shared/JsonLd";
import { portfolioSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Graphic Design Portfolio",
  description:
    "View our graphic design portfolio featuring social media creatives, marketing materials, brochures, flyers, banners, packaging, and branding designs.",
  keywords: ["Graphic Design Portfolio"],
  alternates: { canonical: "https://www.cosmiccoder24.com/portfolio/graphics-designing" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={portfolioSchemas.graphicsDesigning} />
      {children}
    </>
  );
}
