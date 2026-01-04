"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function AddItemPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("physical");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("new");
  const [tags, setTags] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handlePublish = async () => {
    const newItem = {
      id: Date.now(),
      title,
      description,
      category,
      price: Number(price),
      condition,
      tags: tags.split(",").map(t => t.trim()),
      location,
      contact,
      imageUrl,
      createdAt: new Date().toISOString(),
    };

    const existing = (await Pi.storage.get("user_items")) || [];
    const updated = [...existing, newItem];

    await Pi.storage.put("user_items", updated);

    router.push("/marketplace");
  };

  return (
    <div className="p-4 space-y-6">
      <BackButton />
      <h1 className="text-2xl font-bold text-[#1DA1F2]">Add New Item</h1>

      {/* CARD 1 */}
      <div className="p-4 rounded-xl shadow-lg border border-white/20 bg-gradient-to-br from-[#1DA1F2]/40 to-[#2ECC71]/40 backdrop-blur-md">
        <h2 className="text-lg font-semibold mb-3 text-[#1DA1F2]">Basic Info</h2>

        <label className="block mb-2 font-medium">Title</label>
        <input
          className="w-full p-2 rounded-md border"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label className="block mt-4 mb-2 font-medium">Description</label>
        <textarea
          className="w-full p-2 rounded-md border"
          rows={3}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <label className="block mt-4 mb-2 font-medium">Category</label>
        <select
          className="w-full p-2 rounded-md border"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
          <option value="nft">NFT</option>
        </select>
      </div>

      {/* CARD 2 */}
      <div className="p-4 rounded-xl shadow-lg border border-white/20 bg-gradient-to-br from-[#1DA1F2]/40 to-[#FF6F61]/40 backdrop-blur-md">
        <h2 className="text-lg font-semibold mb-3 text-[#1DA1F2]">Details</h2>

        <label className="block mb-2 font-medium">Price</label>
        <input
          type="number"
          className="w-full p-2 rounded-md border"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <label className="block mt-4 mb-2 font-medium">Condition</label>
        <select
          className="w-full p-2 rounded-md border"
          value={condition}
          onChange={e => setCondition(e.target.value)}
        >
          <option value="new">New</option>
          <option value="used">Used</option>
          <option value="refurbished">Refurbished</option>
        </select>

        <label className="block mt-4 mb-2 font-medium">Tags (comma separated)</label>
        <input
          className="w-full p-2 rounded-md border"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />

        <label className="block mt-4 mb-2 font-medium">Location</label>
        <input
          className="w-full p-2 rounded-md border"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />

        <label className="block mt-4 mb-2 font-medium">Contact Method</label>
        <input
          className="w-full p-2 rounded-md border"
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
      </div>

      {/* CARD 3 */}
      <div className="p-4 rounded-xl shadow-lg border border-white/20 bg-gradient-to-br from-[#2ECC71]/40 to-[#FF6F61]/40 backdrop-blur-md">
        <h2 className="text-lg font-semibold mb-3 text-[#1DA1F2]">Image</h2>

        <label className="block mb-2 font-medium">Image URL</label>
        <input
          className="w-full p-2 rounded-md border"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />

        <button
          onClick={handlePublish}
          className="mt-6 w-full bg-[#1DA1F2] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-[#1788cc] transition"
        >
          Publish Item
        </button>
      </div>
    </div>
  );
}
