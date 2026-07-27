import JsonLd from "@/components/shared/JsonLd";
import { localBusinessSchema } from "@/lib/schemas";

export const metadata = {
  title: "About Cosmic Coder 24 | Contact Us",
  description:
    "Learn more about Cosmic Coder 24, our mission, services, and team. Contact us to discuss your website development, software development, SEO, or digital marketing requirements.",
  keywords: ["About Us", "Contact"],
  alternates: { canonical: "https://www.cosmiccoder24.com/about-contact" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      {children}
    </>
  );
}
