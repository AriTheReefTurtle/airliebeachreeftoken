"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useUserProfile } from "@/app/useUserProfile";

export default function LeaderboardPage() {
  const { profile, loaded } = useUserProfile();

  const leaderboard = [
    { username: "OceanGuardian", xp: 9200, airlie: 40 },
    { username: "ReefRanger", xp: 8800, airlie: 38 },
    { username: "TurtleHero", xp: 8600, airlie: 35 },
    { username: "WaveWalker", xp: 8200, airlie: 32 },
    { username: "CoralKeeper", xp: 7900, airlie: 30 },
    { username: profile?.username || "You", xp: profile?.xp || 0, airlie: 0 },
  ];

  const sorted = leaderboard.sort((a, b) => b.xp - a.xp);

  if (!loaded) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--reef-bg)", color: "var(--reef-text)" }}
      >
        Loading...
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
      <header className="w-full max-w-lg mx-auto px-4 pt-8 pb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/ecoquest"
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
            Leaderboard
          </h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pb-10 space-y-4">
        {sorted.map((user, index) => {
          const isCurrentUser = user.username === profile.username;

          return (
            <div
              key={index}
              className="card flex items-center justify-between"
              style={{
                background: isCurrentUser
                  ? "rgba(255,255,255,0.15)"
                  : "var(--reef-card)",
                borderRadius: "16px",
                padding: "16px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
                className="text-lg font-bold"
                style={{
                  color: isCurrentUser
                    ? "var(--reef-accent)"
                    : "var(--reef-text)",
                }}
              >
                #{index + 1}
              </div>

              <div className="flex-1 px-4">
                <p
                  className="font-semibold"
                  style={{
                    color: isCurrentUser
                      ? "var(--reef-accent)"
                      : "var(--reef-text)",
                  }}
                >
                  {user.username}
                </p>

                {/* FIXED XP + AIRLIE DISPLAY */}
                <div className="flex gap-3 text-sm">
                  <span style={{ opacity: 0.85 }}>
                    {user.xp} XP
                  </span>
                  <span style={{ opacity: 0.85, color: "var(--reef-accent)" }}>
                    {user.airlie} AIRLIE
                  </span>
                </div>
              </div>

              {isCurrentUser && (
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--reef-accent)" }}
                >
                  You
                </span>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
}
