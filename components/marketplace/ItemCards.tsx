"use client";

export default function ItemCard({ item }: { item: any }) {
  return (
    <div className="rounded-xl shadow-md bg-white overflow-hidden border border-[#1DA1F2]/20">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-32 object-cover"
      />

      <div className="p-3 space-y-1">
        <h3 className="font-semibold text-[#1DA1F2]">{item.title}</h3>

        {item.rarity && (
          <span
            className={`inline-block px-2 py-1 text-xs rounded-md text-white ${
              item.rarity === "legendary"
                ? "bg-purple-600"
                : item.rarity === "epic"
                ? "bg-blue-600"
                : item.rarity === "rare"
                ? "bg-green-600"
                : "bg-gray-500"
            }`}
          >
            {item.rarity.toUpperCase()}
          </span>
        )}

        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

        <p className="font-bold text-[#2ECC71]">${item.price}</p>

        {item.condition && (
          <p className="text-xs text-gray-500">Condition: {item.condition}</p>
        )}

        {item.location && (
          <p className="text-xs text-gray-500">Location: {item.location}</p>
        )}

        {item.tags && (
          <div className="flex flex-wrap gap-1 mt-1">
            {item.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="text-xs bg-[#1DA1F2]/10 text-[#1DA1F2] px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
