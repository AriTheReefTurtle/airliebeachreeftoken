"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUserProfile } from "../useUserProfile";
import EditProfileModal from "@/components/EditProfileModal";
import LevelUpModal from "@/components/LevelUpModal";
import AchievementPopup from "@/components/AchievementPopup";

export default function ProfilePage() {
  const { profile, addXp, addAirlie, addAchievement, updateProfile, loaded } =
    useUserProfile();

  const [editing, setEditing] = useState(false);
  const [levelUp, setLevelUp] = useState(false);
  const [achievementPopup, setAchievementPopup] = useState<string | null>(null);

  if (!loaded) return null;

  const level = Math.floor(profile.xp / 100);
  const xpProgress = ((profile.xp % 100) / 100) * 100;

  // XP handler with level-up detection
  function handleAddXp() {
    const didLevelUp = addXp(10);
    if (didLevelUp) {
      setLevelUp(true);
      unlockAchievement(`🌟 Level ${level + 1} Achieved`);
    }
  }

  // Achievement unlock handler
  function unlockAchievement(label: string) {
    addAchievement(label);
    setAchievementPopup(label);

    setTimeout(() => {
      setAchievementPopup(null);
    }, 2500);
  }

  return (
    <div className="max-w-lg mx-auto p-4 space-y-8">

      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-sand-beige">Your Profile</h1>

        <Link href="/">
          <span className="text-sand-beige/80 hover:text-sand-beige transition text-sm cursor-pointer">
            ← Back
          </span>
        </Link>
      </header>

      {/* Profile Info */}
      <section className="flex flex-col items-center text-center space-y-3">

        {/* Avatar with XP Ring */}
        <div className={`avatar-ring ${levelUp ? "level-up" : ""}`}>
          <Image
            src={profile.avatar}
            alt="Avatar"
            width={90}
            height={90}
            className="rounded-full"
          />
        </div>

        <h2 className="text-xl font-semibold text-sand-beige">
          {profile.username}
        </h2>

        <p className="text-sand-beige/70 text-sm">
          {profile.bio}
        </p>

        <p className="text-sand-beige/80 text-sm">
          Level <span className="font-bold">{level}</span>
        </p>

        <button
          onClick={() => setEditing(true)}
          className="px-4 py-1 rounded-lg bg-reef-blue text-sand-beige text-sm hover:opacity-90 transition"
        >
          Edit Profile
        </button>
      </section>

      {/* XP Progress Bar */}
      <div className="w-full px-6">
        <div className="xp-bar">
          <div
            className="xp-fill"
            style={{ width: `${xpProgress}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4">
        <div className="card text-center">
          <h3 className="text-lg font-semibold text-sand-beige">XP</h3>
          <p className="text-2xl font-bold text-reef-blue">{profile.xp}</p>

          <button
            onClick={handleAddXp}
            className="mt-2 px-3 py-1 text-xs rounded-lg bg-reef-blue text-sand-beige hover:opacity-90 transition"
          >
            +10 XP
          </button>
        </div>

        <div className="card text-center">
          <h3 className="text-lg font-semibold text-sand-beige">$AIRLIE</h3>
          <p className="text-2xl font-bold text-turtle-green">
            {profile.airlie.toLocaleString()}
          </p>

          <button
            onClick={() => addAirlie(1)}
            className="mt-2 px-3 py-1 text-xs rounded-lg bg-turtle-green text-sand-beige hover:opacity-90 transition"
          >
            +1 $AIRLIE
          </button>
        </div>
      </section>

      {/* Achievements */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-sand-beige">Achievements</h3>

        {profile.achievements.length === 0 && (
          <div className="card">
            <p className="text-sand-beige/70 text-sm">
              No achievements yet — start exploring the reef!
            </p>
          </div>
        )}

        {profile.achievements.map((achievement, index) => (
          <div key={index} className="card">
            <p className="text-sand-beige">{achievement}</p>
          </div>
        ))}
      </section>

      {/* Settings */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-sand-beige">Settings</h3>

        <div
          className="card cursor-pointer"
          onClick={() => setEditing(true)}
        >
          <p className="text-sand-beige">Edit Profile</p>
        </div>
      </section>

      {/* Modals */}
      <EditProfileModal
        open={editing}
        onClose={() => setEditing(false)}
        profile={profile}
        onSave={updateProfile}
      />

      <LevelUpModal
        open={levelUp}
        level={level}
        onClose={() => setLevelUp(false)}
      />

      {/* Achievement Popup */}
      <AchievementPopup
        open={achievementPopup !== null}
        label={achievementPopup || ""}
      />

      <div className="h-10" />
    </div>
  );
}
