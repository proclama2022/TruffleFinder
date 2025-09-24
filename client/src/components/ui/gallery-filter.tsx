import { type GalleryCategory } from '../../lib/modern-gallery-config';

interface GalleryFilterProps {
  categories: GalleryCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  isLoading?: boolean;
}

export function GalleryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  isLoading = false
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4" role="group" aria-label="Filtri galleria">
      {categories.map((category, index) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          disabled={isLoading}
          role="radio"
          aria-checked={activeCategory === category.id}
          aria-label={`Filtra per categoria: ${category.label}`}
          tabIndex={activeCategory === category.id ? 0 : -1}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onCategoryChange(category.id);
            }
          }}
          className={`
            group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
            hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
            ${activeCategory === category.id
              ? 'bg-[#2F4F3E] text-white shadow-md'
              : 'bg-white text-[#5C4632] hover:bg-[#F5EFE7]'
            }
          `}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <span className="relative z-10">{category.label}</span>

          {/* Active indicator */}
          {activeCategory === category.id && (
            <div className="absolute inset-0 bg-[#2F4F3E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
          )}
        </button>
      ))}

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex items-center space-x-2 px-4 py-3 text-[#2F4F3E]" role="status" aria-live="polite">
          <div className="w-4 h-4 border-2 border-[#2F4F3E] border-t-transparent rounded-full animate-spin" aria-hidden="true" />
          <span className="text-sm font-medium">Filtrando...</span>
        </div>
      )}
    </div>
  );
}