"use client";

import Link from "next/link";

/**
 * Next.js Link doesn't reliably scroll to an in-page #hash when the
 * pathname isn't changing (e.g. clicking "/#cities" while already on "/").
 * Fall back to a manual scrollIntoView when the target id already exists
 * in the DOM; otherwise let Link navigate normally (new page + hash).
 */
export default function HashLink({ href, onClick, ...props }) {
  const hash = href.includes("#") ? href.split("#")[1] : null;

  const handleClick = (e) => {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    }
    onClick?.(e);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
