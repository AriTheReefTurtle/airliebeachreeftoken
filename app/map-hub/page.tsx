"use client";

import MapBox from "@/components/MapBox";

export default function MapHubPage() {
  return (
    <div className="flex flex-col gap-6 p-6">

      <h1 className="text-4xl font-bold text-reef-accent drop-shadow-lg">
        Map Hub
      </h1>

      <div
        className="rounded-2xl overflow-hidden shadow-xl border border-white/10"
        style={{
          height: "500px",
          background: "var(--reef-card)",
          backdropFilter: "blur(6px)",
        }}
      >
        <MapBox />
      </div>

    </div>
  );
}
