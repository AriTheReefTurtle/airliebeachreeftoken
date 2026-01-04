"use client";

import Modal from "./Modal";

export default function LevelUpModal({
  open,
  level,
  onClose,
}: {
  open: boolean;
  level: number;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-reef-blue">Level Up!</h2>
        <p className="text-sand-beige text-lg">
          You reached <span className="font-bold">Level {level}</span>
        </p>

        <div className="text-6xl">🌊</div>

        <button
          onClick={onClose}
          className="w-full py-2 rounded-xl bg-reef-blue text-sand-beige font-semibold hover:opacity-90 transition"
        >
          Continue
        </button>
      </div>
    </Modal>
  );
}
