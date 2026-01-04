"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const nftData = {
  "1": {
    name: "Coral Spirit",
    rarity: "Rare",
    price: 40,
    image: "/images/nfts/coral-spirit.png",
    description: "A mystical guardian of the reef, glowing with ocean energy.",
  },
  "2": {
    name: "Turtle Guardian",
    rarity: "Epic",
    price: 75,
    image: "/images/nfts/turtle-guardian.png",
    description: "A wise protector of the seas, symbol of resilience.",
  },
};

export default function NFTDetailPage({ params }) {
  const nft = nftData[params.id];

  if (!nft) {
    return <div>Not found</div>;
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--reef-bg)",
        color: "var(--reef-text)",
      }}
    >
      <header className="w-full max-w-lg mx-auto px-4 pt-8 pb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/marketplace/nfts"
            className="p-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "var(--reef-accent)",
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <h1
            className="text-2xl font-bold"
            style={{ color: "var(--reef-accent)" }}
          >
            {nft.name}
          </h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pb-10 space-y-6">
        <img
          src={nft.image}
          alt={nft.name}
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 0 20px var(--reef-accent)",
          }}
        />

        <p className="opacity-80">{nft.description}</p>

        <div
          className="text-xl font-bold"
          style={{ color: "var(--reef-accent)" }}
        >
          {nft.price} AIRLIE
        </div>
      </main>
    </div>
  );
}

