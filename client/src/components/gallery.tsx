import { useState } from "react";
import leafPattern from '../assets/images/leaf-pattern.svg';
import { useLanguage } from "@/hooks/use-language";
import { Camera, X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
    alt: "Lagotto Romagnolo",
    category: "dogs",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Fresh Truffles",
    category: "hunting",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=900",
    alt: "Lagotto in Forest",
    category: "dogs",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Truffle Risotto",
    category: "food",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700",
    alt: "Truffle Hunter",
    category: "hunting",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500",
    alt: "Dog Training",
    category: "dogs",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Truffle Pasta",
    category: "food",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
    alt: "Autumn Landscape",
    category: "hunting",
  },
];

export function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  const filterButtons = [
    { key: "all", label: t("all") },
    { key: "dogs", label: t("dogs") },
    { key: "hunting", label: t("hunting") },
    { key: "food", label: t("food") },
  ];

  return (
    <section id="gallery" className="section-sep relative overflow-hidden bg-[var(--background)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[var(--primary)]/10 px-4 py-2 rounded-full mb-6">
            <Camera className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-[var(--primary)] text-sm font-semibold tracking-wide uppercase">Visual Stories</span>
          </div>
          <h2 className="text-6xl font-bold text-[var(--primary)] mb-6">
            Gallery
          </h2>
          <p className="text-xl text-[var(--primary)]/80 max-w-2xl mx-auto leading-relaxed">
            {t("galleryDescription")}
          </p>
        </div>

        {/* Modern Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setActiveFilter(button.key)}
              className={`relative transition-all duration-300 ${activeFilter === button.key ? 'btn-primary scale-105' : 'btn-secondary'}`}
            >
              <span className="relative z-10 px-6 py-3 rounded-2xl font-medium">{button.label}</span>
            </button>
          ))}
        </div>

        {/* Modern Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto cursor-leaf">
          {filteredImages.map((image, index) => (
            <div key={image.id} className="group cursor-pointer gallery-item">
              <div
                className={`
                  relative image-overlay-soft overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[var(--primary)]/20 transition-all duration-500
                  ${index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                  ${index % 5 === 0 && index % 7 !== 0 ? 'col-span-2' : ''}
                `}
                role="button"
                tabIndex={0}
                aria-label={`Apri lightbox per l'immagine: ${image.alt}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(image.src);
                  }
                }}
              >
                {/* Low-quality image placeholder */}
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 bg-[var(--background)] filter blur-xl scale-110" />
                )}
                
                {/* Optimized main image */}
                <img
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
                  className={`
                    w-full h-full object-cover group-hover:scale-110 transition-transform duration-700
                    ${loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'}
                  `}
                  onClick={() => openLightbox(image.src)}
                  onLoad={() => handleImageLoad(image.id)}
                  decoding="async"
                  // Add srcset for responsive images
                  srcSet={`
                    ${image.src}&w=300 300w,
                    ${image.src}&w=400 400w,
                    ${image.src}&w=600 600w,
                    ${image.src}&w=800 800w,
                    ${image.src}&w=1000 1000w
                  `}
                  sizes={`
                    (max-width: 640px) 50vw,
                    (max-width: 1024px) 33vw,
                    25vw
                  `}
                />
                 
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-[var(--primary)]/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Lightbox immagine"
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt=""
              className="max-w-full max-h-full object-contain rounded-2xl"
              loading="eager"
              decoding="async"
              // Add srcset for responsive lightbox image
              srcSet={`
                ${lightboxImage}&w=800 800w,
                ${lightboxImage}&w=1200 1200w,
                ${lightboxImage}&w=1600 1600w,
                ${lightboxImage}&w=2000 2000w
              `}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-[var(--secondary)]/30 text-white rounded-full hover:bg-[var(--secondary)]/50 transition-all duration-300"
              aria-label="Chiudi lightbox"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  closeLightbox();
                }
              }}
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
