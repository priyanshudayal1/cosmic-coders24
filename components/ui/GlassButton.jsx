import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const GlassButton = ({ href, className, children, ...props }) => {
  const baseStyles =
    "bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-2 rounded-full transition-all duration-300 font-medium backdrop-blur-sm";

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, className)} {...props}>
      {children}
    </button>
  );
};

export default GlassButton;
