"use client";

import { useEffect, useState } from "react";
import { X, AlertTriangle, Lock } from "lucide-react";
import { createPortal } from "react-dom";

const AdminModal = ({
  isOpen,
  onClose,
  title,
  message,
  type = "confirm",
  onConfirm,
  confirmText = "Confirm",
  isLoading = false,
}) => {
  const [inputVal, setInputVal] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (type === "input") {
      onConfirm(inputVal);
    } else {
      onConfirm();
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl transform transition-all">
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            {type === "danger" && (
              <AlertTriangle className="text-red-500 w-5 h-5" />
            )}
            {type === "input" && <Lock className="text-purple-500 w-5 h-5" />}
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-zinc-300 mb-4">{message}</p>

          {type === "input" && (
            <input
              type="password"
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Enter Admin Password"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              autoFocus
            />
          )}

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={isLoading || (type === "input" && !inputVal)}
              className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2
                ${type === "danger" ? "bg-red-600 hover:bg-red-700" : "bg-purple-600 hover:bg-purple-700"}
              `}
            >
              {isLoading ? "Processing..." : confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default AdminModal;
