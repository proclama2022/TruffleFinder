import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";
import { scrollToElement } from "@/lib/utils";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      // Simple logic: hide when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }
      
      // Always show navbar at the top of the page
      if (currentScrollY <= 50) {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (elementId: string) => {
    scrollToElement(elementId);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        (hidden && !mobileMenuOpen) ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-stone-200/20 dark:border-stone-700/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled 
                ? 'bg-gradient-to-br from-amber-800 to-amber-700' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              <i className="fas fa-dog text-white text-lg"></i>
            </div>
            <span className={`text-xl font-bold transition-all duration-300 ${
              scrolled 
                ? 'bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent' 
                : 'text-white'
            }`}>
              Lagotto Week
            </span>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavClick("home")}
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {t("home")}
            </button>
            <button
              onClick={() => handleNavClick("program")}
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {t("program")}
            </button>
            <button
              onClick={() => handleNavClick("activities")}
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {t("activities")}
            </button>
            <button
              onClick={() => handleNavClick("team")}
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Team
            </button>
            <button
              onClick={() => handleNavClick("gallery")}
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {t("gallery")}
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-xl transition-all duration-300 flex items-center space-x-1 ${
                scrolled 
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <i className="fas fa-globe text-sm"></i>
              <span className="text-xs font-semibold">{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"} text-sm`}></i>
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className={`ml-3 px-6 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-amber-800 to-amber-700 text-white hover:from-amber-900 hover:to-amber-800 shadow-md hover:shadow-lg' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
              }`}
            >
              {t("contact")}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`pb-6 pt-4 border-t ${
            scrolled ? 'border-stone-200/20 dark:border-stone-700/20' : 'border-white/20'
          }`}>
            <div className="space-y-2">
              <button
                onClick={() => handleNavClick("home")}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {t("home")}
              </button>
              <button
                onClick={() => handleNavClick("program")}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {t("program")}
              </button>
              <button
                onClick={() => handleNavClick("activities")}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {t("activities")}
              </button>
              <button
                onClick={() => handleNavClick("team")}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Team
              </button>
              <button
                onClick={() => handleNavClick("gallery")}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-200 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {t("gallery")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
