"use client";

import React from "react";
import Eyebrow from "@/components/ui/Eyebrow";

const PageHeader = ({ title, description, eyebrow }) => {
  return (
    <div className="w-full min-h-[40vh] flex flex-col items-center justify-center text-center px-4">
      {eyebrow && <Eyebrow text={eyebrow} />}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-purple-400 mb-6">
        {title}
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
