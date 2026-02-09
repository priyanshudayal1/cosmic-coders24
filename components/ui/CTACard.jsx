"use client";

import { ArrowRight } from "lucide-react";
import SpotlightCard from "../SpotlightCard";
import Button from "./Button";

const CTACard = ({
  title,
  description,
  buttonText = "Contact Us",
  buttonHref = "/about-contact",
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <SpotlightCard
        className="text-center bg-linear-to-br from-purple-900/30 via-black to-black border-purple-500/20 p-12 md:p-16"
        spotlightColor="rgba(168, 85, 247, 0.3)"
      >
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex justify-center">
            <Button
              variant="glass"
              size="lg"
              className="hover:bg-purple-600/30 hover:border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default CTACard;
