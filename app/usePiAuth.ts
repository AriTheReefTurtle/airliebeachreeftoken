"use client";

import { useEffect, useState } from "react";
import { initPi } from "@/lib/pi";

export function usePiAuth() {
  const [user, setUser] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("pi_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved Pi user:", e);
      }
    }
    setLoaded(true);
  }, []);

  async function login() {
    const Pi = initPi();
    if (!Pi) {
      console.warn("Pi SDK not loaded");
      return;
    }

    const scopes = ["username", "payments", "wallet_address"];

    try {
      const auth = await Pi.authenticate(scopes, onIncompletePaymentFound);

      // Save user to state + localStorage
      setUser(auth.user);
      localStorage.setItem("pi_user", JSON.stringify(auth.user));

      return auth.user;
    } catch (err) {
      console.error("Pi authentication failed:", err);
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("pi_user");
  }

  function onIncompletePaymentFound(payment: any) {
    console.log("Incomplete payment found:", payment);
  }

  return { user, login, logout, loaded };
}
