import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { scrollToElement } from "@/lib/utils";
import logoImage from "/images/gallery/truffle-camp-logo-square.jpg";

export function NavigationEditoriale() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "story", label: t("navStoria") },
    { id: "program", label: t("program") },
    { id: "team", label: t("sectionTeamNormal") },
    { id: "gallery", label: t("gallery") },
    { id: "contact", label: t("contact") },
  ];

  const navigate = (id: string) => {
    scrollToElement(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header
      className={`sticky top-0 z-[100] border-b transition-colors duration-300 ${
        scrolled ? "bg-[#FBF3E6]/95 backdrop-blur-md border-[#2A1F14]/15" : "bg-[#FBF3E6]/80 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 h-[80px] md:h-[96px] flex items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); navigate("home"); }}
          className="flex items-center gap-3 no-underline"
        >
          <img src={logoImage} alt="Truffle Camp" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover" />
          <span className="font-grotesk font-bold text-[13px] tracking-[0.12em] uppercase text-[#2A1F14] whitespace-nowrap hidden lg:inline">
            Truffle Camp <span className="opacity-60 font-normal lowercase">by</span> Nicoletta Conte
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => navigate(l.id)}
              className="font-grotesk text-[13px] font-semibold tracking-[0.06em] uppercase bg-transparent border-none cursor-pointer text-[#6B4A2E] hover:text-[#33461F] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={() => setLanguage(language === "it" ? "en" : "it")}
            className="font-grotesk font-semibold text-xs tracking-widest uppercase bg-transparent border-none cursor-pointer text-[#6B4A2E] hover:text-[#33461F] transition-colors"
          >
            {language === "it" ? "EN" : "IT"}
          </button>
          <button
            onClick={() => navigate("contact")}
            className="font-grotesk font-bold text-[13px] tracking-[0.02em] uppercase text-[#FFFBF3] bg-[#2A1F14] hover:bg-[#6B4A2E] rounded-full px-6 py-[11px] border-none cursor-pointer transition-colors"
          >
            {t("navPrenota")}
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 bg-transparent border-none text-[#2A1F14] cursor-pointer"
          aria-label="Menu"
        >
          <Menu size={26} />
        </button>
      </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[110] bg-[#2A1F14] flex flex-col">
          <div className="flex items-center justify-between px-6 h-[72px]">
            <span className="font-grotesk font-bold text-sm tracking-widest uppercase text-[#FFFBF3]">
              Truffle Camp <span className="opacity-70 font-normal lowercase">by</span> Nicoletta Conte
            </span>
            <button onClick={() => setMobileOpen(false)} className="p-2 bg-transparent border-none text-[#FFFBF3] cursor-pointer" aria-label="Chiudi">
              <X size={26} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-8 px-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => navigate(l.id)}
                className="font-fraunces font-medium text-4xl text-[#FFFBF3] bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === "it" ? "en" : "it")}
              className="font-grotesk text-sm tracking-widest uppercase text-[#FFFBF3]/70 bg-transparent border-none cursor-pointer"
            >
              {language === "it" ? "English" : "Italiano"}
            </button>
            <button
              onClick={() => navigate("contact")}
              className="font-grotesk font-bold text-base uppercase text-[#2A1F14] bg-[#C68A3E] rounded-full px-10 py-4 border-none cursor-pointer"
            >
              {t("navPrenota")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
