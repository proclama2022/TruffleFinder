import { useLanguage } from "@/hooks/use-language";
import logoImage from "/images/gallery/truffle-camp-logo-square.jpg";

export function FooterEditoriale() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2A1F14] text-[#FFFBF3] px-6 md:px-8 pt-16 pb-9">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Truffle Camp by Nicoletta Conte" className="w-14 h-14 rounded-full object-cover" />
              <h3 className="m-0 font-fraunces font-medium text-xl text-[#FFFBF3]">
                Truffle Camp <span className="opacity-70 font-normal">by</span> Nicoletta Conte
              </h3>
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#FFFBF3]/65">{t("uniqueExperience")}</p>
          </div>
          <div>
            <h4 className="m-0 mb-4 font-grotesk font-semibold text-[12px] tracking-[0.1em] uppercase text-[#E4B876]">
              {t("footerContactHeader")}
            </h4>
            <div className="flex flex-col gap-3 text-[15px] text-[#FFFBF3]/80">
              <span>
                +39 334 750 0887 <span className="text-[#FFFBF3]/40 text-[13px]">· {t("footerHours")}</span>
              </span>
              <span>
                nico.conte76543@gmail.com <span className="text-[#FFFBF3]/40 text-[13px]">· {t("footerResponseTime")}</span>
              </span>
              <span>
                Al Vecchio Convento <span className="text-[#FFFBF3]/40 text-[13px]">· Portico di Romagna</span>
              </span>
            </div>
          </div>
          <div>
            <h4 className="m-0 mb-4 font-grotesk font-semibold text-[12px] tracking-[0.1em] uppercase text-[#E4B876]">
              {t("footerCommunityHeader")}
            </h4>
            <p className="m-0 mb-4 text-[14.5px] leading-[1.6] text-[#FFFBF3]/65">{t("footerCommunityText")}</p>
            <div className="flex gap-5">
              {["Facebook", "Instagram", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-sm text-[#FFFBF3]/75 hover:text-[#C68A3E] no-underline border-b border-[#FFFBF3]/30 hover:border-[#C68A3E] pb-0.5 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#FFFBF3]/10 pt-6 flex justify-between items-center flex-wrap gap-3.5">
          <p className="m-0 text-[13.5px] text-[#FFFBF3]/45">{t("allRightsReserved")}</p>
          <div className="flex gap-6">
            <a href="#" className="text-[13.5px] text-[#FFFBF3]/45 hover:text-[#C68A3E] no-underline">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="text-[13.5px] text-[#FFFBF3]/45 hover:text-[#C68A3E] no-underline">
              {t("cookiePolicy")}
            </a>
            <a href="#" className="text-[13.5px] text-[#FFFBF3]/45 hover:text-[#C68A3E] no-underline">
              {t("termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
