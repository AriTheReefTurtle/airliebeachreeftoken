"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function QuizEnginePage({ params }: { params: { id: string } }) {
  const quizId = params.id;

  // Temporary quiz data — replace with real data later
  const quizzes = {
    "1": {
      title: "Ocean Basics",
      xp: 150,
      airlie: 3,
      questions: [
        {
          question: "What percentage of Earth’s oxygen comes from the ocean?",
          options: ["10%", "30%", "50%", "70%"],
          answer: 3,
        },
        {
          question: "What is the largest ocean on Earth?",
          options: ["Atlantic", "Indian", "Pacific", "Arctic"],
          answer: 2,
        },
        {
          question: "Coral reefs are made of:",
          options: ["Plants", "Animals", "Rocks", "Algae"],
          answer: 1,
        },
      ],
    },
  };

  const quiz = quizzes[quizId];

  const [step, setStep] = useState<"start" | "question" | "result">("start");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  if (!quiz) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--reef-bg)", color: "var(--reef-text)" }}
      >
        Quiz not found
      </div>
    );
  }

  const question = quiz.questions[current];

  const handleAnswer = (index: number) => {
    if (index === question.answer) {
      setScore(score + 1);
    }

    if (current + 1 < quiz.questions.length) {
      setCurrent(current + 1);
    } else {
      setStep("result");
    }
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
            href="/ecoquest/quizzes"
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
            {quiz.title}
          </h1>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-lg mx-auto px-4 pb-10 space-y-8">

        {/* START SCREEN */}
        {step === "start" && (
          <div
            className="card text-center"
            style={{
              background: "var(--reef-card)",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h2 className="text-xl font-semibold mb-4">
              Ready to begin?
            </h2>

            <p className="opacity-80 mb-6">
              {quiz.questions.length} questions • {quiz.xp} XP • {quiz.airlie} AIRLIE
            </p>

            <button
              className="w-full py-3 text-center font-semibold rounded-xl"
              style={{
                background: "var(--reef-accent)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setStep("question")}
            >
              Start Quiz
            </button>
          </div>
        )}

        {/* QUESTION SCREEN */}
        {step === "question" && (
          <div
            className="card"
            style={{
              background: "var(--reef-card)",
              borderRadius: "20px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <p className="text-sm opacity-70 mb-2">
              Question {current + 1} of {quiz.questions.length}
            </p>

            <h2 className="text-lg font-semibold mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((opt, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-3 rounded-xl font-medium"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleAnswer(index)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* RESULT SCREEN */}
        {step === "result" && (
          <div
            className="card text-center"
            style={{
              background: "var(--reef-card)",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h2 className="text-xl font-semibold mb-4">
              Quiz Completed!
            </h2>

            <p className="text-lg mb-2">
              Score: {score} / {quiz.questions.length}
            </p>

            <p className="opacity-80 mb-6">
              You earned {quiz.xp} XP and {quiz.airlie} AIRLIE
            </p>

            <Link
              href="/ecoquest/quizzes"
              className="block w-full py-3 text-center font-semibold rounded-xl"
              style={{
                background: "var(--reef-accent)",
                color: "#fff",
                border: "none",
              }}
            >
              Back to Quizzes
            </Link>
          </div>
        )}

      </main>
    </div>
  );
}
