"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useUserProfile } from "@/app/useUserProfile";

export default function EcoQuestHomePage() {
  const { profile, loaded } = useUserProfile();

  const nextLevelXP = 10000;

  // Temporary placeholders — replace with real data later
  const missionsCompleted = 18;
  const quizzesCompleted = 7;
  const lessonsCompleted = 12;

  // Placeholder rank until leaderboard is implemented
  const userRank = 42;
  const totalPlayers = 387;

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
      {/* Header */}
      <header className="w-full max-w-lg mx-auto px-4 pt-8 pb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "var(--reef-accent)",
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div className="flex items-center gap-3">
            <Image
              src="/airlie.png"
              alt="Ari Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <h1
              className="text-2xl font-bold"
              style={{ color: "var(--reef-accent)" }}
            >
              Ari's EcoQuest
            </h1>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-lg mx-auto px-4 py-6 space-y-8">

        {/* HERO CARD — CLICKABLE */}
        <Link
          href="/profile"
          className="block"
          style={{ textDecoration: "none" }}
        >
          <div
            className="card flex items-center gap-4"
            style={{
              background: "var(--reef-card)",
              borderRadius: "20px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
            }}
          >
            <div className="avatar-ring">
              <img
                src={profile.avatar}
                alt="User Avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h2
                className="text-xl font-bold"
                style={{ color: "var(--reef-text)" }}
              >
                {profile.username}
              </h2>

              <p
                className="text-sm"
                style={{ color: "var(--reef-accent)" }}
              >
                Rank #{userRank}
              </p>

              <p className="text-sm opacity-80">
                {profile.xp} XP
              </p>
            </div>
          </div>
        </Link>

        {/* PROGRESS CARD */}
        <div
          className="card"
          style={{
            background: "var(--reef-card)",
            borderRadius: "20px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--reef-accent)" }}
          >
            Progress
          </h3>

          {/* XP Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>XP</span>
              <span>{profile.xp} / {nextLevelXP}</span>
            </div>
            <div className="xp-bar">
              <div
                className="xp-fill"
                style={{ width: `${(profile.xp / nextLevelXP) * 100}%` }}
              />
            </div>
          </div>

          {/* Mini Cards */}
          <div className="grid grid-cols-3 gap-4">

            {/* Missions */}
            <Link
              href="/ecoquest/missions"
              className="card flex flex-col items-center justify-center p-4"
              style={{
                background: "var(--reef-card)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.15)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <p className="text-xl font-bold">{missionsCompleted}</p>
              <p className="text-sm opacity-80">Missions</p>
            </Link>

            {/* Quizzes */}
            <Link
              href="/ecoquest/quizzes"
              className="card flex flex-col items-center justify-center p-4"
              style={{
                background: "var(--reef-card)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.15)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <p className="text-xl font-bold">{quizzesCompleted}</p>
              <p className="text-sm opacity-80">Quizzes</p>
            </Link>

            {/* Lessons */}
            <Link
              href="/ecoquest/lessons"
              className="card flex flex-col items-center justify-center p-4"
              style={{
                background: "var(--reef-card)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.15)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <p className="text-xl font-bold">{lessonsCompleted}</p>
              <p className="text-sm opacity-80">Lessons</p>
            </Link>

          </div>
        </div>

        {/* LEADERBOARD CARD */}
        <Link
          href="/ecoquest/leaderboard"
          className="card block"
          style={{
            background: "var(--reef-card)",
            borderRadius: "20px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
          }}
        >
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--reef-accent)" }}
          >
            Leaderboard
          </h3>

          <p className="text-sm opacity-80 mb-1">
            Your Rank
          </p>

          <p className="text-2xl font-bold mb-2">
            #{userRank}
          </p>

          <p className="text-sm opacity-60">
            Out of {totalPlayers} explorers
          </p>
        </Link>

      </main>
    </div>
  );
}
