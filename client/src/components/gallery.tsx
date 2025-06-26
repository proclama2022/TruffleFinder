import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";

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

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const filterButtons = [
    { key: "all", label: t("all") },
    { key: "dogs", label: t("dogs") },
    { key: "hunting", label: t("hunting") },
    { key: "food", label: t("food") },
  ];

  return (
    <section id="gallery" className="py-20 bg-truffle-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 dark:text-white mb-8">
            {t("galleryTitle")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("galleryDescription")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {filterButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setActiveFilter(button.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === button.key
                  ? "bg-yellow-600 text-white"
                  : "bg-white dark:bg-gray-800 text-amber-900 dark:text-white hover:bg-yellow-100 dark:hover:bg-gray-700"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {filteredImages.map((image) => (
            <div key={image.id} className="break-inside-avoid">
              <div className="glassmorphism rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                  onClick={() => openLightbox(image.src)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt=""
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-all duration-300"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
