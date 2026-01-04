// lib/repositories/userRepo.ts

import { db } from "../db";
import type { User, Theme, Language } from "../models/user";

export async function findUserByPiUid(piUid: string): Promise<User | null> {
  const row = await db.user.findByPiUid(piUid);
  return row ? mapRowToUser(row) : null;
}

export async function createUserFromPi(
  piUid: string,
  username: string
): Promise<User> {
  const now = new Date().toISOString();

  const row = await db.user.create({
    pi_uid: piUid,
    username,
    xp: 0,
    airlie_balance: 0,
    theme: "reef",
    language: "en",
    region: null,
    created_at: now,
    updated_at: now,
  });

  return mapRowToUser(row);
}

export async function updateUserPreferences(
  id: string,
  {
    theme,
    language,
    region,
  }: { theme?: Theme; language?: Language; region?: string | null }
): Promise<User> {
  const now = new Date().toISOString();

  const row = await db.user.updateById(id, {
    ...(theme ? { theme } : {}),
    ...(language ? { language } : {}),
    ...(region !== undefined ? { region } : {}),
    updated_at: now,
  });

  return mapRowToUser(row);
}

export async function adjustUserXp(
  id: string,
  deltaXp: number
): Promise<User> {
  // Implementation depends on your DB; this is a placeholder.
  // In a real DB you’d do: UPDATE users SET xp = xp + deltaXp WHERE id = ...
  const user = await getUserById(id);
  const newXp = Math.max(0, user.xp + deltaXp);

  const row = await db.user.updateById(id, {
    xp: newXp,
    updated_at: new Date().toISOString(),
  });

  return mapRowToUser(row);
}

export async function adjustUserAirlie(
  id: string,
  deltaAirlie: number
): Promise<User> {
  const user = await getUserById(id);
  const newBalance = Math.max(0, user.airlieBalance + deltaAirlie);

  const row = await db.user.updateById(id, {
    airlie_balance: newBalance,
    updated_at: new Date().toISOString(),
  });

  return mapRowToUser(row);
}

// --- internals ---

async function getUserById(id: string): Promise<User> {
  // You can add db.user.findById here when you implement it
  throw new Error("getUserById not implemented");
}

function mapRowToUser(row: any): User {
  return {
    id: row.id,
    piUid: row.pi_uid,
    username: row.username,
    xp: row.xp,
    airlieBalance: row.airlie_balance,
    theme: row.theme,
    language: row.language,
    region: row.region,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}
