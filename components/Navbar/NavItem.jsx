"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import Dropdown from "./Dropdown";

const NavItem = ({ title, href, dropdownItems, mobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!mobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!mobile) setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (mobile) setIsOpen(!isOpen);
  };

  if (mobile) {
    return (
      <div className="flex flex-col border-b border-white/10 last:border-0 pb-2 last:pb-0">
        <button
          onClick={dropdownItems ? toggleDropdown : undefined}
          className="flex items-center justify-between text-white/80 hover:text-white py-2 w-full text-left transition-colors"
        >
          {href ? (
            <Link
              href={href}
              className="flex-1"
              onClick={() => setIsOpen(false)}
            >
              {title}
            </Link>
          ) : (
            <span className="flex-1">{title}</span>
          )}
          {dropdownItems && (
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          )}
        </button>

        {/* Mobile Dropdown Content */}
        {isOpen && dropdownItems && (
          <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 border-l border-white/10">
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm text-white/60 hover:text-white py-1 transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative group h-full flex items-center px-4 py-2 rounded-xl border border-transparent hover:bg-white/10 hover:border-white/10 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Invisible Bridge for Dropdown */}
      {dropdownItems && isOpen && (
        <div className="absolute top-full left-0 w-full h-8 bg-transparent z-40" />
      )}

      <div className="relative z-10 flex items-center gap-1 cursor-pointer text-white/80 group-hover:text-white transition-colors">
        {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
        {dropdownItems && (
          <ChevronDown
            size={14}
            className="group-hover:rotate-180 transition-transform duration-300"
          />
        )}
      </div>

      {dropdownItems && <Dropdown isOpen={isOpen} items={dropdownItems} />}
    </div>
  );
};

export default NavItem;
