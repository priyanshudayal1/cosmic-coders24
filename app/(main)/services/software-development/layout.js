import JsonLd from "@/components/shared/JsonLd";
import { serviceSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Custom Software Development Company | CRM, ERP & Business Solutions",
  description:
    "Get custom software solutions including CRM, ERP, billing systems, inventory management, and business automation software developed to meet your business needs.",
  keywords: ["Software Development", "CRM Development", "ERP Development"],
  alternates: { canonical: "https://www.cosmiccoder24.com/services/software-development" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={serviceSchemas.softwareDevelopment} />
      {children}
    </>
  );
}
