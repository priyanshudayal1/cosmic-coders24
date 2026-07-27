import JsonLd from "@/components/shared/JsonLd";
import { careersSchema } from "@/lib/schemas";

export const metadata = {
  title: "Careers at Cosmic Coder 24",
  description:
    "Join Cosmic Coder 24 and build your career in website development, digital marketing, SEO, graphic design, branding, and software development.",
  keywords: ["Jobs", "Careers"],
  alternates: { canonical: "https://www.cosmiccoder24.com/careers" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={careersSchema} />
      {children}
    </>
  );
}
