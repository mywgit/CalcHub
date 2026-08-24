"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, LANGUAGES, TRANSLATIONS, LanguageOption } from "@/lib/i18n";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    // 1. Try to read from localStorage
    const saved = localStorage.getItem("calchub_lang") as Language | null;
    if (saved && TRANSLATIONS[saved]) {
      setLangState(saved);
      return;
    }

    // 2. Try to detect from browser locale
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === "es") setLangState("es");
    else if (browserLang === "pt") setLangState("pt");
    else if (browserLang === "de") setLangState("de");
    else if (browserLang === "fr") setLangState("fr");
    else if (browserLang === "ja") setLangState("ja");
    else if (browserLang === "zh") setLangState("zh");
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("calchub_lang", newLang);
    } catch {}
  };

  const t = (key: string): string => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
