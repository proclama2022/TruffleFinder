import { useState, useEffect } from 'react';
import { type GalleryImage } from '../../lib/modern-gallery-config';

interface GalleryHeroProps {
  images: GalleryImage[];
  onImageClick: (imageId: string) => void;
  autoSlide?: boolean;
  slideInterval?: number;
}

export function GalleryHero({ 
  images, 
  onImageClick, 
  autoSlide = true, 
  slideInterval = 5000 
}: GalleryHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, images.length]);

  // Reset image loaded state when image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative group">
      {/* Main hero container */}
      <div
        className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-3xl overflow-hidden bg-white shadow-2xl shadow-[#5C4632]/20"
        role="region"
        aria-label="Galleria hero"
        aria-roledescription="carousel"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE7] via-[#E8DFD0] to-[#F5EFE7] animate-pulse" />
          )}
          
          <>
            {/* Low-quality image placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#F5EFE7] filter blur-xl scale-110" />
            )}
            
            {/* Optimized main image */}
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={`
                w-full h-full object-cover transition-all duration-1000
                ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
              `}
              onLoad={handleImageLoad}
              loading="eager" // Hero images should load immediately
              decoding="async"
              // Add srcset for responsive images
              srcSet={`
                ${currentImage.src}?w=800 800w,
                ${currentImage.src}?w=1200 1200w,
                ${currentImage.src}?w=1600 1600w,
                ${currentImage.src}?w=2000 2000w
              `}
              sizes="100vw"
            />
          </>
          
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#C9A76A]/30 backdrop-blur-sm hover:bg-[#C9A76A]/50 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Immagine precedente"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handlePrevious();
                }
              }}
            >
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#C9A76A]/30 backdrop-blur-sm hover:bg-[#C9A76A]/50 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Immagine successiva"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNext();
                }
              }}
            >
              <i className="fas fa-chevron-right" aria-hidden="true" />
            </button>
          </>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2" role="tablist" aria-label="Indicatori immagine">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === currentIndex
                    ? 'bg-[#2F4F3E] scale-125'
                    : 'bg-[#2F4F3E]/50 hover:bg-[#2F4F3E]/75'
                  }
                `}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Vai all'immagine ${index + 1}`}
                tabIndex={index === currentIndex ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setCurrentIndex(index);
                  }
                }}
              />
            ))}
          </div>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-[#2F4F3E]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium" aria-live="polite" aria-atomic="true">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail strip for multiple images */}
      {images.length > 1 && (
        <div className="mt-6 flex space-x-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`
                flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all duration-300
                ${index === currentIndex
                  ? 'ring-4 ring-[#C9A76A] scale-105'
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
                }
              `}
              aria-label={`Miniatura ${index + 1} di ${images.length}: ${image.alt}`}
              aria-current={index === currentIndex}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setCurrentIndex(index);
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                // Add srcset for responsive thumbnails
                srcSet={`
                  ${image.src}?w=80 80w,
                  ${image.src}?w=96 96w,
                  ${image.src}?w=120 120w
                `}
                sizes="5rem"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}