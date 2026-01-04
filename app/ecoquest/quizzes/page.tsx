"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function QuizzesPage() {
  // Temporary quiz data — replace with real quizzes later
  const quizzes = [
    {
      id: 1,
      title: "Ocean Basics",
      description: "Test your knowledge of ocean ecosystems.",
      xp: 150,
      status: "available",
    },
    {
      id: 2,
      title: "Coral Identification",
      description: "Can you recognize different coral species?",
      xp: 200,
      status: "completed",
    },
    {
      id: 3,
      title: "Marine Wildlife",
      description: "Learn about the creatures that inhabit the reef.",
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
            Quizzes
          </h1>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-lg mx-auto px-4 pb-10 space-y-6">
        {quizzes.map((quiz) => {
          const isLocked = quiz.status === "locked";

          return (
            <Link
              key={quiz.id}
              href={isLocked ? "#" : `/ecoquest/quizzes/${quiz.id}`}
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
                  {quiz.title}
                </h2>

                <p className="text-sm opacity-80 mb-3">
                  {quiz.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-80">
                    {quiz.xp} XP
                  </span>

                  <span
                    className="text-sm font-semibold"
                    style={statusStyles[quiz.status]}
                  >
                    {quiz.status === "available" && "Available"}
                    {quiz.status === "completed" && "Completed"}
                    {quiz.status === "locked" && "Locked"}
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
