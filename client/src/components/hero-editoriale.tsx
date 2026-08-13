import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { scrollToElement } from "@/lib/utils";
import heroImage from "/images/gallery/hero-bosco-crop2.png";

const EVENT_DATE_ISO = "2026-10-14T00:00:00";

export function HeroEditoriale() {
  const { t } = useLanguage();
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, new Date(EVENT_DATE_ISO).getTime() - Date.now());
      setDaysLeft(Math.floor(diff / 86400000));
    };
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="bg-[#FBF3E6] px-6 md:px-8 pt-16 md:pt-24 pb-14 md:pb-16 overflow-hidden">
      <div className="max-w-[1320px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
        <div>
          <h1
            className="font-fraunces font-medium text-[#2A1F14] m-0"
            style={{ fontSize: "clamp(40px, 7vw, 108px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}
          >
            Truffle Camp{" "}
            <br />
            <span className="text-[0.4em] font-normal not-italic uppercase tracking-[0.1em] opacity-60 align-middle">by</span>{" "}
            <em className="font-medium not-italic italic text-[#C68A3E]">Nicoletta Conte</em>
          </h1>
          <p className="mt-5 md:mt-6 text-lg md:text-[19px] text-[#2A1F14]/68 max-w-[46ch]">
            {t("uniqueExperience")}
          </p>
          <div className="mt-7 md:mt-8 flex gap-8 md:gap-10 flex-wrap">
            <div>
              <span className="font-grotesk text-[12px] font-bold tracking-[0.16em] uppercase text-[#33461F]">{t("dates")}</span>
              <p className="mt-1 font-fraunces text-[19px] md:text-[21px] text-[#2A1F14]">{t("eventDate")}</p>
            </div>
            <div>
              <span className="font-grotesk text-[12px] font-bold tracking-[0.16em] uppercase text-[#33461F]">{t("location")}</span>
              <p className="mt-1 font-fraunces text-[19px] md:text-[21px] text-[#2A1F14]">Portico di Romagna</p>
            </div>
            <div>
              <span className="font-grotesk text-[12px] font-bold tracking-[0.16em] uppercase text-[#33461F]">{t("daysToEvent")}</span>
              <p className="mt-1 font-fraunces text-[19px] md:text-[21px] text-[#C68A3E]">{daysLeft}</p>
            </div>
          </div>
          <div className="mt-10 md:mt-12 flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToElement("contact")}
              className="bg-[#C68A3E] hover:bg-[#E4B876] text-[#2A1F14] font-grotesk font-bold text-sm rounded-full px-8 py-[17px] border-none cursor-pointer transition-colors"
            >
              {t("navPrenota")}
            </button>
            <button
              onClick={() => scrollToElement("program")}
              className="border border-[#2A1F14]/70 text-[#2A1F14] font-grotesk font-bold text-sm rounded-full px-8 py-4 bg-transparent cursor-pointer hover:bg-[#2A1F14]/5 transition-colors"
            >
              {t("discoverProgram")}
            </button>
          </div>
        </div>

        <div className="relative rounded overflow-hidden shadow-[0_12px_32px_-12px_rgba(42,31,20,0.35)]" style={{ aspectRatio: "4/5" }}>
          <img
            src={heroImage}
            alt="Bosco dell'Appennino Tosco-Romagnolo"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 18%" }}
          />
          <span className="absolute bottom-6 left-6 bg-[#2A1F14]/80 text-[#FFFBF3] font-grotesk font-semibold text-xs tracking-[0.06em] uppercase rounded-full px-[18px] py-2.5">
            {t("locationTagline")}
          </span>
        </div>
      </div>
    </section>
  );
}
