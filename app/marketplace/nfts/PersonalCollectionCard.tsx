"use client";

import Link from "next/link";

export default function PersonalCollectionCard() {
  return (
    <Link href="/marketplace/nfts/collection" style={{ textDecoration: "none" }}>
      <div
        className="card"
        style={{
          background: "var(--reef-card)",
          borderRadius: "20px",
          padding: "20px",
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: "pointer",
        }}
      >
        <h2 className="text-lg font-semibold mb-1">Your Collection</h2>
        <p className="text-sm opacity-80">
          View the NFTs you own and track your rarest finds.
        </p>
      </div>
    </Link>
  );
}
