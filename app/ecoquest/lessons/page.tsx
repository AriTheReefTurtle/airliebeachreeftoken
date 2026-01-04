"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LessonsPage() {
  // Temporary lesson data — replace with real lessons later
  const lessons = [
    {
      id: 1,
      title: "Intro to Coral Reefs",
      description: "Learn the basics of coral ecosystems and why they matter.",
      xp: 120,
      status: "available",
    },
    {
      id: 2,
      title: "Marine Food Chains",
      description: "Understand how energy flows through ocean life.",
      xp: 150,
      status: "completed",
    },
    {
      id: 3,
      title: "Ocean Conservation",
      description: "Discover how human actions impact marine habitats.",
      xp: 180,
      status: "locked",
    },
  ];

  // Correct React style objects
  const statusStyles: Record<string, React.CSSProperties> = {
    available: { color: "var(--reef-accent)", opacity: 1 },
    completed: { color: "var(--reef-text)", opacity: 0.6 },
    locked: { color: "var(--reef-text)", opacity: 0.3 },
  };

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
            Lessons
          </h1>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-lg mx-auto px-4 pb-10 space-y-6">
        {lessons.map((lesson) => {
          const isLocked = lesson.status === "locked";

          return (
            <Link
              key={lesson.id}
              href={isLocked ? "#" : `/ecoquest/lessons/${lesson.id}`}
              className="block"
              style={{
                textDecoration: "none",
                pointerEvents: isLocked ? "none" : "auto",
              }}
            >
              <div
                className="card"
                style={{
                  background: "var(--reef-card)",
                  borderRadius: "20px",
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  cursor: isLocked ? "not-allowed" : "pointer",
                  opacity: isLocked ? 0.5 : 1,
                }}
              >
                <h2 className="text-lg font-semibold mb-1">
                  {lesson.title}
                </h2>

                <p className="text-sm opacity-80 mb-3">
                  {lesson.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-80">
                    {lesson.xp} XP
                  </span>

                  <span
                    className="text-sm font-semibold"
                    style={statusStyles[lesson.status]}
                  >
                    {lesson.status === "available" && "Available"}
                    {lesson.status === "completed" && "Completed"}
                    {lesson.status === "locked" && "Locked"}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </main>
    </div>
  );
}
