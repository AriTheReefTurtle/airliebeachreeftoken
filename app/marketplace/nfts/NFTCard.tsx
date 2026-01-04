"use client";

import Link from "next/link";

export default function NFTCard({ id, name, rarity, price, image }) {
  const rarityStyles = {
    Common: {
      border: "1px solid rgba(255,255,255,0.2)",
      glow: "0 0 8px rgba(255,255,255,0.2)",
    },
    Rare: {
      border: "1px solid var(--reef-accent)",
      glow: "0 0 12px var(--reef-accent)",
    },
    Epic: {
      border: "1px solid #9b59b6",
      glow: "0 0 14px #9b59b6",
    },
    Legendary: {
      border: "1px solid #f1c40f",
      glow: "0 0 16px #f1c40f",
    },
  };

  return (
    <Link href={`/marketplace/nfts/${id}`} style={{ textDecoration: "none" }}>
      <div
        className="card"
        style={{
          background: "var(--reef-card)",
          borderRadius: "18px",
          padding: "18px",
          border: rarityStyles[rarity].border,
          boxShadow: rarityStyles[rarity].glow,
          cursor: "pointer",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "12px",
          }}
        />

        <h3 className="text-lg font-semibold mb-1">{name}</h3>

        <span
          className="text-sm font-semibold"
          style={{ opacity: 0.8 }}
        >
          {rarity}
        </span>

        <div
          className="text-right font-bold mt-3"
          style={{ color: "var(--reef-accent)" }}
        >
          {price} AIRLIE
        </div>
      </div>
    </Link>
  );
}
