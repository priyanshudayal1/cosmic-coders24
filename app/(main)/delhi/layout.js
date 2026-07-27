import JsonLd from "@/components/shared/JsonLd";
import { delhiServiceSchema } from "@/lib/schemas";

export const metadata = {
  title: "Best Software, Website Development, Local SEO & Digital Marketing Company in Delhi",
  description:
    "Looking for the best software, website development, local SEO, and digital marketing company in Delhi? Cosmic Coder 24 provides complete digital solutions to help businesses establish a strong online presence and generate more leads.",
  keywords: [
    "Website Development Delhi",
    "Local SEO Delhi",
    "Software Company Delhi",
  ],
  alternates: { canonical: "https://www.cosmiccoder24.com/delhi" },
};

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={delhiServiceSchema} />
      {children}
    </>
  );
}
