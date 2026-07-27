import JsonLd from "@/components/shared/JsonLd";
import { portfolioSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Video Editing Portfolio",
  description:
    "Browse our video editing portfolio featuring business videos, promotional videos, social media reels, YouTube editing, motion graphics, and corporate videos.",
  keywords: ["Video Portfolio"],
  alternates: { canonical: "https://www.cosmiccoder24.com/portfolio/video-editing" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={portfolioSchemas.videoEditing} />
      {children}
    </>
  );
}
