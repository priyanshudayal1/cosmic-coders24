import JsonLd from "@/components/shared/JsonLd";
import { serviceSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Professional Video Editing Services",
  description:
    "Professional video editing services for promotional videos, social media reels, YouTube content, corporate videos, and advertisements that engage your audience.",
  keywords: ["Video Editing", "Promotional Videos", "Reels Editing"],
  alternates: { canonical: "https://www.cosmiccoder24.com/services/video-editing" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={serviceSchemas.videoEditing} />
      {children}
    </>
  );
}
