"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { createPortal } from "react-dom";

const ConfirmationModal = ({
    isOpen,
    onClose,
    title = "Success!",
    message = "Your request has been submitted successfully.",
}) => {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            // Prevent body scrolling
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 text-center"
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-4 py-4">
                            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>

                            <h3 className="text-2xl font-bold text-white">{title}</h3>

                            <p className="text-gray-300">
                                {message}
                            </p>

                            <button
                                onClick={onClose}
                                className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ConfirmationModal;
