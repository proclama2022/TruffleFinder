import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { scrollToElement } from "@/lib/utils";
import { useScrollReveal, useMagneticEffect, useKineticText } from "@/hooks/use-scroll-reveal";
import nicolettaLogoImage from '../assets/images/nicoletta-logo.jpg';

export function HeroSection() {
  const { t } = useLanguage();
  const [animated, setAnimated] = useState(false);
  const magneticRef = useMagneticEffect();
  const kineticTitle = useKineticText();

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = () => {
    scrollToElement("contact");
  };

  const handleDiscoverProgram = () => {
    scrollToElement("program");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 overflow-hidden pt-20">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-600/15 to-stone-400/15 rounded-3xl rotate-12 animate-float blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-stone-400/15 to-amber-600/15 rounded-2xl -rotate-12 animate-float blur-sm" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-600/15 to-stone-400/15 rounded-full animate-float blur-sm" style={{ animationDelay: "4s" }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Real Logo */}
        <div className={`mb-12 transition-all duration-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border border-white/20">
              <img 
                src={nicolettaLogoImage} 
                alt="Nicoletta Conte - Lagotto & Truffle Week" 
                className="w-24 h-24 rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-600 to-stone-500 rounded-xl animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Title with Modern Typography */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 
            className={`text-display text-7xl md:text-9xl font-black mb-4 leading-tight cursor-magnetic transition-colors duration-300 ${kineticTitle.isHovered ? 'text-kinetic' : 'text-white'}`}
            onMouseEnter={kineticTitle.onMouseEnter}
            onMouseLeave={kineticTitle.onMouseLeave}
          >
            <span className="bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
              Lagotto
            </span>
            <br />
            <span className="text-5xl md:text-7xl font-light text-white/90">
              Truffle Week
            </span>
          </h1>
          
          {/* Organic accent line */}
          <div className="relative mx-auto w-32 h-2 mt-6">
            <div className="absolute inset-0 organic-blob bg-gradient-to-r from-amber-600/80 to-stone-500/80"></div>
          </div>
        </div>

        <p className={`text-xl md:text-2xl text-stone-100 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t("heroTitle")}
        </p>

        {/* Modern Stats */}
        <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-stone-300 text-sm font-medium">{t("days")}</div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">12</div>
              <div className="text-stone-300 text-sm font-medium">{t("activities_count")}</div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-stone-300 text-sm font-medium">{t("participants")}</div>
            </div>
          </div>
        </div>

        {/* Enhanced Modern CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Primary CTA with advanced micro-interactions */}
          <button
            onClick={handleBookNow}
            className="group relative interactive-card neon-border bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white px-10 py-5 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all duration-300 gpu-accelerated focus-ring"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl"></div>
            <span className="relative flex items-center justify-center gap-3">
              <i className="fas fa-calendar-check text-xl"></i>
              {t("bookNow")}
              <i className="fas fa-arrow-right group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"></i>
            </span>
          </button>
          
          {/* Secondary CTA with glassmorphism */}
          <button
            onClick={handleDiscoverProgram}
            className="group relative interactive-card bg-white/8 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-3xl font-semibold text-lg hover:bg-white/15 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 gpu-accelerated focus-ring"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <span className="relative flex items-center justify-center gap-3">
              <i className="fas fa-compass text-xl"></i>
              {t("discoverProgram")}
              <i className="fas fa-chevron-down group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300"></i>
            </span>
          </button>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce-slow">
          <span className="text-white/60 text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
