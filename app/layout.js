import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cosmic Coders 24",
  description: "Cosmic Coders 24",
  verification: {
    google: "aQjbCrJ8O-_OtpQqSE9xG5Rr_Etaj96AvUV2Scu3W8A",
  },
  keywords: [
    "Google Business Profile Optimization Services",
    "GMB Optimization Services",
    "Local SEO Services",
    "Website Development Services",
    "Ecommerce Website Development",
    "Website SEO Services",
    "SEO Services",
    "Branding Services",
    "UI UX Design Services",
    "Graphic and Logo Design Services",
    "Video Editing Services",
  ],
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
