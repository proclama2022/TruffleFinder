import { useState, useRef, useEffect } from "react";
import { GALLERY_IMAGES, GALLERY_CATEGORIES, getImagesByCategory, GalleryImage } from "../lib/modern-gallery-config";

// Update the interface to match the config
interface GalleryImageWithLoading extends GalleryImage {
  isLoaded?: boolean;
}

// Lightbox Component
function Lightbox({ 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev 
}: { 
  images: GalleryImage[]; 
  currentIndex: number; 
  onClose: () => void; 
  onNext: () => void; 
  onPrev: () => void; 
}) {
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Focus trap
  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      if (lightboxRef.current && !lightboxRef.current.contains(e.target as Node)) {
        (lightboxRef.current.querySelector('button[aria-label="Close"]') as HTMLElement)?.focus();
      }
    };

    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, []);

  if (currentIndex === -1) return null;

  const currentMedia = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Media gallery lightbox"
      ref={lightboxRef}
      onClick={onClose}
    >
      <div 
        className="relative max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation buttons */}
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/70 transition-colors"
          aria-label="Previous item"
          tabIndex={0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={onNext}
          disabled={currentIndex === images.length - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/70 transition-colors"
          aria-label="Next item"
          tabIndex={0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:-top-8 md:right-8 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          aria-label="Close"
          tabIndex={0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Media content */}
        <div className="flex items-center justify-center">
          {currentMedia.type === 'image' ? (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              loading="eager"
              decoding="sync"
              srcSet={`
                ${currentMedia.src} 1440w
              `}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <>
              <h2 id={`video-title-${currentMedia.id}`} className="sr-only">
                {currentMedia.title}
              </h2>
              <video
                src={currentMedia.videoSrc || currentMedia.src}
                controls
                preload="metadata"
                playsInline
                className="max-w-full max-h-[90vh] rounded-lg"
                poster={currentMedia.thumbnail || `/images/gallery/${currentMedia.id}.jpg`}
                aria-labelledby={`video-title-${currentMedia.id}`}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Gallery Component
export function ModernGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const filteredImages = activeCategory === "all" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
    document.body.style.overflow = "unset";
  };

  const goToNext = () => {
    if (lightboxIndex < filteredImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const goToPrev = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev: Set<string>) => new Set(prev).add(id));
  };

  return (
    <section id="gallery" className="py-20 bg-[var(--background)] dark:bg-gray-900 transition-colors duration-300">
      
      {/* Preload first 4 featured images */}
      {GALLERY_IMAGES.filter(img => img.featured).slice(0, 4).map((img) => (
        <link rel="preload" as="image" href={img.src} key={img.id} />
      ))}
      
      <div className="container mx-auto px-4">
        {/* Section Header - Minimal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[var(--primary)]/10 px-6 py-3 rounded-full mb-6">
            <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[var(--primary)] text-sm font-semibold tracking-wide uppercase font-subtitle">
              Media Gallery
            </span>
          </div>
          <h2 className="text-h2 mb-4">
            Immagini & Video
          </h2>
          <p className="text-body-large text-[var(--primary)]/80 max-w-2xl mx-auto">
            Scopri la bellezza dei nostri eventi attraverso immagini e video memorabili
          </p>
        </div>

        {/* Category Filter - Sticky, glassy */}
        <div className="sticky top-20 z-30 mb-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4 border-b border-[var(--secondary)]/30">
          <div className="flex flex-wrap justify-center gap-3">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 font-subtitle
                ${activeCategory === category.id
                  ? "bg-[var(--primary)] text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-[var(--primary)] dark:text-gray-300 hover:bg-[var(--secondary)]/20 dark:hover:bg-gray-700 border border-[var(--primary)]/20"
                }`}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => {
            // Map aspectRatio enum to actual ratio values
            const aspectRatioMap = {
              'square': 1,
              'portrait': 0.75,
              'landscape': 1.5
            };
            const aspectRatio = aspectRatioMap[image.aspectRatio];
            
            return (
              <figure
                key={image.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={image.type === 'image' ? `View image: ${image.alt}` : `Play video: ${image.alt}`}
              >
                {/* Premium card container */}
                <div 
                  className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-400 ease-out"
                  style={{ aspectRatio }}
                  data-type={image.type}
                >
                  {/* Main image / video thumbnail */}
                  {image.type === 'image' ? (
                    <>
                      {!loadedImages.has(image.id) && (
                        <div className="absolute inset-0 bg-[var(--background)] dark:bg-gray-800 animate-pulse" />
                      )}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`w-full h-full object-cover transition-all duration-400 ease-out group-hover:scale-105 transition-opacity duration-300 ${loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => handleImageLoad(image.id)}
                        loading="lazy"
                        decoding="async"
                        {...(index < 4 ? { fetchPriority: "high" as const } : {})}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  ) : (
                    <>
                      {!loadedImages.has(image.id) && (
                        <div className="absolute inset-0 bg-[var(--background)] dark:bg-gray-800 animate-pulse" />
                      )}
                      <img
                        src={image.thumbnail || '/images/gallery/background.jpg'}
                        alt={image.alt}
                        className={`w-full h-full object-cover transition-all duration-400 ease-out group-hover:scale-105 transition-opacity duration-300 ${loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => handleImageLoad(image.id)}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                  
                  {/* Video indicator - enhanced with duration and better styling */}
                  {image.type === 'video' && (
                    <>
                      {/* Play button overlay */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--primary)]/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400 ease-out shadow-xl">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      
                      {/* Badge video rimossi come richiesto */}
                    </>
                  )}
                </div>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </section>
  );
}
