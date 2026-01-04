"use client";

export default function ProductCard({ title, price, description }) {
  return (
    <div
      className="card"
      style={{
        background: "var(--reef-card)",
        borderRadius: "18px",
        padding: "18px",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>

      <p className="text-sm opacity-80 mb-3">{description}</p>

      <div
        className="text-right font-bold"
        style={{ color: "var(--reef-accent)" }}
      >
        {price} AIRLIE
      </div>
    </div>
  );
}
