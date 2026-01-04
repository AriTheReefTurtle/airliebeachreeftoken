"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MissionDetailPage({ params }: { params: { id: string } }) {
  const missionId = params.id;

  // Temporary mission data — replace with real data later
  const missions = {
    "1": {
      title: "Coral Cleanup",
      xp: 250,
      airlie: 5,
      requirements: [
        "Collect 5 pieces of ocean debris",
        "Take a photo of the cleaned area",
        "Submit a short description of your cleanup",
      ],
    },
    "2": {
      title: "Turtle Rescue",
      xp: 400,
      airlie: 8,
      requirements: [
        "Observe a turtle nesting area",
        "Ensure hatchlings reach the water safely",
        "Submit a photo of the rescue zone",
      ],
    },
    "3": {
      title: "Reef Survey",
      xp: 300,
      airlie: 6,
      requirements: [
        "Identify 3 coral species",
        "Record water clarity",
        "Submit a reef health summary",
      ],
    },
  };

  const mission = missions[missionId];

  if (!mission) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--reef-bg)", color: "var(--reef-text)" }}
      >
        Mission not found
      </div>
    );
  }

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
            href="/ecoquest/missions"
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
            {mission.title}
          </h1>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-lg mx-auto px-4 pb-10 space-y-8">

        {/* Mission Info Card */}
        <div
          className="card"
          style={{
            background: "var(--reef-card)",
            borderRadius: "20px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <h2 className="text-lg font-semibold mb-4">Rewards</h2>

          <div className="flex items-center justify-between mb-2">
            <span className="opacity-80">XP</span>
            <span className="font-bold">{mission.xp}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="opacity-80">AIRLIE</span>
            <span className="font-bold">{mission.airlie}</span>
          </div>
        </div>

        {/* Requirements Card */}
        <div
          className="card"
          style={{
            background: "var(--reef-card)",
            borderRadius: "20px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <h2 className="text-lg font-semibold mb-4">Requirements</h2>

          <ul className="space-y-3">
            {mission.requirements.map((req, index) => (
              <li key={index} className="text-sm opacity-90">
                • {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Submission Button */}
        <button
          className="w-full py-3 text-center font-semibold rounded-xl"
          style={{
            background: "var(--reef-accent)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => alert("Submission flow coming soon!")}
        >
          Submit Mission
        </button>

      </main>
    </div>
  );
}
