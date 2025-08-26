import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/use-language";
import { scrollToElement } from "../lib/utils";
import { Calendar, MapPin, Users, Star, ChefHat, Dog, ArrowRight, Play, Sparkles } from 'lucide-react';
import backgroundImage from '/images/gallery/freshly-picked-black-truffles-market-table-with-very-fancy-decoration.jpg';

export function HeroSection() {
  const { t } = useLanguage();
  const [animated, setAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

// Countdown timer logic
const calculateTimeLeft = () => {
  const eventDate = new Date("2025-10-15T00:00:00").getTime();
  const now = new Date().getTime();
  const diff = eventDate - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  return () => clearInterval(timer);
}, []);

  const handleBookNow = () => {
    scrollToElement("contact");
  };

  const handleDiscoverProgram = () => {
    scrollToElement("program");
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)'
        }}
      >
        <div className="absolute inset-0 bg-[var(--primary)]/75"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 min-h-screen flex items-center justify-center py-16 sm:py-20">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Date Badge rimosso come richiesto */}

          {/* Main Title - Ultra Bold */}
          <div className="space-y-4 sm:space-y-6 text-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black leading-tight hero-title text-clip-safe">
              <span className="block text-white drop-shadow-2xl shadow-black/50 py-1 sm:py-2">
                Lagotto
              </span>
              <span className="block text-2xl sm:text-4xl md:text-6xl font-subtitle bg-gradient-to-r from-[var(--accent)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent drop-shadow-lg shadow-black/30 font-bold py-1 sm:py-2">
                & Truffle Week
              </span>
            </h1>
            
            {/* Accent Line */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-6 py-2 sm:py-4">
              <div className="w-12 sm:w-20 h-1 sm:h-2 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] rounded-full shadow-lg"></div>
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--accent)] animate-pulse drop-shadow-lg" />
              <div className="w-12 sm:w-20 h-1 sm:h-2 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Subtitle - High Contrast */}
          <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-body text-center font-semibold italic max-w-2xl drop-shadow-xl shadow-black/50 py-2 sm:py-4 px-4">
            {t("heroTitle")}
          </p>

          {/* Countdown Display */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 mt-4 w-full max-w-md sm:max-w-lg">
            <div className="countdown-card">
              <div className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-white">{timeLeft.days}</div>
              <div className="text-xs sm:text-xs md:text-sm uppercase text-white/80 tracking-wider">Giorni</div>
            </div>
            <div className="countdown-card">
              <div className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-white">{timeLeft.hours}</div>
              <div className="text-xs sm:text-xs md:text-sm uppercase text-white/80 tracking-wider">Ore</div>
            </div>
            <div className="countdown-card">
              <div className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-white">{timeLeft.minutes}</div>
              <div className="text-xs sm:text-xs md:text-sm uppercase text-white/80 tracking-wider">Minuti</div>
            </div>
            <div className="countdown-card">
              <div className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-white">{timeLeft.seconds}</div>
              <div className="text-xs sm:text-xs md:text-sm uppercase text-white/80 tracking-wider">Secondi</div>
            </div>
          </div>

          {/* CTA Button - standardized */}
          <button
            onClick={handleBookNow}
            className="group btn-primary rounded-full mt-6 sm:mt-8 relative overflow-hidden hover-darken-10"
          >
            <span className="relative z-10">PRENOTA ORA</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 animate-bounce-slow">
          <span className="text-[var(--accent)] text-lg font-bold font-subtitle">Scopri di più</span>
          <div className="w-8 h-12 border-3 border-[var(--primary)] rounded-full flex justify-center bg-white shadow-lg">
            <div className="w-2 h-4 bg-[var(--primary)] rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
