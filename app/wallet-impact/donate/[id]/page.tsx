"use client";

import { useTranslate } from "@/app/useTranslate";
import Link from "next/link";
import { useState } from "react";

export default function DonatePage({ params }) {
  const t = useTranslate();
  const { id } = params;

  const [amount, setAmount] = useState("");

  return (
    <div className="max-w-lg mx-auto p-4 space-y-10">

      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-sand-beige">{t("donate.title")}</h1>

        <Link href={`/wallet-impact/project/${id}`}>
          <span className="back-btn">← Back</span>
        </Link>
      </header>

      <section className="card space-y-2">
        <label className="text-sand-beige">{t("donate.amount")}</label>
        <input
          className="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </section>

      <Link href={`/wallet-impact/donate/${id}/confirm?amount=${amount}`}>
        <button className="primary-btn w-full">{t("donate.confirm")}</button>
      </Link>

      <div className="h-10" />
    </div>
  );
}
