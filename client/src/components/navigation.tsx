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
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-white/10 backdrop-blur-sm border border-white/20'
    } rounded-2xl px-6 py-3 shadow-xl`}>
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => handleNavClick("home")}
            className={`transition-colors font-medium text-sm ${
              scrolled 
                ? 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400' 
                : 'text-white hover:text-purple-200'
            }`}
          >
            {t("home")}
          </button>
          <button
            onClick={() => handleNavClick("program")}
            className={`transition-colors font-medium text-sm ${
              scrolled 
                ? 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400' 
                : 'text-white hover:text-purple-200'
            }`}
          >
            {t("program")}
          </button>
          <button
            onClick={() => handleNavClick("activities")}
            className={`transition-colors font-medium text-sm ${
              scrolled 
                ? 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400' 
                : 'text-white hover:text-purple-200'
            }`}
          >
            {t("activities")}
          </button>
          <button
            onClick={() => handleNavClick("team")}
            className={`transition-colors font-medium text-sm ${
              scrolled 
                ? 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400' 
                : 'text-white hover:text-purple-200'
            }`}
          >
            Team
          </button>
          <button
            onClick={() => handleNavClick("gallery")}
            className={`transition-colors font-medium text-sm ${
              scrolled 
                ? 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400' 
                : 'text-white hover:text-purple-200'
            }`}
          >
            {t("gallery")}
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className={`transition-colors font-medium text-sm ${
              scrolled 
                ? 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400' 
                : 'text-white hover:text-purple-200'
            }`}
          >
            {t("contact")}
          </button>
        </div>
        <div className={`flex items-center space-x-3 border-l pl-6 ${
          scrolled ? 'border-gray-200 dark:border-gray-700' : 'border-white/20'
        }`}>
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-lg transition-all duration-200 ${
              scrolled 
                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <i className="fas fa-globe text-sm"></i>
            <span className="ml-1 text-xs font-semibold">{language.toUpperCase()}</span>
          </button>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-200 ${
              scrolled 
                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"} text-sm`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
