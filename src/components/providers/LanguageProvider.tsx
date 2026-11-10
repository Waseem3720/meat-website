"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Language, type SiteContent } from "@/lib/content";

type LanguageContextValue = {
  language: Language;
  dir: "rtl" | "ltr";
  isRtl: boolean;
  t: SiteContent;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");
  const dir: "rtl" | "ltr" = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = dir;
  }, [language, dir]);

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === "ar" ? "en" : "ar"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      dir,
      isRtl: dir === "rtl",
      t: content[language],
      setLanguage,
      toggleLanguage,
    }),
    [language, dir, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
