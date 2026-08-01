"use client";

import { useEffect } from "react";

/**
 * Next.js App Router doesn't scroll to a #hash after a cross-page
 * navigation (it always scrolls to top). HashLink covers same-page
 * clicks, but landing here fresh (new page load, back/forward, or a
 * cross-page Link to "/#id") still needs a manual scroll on mount.
 * Retries briefly since the target section can mount after this effect
 * runs.
 */
export default function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < 20) setTimeout(tryScroll, 100);
    };

    tryScroll();
  }, []);

  return null;
}
