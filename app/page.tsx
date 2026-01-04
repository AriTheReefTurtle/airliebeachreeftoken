"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslate } from "./useTranslate";
import { piLogin } from "@/lib/pi-login";
import { useCurrentUser } from "@/lib/useCurrentUser"; // ← Step 7.2

export default function HomePage() {
  const t = useTranslate();
  const user = useCurrentUser(); // ← Step 7.2

  return (
    <div className="max-w-lg mx-auto p-4 space-y-8">

      {/* Header */}
      <header className="flex items-center justify-between">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/airlie.png"
            alt="Ari Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="font-bold text-xl text-sand-beige">
            {t("reefHubWelcome")}
          </h1>
        </div>

        {/* Right: Pi Login + Profile */}
        <div className="flex items-center gap-3">

          {/* Step 7.3 — Hide login button if logged in */}
          {!user && (
            <button
              id="pi-login"
              onClick={piLogin}
              className="px-3 py-1 rounded-md bg-primary text-white text-sm font-semibold hover:opacity-90 transition"
            >
              Sign in with Pi
            </button>
          )}

          {/* Step 7.3 — Show username when logged in */}
          {user && (
            <span className="text-sand-beige text-sm opacity-80">
              {user.username}
            </span>
          )}

          {/* Profile Icon */}
          <Link href="/profile">
            <Image
              src="/profile-icon.svg"
              alt="Profile"
              width={36}
              height={36}
              className="cursor-pointer opacity-90 hover:opacity-100 transition"
            />
          </Link>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="space-y-2">
        <h2 className="text-3xl font-bold text-sand-beige">{t("welcomeTitle")}</h2>
        <p className="text-sand-beige/80 text-sm">{t("welcomeMessage")}</p>
      </section>

      {/* Navigation Grid */}
      <section className="grid grid-cols-1 gap-4 mt-6">

        {/* Wallet */}
        <Link href="/wallet-impact">
          <div className="card cursor-pointer">
            <h3 className="text-lg font-semibold text-sand-beige">
              💰 {t("walletCardTitle")}
            </h3>
            <p className="text-sand-beige/70 text-sm mt-1">
              {t("walletCardDesc")}
            </p>
          </div>
        </Link>

        {/* EcoQuest */}
        <Link href="/ecoquest">
          <div className="card cursor-pointer">
            <h3 className="text-lg font-semibold text-sand-beige">
              🐢 {t("ecoQuestCardTitle")}
            </h3>
            <p className="text-sand-beige/70 text-sm mt-1">
              {t("ecoQuestCardDesc")}
            </p>
          </div>
        </Link>

        {/* Marketplace */}
        <Link href="/marketplace">
          <div className="card cursor-pointer">
            <h3 className="text-lg font-semibold text-sand-beige">
              🛒 {t("marketplaceCardTitle")}
            </h3>
            <p className="text-sand-beige/70 text-sm mt-1">
              {t("marketplaceCardDesc")}
            </p>
          </div>
        </Link>

        {/* Map Hub */}
        <Link href="/map-hub">
          <div className="card cursor-pointer">
            <h3 className="text-lg font-semibold text-sand-beige">
              🗺️ {t("mapHubCardTitle")}
            </h3>
            <p className="text-sand-beige/70 text-sm mt-1">
              {t("mapHubCardDesc")}
            </p>
          </div>
        </Link>

      </section>

      {/* Bottom Language Toggle */}
      <div className="flex justify-center mt-10 mb-6">
        <LanguageToggle />
      </div>
    </div>
  );
}
