"use client";

export default function AchievementPopup({
  open,
  label,
}: {
  open: boolean;
  label: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="achievement-popup">
        <div className="text-2xl">🏅</div>
        <p className="text-sand-beige font-semibold">{label}</p>
      </div>
    </div>
  );
}
