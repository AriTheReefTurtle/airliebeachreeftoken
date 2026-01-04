import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { User } from "@/lib/models/user";

export async function POST(req: Request) {
  try {
    const { accessToken } = await req.json();

    if (!accessToken) {
      return NextResponse.json(
        { error: "Missing accessToken" },
        { status: 400 }
      );
    }

    // Verify token with Pi servers
    const verifyRes = await fetch("https://api.minepi.com/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!verifyRes.ok) {
      return NextResponse.json(
        { error: "Invalid Pi token" },
        { status: 401 }
      );
    }

    const piUser = await verifyRes.json();

    const piUid = piUser.uid;
    const username = piUser.username;

    // 1. Check if user exists
    let user = await db.user.findByPiUid(piUid);

    // 2. Create user if not found
    if (!user) {
      const now = new Date().toISOString();

      const newUser: User = {
        id: crypto.randomUUID(),
        piUid,
        username,
        xp: 0,
        airlieBalance: 0,
        theme: "reef",
        language: "en",
        region: null,
        createdAt: now,
        updatedAt: now,
      };

      user = await db.user.create(newUser);
    }

    // 3. Return user
    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Pi verification error:", error);
    return NextResponse.json(
      { error: "Server error verifying Pi token" },
      { status: 500 }
    );
  }
}
