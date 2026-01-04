"use client";

import { useEffect, useState } from "react";
import ItemCard from "@/components/marketplace/ItemCard";
import BackButton from "@/components/BackButton";
import nftItems from "@/data/nfts.json";

export default function NFTMarketplacePage() {
  const [userNFTs, setUserNFTs] = useState([]);

  useEffect(() => {
    const loadUserItems = async () => {
      const stored = await Pi.storage.get("user_items");
      if (stored) {
        const filtered = stored.filter((item: any) => item.category === "nft");
        setUserNFTs(filtered);
      }
    };

    loadUserItems();
  }, []);

  const allNFTs = [...nftItems, ...userNFTs];

  return (
    <div className="p-4 space-y-4">
      <BackButton />
      <h1 className="text-2xl font-bold text-[#1DA1F2]">NFT Marketplace</h1>

      <div className="grid grid-cols-2 gap-4">
        {allNFTs.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
