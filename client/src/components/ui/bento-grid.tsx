import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlayCircleIcon } from "lucide-react";
import { GalleryItem } from "@/lib/gallery-config";
import { useState } from "react";

const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = (props: GalleryItem) => {
    const {
      type,
      title,
      size,
      subtitle,
      image,
      video,
      images,
      stats,
      quote,
      author,
      badge,
    } = props;
  
    const isHero = type === 'hero';
    const isVideo = type === 'video';
    const isGallery = type === 'gallery';
    const isStats = type === 'stats';
    const isTestimonial = type === 'testimonial';
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageUrl = image || (images && images[0]);

    return (
      <div
        className={cn(
          "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:shadow-[#5C4632]/20",
          // large styles
          size === 'large' && "md:col-span-2 md:row-span-2",
          // medium styles
          size === 'medium' && "md:col-span-1 md:row-span-2",
          // small styles
          size === 'small' && "md:col-span-1 md:row-span-1",
          'bg-cover bg-center bg-no-repeat',
          'transform transition-transform duration-500 ease-in-out',
        )}
        style={{
          backgroundImage: imageLoaded ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s ease'
        }}
      >
        {/* Low-quality image placeholder */}
        {!imageLoaded && (
          <div
            className="absolute inset-0 bg-[#F5EFE7] filter blur-xl scale-110"
            style={{
              backgroundImage: `url(${imageUrl}?w=20&blur=10)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        
        {/* Hidden image for preloading */}
        <img
          src={imageUrl}
          alt=""
          className="hidden"
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          decoding="async"
        />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-20 h-20 bg-[#C9A76A]/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <PlayCircleIcon className="h-16 w-16 text-white transition-transform group-hover:scale-110" />
            </div>
          </div>
        )}
      </div>
    );
  };

export { BentoGrid, BentoCard };