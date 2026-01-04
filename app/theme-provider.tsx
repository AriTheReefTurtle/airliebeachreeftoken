"use client";

import { useEffect } from "react";
import { useUserProfile } from "./useUserProfile";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { profile, loaded } = useUserProfile();

  useEffect(() => {
    if (!loaded) return;

    // Remove old theme classes but KEEP all other Tailwind/global classes
    document.body.classList.remove("light", "dark");

    // Add the new theme class
    document.body.classList.add(profile.theme);
  }, [loaded, profile.theme]);

  if (!loaded) return null;

  return <>{children}</>;
}
