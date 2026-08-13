import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { SectionHeadingEditoriale } from "@/components/section-heading-editoriale";

type Category = "tutti" | "cani" | "caccia" | "eventi";

const PHOTOS: { src: string; cat: Exclude<Category, "tutti"> }[] = [
  { src: "/images/gallery/464380933_17956502999831393_6501081485669265423_n.jpg", cat: "cani" },
  { src: "/images/gallery/464469027_17956503017831393_2796787598014715018_n.jpg", cat: "cani" },
  { src: "/images/gallery/464824467_17957117315831393_3218779434772932755_n.jpg", cat: "cani" },
  { src: "/images/gallery/464877167_17957117444831393_8590192735761577707_n.jpg", cat: "caccia" },
  { src: "/images/gallery/464935188_17957117384831393_7153552770582827653_n.jpg", cat: "eventi" },
  { src: "/images/gallery/464968712_17957117327831393_4065399704841922148_n.jpg", cat: "eventi" },
  { src: "/images/gallery/469168979_548681407965858_5427275510400062944_n.jpg", cat: "cani" },
  { src: "/images/gallery/469362531_548682184632447_550109455162274963_n.jpg", cat: "caccia" },
  { src: "/images/gallery/472686206_572405268926805_1526769013100232144_n.jpg", cat: "cani" },
  { src: "/images/gallery/473026623_572405422260123_5681489185905862866_n.jpg", cat: "eventi" },
];

export function GalleryEditoriale() {
  const { t } = useLanguage();
  const [category, setCategory] = useState<Category>("tutti");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: "tutti", label: t("all") },
    { id: "cani", label: t("dogs") },
    { id: "caccia", label: t("hunting") },
    { id: "eventi", label: t("events") },
  ];

  const filtered = category === "tutti" ? PHOTOS : PHOTOS.filter((p) => p.cat === category);

  return (
    <section id="gallery" className="bg-[#F3E7D2] px-6 md:px-8 py-20 md:py-24">
      <div className="max-w-[1320px] mx-auto">
        <SectionHeadingEditoriale
          index="03"
          normal={t("sectionGalleryNormal")}
          italic={t("sectionGalleryItalic")}
          trailing={
            <div className="flex gap-5 md:gap-6 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => { setCategory(c.id); setLightbox(null); }}
                  className="bg-transparent border-none cursor-pointer font-grotesk font-bold text-sm tracking-[0.06em] uppercase pb-1.5 transition-colors"
                  style={{
                    color: category === c.id ? "#2A1F14" : "rgba(42,31,20,0.4)",
                    borderBottom: category === c.id ? "2px solid #C68A3E" : "2px solid transparent",
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {filtered.map((foto, i) => (
            <div
              key={foto.src}
              onClick={() => setLightbox(i)}
              className={`rounded-sm overflow-hidden cursor-pointer bg-cover bg-center transition-opacity hover:opacity-85 ${
                i % 5 === 0 || i % 5 === 2 ? "md:mt-8" : ""
              }`}
              style={{ backgroundImage: `url('${foto.src}')`, aspectRatio: "3/4" }}
              role="img"
              aria-label={`Truffle Camp — ${foto.cat}`}
            />
          ))}
        </div>
      </div>

      {lightbox !== null && filtered.length > 0 && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12"
          style={{ background: "rgba(28,20,13,0.95)" }}
        >
          <div
            className="bg-contain bg-no-repeat bg-center rounded-sm"
            style={{ width: "86vw", height: "86vh", backgroundImage: `url('${filtered[Math.min(lightbox, filtered.length - 1)].src}')` }}
            role="img"
            aria-label="Foto ingrandita"
          />
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-6 right-7 w-12 h-12 rounded-full border border-[#FFFBF3]/30 bg-transparent text-[#FFFBF3] cursor-pointer flex items-center justify-center"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filtered.length) % filtered.length); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#FFFBF3]/30 bg-transparent text-[#FFFBF3] cursor-pointer flex items-center justify-center"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filtered.length); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#FFFBF3]/30 bg-transparent text-[#FFFBF3] cursor-pointer flex items-center justify-center"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
