import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { scrollToElement } from "@/lib/utils";

export function HeroSection() {
  const { t } = useLanguage();
  const [animated, setAnimated] = useState(false);

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
                src="/logo.jpg" 
                alt="Lagotto & Truffle Week Logo" 
                className="w-24 h-24 rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-600 to-stone-500 rounded-xl animate-pulse"></div>
          </div>
        </div>

        {/* Title */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
              Lagotto
            </span>
            <br />
            <span className="text-5xl md:text-7xl font-light text-white/90">
              Truffle Week
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-stone-500 mx-auto rounded-full"></div>
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

        {/* Modern CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={handleBookNow}
            className="group relative bg-gradient-to-r from-amber-800 to-amber-700 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center">
              {t("bookNow")}
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </span>
          </button>
          <button
            onClick={handleDiscoverProgram}
            className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <span className="flex items-center">
              {t("discoverProgram")}
              <i className="fas fa-chevron-down ml-2 group-hover:translate-y-1 transition-transform"></i>
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
