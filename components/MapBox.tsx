"use client";

import { useEffect, useRef, useState } from "react";

export default function MapBox() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isPiBrowser, setIsPiBrowser] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (ua.includes("PiBrowser")) {
      setIsPiBrowser(true);
      return;
    }

    if (!mapRef.current) {
      setError("Map container missing");
      return;
    }

    const loadMap = async () => {
      try {
        const mapboxgl = (await import("mapbox-gl")).default;

        mapboxgl.accessToken =
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

        if (!mapboxgl.accessToken) {
          setError("Missing Mapbox token");
          return;
        }

        new mapboxgl.Map({
          container: mapRef.current,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [148.7185, -20.2676],
          zoom: 11,
        });
      } catch (err) {
        console.error("Mapbox failed:", err);
        setError("Mapbox failed to load");
      }
    };

    loadMap();
  }, []);

  // Pi Browser fallback
  if (isPiBrowser) {
    return (
      <img
        src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/148.7185,-20.2676,11/800x800?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
        alt="Static Map"
        className="w-full h-full object-cover"
      />
    );
  }

  // Error fallback
  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className="w-full h-full"
      style={{ minHeight: "100%", background: "var(--reef-card)" }}
    />
  );
}
