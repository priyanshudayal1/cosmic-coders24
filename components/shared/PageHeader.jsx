"use client";

import React from "react";

const PageHeader = ({ title, description }) => {
    return (
        <div className="w-full pt-32 pb-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 mb-6">
                {title}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default PageHeader;
