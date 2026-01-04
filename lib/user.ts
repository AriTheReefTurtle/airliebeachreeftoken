// lib/models/user.ts

export type Theme = "light" | "dark" | "reef";
export type Language = "en" | "fr" | "es" | "ko" | "vi" | "id" | "zh";

export interface User {
  id: string;                // internal UUID
  piUid: string;             // Pi Network user id (from Pi auth)
  username: string;
  xp: number;
  airlieBalance: number;     // AIRLIE token balance (off-chain for now)
  theme: Theme;
  language: Language;
  region: string | null;
  createdAt: string;         // ISO string
  updatedAt: string;         // ISO string
}
