"use client";

import { useTranslate } from "@/app/useTranslate";
import Link from "next/link";

export default function ProjectPage({ params }) {
  const t = useTranslate();
  const { id } = params;

  const project = {
    coralwatch: {
      name: "CoralWatch",
      mission: "Restoring coral reefs through monitoring and education."
    },
    seashepherd: {
      name: "Sea Shepherd",
      mission: "Defending marine wildlife worldwide."
    },
    reefcheck: {
      name: "Reef Check",
      mission: "Empowering citizen scientists to protect reefs."
    }
  }[id];

  return (
    <div className="max-w-lg mx-auto p-4 space-y-10">

      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-sand-beige">{project.name}</h1>

        <Link href="/wallet-impact/ngos">
          <span className="back-btn">← Back</span>
        </Link>
      </header>

      <section className="card space-y-2">
        <h2 className="section-title">{t("project.mission")}</h2>
        <p className="text-sand-beige/80">{project.mission}</p>
      </section>

      <Link href={`/wallet-impact/donate/${id}`}>
        <button className="primary-btn w-full">{t("project.donate")}</button>
      </Link>

      <div className="h-10" />
    </div>
  );
}
