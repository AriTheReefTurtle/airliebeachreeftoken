"use client";

import { useLanguage } from "./language-provider";
import { translations } from "@/lib/translations";

export function useTranslate() {
  const { language } = useLanguage();

  return function t(key: string) {
    const parts = key.split(".");
    let value: any = translations[language];

    for (const part of parts) {
      value = value?.[part];
      if (value === undefined) break;
    }

    // fallback to English
    if (value === undefined) {
      value = translations["en"];
      for (const part of parts) {
        value = value?.[part];
        if (value === undefined) break;
      }
    }

    return value ?? key;
  };
}
