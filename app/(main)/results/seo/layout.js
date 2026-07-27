import JsonLd from "@/components/shared/JsonLd";
import { seoResultsSchema } from "@/lib/schemas";

export const metadata = {
  title: "SEO Results & Client Success Stories",
  description:
    "See real SEO success stories, keyword rankings, local SEO improvements, traffic growth, and business results achieved through our proven optimization strategies.",
  keywords: ["SEO Results", "SEO Case Studies"],
  alternates: { canonical: "https://www.cosmiccoder24.com/results/seo" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={seoResultsSchema} />
      {children}
    </>
  );
}
