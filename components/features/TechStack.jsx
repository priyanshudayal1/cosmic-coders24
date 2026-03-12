"use client";

import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiJavascript,
  SiVercel,
  SiWix,
  SiShopify,
  SiFramer,
  SiAffinitydesigner,
  SiCanva,
  SiDavinciresolve,
  SiGoogleanalytics,
  SiSemrush,
  SiGooglesearchconsole,
  SiGoogleads,
  SiMysql,
  SiWondershare,
} from "react-icons/si";
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeAfterEffect,
  TbBrandAdobePremier,
  TbBrandAdobe,
  TbBrandBlender,
} from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { Search } from "lucide-react";

export const DEV_TOOLS = [
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Wix", icon: SiWix, color: "#0C6EFC" },
  { name: "Shopify", icon: SiShopify, color: "#96BF48" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
];

export const DESIGN_TOOLS = [
  { name: "Adobe Photoshop", icon: TbBrandAdobePhotoshop, color: "#31A8FF" },
  { name: "Affinity Designer", icon: SiAffinitydesigner, color: "#1B72BE" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
];

export const VIDEO_TOOLS = [
  { name: "After Effects", icon: TbBrandAdobeAfterEffect, color: "#9999FF" },
  { name: "Premiere Pro", icon: TbBrandAdobePremier, color: "#EA77FF" },
  { name: "DaVinci Resolve", icon: SiDavinciresolve, color: "#F6A623" },
  { name: "Adobe Express", icon: TbBrandAdobe, color: "#FF0000" },
  { name: "Filmora", icon: SiWondershare, color: "#00BFFF" },
  { name: "Blender 3D", icon: TbBrandBlender, color: "#E87D0D" },
];

export const SEO_TOOLS = [
  { name: "Google Analytics", icon: SiGoogleanalytics, color: "#E37400" },
  { name: "SEMrush", icon: SiSemrush, color: "#FF642D" },
  { name: "Search Console", icon: SiGooglesearchconsole, color: "#458CF5" },
  { name: "Ahrefs", icon: Search, color: "#FF7A00" },
  { name: "Keyword Planner", icon: SiGoogleads, color: "#4285F4" },
];

export const ALL_TOOLS = [
  ...DEV_TOOLS,
  ...DESIGN_TOOLS,
  ...VIDEO_TOOLS,
  ...SEO_TOOLS,
];

const ToolChip = ({ name, icon: Icon, color }) => (
  <div
    className={cn(
      "flex items-center gap-3 rounded-full border px-6 py-3 text-base font-semibold whitespace-nowrap select-none shrink-0",
      "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-default",
    )}
  >
    <Icon size={22} style={{ color }} className="shrink-0" />
    <span>{name}</span>
  </div>
);

function TickerRow({ items, reverse = false, duration = 30 }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="flex gap-4 w-max"
      style={{
        animation: `${reverse ? "ticker-reverse" : "ticker"} ${duration}s linear infinite`,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.animationPlayState = "paused")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.animationPlayState = "running")
      }
    >
      {doubled.map((tool, i) => (
        <ToolChip key={`${tool.name}-${i}`} {...tool} />
      ))}
    </div>
  );
}

export default function TechStack({
  items = ALL_TOOLS,
  eyebrow = "Our Tech Stack",
  title = "Tools We Work With",
  subtitle = "A curated set of industry-leading tools powering every project we deliver.",
}) {
  // If few items, show same set in both rows; otherwise split in half
  const shouldSplit = items.length > 7;
  const half = Math.ceil(items.length / 2);
  const row1 = shouldSplit ? items.slice(0, half) : items;
  const row2 = shouldSplit ? items.slice(half) : items;
  const dur1 = Math.max(12, row1.length * 2);
  const dur2 = Math.max(12, row2.length * 2);

  return (
    <section className="w-full py-20 overflow-hidden bg-[#0F061A]">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className="mt-12 flex flex-col gap-5">
        {[
          { items: row1, reverse: false, duration: dur1 },
          { items: row2, reverse: true, duration: dur2 },
        ].map((row, idx) => (
          <div key={idx} className="relative w-full overflow-hidden">
            <TickerRow
              items={row.items}
              reverse={row.reverse}
              duration={row.duration}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#0F061A] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#0F061A] to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
