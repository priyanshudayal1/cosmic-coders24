import JsonLd from "@/components/shared/JsonLd";
import { serviceSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Custom Website Development Services | Responsive Website Design Company",
  description:
    "Build fast, responsive, SEO-friendly websites tailored to your business. We develop corporate, eCommerce, portfolio, and custom websites designed to increase leads and online visibility.",
  keywords: ["Website Development", "Web Design", "Business Website"],
  alternates: { canonical: "https://www.cosmiccoder24.com/services/website-development" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={serviceSchemas.websiteDevelopment} />
      {children}
    </>
  );
}
