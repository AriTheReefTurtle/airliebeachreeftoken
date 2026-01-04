"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  const lessonId = params.id;

  // Temporary lesson data — replace with real lessons later
  const lessons = {
    "1": {
      title: "Intro to Coral Reefs",
      xp: 120,
      airlie: 2,
      content: [
        "Coral reefs are diverse underwater ecosystems.",
        "They support 25% of all marine life.",
        "Reefs protect coastlines from storms and erosion.",
      ],
    },
    "2": {
      title: "Marine Food Chains",
      xp: 150,
      airlie: 3,
      content: [
        "Energy flows from producers to consumers.",
        "Plankton forms the base of many marine food chains.",
        "Predators help maintain ecological balance.",
      ],
    },
    "3": {
      title: "Ocean Conservation",
      xp: 180,
      airlie: 4,
      content: [
        "Human activity impacts marine ecosystems.",
        "Reducing pollution helps protect ocean life.",
        "Conservation efforts restore damaged habitats.",
      ],
    },
  };

  const lesson = lessons[lessonId];

  if (!lesson) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--reef-bg)", color: "var(--reef-text)" }}
      >
        Lesson not found
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
            href="/ecoquest/lessons"
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
            {lesson.title}
          </h1>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-lg mx-auto px-4 pb-10 space-y-8">

        {/* Lesson Info Card */}
        <div
          className="card"
          style={{
            background: "var(--reef-card)",
            borderRadius: "20px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <h2 className="text-lg font-semibold mb-4">Lesson Content</h2>

          <ul className="space-y-3">
            {lesson.content.map((line, index) => (
              <li key={index} className="text-sm opacity-90">
                • {line}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between">
            <span className="opacity-80">XP</span>
            <span className="font-bold">{lesson.xp}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span className="opacity-80">AIRLIE</span>
            <span className="font-bold">{lesson.airlie}</span>
          </div>
        </div>

        {/* Complete Button */}
        <button
          className="w-full py-3 text-center font-semibold rounded-xl"
          style={{
            background: "var(--reef-accent)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => alert("Lesson completion flow coming soon!")}
        >
          Mark as Completed
        </button>

      </main>
    </div>
  );
}
