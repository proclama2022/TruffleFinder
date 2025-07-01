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
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6">
            <i className="fas fa-camera text-pink-600 dark:text-pink-400"></i>
            <span className="text-pink-700 dark:text-pink-300 text-sm font-semibold tracking-wide uppercase">Visual Stories</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("galleryDescription")}
          </p>
        </div>

        {/* Modern Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setActiveFilter(button.key)}
              className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeFilter === button.key
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              }`}
            >
              <span className="relative z-10">{button.label}</span>
              {activeFilter === button.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Modern Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <div key={image.id} className="group cursor-pointer">
              <div className={`
                relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
                ${index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index % 5 === 0 && index % 7 !== 0 ? 'col-span-2' : ''}
              `}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onClick={() => openLightbox(image.src)}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-sm mb-1">{image.alt}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <i className="fas fa-expand-alt text-white text-xs"></i>
                      </div>
                      <span className="text-white/80 text-xs">Click to enlarge</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-2 py-1">
                    <span className="text-white text-xs font-medium capitalize">{image.category}</span>
                  </div>
                </div>
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
