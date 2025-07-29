import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-lg p-2 border border-[#8B4513] shadow-lg">
        <Globe className="w-4 h-4 text-[#8B4513] mr-1" />
        <Button
          variant={language === 'it' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('it')}
          className={`text-xs font-medium transition-all duration-200 ${
            language === 'it' 
              ? 'bg-[#8B4513] text-white hover:bg-[#A0522D]' 
              : 'text-[#8B4513] hover:bg-[#F5F5DC]'
          }`}
        >
          IT
        </Button>
        <div className="w-px h-4 bg-[#8B4513] opacity-30"></div>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className={`text-xs font-medium transition-all duration-200 ${
            language === 'en' 
              ? 'bg-[#8B4513] text-white hover:bg-[#A0522D]' 
              : 'text-[#8B4513] hover:bg-[#F5F5DC]'
          }`}
        >
          EN
        </Button>
        <div className="w-px h-4 bg-[#8B4513] opacity-30"></div>
        <Button
          variant={language === 'de' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('de')}
          className={`text-xs font-medium transition-all duration-200 ${
            language === 'de' 
              ? 'bg-[#8B4513] text-white hover:bg-[#A0522D]' 
              : 'text-[#8B4513] hover:bg-[#F5F5DC]'
          }`}
        >
          DE
        </Button>
        <div className="w-px h-4 bg-[#8B4513] opacity-30"></div>
        <Button
          variant={language === 'fr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('fr')}
          className={`text-xs font-medium transition-all duration-200 ${
            language === 'fr' 
              ? 'bg-[#8B4513] text-white hover:bg-[#A0522D]' 
              : 'text-[#8B4513] hover:bg-[#F5F5DC]'
          }`}
        >
          FR
        </Button>
      </div>
    </div>
  );
} 