"use client";

import Link from "next/link";

export default function MarketplaceHome() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-[#1DA1F2]">Marketplace</h1>

      <div className="space-y-4">
        <Link href="/marketplace/online">
          <div className="p-4 rounded-xl shadow-md bg-gradient-to-br from-[#1DA1F2]/20 to-[#2ECC71]/20 cursor-pointer">
            <h2 className="text-xl font-semibold text-[#1DA1F2]">Online Shopping</h2>
            <p className="text-gray-600 text-sm">Physical & digital items</p>
          </div>
        </Link>

        <Link href="/marketplace/nfts">
          <div className="p-4 rounded-xl shadow-md bg-gradient-to-br from-[#1DA1F2]/20 to-[#FF6F61]/20 cursor-pointer">
            <h2 className="text-xl font-semibold text-[#1DA1F2]">NFT Marketplace</h2>
            <p className="text-gray-600 text-sm">Collect rare ocean NFTs</p>
          </div>
        </Link>

        <Link href="/marketplace/add">
          <div className="p-4 rounded-xl shadow-md bg-gradient-to-br from-[#2ECC71]/20 to-[#FF6F61]/20 cursor-pointer">
            <h2 className="text-xl font-semibold text-[#1DA1F2]">Add Item</h2>
            <p className="text-gray-600 text-sm">Sell your own items</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
