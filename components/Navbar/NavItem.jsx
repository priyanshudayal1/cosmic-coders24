"use client";

import React, { useState } from "react";
import Link from "next/link";
import HashLink from "@/components/ui/HashLink";
import { ChevronDown } from "lucide-react";
import Dropdown from "./Dropdown";

const NavItem = ({ title, href, dropdownItems, mobile, onNavigate }) => {
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

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onNavigate) onNavigate();
  };

  if (mobile) {
    if (href && !dropdownItems) {
      return (
        <div className="flex flex-col border-b border-white/10 last:border-0 pb-2 last:pb-0">
          <Link
            href={href}
            onClick={handleLinkClick}
            className="w-full py-2 text-white/80 transition-colors hover:text-white break-words"
          >
            {title}
          </Link>
        </div>
      );
    }

    return (
      <div className="flex flex-col border-b border-white/10 last:border-0 pb-2 last:pb-0">
        <button
          onClick={toggleDropdown}
          className="flex w-full items-start justify-between gap-3 py-2 text-left text-white/80 transition-colors hover:text-white"
        >
          <span className="flex-1 break-words">{title}</span>
          {dropdownItems && (
            <ChevronDown
              size={16}
              className={`mt-1 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          )}
        </button>

        {/* Mobile Dropdown Content */}
        {isOpen && dropdownItems && (
          <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 border-l border-white/10">
            {dropdownItems.map((item, index) => (
              <HashLink
                key={index}
                href={item.href}
                className="block break-words py-1 text-sm text-white/60 transition-colors hover:text-white"
                onClick={handleLinkClick}
              >
                {item.label}
              </HashLink>
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
