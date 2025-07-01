import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProgramTimeline } from "@/components/program-timeline";
import { ActivitiesGrid } from "@/components/activities-grid";
import { TeamSection } from "@/components/team-section";
import { Gallery } from "@/components/gallery";
import { ContactSection } from "@/components/contact-section";
import { useLanguage } from "@/hooks/use-language";
import { updateScrollProgress, scrollToElement } from "@/lib/utils";

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll progress handler
    const handleScroll = () => {
      updateScrollProgress();
      
      // Back to top button visibility
      const backToTopButton = document.getElementById('backToTop');
      if (backToTopButton) {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
        } else {
          backToTopButton.classList.add('opacity-0', 'pointer-events-none');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-truffle-50 dark:bg-gray-900">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="scroll-progress" id="scrollProgress"></div>
      </div>

      <Navigation />
      <HeroSection />
      
      {/* Modern About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6">
                <i className="fas fa-sparkles text-indigo-600 dark:text-indigo-400"></i>
                <span className="text-indigo-700 dark:text-indigo-300 text-sm font-semibold tracking-wide uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
                The Experience
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {t("aboutDescription")}
              </p>
            </div>
            
            {/* Features Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-search text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {t("truffleHunting")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {t("truffleHuntingDesc")}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <i className="fas fa-leaf text-4xl text-blue-500"></i>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-graduation-cap text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {t("trainingSessions")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {t("trainingSessionsDesc")}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <i className="fas fa-medal text-4xl text-purple-500"></i>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-utensils text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {t("gourmetExperience")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {t("gourmetExperienceDesc")}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <i className="fas fa-utensils text-4xl text-green-500"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ProgramTimeline />
      <ActivitiesGrid />
      <TeamSection />
      <Gallery />
      <ContactSection />
      
      {/* Modern Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-800 to-amber-700 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-dog text-xl text-white"></i>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Lagotto & Truffle Week
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                {t("heroTitle")}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="group w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <i className="fab fa-facebook-f text-gray-400 group-hover:text-white"></i>
                </a>
                <a href="#" className="group w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <i className="fab fa-instagram text-gray-400 group-hover:text-white"></i>
                </a>
                <a href="#" className="group w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <i className="fab fa-youtube text-gray-400 group-hover:text-white"></i>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { key: "home", label: t("home") },
                  { key: "program", label: t("program") },
                  { key: "activities", label: t("activities") },
                  { key: "team", label: "Team" },
                  { key: "gallery", label: t("gallery") }
                ].map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => scrollToElement(link.key)}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-white text-xs"></i>
                  </div>
                  <span className="text-gray-400">+39 334 750 0887</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white text-xs"></i>
                  </div>
                  <span className="text-gray-400">info@lagottotruffleweek.it</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white text-xs"></i>
                  </div>
                  <div className="text-gray-400">
                    <div>Portico di Romagna</div>
                    <div>Al Vecchio Convento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 Lagotto & Truffle Week. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Modern Back to Top Button */}
      <button
        id="backToTop"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-2xl shadow-2xl hover:shadow-amber-500/25 hover:scale-110 transition-all duration-300 opacity-0 pointer-events-none z-50"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
