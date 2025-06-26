import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";
import { scrollToElement } from "@/lib/utils";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (elementId: string) => {
    scrollToElement(elementId);
  };

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 glassmorphism rounded-full px-8 py-4 shadow-2xl transition-all duration-300 ${scrolled ? 'bg-white/20 dark:bg-black/30' : ''}`}>
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => handleNavClick("home")}
            className="text-white hover:text-yellow-300 transition-colors font-medium"
          >
            {t("home")}
          </button>
          <button
            onClick={() => handleNavClick("program")}
            className="text-white hover:text-yellow-300 transition-colors font-medium"
          >
            {t("program")}
          </button>
          <button
            onClick={() => handleNavClick("activities")}
            className="text-white hover:text-yellow-300 transition-colors font-medium"
          >
            {t("activities")}
          </button>
          <button
            onClick={() => handleNavClick("gallery")}
            className="text-white hover:text-yellow-300 transition-colors font-medium"
          >
            {t("gallery")}
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-white hover:text-yellow-300 transition-colors font-medium"
          >
            {t("contact")}
          </button>
        </div>
        <div className="flex items-center space-x-4 border-l border-white/20 pl-6">
          <button
            onClick={toggleLanguage}
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <i className="fas fa-globe mr-1"></i>
            <span>{language.toUpperCase()}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="text-white hover:text-yellow-300 transition-colors"
          >
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
