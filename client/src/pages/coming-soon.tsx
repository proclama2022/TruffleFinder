import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Clock, Mail, Phone, Star, Heart, Dog, ChefHat, Mountain, Wine, Globe, User } from 'lucide-react';
import { useLanguage } from '../hooks/use-language';
import { LanguageSelector } from '../components/language-selector';
import logoImage from '../assets/images/logo.jpg';
import nicolettaLogoImage from '../assets/images/nicoletta-logo.jpg';

export default function ComingSoon() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#DDCDBB] relative overflow-hidden">
      <LanguageSelector />
      {/* Autumn leaves background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large autumn leaves */}
        <div className="absolute top-10 left-10 w-16 h-16 text-orange-400 opacity-60 animate-float">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V21H19V9Z"/>
          </svg>
        </div>
        <div className="absolute top-20 right-20 w-12 h-12 text-yellow-600 opacity-50 animate-float animation-delay-2000">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V21H19V9Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-14 h-14 text-red-500 opacity-40 animate-float animation-delay-4000">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V21H19V9Z"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-10 h-10 text-orange-600 opacity-70 animate-float animation-delay-1000">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V21H19V9Z"/>
          </svg>
        </div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 text-yellow-500 opacity-60 animate-float animation-delay-3000">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V21H19V9Z"/>
          </svg>
        </div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 text-red-400 opacity-50 animate-float animation-delay-5000">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V21H19V9Z"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header with logo and branding */}
          <div className="mb-16">
            {/* Top branding section */}
            <div className="flex justify-between items-start mb-12 px-8">
              <div className="text-left flex items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-[#8B4513] overflow-hidden relative hover:border-[#A0522D] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={nicolettaLogoImage} 
                      alt="Nicoletta Conte Logo" 
                      className="w-16 h-16 object-contain rounded-xl"
                      onError={(e) => {
                        // Fallback se l'immagine non carica
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-16 h-16 flex items-center justify-center"><User class="w-10 h-10 text-[#8B4513]" /></div>';
                        }
                      }}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full flex items-center justify-center animate-pulse shadow-lg">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-heading text-[#8B4513] mb-2">NICOLETTA CONTE</h2>
                  <p className="text-xl text-[#A0522D] font-script italic">Truffle Trainer</p>
                  <p className="text-base text-[#8B4513] mt-1 font-medium">+39 334 750 0887</p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-8 h-6 bg-gradient-to-r from-green-500 via-white to-red-500 rounded-sm shadow-md"></div>
                <p className="text-xs text-[#8B4513] mt-1">Italia</p>
              </div>
            </div>

            {/* Main logo section */}
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#8B4513] hover:border-[#A0522D] transition-all duration-300 transform hover:scale-105 animate-fade-in">
                  <img 
                    src={logoImage} 
                    alt="Lagotto & Truffle Week Logo" 
                    className="w-40 h-40 object-contain rounded-full drop-shadow-lg"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.5s ease-in' }}
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Main title section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-display text-[#8B4513] mb-6 animate-fade-in-up">
                {t('program')}
              </h1>
              
              <h2 className="text-5xl md:text-7xl font-modern text-[#8B4513] mb-4 animate-fade-in-up tracking-wide animate-pulse-glow">
                <span className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text text-transparent drop-shadow-lg relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text text-transparent blur-sm opacity-30"></span>
                  LAGOTTO & TRUFFLE WEEK
                </span>
              </h2>
              
              <p className="text-2xl md:text-3xl text-[#A0522D] mb-6 font-medium animate-fade-in-up animation-delay-200 font-script">
                {t('eventDate')}
              </p>
              
              <p className="text-xl md:text-2xl text-[#8B4513] mb-8 font-medium animate-fade-in-up animation-delay-400">
                {t('eventSubtitle')}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <Card className="mb-8 bg-white/95 backdrop-blur-md border-[#8B4513] shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h2 className="text-3xl font-heading text-[#8B4513] mb-6">
                    🎯 {t('preparingSpecial')}
                  </h2>
                  <p className="text-lg text-[#A0522D] mb-8 leading-relaxed">
                    {t('preparingDescription')}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-[#8B4513] bg-[#F5F5DC] p-4 rounded-lg border-l-4 border-[#8B4513] shadow-md">
                      <Calendar className="w-6 h-6 mr-4 text-[#8B4513]" />
                      <span className="font-semibold">{t('fiveDaysExperience')}</span>
                    </div>
                    <div className="flex items-center text-[#8B4513] bg-[#F5F5DC] p-4 rounded-lg border-l-4 border-[#A0522D] shadow-md">
                      <MapPin className="w-6 h-6 mr-4 text-[#A0522D]" />
                      <span className="font-semibold">{t('porticoLocation')}</span>
                    </div>
                    <div className="flex items-center text-[#8B4513] bg-[#F5F5DC] p-4 rounded-lg border-l-4 border-[#CD853F] shadow-md">
                      <Clock className="w-6 h-6 mr-4 text-[#CD853F]" />
                      <span className="font-semibold">{t('comingSoonAvailable')}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#F5F5DC] via-[#F0E68C] to-[#DEB887] p-8 rounded-xl border-2 border-[#8B4513] shadow-lg">
                  <h3 className="text-2xl font-heading text-[#8B4513] mb-6 text-center">
                    🎁 {t('whatToExpect')}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm">
                      <Dog className="w-5 h-5 mr-3 text-[#8B4513]" />
                      <span className="font-medium text-[#8B4513]">{t('truffleHuntingGuided')}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm">
                      <Star className="w-5 h-5 mr-3 text-[#A0522D]" />
                      <span className="font-medium text-[#8B4513]">{t('dogTrainingSessions')}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm">
                      <ChefHat className="w-5 h-5 mr-3 text-[#CD853F]" />
                      <span className="font-medium text-[#8B4513]">{t('gourmetCooking')}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm">
                      <Mountain className="w-5 h-5 mr-3 text-[#8B4513]" />
                      <span className="font-medium text-[#8B4513]">{t('selectedAccommodation')}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm">
                      <Wine className="w-5 h-5 mr-3 text-[#A0522D]" />
                      <span className="font-medium text-[#8B4513]">{t('wineExperiences')}</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm">
                      <Heart className="w-5 h-5 mr-3 text-[#CD853F]" />
                      <span className="font-medium text-[#8B4513]">{t('unforgettableMoments')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-white/95 backdrop-blur-md border-[#8B4513] shadow-2xl mb-8">
            <CardContent className="p-8">
              <h3 className="text-3xl font-heading text-[#8B4513] mb-6 text-center">
                📞 {t('contactForInfo')}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex items-center gap-3 px-6 py-4 border-2 border-[#8B4513] hover:border-[#A0522D] hover:bg-[#F5F5DC] transition-all duration-300 text-[#8B4513]"
                  >
                    <Mail className="w-5 h-5 text-[#8B4513]" />
                    <span className="font-semibold text-sm">nico.conte76543@gmail.com</span>
                  </Button>
                </div>
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex items-center gap-3 px-6 py-4 border-2 border-[#A0522D] hover:border-[#CD853F] hover:bg-[#F5F5DC] transition-all duration-300 text-[#8B4513]"
                  >
                    <Phone className="w-5 h-5 text-[#A0522D]" />
                    <span className="font-semibold">+39 334 750 0887</span>
                  </Button>
                </div>
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex items-center gap-3 px-6 py-4 border-2 border-[#CD853F] hover:border-[#8B4513] hover:bg-[#F5F5DC] transition-all duration-300 text-[#8B4513]"
                    onClick={() => window.open('https://www.lagottotruffleweek.it', '_blank')}
                  >
                    <Globe className="w-5 h-5 text-[#CD853F]" />
                    <span className="font-semibold text-sm">www.lagottotruffleweek.it</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Bar */}
          <Card className="bg-white/95 backdrop-blur-md border-[#8B4513] shadow-xl mb-8">
            <CardContent className="p-6">
              <h4 className="text-xl font-heading text-[#8B4513] mb-4 text-center">
                🚧 {t('siteProgress')}
              </h4>
              <div className="w-full bg-[#F5F5DC] rounded-full h-4 mb-4">
                <div className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] h-4 rounded-full animate-pulse" style={{width: '85%'}}></div>
              </div>
              <p className="text-center text-[#8B4513] font-medium">
                {t('progressCompleted')}
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-[#8B4513] shadow-lg">
              <p className="text-[#8B4513] font-medium mb-4">
                &copy; 2025 Lagotto & Truffle Week. {t('comingSoonRightsReserved')}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 