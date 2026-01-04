"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Language } from "@/lib/translations";

interface LangContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Language | null;
    if (saved) setLanguageState(saved);
  }, []);

  const setLanguage = (lang: Language) => {
    window.localStorage.setItem("lang", lang);
    setLanguageState(lang);
  };

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
