"use client";

import { useTranslate } from "@/app/useTranslate";
import { useUserProfile } from "@/app/useUserProfile";
import Link from "next/link";

export default function WalletImpactPage() {
  const t = useTranslate();
  const { profile, loaded } = useUserProfile();

  if (!loaded) return null;

  const restored = profile.impact?.restored ?? 0;
  const rescued = profile.impact?.rescued ?? 0;
  const wasteRemoved = profile.impact?.wasteRemoved ?? 0;

  return (
    <div className="max-w-lg mx-auto p-4 space-y-10">

      {/* Header with BACK button */}
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-sand-beige">
          {t("walletImpact.title")}
        </h1>

        <Link href="/">
          <span className="back-btn">← Back</span>
        </Link>
      </header>

      {/* Balance Card */}
      <section className="card space-y-2">
        <p className="text-sand-beige/70 text-sm">
          {t("walletImpact.balance.yourBalance")}
        </p>
        <p className="text-sand-beige text-3xl font-bold">
          {profile.balance ?? 0} $AIRLIE
        </p>
        <p className="text-sand-beige/70 text-sm">
          {profile.xp ?? 0} {t("walletImpact.balance.xp")}
        </p>
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-3 gap-4">
        <Link href="/wallet-impact/send">
          <div className="card py-4 text-center cursor-pointer hover:bg-white/10 transition">
            <span className="text-sand-beige font-semibold">
              {t("walletImpact.actions.send")}
            </span>
          </div>
        </Link>

        <Link href="/wallet-impact/receive">
          <div className="card py-4 text-center cursor-pointer hover:bg-white/10 transition">
            <span className="text-sand-beige font-semibold">
              {t("walletImpact.actions.receive")}
            </span>
          </div>
        </Link>

        <Link href="/wallet-impact/activity">
          <div className="card py-4 text-center cursor-pointer hover:bg-white/10 transition">
            <span className="text-sand-beige font-semibold">
              {t("walletImpact.actions.activity")}
            </span>
          </div>
        </Link>
      </section>

      {/* Achievements */}
      <section className="card space-y-3">
        <h2 className="section-title">{t("walletImpact.achievements.title")}</h2>

        {profile.achievements?.length ? (
          <ul className="space-y-2">
            {profile.achievements.map((a, i) => (
              <li key={i} className="text-sand-beige">{a}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sand-beige/70 text-sm">
            {t("walletImpact.achievements.empty")}
          </p>
        )}
      </section>

      {/* Community Impact */}
      <section className="card space-y-3">
        <h2 className="section-title">
          {t("walletImpact.impact.communityImpact")}
        </h2>

        <p className="text-sand-beige">
          {restored} {t("walletImpact.impact.restored")}
        </p>
        <p className="text-sand-beige">
          {rescued} {t("walletImpact.impact.rescued")}
        </p>
        <p className="text-sand-beige">
          {wasteRemoved} {t("walletImpact.impact.wasteRemoved")}
        </p>
      </section>

      {/* Spacing before NGO card */}
      <div className="h-2" />

      {/* NGOs */}
      <Link href="/wallet-impact/ngos">
        <div className="card cursor-pointer hover:bg-white/10 transition py-4 text-center">
          <span className="text-sand-beige font-semibold">
            {t("walletImpact.ngos.explore")}
          </span>
        </div>
      </Link>

      <div className="h-10" />
    </div>
  );
}
