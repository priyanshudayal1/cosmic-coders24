import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import { CITIES } from "@/lib/cities";

export default function CityCoverage() {
  return (
    <section
      id="cities"
      className="relative w-full overflow-hidden py-20 lx-blue scroll-mt-28"
    >
      <SectionHeading
        eyebrow="Cities We Serve"
        title={
          <>
            <span className="block">
              Digital Marketing &amp; Website Development Services
            </span>
            <span className="block bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Across Major Indian Cities
            </span>
          </>
        }
        subtitle="We help businesses grow online with professional Website Development, SEO, Google Business Profile (GMB) Optimization, Branding, and Digital Marketing services across India. Select your city to explore our local services, successful projects, and customized growth solutions."
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-4 px-4 sm:px-6">
        {CITIES.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              "group flex items-center gap-2.5 whitespace-nowrap rounded-full border px-6 py-3",
              "border-white/10 bg-white/5 text-base font-semibold text-white/80 transition-colors",
              "hover:border-purple-500/40 hover:bg-white/10 hover:text-white",
            )}
          >
            <MapPin
              size={18}
              className="shrink-0 text-purple-400 transition-colors group-hover:text-purple-300"
            />
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
