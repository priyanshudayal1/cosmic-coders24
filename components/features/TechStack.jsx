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

export const WEB_DEV_TOOLS = [
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Wix", icon: SiWix, color: "#0C6EFC" },
  { name: "Shopify", icon: SiShopify, color: "#96BF48" },
];

export const SOFT_DEV_TOOLS = [
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
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
  { name: "Ahrefs", isImage: true, src: "/ahrefs-logo.png" },
  { name: "Keyword Planner", icon: SiGoogleads, color: "#4285F4" },
];

const UNIQUE_DEV_TOOLS = [...WEB_DEV_TOOLS, ...SOFT_DEV_TOOLS].filter(
  (tool, index, self) => index === self.findIndex((t) => t.name === tool.name)
);

export const ALL_TOOLS = [
  ...UNIQUE_DEV_TOOLS,
  ...DESIGN_TOOLS,
  ...VIDEO_TOOLS,
  ...SEO_TOOLS,
];

const ToolChip = ({ name, icon: Icon, color, isImage, src }) => (
  <div
    className={cn(
      "flex items-center gap-3 rounded-full border px-6 py-3 text-base font-semibold whitespace-nowrap select-none shrink-0",
      "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-default",
    )}
  >
    {isImage ? (
      <img src={src} alt={`${name} logo`} className="shrink-0 w-7 h-7 rounded-full object-cover bg-white" />
    ) : (
      <Icon size={22} style={{ color }} className="shrink-0" />
    )}
    <span>{name}</span>
  </div>
);

function TickerRow({ items, reverse = false, speed = 4 }) {
  // Ensure we have enough items to fill ultrawide screens without showing blank spaces
  let baseItems = [...items];
  while (baseItems.length > 0 && baseItems.length < 25) {
    baseItems = [...baseItems, ...items];
  }
  const doubled = [...baseItems, ...baseItems];
  const duration = baseItems.length * speed;

  return (
    <div
      className="flex gap-4 w-max"
      style={{
        animation: `${reverse ? "ticker-reverse" : "ticker"} ${duration}s linear infinite`,
        willChange: "transform",
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
  showSingleRow = false,
}) {
  // If single row is requested or few items exist, keep all in row1.
  const shouldSplit = !showSingleRow && items.length > 7;
  const half = Math.ceil(items.length / 2);
  const row1 = shouldSplit ? items.slice(0, half) : items;
  const row2 = shouldSplit ? items.slice(half) : [];

  return (
    <section className="w-full py-20 overflow-hidden bg-site-bg">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className="mt-12 flex flex-col gap-5">
        {[
          { items: row1, reverse: false },
          ...(row2.length > 0 ? [{ items: row2, reverse: true }] : []),
        ].map((row, idx) => (
          <div key={idx} className="relative w-full overflow-hidden">
            <TickerRow
              items={row.items}
              reverse={row.reverse}
              speed={4}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-site-bg to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-site-bg to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
