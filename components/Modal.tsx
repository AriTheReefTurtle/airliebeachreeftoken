"use client";

import { ReactNode } from "react";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 border border-white/20 rounded-2xl p-6 w-11/12 max-w-md shadow-xl text-sand-beige relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-sand-beige/70 hover:text-sand-beige transition"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
