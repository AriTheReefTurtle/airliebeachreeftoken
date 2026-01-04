"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NFTCard from "../NFTCard";

export default function PersonalCollectionPage() {
  // Mock owned NFTs — replace with real user data later
  const ownedNFTs = [
    {
      id: "2",
      name: "Turtle Guardian",
      rarity: "Epic",
      price: 75,
      image: "/images/nfts/turtle-guardian.png",
    },
    {
      id: "4",
      name: "Starfish Companion",
      rarity: "Common",
      price: 15,
      image: "/images/nfts/starfish.png",
    },
  ];

  const hasNFTs = ownedNFTs.length > 0;

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--reef-bg)",
        color: "var(--reef-text)",
      }}
    >
      {/* Header */}
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
            Your Collection
          </h1>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-lg mx-auto px-4 pb-10 space-y-6">

        {!hasNFTs && (
          <div
            className="card text-center"
            style={{
              background: "var(--reef-card)",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <p className="opacity-80">
              You don’t own any NFTs yet.  
              Start collecting rare reef creatures in the marketplace.
            </p>
          </div>
        )}

        {hasNFTs &&
          ownedNFTs.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
      </main>
    </div>
  );
}
