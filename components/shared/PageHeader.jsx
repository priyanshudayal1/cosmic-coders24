"use client";

import React from "react";
import Eyebrow from "@/components/ui/Eyebrow";

const PageHeader = ({ title, description, eyebrow }) => {
  return (
    <div className="w-full pt-32 pb-10 text-center px-4">
      {eyebrow && <Eyebrow text={eyebrow} />}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 mb-6">
        {title}
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
