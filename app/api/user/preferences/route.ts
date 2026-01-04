// app/api/user/preferences/route.ts

import { NextRequest, NextResponse } from "next/server";
import { updateUserPreferences, findUserByPiUid } from "@/lib/repositories/userRepo";
import type { Theme, Language } from "@/lib/models/user";

function getPiAuthFromRequest(req: NextRequest): { piUid: string } | null {
  const piUid = req.headers.get("x-pi-uid");
  if (!piUid) return null;
  return { piUid };
}

// PATCH /api/user/preferences
export async function PATCH(req: NextRequest) {
  const auth = getPiAuthFromRequest(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await findUserByPiUid(auth.piUid);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const body = await req.json();

  const theme = body.theme as Theme | undefined;
  const language = body.language as Language | undefined;
  const region = body.region as string | null | undefined;

  const updated = await updateUserPreferences(user.id, { theme, language, region });

  return NextResponse.json(updated);
}
