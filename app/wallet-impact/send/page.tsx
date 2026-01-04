"use client";

import { useTranslate } from "@/app/useTranslate";
import { useUserProfile } from "@/app/useUserProfile";
import Link from "next/link";
import { useState } from "react";

export default function SendPage() {
  const t = useTranslate();
  const { profile, loaded } = useUserProfile();

  const [destination, setDestination] = useState("");
  const [amount, setAmount] = useState("");

  if (!loaded) return null;

  return (
    <div className="max-w-lg mx-auto p-4 space-y-10">

      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-sand-beige">{t("send.title")}</h1>

        <Link href="/wallet-impact">
          <span className="back-btn">← {t("send.back")}</span>
        </Link>
      </header>

      <section className="card space-y-2">
        <p className="text-sand-beige/70 text-sm">
          {t("send.yourBalance")}: {profile.balance ?? 0} $AIRLIE
        </p>
      </section>

      <section className="card space-y-2">
        <label className="text-sand-beige">{t("send.destination")}</label>
        <input
          className="input"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </section>

      <section className="card space-y-2">
        <label className="text-sand-beige">{t("send.amount")}</label>
        <input
          className="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </section>

      <Link href={`/wallet-impact/send/confirm?to=${destination}&amount=${amount}`}>
        <button className="primary-btn w-full">{t("send.continue")}</button>
      </Link>

      <div className="h-10" />
    </div>
  );
}
