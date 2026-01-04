"use client";

import { useTranslate } from "@/app/useTranslate";
import { useUserProfile } from "@/app/useUserProfile";
import Link from "next/link";

export default function ActivityPage() {
  const t = useTranslate();
  const { profile, loaded } = useUserProfile();

  if (!loaded) return null;

  const activityList = profile.activity ?? [];

  return (
    <div className="max-w-lg mx-auto p-4 space-y-10">

      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-sand-beige">
          {t("activityPage.title")}
        </h1>

        <Link href="/wallet-impact">
          <span className="back-btn">← Back</span>
        </Link>
      </header>

      {activityList.length === 0 && (
        <section className="card text-center py-6">
          <p className="text-sand-beige/70">{t("activityPage.empty")}</p>
        </section>
      )}

      <section className="space-y-4">
        {activityList.map((entry, i) => (
          <div key={i} className="card flex items-start gap-3 py-4">

            <div className="text-2xl">🌊</div>

            <div className="flex-1">
              <p className="text-sand-beige">
                {entry.type === "donation" &&
                  `${t("activityPage.donation")} ${entry.amount} $AIRLIE`}
                {entry.type === "reward" &&
                  `${t("activityPage.reward")}: ${entry.badge}`}
                {entry.type === "transfer" &&
                  `${t("activityPage.transfer")} ${entry.amount} $AIRLIE`}
              </p>

              <p className="text-sand-beige/60 text-xs mt-1">
                {new Date(entry.date).toLocaleDateString()}
              </p>
            </div>

          </div>
        ))}
      </section>

      <div className="h-10" />
    </div>
  );
}
