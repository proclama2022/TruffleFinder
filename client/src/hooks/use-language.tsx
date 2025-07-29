import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { translations, Language, TranslationKey } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("it");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "it" || saved === "en" || saved === "de" || saved === "fr")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.it[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
