import JsonLd from "@/components/shared/JsonLd";
import { serviceSchemas } from "@/lib/schemas";

export const metadata = {
  title: "Social Media Marketing Services for Business Growth",
  description:
    "Grow your brand with strategic social media marketing. We create engaging content, manage campaigns, optimize profiles, and help businesses generate more leads across major social platforms.",
  keywords: [
    "Social Media Marketing",
    "Facebook Marketing",
    "Instagram Marketing",
  ],
  alternates: { canonical: "https://www.cosmiccoder24.com/services/social-media-marketing" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={serviceSchemas.socialMediaMarketing} />
      {children}
    </>
  );
}
