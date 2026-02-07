"use client";

import React from "react";
import Link from "next/link";

const Dropdown = ({ isOpen, items }) => {
    return (
        <div
            className={`absolute top-full left-0 min-w-[200px] bg-[#030014]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform origin-top shadow-2xl z-50 ${isOpen
                ? "opacity-100 scale-y-100 translate-y-2 pointer-events-auto"
                : "opacity-0 scale-y-95 translate-y-0 pointer-events-none"
                }`}
        >
            <div className="py-2 flex flex-col">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
