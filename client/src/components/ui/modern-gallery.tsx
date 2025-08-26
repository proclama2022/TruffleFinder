import { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/use-language';
import { 
  GALLERY_IMAGES, 
  GALLERY_CATEGORIES, 
  HERO_IMAGES, 
  getImagesByCategory,
  type GalleryImage,
  type GalleryCategory 
} from '../../lib/modern-gallery-config';
import { GalleryFilter } from './gallery-filter.tsx';
import { GalleryGrid } from './gallery-grid.tsx';
import { GalleryLightbox } from './gallery-lightbox.tsx';
import { GalleryHero } from './gallery-hero.tsx';

interface ModernGalleryProps {
  showHero?: boolean;
  showFilters?: boolean;
  showFeatured?: boolean;
  featuredCount?: number;
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  className?: string;
}

export function ModernGallery({
  showHero = true,
  showFilters = true,
  showFeatured = true,
  featuredCount = 6,
  columns = { mobile: 2, tablet: 3, desktop: 4 },
  className = ''
}: ModernGalleryProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(GALLERY_IMAGES);
  const [featuredImages, setFeaturedImages] = useState<GalleryImage[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedFeaturedImages, setLoadedFeaturedImages] = useState<Set<string>>(new Set());

  // Initialize featured images
  useEffect(() => {
    const featured = GALLERY_IMAGES.filter(img => img.featured).slice(0, featuredCount);
    setFeaturedImages(featured);
  }, [featuredCount]);

  // Filter images when category changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const images = getImagesByCategory(activeCategory);
      setFilteredImages(images);
      setIsLoading(false);
    }, 200); // Small delay for smooth transition

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId !== activeCategory) {
      setActiveCategory(categoryId);
    }
  };

  const handleImageClick = (imageId: string) => {
    const imageIndex = filteredImages.findIndex(img => img.id === imageId);
    if (imageIndex !== -1) {
      setLightboxIndex(imageIndex);
      setLightboxOpen(true);
    }
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };

  const handleFeaturedImageLoad = (imageId: string) => {
    setLoadedFeaturedImages(prev => new Set(prev).add(imageId));
  };


  return (
    <section
      id="gallery"
      className={`py-20 bg-[#F5EFE7] transition-colors duration-300 ${className}`}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#2F4F3E]/10 px-6 py-3 rounded-full mb-8">
            <i className="fas fa-camera text-[#5C4632]"></i>
            <span className="text-[#5C4632] text-sm font-semibold tracking-wide uppercase">
              Galleria
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#5C4632] mb-6">
            {t ? t("gallery") : "Momenti Indimenticabili"}
          </h2>
          <p className="text-xl text-[#5C4632]/80 max-w-3xl mx-auto leading-relaxed">
            {t ? t("galleryDescription") : "Scopri i momenti più belli delle nostre esperienze con il tartufo e i nostri amati Lagotto Romagnolo."}
          </p>
        </div>

        {/* Featured Section */}
        {showFeatured && featuredImages.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-[#5C4632]">
              In Evidenza
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => handleImageClick(image.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Apri lightbox per l'immagine: ${image.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleImageClick(image.id);
                    }
                  }}
                >
                  <div className="relative w-full aspect-[4/3]">
                    {/* Low-quality image placeholder */}
                    {!loadedFeaturedImages.has(image.id) && (
                      <div className="absolute inset-0 bg-[#F5EFE7] filter blur-xl scale-110" />
                    )}
                    
                    {/* Optimized featured image */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`
                        w-full h-full object-cover transition-transform duration-500 group-hover:scale-105
                        ${loadedFeaturedImages.has(image.id) ? 'opacity-100' : 'opacity-0'}
                      `}
                      onLoad={() => handleFeaturedImageLoad(image.id)}
                      loading="lazy"
                      decoding="async"
                      // Add srcset for responsive images
                      srcSet={`
                        ${image.src}?w=400 400w,
                        ${image.src}?w=600 600w,
                        ${image.src}?w=800 800w,
                        ${image.src}?w=1000 1000w
                      `}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hero Section */}
        {showHero && HERO_IMAGES.length > 0 && (
          <div className="mb-16">
            <GalleryHero
              images={HERO_IMAGES}
              onImageClick={handleImageClick}
            />
          </div>
        )}

        {/* Filters */}
        {showFilters && (
          <div className="sticky top-20 z-30 mb-12 bg-white/80 backdrop-blur-sm py-4 border-b border-[#C9A76A]/30">
            <GalleryFilter
              categories={GALLERY_CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              isLoading={isLoading}
            />
          </div>
        )}

        {/* Gallery Grid */}
        <div className="mb-8">
          <GalleryGrid
            images={filteredImages}
            columns={columns}
            onImageClick={handleImageClick}
            isLoading={isLoading}
          />
        </div>

        {/* Results Info */}
        <div className="text-center text-[#5C4632]/60">
          <p className="text-sm">
            {isLoading ? (
              "Caricamento..."
            ) : (
              `${filteredImages.length} ${filteredImages.length === 1 ? 'immagine' : 'immagini'} 
               ${activeCategory !== 'all' ? `nella categoria "${GALLERY_CATEGORIES.find(cat => cat.id === activeCategory)?.label}"` : 'totali'}`
            )}
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={handleLightboxClose}
      />
    </section>
  );
}