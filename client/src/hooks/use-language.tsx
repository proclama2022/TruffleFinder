import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { translations, Language, TranslationKey } from "@/lib/translations";

type StringTranslationKey = {
  [K in TranslationKey]: (typeof translations)["it"][K] extends string ? K : never;
}[TranslationKey];

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: StringTranslationKey) => string;
  currentTranslations: (typeof translations)["it"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("it");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "it" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const t = (key: StringTranslationKey): string => {
    return (translations[language][key] as string) || (translations.it[key] as string) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currentTranslations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
