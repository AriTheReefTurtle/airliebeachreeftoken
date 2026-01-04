"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LocalBusinessesPage() {
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
          {/* Back to Marketplace */}
          <Link
            href="/ecoquest/marketplace"
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
            Local Businesses
          </h1>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-lg mx-auto px-4 pb-10">

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
            Local eco‑friendly partners will appear here soon.
          </p>
        </div>

      </main>
    </div>
  );
}
