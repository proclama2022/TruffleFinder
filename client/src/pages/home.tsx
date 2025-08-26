import { useEffect } from "react";
import logoImage from "/images/gallery/logo.jpg";
import { NavigationMUI } from "../components/navigation-mui";
import { HeroSectionMUI } from "@/components/hero-section-mui";
import { AboutSection } from "../components/about-section";
import { ProgramTimelineNew } from "../components/program-timeline-new";
import { LanguageSelector } from "../components/language-selector";
import { ModernGalleryMUI } from "../components/modern-gallery-mui";

import { UnifiedContactSection } from "../components/unified-contact-section";
import { ModernScrollIndicator } from "../components/modern-scroll-indicator";
import TeamSection from '../components/team-section';
import { useLanguage } from "../hooks/use-language";
import { updateScrollProgress, scrollToElement } from "../lib/utils";
import { Facebook, Instagram, Youtube, Dog, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-[var(--forest-light)] via-[var(--forest-cream)] to-[var(--misty-morning)]">
      {/* Modern Scroll Indicators */}
      <ModernScrollIndicator />

      {/* Language Selector */}
      <LanguageSelector />
      
      <NavigationMUI />
      <HeroSectionMUI />
      <AboutSection />
      
      <ProgramTimelineNew />
      {/* Graphic Separator */}
      <div className="w-full h-1 bg-gradient-to-r from-amber-500 to-amber-300 my-12"></div>
      <TeamSection />

      <ModernGalleryMUI />
      <UnifiedContactSection />
      
      {/* Redesigned Footer - Differentiated from Navigation */}
      <footer className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/95 to-[var(--secondary)]/20 text-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Decorative Logo Watermark */}
        <img src={logoImage} alt="" className="absolute top-8 right-8 opacity-5 w-32 h-32 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            
            {/* Brand & Story Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] rounded-2xl flex items-center justify-center shadow-lg">
                  <Dog className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="text-h5 text-white font-bold">{t('lagottoTruffleWeek')}</h3>
                  <p className="text-caption text-white/70">{t('eventLocation')} 2025</p>
                </div>
              </div>
              <p className="text-body text-white/80 leading-relaxed mb-6">
                {t('uniqueExperience')}
              </p>
              
              {/* Event Highlight */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-[var(--accent)] rounded-full animate-pulse"></div>
                  <span className="text-body-small font-semibold text-white">{t('nextEvent')}</span>
                </div>
                <p className="text-h6 text-[var(--accent)] font-bold">{t('eventDate')}</p>
              </div>
            </div>
            
            {/* Contact & Info Section */}
            <div className="lg:col-span-1">
              <h4 className="text-h5 text-white font-bold mb-6">{t('contactInfo')}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[var(--accent)]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-body-small text-white/90 font-medium">{t('phoneNumber')}</p>
                    <p className="text-caption text-white/60">{t('monFriHours')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[var(--accent)]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-body-small text-white/90 font-medium">{t('emailAddress')}</p>
                    <p className="text-caption text-white/60">{t('responseWithin')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[var(--accent)]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-body-small text-white/90 font-medium">{t('alVecchioConvento')}</p>
                    <p className="text-caption text-white/60">{t('porticoLocation')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Community & Social Section */}
            <div className="lg:col-span-1">
              <h4 className="text-h5 text-white font-bold mb-6">{t('joinCommunity')}</h4>
              <p className="text-body text-white/80 mb-6">
                {t('socialMediaText')}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                <a href="#" className="group w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-[var(--accent)] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20">
                  <Facebook className="w-5 h-5 text-white group-hover:text-[var(--primary)]" />
                </a>
                <a href="#" className="group w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-[var(--accent)] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20">
                  <Instagram className="w-5 h-5 text-white group-hover:text-[var(--primary)]" />
                </a>
                <a href="#" className="group w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-[var(--accent)] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20">
                  <Youtube className="w-5 h-5 text-white group-hover:text-[var(--primary)]" />
                </a>
              </div>
              
              {/* Quick Navigation */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: "program", label: t('program') },
                  
                  { key: "gallery", label: t('gallery') },
                  { key: "contact", label: t('contact') }
                ].map((link) => (
                  <button
                    key={link.key}
                    onClick={() => scrollToElement(link.key)}
                    className="text-left text-body-small text-white/70 hover:text-[var(--accent)] transition-colors duration-300 py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-body-small text-white/60">{t("allRightsReserved")}</p>
              <div className="flex items-center space-x-6 text-body-small text-white/60">
                <a href="#" className="hover:text-[var(--accent)] transition-colors">{t('privacyPolicy')}</a>
                <a href="#" className="hover:text-[var(--accent)] transition-colors">{t('cookiePolicy')}</a>
                <a href="#" className="hover:text-[var(--accent)] transition-colors">{t('terms')}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Modern Back to Top Button */}
      <button
        id="backToTop"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-amber-800 to-amber-700 text-white rounded-2xl shadow-2xl hover:shadow-amber-600/25 hover:scale-110 transition-all duration-300 opacity-0 pointer-events-none z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
