"use client";

import { useLanguage } from "@/app/language-provider";
import type { Language } from "@/lib/translations";

const LANGUAGES: { value: Language; flag: string }[] = [
  { value: "en", flag: "🇬🇧" },
  { value: "fr", flag: "🇫🇷" },
  { value: "es", flag: "🇪🇸" },
  { value: "ko", flag: "🇰🇷" },
  { value: "vi", flag: "🇻🇳" },
  { value: "zh", flag: "🇨🇳" },
  { value: "id", flag: "🇮🇩" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.value}
          onClick={() => setLanguage(lang.value)}
          className={`transition ${
            language === lang.value ? "opacity-100" : "opacity-40 hover:opacity-80"
          }`}
        >
          <span>{lang.flag}</span>
        </button>
      ))}
    </div>
  );
}
