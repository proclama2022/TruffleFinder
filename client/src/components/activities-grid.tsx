import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Play, Heart, Eye, Download, Share2, X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Camera, Video, Star } from "lucide-react";
import { BENTO_DATA, GalleryItem } from "@/lib/gallery-config";

export function ActivitiesGrid() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = (index: number) => {
    setCurrentItem(index);
    setLightboxOpen(true);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsPlaying(false);
  };

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % BENTO_DATA.length);
    setIsPlaying(false);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + BENTO_DATA.length) % BENTO_DATA.length);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (BENTO_DATA[currentItem].type === "video") {
      if (isPlaying) {
        videoRef.current?.pause();
      } else {
        videoRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          nextItem();
          break;
        case "ArrowLeft":
          prevItem();
          break;
        case " ":
          e.preventDefault();
          togglePlay();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentItem, isPlaying]);

  const renderBentoItem = (item: GalleryItem, index: number) => {
    const baseClasses = "group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-[var(--primary)]/20 dark:border-[var(--primary)]/30 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer";
    
    const sizeClasses = {
      small: "col-span-1 row-span-1",
      medium: "col-span-1 row-span-2",
      large: "col-span-2 row-span-2"
    };

    switch (item.type) {
      case "hero":
        return (
          <div 
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size]} relative`}
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              {item.featured && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  In Evidenza
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2 font-headline">{item.title}</h3>
                  <p className="text-xl text-white/90 font-subtitle">{item.subtitle}</p>
                </div>
                <p className="text-white/80 text-lg font-body">{item.description}</p>
                
                <div className="flex items-center space-x-6 text-white/70">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{item.stats?.duration ?? ""}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{item.stats?.difficulty ?? ""}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{item.stats?.rating ?? ""}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "video":
        return (
          <div 
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size]} relative`}
            onClick={() => openLightbox(index)}
          >
            <div className="relative h-full">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-[var(--primary)] ml-1" />
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                {item.duration}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-white mb-1 font-headline">{item.title}</h3>
              <p className="text-white/80 text-sm font-body">{item.subtitle}</p>
            </div>
          </div>
        );

      case "gallery":
        return (
          <div 
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size]} p-6`}
            onClick={() => openLightbox(index)}
          >
            <div className="h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[var(--primary)] dark:text-white mb-1 font-headline">{item.title}</h3>
                <p className="text-[var(--primary)]/70 dark:text-gray-300 font-subtitle">{item.subtitle}</p>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-3">
                {(item.images ?? []).map((img: string, imgIndex: number) => (
                  <div key={imgIndex} className="relative aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      alt={`${item.title} ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "featured":
        return (
          <div 
            key={item.id}
            className={`${baseClasses} ${sizeClasses[item.size]} relative`}
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              {item.badge && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {item.badge}
                </div>
              )}
              
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-white font-headline">{item.title}</h3>
                <p className="text-xl text-white/90 font-subtitle">{item.subtitle}</p>
                <p className="text-white/80 font-body">{item.description}</p>
              </div>
            </div>
          </div>
        );

      case "stats":
        return (
          <div key={item.id} className={`${baseClasses} ${sizeClasses[item.size]} p-6`}>
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[var(--primary)] dark:text-white mb-2 font-headline">{item.title}</h3>
              <p className="text-[var(--primary)]/70 dark:text-gray-300 mb-6 font-subtitle">{item.subtitle}</p>
              
              <div className="space-y-4">
                {Object.entries(item.stats ?? {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-[var(--primary)]/60 dark:text-gray-400 capitalize font-body">
                      {key}
                    </span>
                    <span className="text-2xl font-bold text-[var(--accent)] font-headline">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "testimonial":
        return (
          <div key={item.id} className={`${baseClasses} ${sizeClasses[item.size]} p-6`}>
            <div className="h-full flex flex-col justify-center">
              <div className="flex items-center mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg text-[var(--primary)] dark:text-white mb-4 font-body italic">
                "{item.quote}"
              </blockquote>
              
              <div className="text-right">
                <p className="font-semibold text-[var(--primary)] dark:text-white font-subtitle">{item.author}</p>
                <p className="text-sm text-[var(--primary)]/60 dark:text-gray-400 font-body">Partecipante 2024</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-[var(--background)] via-[var(--secondary)]/10 to-[var(--accent)]/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-[var(--primary)]/20 dark:border-[var(--primary)]/30 px-8 py-4 rounded-full mb-8 shadow-lg">
            <Sparkles className="text-[var(--primary)] dark:text-[var(--accent)] w-5 h-5" />
            <span className="text-[var(--primary)] dark:text-[var(--accent)] text-sm font-semibold tracking-wide uppercase font-subtitle">
              Bento Gallery
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-headline bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] dark:from-[var(--accent)] dark:to-[var(--secondary)] bg-clip-text text-transparent mb-8">
            Esperienze Visive
          </h2>
          <p className="text-xl lg:text-2xl text-[var(--primary)] dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-body">
            Scopri il Truffle Camp attraverso la nostra Bento Grid moderna
          </p>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
            {BENTO_DATA.map((item, index) => renderBentoItem(item, index))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevItem}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextItem}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="relative">
              {BENTO_DATA[currentItem].type === "video" ? (
                <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
                  <video
                    ref={videoRef}
                    src={BENTO_DATA[currentItem].video}
                    className="w-full h-full object-cover"
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                </div>
              ) : (
                <img
                  src={BENTO_DATA[currentItem].image || BENTO_DATA[currentItem].thumbnail}
                  alt={BENTO_DATA[currentItem].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                />
              )}

              {/* Content Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
                <h3 className="text-3xl font-bold text-white mb-2 font-headline">
                  {BENTO_DATA[currentItem].title}
                </h3>
                <p className="text-white/80 text-lg font-body">
                  {BENTO_DATA[currentItem].subtitle}
                </p>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
              {currentItem + 1} / {BENTO_DATA.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
