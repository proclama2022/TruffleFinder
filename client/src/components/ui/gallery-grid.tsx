import { useState } from 'react';
import { type GalleryImage } from '../../lib/modern-gallery-config';

interface GalleryGridProps {
  images: GalleryImage[];
  columns: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  onImageClick: (imageId: string) => void;
  isLoading?: boolean;
}

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
  index: number;
}

function ImageCard({ image, onClick, index }: ImageCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#5C4632]/20"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Apri lightbox per l'immagine: ${image.alt}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        animationDelay: `${index * 50}ms`,
        transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s ease'
      }}
    >
      {/* Aspect ratio container */}
      <div className={`
        relative w-full
        ${image.aspectRatio === 'square' ? 'aspect-square' : ''}
        ${image.aspectRatio === 'portrait' ? 'aspect-[3/4]' : ''}
        ${image.aspectRatio === 'landscape' ? 'aspect-[4/3]' : ''}
        transition-all duration-500 ease-in-out
      `}>
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE7] via-[#E8DFD0] to-[#F5EFE7] animate-pulse" />
        )}

        {/* Image */}
        {!imageError ? (
          <>
            {/* Low-quality image placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#F5EFE7] filter blur-xl scale-110" />
            )}
            
            {/* Optimized main image */}
            <img
              src={image.src}
              alt={image.alt}
              className={`
                w-full h-full object-cover transition-all duration-700 ease-in-out
                ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                group-hover:scale-110 group-hover:brightness-110
              `}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
              decoding="async"
              // Add srcset for responsive images
              srcSet={`
                ${image.src}?w=300 300w,
                ${image.src}?w=600 600w,
                ${image.src}?w=900 900w,
                ${image.src}?w=1200 1200w
              `}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#F5EFE7]" role="alert" aria-live="polite">
            <div className="text-center text-[#5C4632]/60">
              <i className="fas fa-image text-2xl mb-2" aria-hidden="true" />
              <p className="text-sm">Immagine non disponibile</p>
            </div>
          </div>
        )}

        {/* Video indicator */}
        {image.type === 'video' && (
          <div className="absolute top-4 right-4 w-10 h-10 bg-[#2F4F3E]/80 backdrop-blur-sm rounded-full flex items-center justify-center" aria-label="Video">
            <i className="fas fa-play text-white text-sm" aria-hidden="true" />
          </div>
        )}

        {/* Hover icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#C9A76A]/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 group-hover:bg-[#C9A76A]/50" aria-hidden="true">
          <i className="fas fa-expand text-white text-lg transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>
    </div>
  );
}

function LoadingSkeleton({ columns }: { columns: { mobile: number; tablet: number; desktop: number } }) {
  const skeletonCount = columns.desktop * 2; // Show 2 rows of skeletons

  return (
    <div className={`
      grid gap-4 md:gap-6
      ${columns.mobile === 2 ? 'grid-cols-2' : columns.mobile === 3 ? 'grid-cols-3' : 'grid-cols-4'}
      ${columns.tablet === 2 ? 'md:grid-cols-2' : columns.tablet === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}
      ${columns.desktop === 2 ? 'lg:grid-cols-2' : columns.desktop === 3 ? 'lg:grid-cols-3' : columns.desktop === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'}
    `}>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div 
          key={index}
          className="aspect-square bg-gradient-to-r from-[#F5EFE7] via-[#E8DFD0] to-[#F5EFE7] rounded-2xl animate-pulse"
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
    </div>
  );
}

export function GalleryGrid({ images, columns, onImageClick, isLoading = false }: GalleryGridProps) {
  if (isLoading) {
    return <LoadingSkeleton columns={columns} />;
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-16" role="status" aria-live="polite">
        <div className="w-24 h-24 mx-auto mb-6 bg-[#F5EFE7] rounded-full flex items-center justify-center" aria-hidden="true">
          <i className="fas fa-images text-3xl text-[#5C4632]/60" />
        </div>
        <h3 className="text-xl font-semibold text-[#5C4632]/80 mb-2">
          Nessuna immagine trovata
        </h3>
        <p className="text-[#5C4632]/60">
          Prova a selezionare una categoria diversa
        </p>
      </div>
    );
  }

  return (
    <div className={`
      grid gap-4 md:gap-6 animate-fade-in
      ${columns.mobile === 2 ? 'grid-cols-2' : columns.mobile === 3 ? 'grid-cols-3' : 'grid-cols-4'}
      ${columns.tablet === 2 ? 'md:grid-cols-2' : columns.tablet === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}
      ${columns.desktop === 2 ? 'lg:grid-cols-2' : columns.desktop === 3 ? 'lg:grid-cols-3' : columns.desktop === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'}
    `}>
      {images.map((image, index) => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image.id)}
          index={index}
        />
      ))}
    </div>
  );
}