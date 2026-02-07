"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ title, icon: Icon, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-300"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors duration-300 w-fit">
                    <Icon size={32} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                    {description}
                </p>

                {/* Learn More / Action (Visual only for now) */}
                <div className="flex items-center text-sm font-medium text-purple-400 group-hover:text-white transition-colors duration-300 mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
