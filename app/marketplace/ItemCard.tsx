"use client";

export default function ItemCard({ item }: { item: any }) {
  return (
    <div
      className="
        rounded-xl 
        shadow-lg 
        border border-white/20 
        bg-gradient-to-br 
        from-[#0a2a43] 
        via-[#1da1f2] 
        to-[#2ecc71]
        text-white
        overflow-hidden
      "
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-32 object-cover opacity-90"
      />

      <div className="p-3 space-y-1">
        <h3 className="font-semibold">{item.title}</h3>

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

        <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>

        <p className="font-bold text-[#F5DEB3]">${item.price}</p>

        {item.condition && (
          <p className="text-xs opacity-80">Condition: {item.condition}</p>
        )}

        {item.location && (
          <p className="text-xs opacity-80">Location: {item.location}</p>
        )}

        {item.tags && (
          <div className="flex flex-wrap gap-1 mt-1">
            {item.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-md"
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
