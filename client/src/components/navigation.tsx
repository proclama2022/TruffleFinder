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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        (hidden && !mobileMenuOpen) ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Glass morphism container */}
      <div className={`w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-2xl border-b border-white/20 dark:border-gray-700/20 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}>
        
        {/* Inner container with max width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo Section - Enhanced with glassmorphism */}
            <div className="flex items-center space-x-3">
              <div className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                scrolled 
                  ? 'bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm border border-amber-400/30' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20'
              }`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className={`fas fa-dog text-xl relative z-10 transition-colors duration-300 ${
                  scrolled ? 'text-amber-700' : 'text-white'
                }`}></i>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg sm:text-xl font-bold transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent' 
                    : 'text-white'
                }`}>
                  Lagotto Week
                </span>
                <span className={`text-xs sm:text-sm font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-amber-600/70' 
                    : 'text-white/70'
                }`}>
                  Truffle Experience
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Modern pill buttons */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { id: "home", label: t("home") },
                { id: "program", label: t("program") },
                { id: "activities", label: t("activities") },
                { id: "team", label: "Team" },
                { id: "gallery", label: t("gallery") },
                { id: "contact", label: t("contact") }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative px-4 py-2.5 rounded-2xl transition-all duration-300 font-medium text-sm
                    hover:scale-105 active:scale-95 ${
                    scrolled 
                      ? 'text-gray-700 dark:text-gray-200 hover:text-amber-700 hover:bg-amber-100/50 dark:hover:bg-amber-900/20' 
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-500/0 to-amber-600/0 
                    group-hover:from-amber-400/10 group-hover:via-amber-500/10 group-hover:to-amber-600/10 transition-all duration-300"></div>
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Right Side Actions - Enhanced design */}
            <div className="flex items-center space-x-3">
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`group relative w-14 h-8 rounded-full transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300/30 dark:border-gray-600/30' 
                    : 'bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center text-xs font-bold
                  ${language === 'it' ? 'left-1' : 'left-7'} ${
                  scrolled 
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30' 
                    : 'bg-white text-amber-600 shadow-lg shadow-white/30'
                }`}>
                  {language.toUpperCase()}
                </div>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`group relative w-10 h-10 rounded-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                  scrolled 
                    ? 'bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300/30 dark:border-gray-600/30' 
                    : 'bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25'
                }`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className={`${theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} text-sm relative z-10 transition-all duration-300 ${
                  scrolled ? 'text-amber-600' : 'text-white'
                }`}></i>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden relative w-10 h-10 rounded-2xl transition-all duration-300 hover:scale-110 ${
                  scrolled 
                    ? 'bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-300/30 dark:border-gray-600/30' 
                    : 'bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25'
                }`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 w-5 h-5 mx-auto flex flex-col justify-center space-y-1">
                  <div className={`w-full h-0.5 transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  } ${scrolled ? 'bg-amber-600' : 'bg-white'}`}></div>
                  <div className={`w-full h-0.5 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  } ${scrolled ? 'bg-amber-600' : 'bg-white'}`}></div>
                  <div className={`w-full h-0.5 transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  } ${scrolled ? 'bg-amber-600' : 'bg-white'}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced glassmorphism dropdown */}
      <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-2xl border-b border-white/20 dark:border-gray-700/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "home", label: t("home") },
                { id: "program", label: t("program") },
                { id: "activities", label: t("activities") },
                { id: "team", label: "Team" },
                { id: "gallery", label: t("gallery") },
                { id: "contact", label: t("contact") }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="group relative px-4 py-3 rounded-2xl transition-all duration-300 font-medium text-sm
                    bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30
                    text-white hover:text-white hover:scale-105 active:scale-95"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 to-amber-600/0 
                    group-hover:from-amber-400/20 group-hover:to-amber-600/20 transition-all duration-300"></div>
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}