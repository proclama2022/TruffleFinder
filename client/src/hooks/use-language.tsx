import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { translations } from '../lib/translations';
import type { Language, TranslationKey } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
  currentTranslations: typeof translations["it"]; // Aggiungo questa riga per esporre le traduzioni complete
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

  const t = (key: TranslationKey): string => {
    const langDict = translations[language] as unknown as Record<TranslationKey, string | { title: string }>;
    const value = langDict[key] ?? translations.it[key] ?? key;
    return typeof value === 'string' ? value : value.title;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currentTranslations: translations[language] as typeof translations["it"] }}>
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
