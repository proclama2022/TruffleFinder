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
      
      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-amber-900 dark:text-white mb-8">
              {t("unforgettableExperience")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              {t("aboutDescription")}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glassmorphism rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-search text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 dark:text-white mb-4">
                  {t("truffleHunting")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("truffleHuntingDesc")}
                </p>
              </div>
              
              <div className="glassmorphism rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-graduation-cap text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 dark:text-white mb-4">
                  {t("trainingSessions")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("trainingSessionsDesc")}
                </p>
              </div>
              
              <div className="glassmorphism rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-utensils text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 dark:text-white mb-4">
                  {t("gourmetExperience")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("gourmetExperienceDesc")}
                </p>
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
      
      {/* Footer */}
      <footer className="bg-amber-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-dog text-xl"></i>
                </div>
                <span className="text-2xl font-bold">Lagotto & Truffle Week</span>
              </div>
              <p className="text-yellow-200">
                {t("heroTitle")}
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">{t("quickLinks")}</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToElement("home")}
                    className="text-yellow-200 hover:text-white transition-colors"
                  >
                    {t("home")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToElement("program")}
                    className="text-yellow-200 hover:text-white transition-colors"
                  >
                    {t("program")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToElement("activities")}
                    className="text-yellow-200 hover:text-white transition-colors"
                  >
                    {t("activities")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToElement("team")}
                    className="text-yellow-200 hover:text-white transition-colors"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToElement("gallery")}
                    className="text-yellow-200 hover:text-white transition-colors"
                  >
                    {t("gallery")}
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">{t("contact")}</h4>
              <ul className="space-y-3">
                <li className="text-yellow-200">+39 334 750 0887</li>
                <li className="text-yellow-200">info@lagottotruffleweek.it</li>
                <li className="text-yellow-200">Portico di Romagna</li>
                <li className="text-yellow-200">Al Vecchio Convento</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">{t("followUs")}</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-yellow-700 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-yellow-700 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-yellow-700 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-yellow-700 pt-8 text-center">
            <p className="text-yellow-200">
              {t("allRightsReserved")}
            </p>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <button
        id="backToTop"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 gradient-bg text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 opacity-0 pointer-events-none z-50"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
