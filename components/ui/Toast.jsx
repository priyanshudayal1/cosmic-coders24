"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

const Toast = ({ message, isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-[#150824]/90 border border-purple-500/20 text-white px-5 py-3 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md"
        >
          <div className="bg-purple-500/20 p-1.5 rounded-full">
            <Check size={16} className="text-purple-400" />
          </div>
          <span className="text-sm font-medium text-gray-200">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-gray-500 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
