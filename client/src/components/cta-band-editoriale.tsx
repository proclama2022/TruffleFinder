import { useLanguage } from "@/hooks/use-language";
import { scrollToElement } from "@/lib/utils";

export function CtaBandEditoriale() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#33461F] px-6 md:px-8 py-16 md:py-24 text-center">
      <button
        onClick={() => scrollToElement("contact")}
        className="bg-transparent border-none cursor-pointer p-0 font-fraunces font-semibold italic text-[#FFFBF3] hover:text-[#E4B876] transition-colors"
        style={{ fontSize: "clamp(44px, 9vw, 120px)", lineHeight: 1 }}
      >
        {t("ctaBookNow")}
      </button>
      <p className="mt-7 mb-0 font-grotesk text-sm font-semibold tracking-[0.15em] uppercase text-[#FFFBF3]/85">
        {t("eventLocation")} · {t("eventDate")}
      </p>
    </section>
  );
}
