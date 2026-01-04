"use client";

import { useTranslate } from "@/app/useTranslate";
import { useUserProfile } from "@/app/useUserProfile";
import Link from "next/link";

export default function ReceivePage() {
  const t = useTranslate();
  const { profile, loaded } = useUserProfile();

  if (!loaded) return null;

  return (
    <div className="max-w-lg mx-auto p-4 space-y-10">

      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-sand-beige">{t("receive.title")}</h1>

        <Link href="/wallet-impact">
          <span className="back-btn">← Back</span>
        </Link>
      </header>

      <section className="card space-y-2">
        <p className="text-sand-beige/70">{t("receive.yourAddress")}</p>
        <p className="text-sand-beige font-mono break-all">{profile.address}</p>
      </section>

      <section className="card text-center py-6">
        <p className="text-sand-beige/70">{t("receive.generating")}</p>
      </section>

      <button className="primary-btn w-full">{t("receive.copy")}</button>

      <section className="card space-y-2">
        <h2 className="section-title">{t("receive.instructionsTitle")}</h2>
        <ul className="list-disc pl-5 text-sand-beige/80 text-sm space-y-1">
          <li>{t("receive.instructions.share")}</li>
          <li>{t("receive.instructions.send")}</li>
          <li>{t("receive.instructions.activity")}</li>
        </ul>
      </section>

      <div className="h-10" />
    </div>
  );
}
