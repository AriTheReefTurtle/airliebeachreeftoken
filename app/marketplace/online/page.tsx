"use client";

import { useEffect, useState } from "react";
import ItemCard from "@/components/marketplace/ItemCard";
import BackButton from "@/components/BackButton";
import physicalItems from "@/data/physical.json";
import digitalItems from "@/data/digital.json";

export default function OnlineMarketplacePage() {
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    const loadUserItems = async () => {
      const stored = await Pi.storage.get("user_items");
      if (stored) {
        const filtered = stored.filter(
          (item: any) => item.category === "physical" || item.category === "digital"
        );
        setUserItems(filtered);
      }
    };

    loadUserItems();
  }, []);

  const allItems = [...physicalItems, ...digitalItems, ...userItems];

  return (
    <div className="p-4 space-y-4">
      <BackButton />
      <h1 className="text-2xl font-bold text-[#1DA1F2]">Online Marketplace</h1>

      <div className="grid grid-cols-2 gap-4">
        {allItems.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
