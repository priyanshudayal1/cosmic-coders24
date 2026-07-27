import JsonLd from "@/components/shared/JsonLd";
import { portfolioSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Website Development Portfolio",
  description:
    "Explore our portfolio of custom website development projects including business websites, eCommerce websites, landing pages, and responsive web solutions.",
  keywords: ["Website Portfolio"],
  alternates: { canonical: "https://www.cosmiccoder24.com/portfolio/website-development" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={portfolioSchemas.websiteDevelopment} />
      {children}
    </>
  );
}
