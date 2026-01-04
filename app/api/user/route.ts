import { NextRequest, NextResponse } from "next/server";
import { findUserByPiUid, createUserFromPi } from "@/lib/repositories/userRepo";

// Extract Pi identity from headers
function getPiAuth(req: NextRequest) {
  const piUid = req.headers.get("x-pi-uid");
  const username = req.headers.get("x-pi-username");

  if (!piUid || !username) return null;
  return { piUid, username };
}

// GET /api/user → load or create user
export async function GET(req: NextRequest) {
  const auth = getPiAuth(req);

  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { piUid, username } = auth;

console.log("Reached /api/user with:", piUid, username);

  // Try to load user
  let user = await findUserByPiUid(piUid);

  // If not found → create new user
  if (!user) {
    user = await createUserFromPi(piUid, username);
  }

  return NextResponse.json(user);
}
