import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(
  (
    { className, variant = "glass", size = "default", children, ...props },
    ref,
  ) => {
    const variants = {
      glass:
        "bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm",
      primary:
        "bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/40",
      ghost:
        "bg-transparent hover:bg-white/5 text-white border border-transparent",
    };

    const sizes = {
      default: "px-6 py-2 rounded-full font-medium",
      lg: "px-8 py-3.5 rounded-xl font-medium",
      icon: "p-2 rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
