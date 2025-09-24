import { BENTO_DATA } from "@/lib/gallery-config";
import { BentoGrid, BentoCard } from "./ui/bento-grid";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";

export function BentoGallery() {
  const { t } = useLanguage();
  const featuredItems = BENTO_DATA.filter(item => item.featured);
  const regularItems = BENTO_DATA.filter(item => !item.featured);

  return (
    <section id="gallery" className="py-24 bg-[#F5EFE7]" aria-label="Galleria Bento">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#2F4F3E]/10 px-6 py-3 rounded-full mb-8">
            <i className="fas fa-camera text-[#5C4632]"></i>
            <span className="text-[#5C4632] text-sm font-semibold tracking-wide uppercase">
              {t ? t("gallery") : "Galleria"}
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#5C4632] mb-6">
            {t ? t("galleryTitle") : "Momenti Indimenticabili"}
          </h2>
          <p className="text-xl text-[#5C4632]/80 max-w-3xl mx-auto leading-relaxed">
            {t ? t("galleryDescription") : "Scopri i momenti più belli delle nostre esperienze con il tartufo e i nostri amati Lagotto Romagnolo."}
          </p>
        </motion.div>

        {/* Featured Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#5C4632]">In Evidenza</h3>
          <BentoGrid>
            {featuredItems.map((item) => (
              <BentoCard
                key={item.id}
                {...item}
                // Didascalie rimosse come richiesto
              />
            ))}
          </BentoGrid>
        </div>

        {/* Other Content */}
        <div>
           <h3 className="text-3xl font-bold text-center mb-8 text-[#5C4632]">Altri Momenti</h3>
          <BentoGrid>
            {regularItems.map((item) => (
               <BentoCard
                key={item.id}
                {...item}
                // Didascalie rimosse come richiesto
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}