"use client";

import React from "react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

const ParticleHeader = ({ children }) => {
    return (
        <div className="relative">
            {/* ── Particles & Glow backdrop ── */}
            <motion.div
                className="absolute -top-10 -bottom-10 left-1/2 -translate-x-1/2 w-[220%] max-w-[1400px] pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 62% 52% at 50% 38%, rgba(var(--glow-purple), 0.12) 0%, rgba(var(--glow-blue), 0.05) 48%, transparent 74%)",
                    }}
                />
                <Particles
                    className="absolute inset-0 w-full h-full"
                    quantity={80}
                    staticity={40}
                    ease={60}
                    size={0.5}
                    color="#ffffff"
                    vx={0}
                    vy={-0.05}
                />
            </motion.div>
            {children}
        </div>
    );
};

export default ParticleHeader;
