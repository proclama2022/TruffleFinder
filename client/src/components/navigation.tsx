import { useState, useEffect } from "react";
import { useTheme } from "../hooks/use-theme";
import { useLanguage } from "../hooks/use-language";
import { scrollToElement } from "../lib/utils";
import { Sun, Moon, Menu } from "lucide-react";
import logoImage from '/images/gallery/logo.jpg';

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
      
      // Always keep navbar visible with enhanced glassmorphism effect when scrolled
      setScrolled(currentScrollY > 20);
      
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out">
      {/* Glass morphism container */}
      <div className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-amber-200/30 dark:border-amber-700/30 shadow-xl shadow-amber-900/10' 
          : 'bg-white/20 backdrop-blur-md border-b border-white/10'
      }`}>
        
        {/* Inner container with max width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo Section - Enhanced with glassmorphism */}
            <div className="flex items-center space-x-3">
              <div className={`group relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 overflow-hidden ${
                scrolled 
                  ? 'bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm border border-amber-400/30' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20'
              }`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={logoImage}
                  alt="Truffle Camp"
                  className="w-full h-full object-cover rounded-2xl relative z-10"
                />
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
            <div className="hidden md:flex items-center nav-items">
              {[
                { id: "home", label: t("home") },
                { id: "program", label: t("program") },
                { id: "activities", label: t("activities") },
                
                { id: "gallery", label: t("gallery") },
                { id: "contact", label: t("contact") }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative px-4 py-2.5 rounded-2xl transition-all duration-300 font-display font-medium text-sm
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
            {/* CTA Prenota - use standardized btn-primary for consistent spacing & colors */}
            <button
              onClick={() => handleNavClick("contact")}
              className={`hidden md:inline-flex items-center btn-primary ml-4 transition-all duration-300 transform hover:scale-105 active:scale-95 ${scrolled ? '' : ''}`}
            >
              <span className="relative z-10">{t("bookNow")}</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 to-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>

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
                {theme === 'dark' ? (
                  <Sun className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                    scrolled ? 'text-amber-600' : 'text-white'
                  }`} />
                ) : (
                  <Moon className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                    scrolled ? 'text-amber-600' : 'text-white'
                  }`} />
                )}
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
                <Menu className={`w-5 h-5 relative z-10 transition-all duration-300 ${
                  scrolled ? 'text-amber-600' : 'text-white'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced glassmorphism dropdown */}
      <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-amber-200/30 dark:border-amber-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { id: "home", label: t("home") },
                { id: "program", label: t("program") },
                { id: "activities", label: t("activities") },
                
                { id: "gallery", label: t("gallery") },
                { id: "contact", label: t("contact") }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="group relative px-4 py-3 rounded-2xl transition-all duration-300 font-display font-medium text-sm
                    bg-amber-50/50 dark:bg-amber-900/20 hover:bg-amber-100/70 dark:hover:bg-amber-800/30 backdrop-blur-sm 
                    border border-amber-200/30 dark:border-amber-700/30 hover:border-300/50 dark:hover:border-amber-600/50
                    text-amber-800 dark:text-amber-200 hover:text-amber-900 dark:hover:text-amber-100 hover:scale-105 active:scale-95"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 to-amber-600/0 
                    group-hover:from-amber-400/10 group-hover:to-amber-600/10 transition-all duration-300"></div>
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile CTA Button - standardized */}
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full btn-primary rounded-2xl text-white font-semibold py-4 px-6 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden"
            >
              <span className="relative z-10">{t("bookNow")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}