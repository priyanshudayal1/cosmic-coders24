"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

export default function ImageCarousel({
  images = [],
  className,
  imageClassName,
  duration = "45s",
  reverse = false,
  fadeColor = "var(--site-bg)",
  href,
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <Marquee
        pauseOnHover
        reverse={reverse}
        repeat={3}
        style={{ "--duration": duration }}
      >
        {images.map((image, index) => {
          const slide = (
            <div
              className="relative shrink-0 rounded-2xl border border-white/10 bg-white/5 overflow-hidden group/slide"
            >
              <img
                src={image.src}
                alt={image.alt || "Portfolio work"}
                loading="lazy"
                className={cn(
                  "h-52 sm:h-64 md:h-72 w-auto object-cover transition-transform duration-500 group-hover/slide:scale-[1.03]",
                  imageClassName
                )}
              />
            </div>
          );

          const link = image.link || href;

          return link ? (
            <a
              key={index}
              href={link}
              target={image.link ? "_blank" : undefined}
              rel={image.link ? "noopener noreferrer" : undefined}
              className="shrink-0 cursor-pointer"
            >
              {slide}
            </a>
          ) : (
            <div key={index}>{slide}</div>
          );
        })}
      </Marquee>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10"
        style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10"
        style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }}
      />
    </div>
  );
}
