"use client";

import { useTranslate } from "@/app/useTranslate";
import { useUserProfile } from "@/app/useUserProfile";
import Link from "next/link";
import Image from "next/image";

export default function NGOListPage() {
  const t = useTranslate();
  const { loaded } = useUserProfile();
  if (!loaded) return null;

  const ngos = [
    { id: "coralwatch", name: "CoralWatch", mission: "Restoring coral reefs.", logo: "/ngos/coralwatch.png" },
    { id: "seashepherd", name: "Sea Shepherd", mission: "Protecting marine wildlife.", logo: "/ngos/seashepherd.png" },
    { id: "reefcheck", name: "Reef Check", mission: "Citizen science for reefs.", logo: "/ngos/reefcheck.png" }
  ];

  return (
    <div className="max-w-lg mx-auto p-4 space-y-10">

      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-sand-beige">
          {t("walletImpact.ngos.directoryTitle")}
        </h1>

        <Link href="/wallet-impact">
          <span className="back-btn">← Back</span>
        </Link>
      </header>

      <section className="space-y-4">
        {ngos.map((ngo) => (
          <div key={ngo.id} className="card flex items-center gap-4 py-4">

            <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-white/10">
              <Image src={ngo.logo} alt={ngo.name} fill className="object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="text-sand-beige font-semibold text-lg">{ngo.name}</h3>
              <p className="text-sand-beige/70 text-sm">{ngo.mission}</p>
            </div>

            <Link href={`/wallet-impact/project/${ngo.id}`}>
              <div className="view-btn">{t("walletImpact.ngos.view")}</div>
            </Link>

          </div>
        ))}
      </section>

      <div className="h-10" />
    </div>
  );
}

