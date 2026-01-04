"use client";

import { useEffect, useState } from "react";

export interface UserProfile {
  username: string;
  bio: string;
  xp: number;
  airlie: number;
  avatar: string;
  theme: string;
  achievements: string[];
}

const DEFAULT_PROFILE: UserProfile = {
  username: "Reef Explorer",
  bio: "Protecting the ocean one quest at a time",
  xp: 0,
  airlie: 0,
  avatar: "/avatars/turtle.svg",
  theme: "reef-blue",
  achievements: [
    "🐢 Turtle Guardian — Completed your first quest",
    "🌊 Reef Protector — Joined Ari's Reef",
  ],
};

const STORAGE_KEY = "reef_user_profile";

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved =
        typeof window !== "undefined"
          ? window.localStorage.getItem(STORAGE_KEY)
          : null;

      if (saved) {
        const parsed = JSON.parse(saved);

        setProfile({
          ...DEFAULT_PROFILE,
          ...parsed,
          achievements: parsed.achievements || DEFAULT_PROFILE.achievements,
        });
      }
    } catch (e) {
      console.error("Failed to parse saved profile:", e);
    } finally {
      setLoaded(true);
    }
  }, []);

  function persist(next: UserProfile) {
    setProfile(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }

  function updateProfile(updates: Partial<UserProfile>) {
    const next = { ...profile, ...updates };
    persist(next);
  }

  function addXp(amount: number) {
    const oldLevel = Math.floor(profile.xp / 100);
    const newXp = profile.xp + amount;
    const newLevel = Math.floor(newXp / 100);

    const next = { ...profile, xp: newXp };
    persist(next);

    return newLevel > oldLevel;
  }

  function addAirlie(amount: number) {
    const next = { ...profile, airlie: profile.airlie + amount };
    persist(next);
  }

  function addAchievement(label: string) {
    if (profile.achievements.includes(label)) return;

    const next = {
      ...profile,
      achievements: [...profile.achievements, label],
    };

    persist(next);
  }

  return {
    profile,
    updateProfile,
    addXp,
    addAirlie,
    addAchievement,
    loaded,
  };
}
