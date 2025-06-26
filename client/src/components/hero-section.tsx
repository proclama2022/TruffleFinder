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
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 animate-float">
          <i className="fas fa-leaf text-4xl text-white"></i>
        </div>
        <div className="absolute top-40 right-32 w-12 h-12 animate-float" style={{ animationDelay: "2s" }}>
          <i className="fas fa-leaf text-3xl text-white"></i>
        </div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 animate-float" style={{ animationDelay: "4s" }}>
          <i className="fas fa-leaf text-5xl text-white"></i>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-pulse-slow">
          <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center glassmorphism mb-6 hover:scale-105 transition-transform duration-300">
            <i className="fas fa-dog text-6xl text-white"></i>
          </div>
        </div>

        {/* Title */}
        <h1 className={`text-6xl md:text-8xl font-bold text-white mb-6 transition-all duration-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-script text-yellow-200">Lagotto</span> &<br />
          <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Truffle Week</span>
        </h1>

        <p className={`text-xl md:text-2xl text-yellow-100 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t("heroTitle")}
        </p>

        {/* Stats Counter */}
        <div className={`flex justify-center space-x-12 mb-12 transition-all duration-1000 delay-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">5</div>
            <div className="text-yellow-200">{t("days")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">12</div>
            <div className="text-yellow-200">{t("activities_count")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">50+</div>
            <div className="text-yellow-200">{t("participants")}</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={handleBookNow}
            className="bg-white text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-100 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            {t("bookNow")}
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
          <button
            onClick={handleDiscoverProgram}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-900 transition-all duration-300"
          >
            {t("discoverProgram")}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
