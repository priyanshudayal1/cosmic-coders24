import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Cosmic Coder 24",
  description: "Cosmic Coder 24",
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
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full bg-site-bg`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZ18R0QW6H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZ18R0QW6H');
          `}
        </Script>
      </body>
    </html>
  );
}
