import { useLanguage } from "@/hooks/use-language";
import { SectionHeadingEditoriale } from "@/components/section-heading-editoriale";
import eventImage from "/images/gallery/473026623_572405422260123_5681489185905862866_n.jpg";

export function AboutEditoriale() {
  const { t } = useLanguage();

  const storia = [
    { titolo: t("storiaOriginiTitle"), testi: [t("storiaOriginiText1"), t("storiaOriginiText2")] },
    { titolo: t("storiaComunitaTitle"), testi: [t("storiaComunitaText1")] },
    { titolo: t("storiaAttivitaTitle"), testi: [t("storiaAttivitaText1")] },
    { titolo: t("storiaImpattoTitle"), testi: [t("storiaImpattoText1"), t("storiaImpattoText2")] },
  ];

  return (
    <section id="story" className="bg-[#FBF3E6] px-6 md:px-8 py-20 md:py-24">
      <div className="max-w-[1320px] mx-auto">
        <SectionHeadingEditoriale index="01" normal={t("sectionAboutNormal")} italic={t("sectionAboutItalic")} />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
          <div className="rounded overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img src={eventImage} alt="Truffle Camp by Nicoletta Conte" className="w-full h-full object-cover block" />
          </div>
          <div>
            {storia.map((voce) => (
              <div key={voce.titolo} className="[&:not(:first-child)]:mt-9 md:[&:not(:first-child)]:mt-12">
                <h3 className="m-0 mb-3 font-fraunces font-medium text-2xl text-[#2A1F14]">{voce.titolo}</h3>
                {voce.testi.map((testo) => (
                  <p key={testo} className="mt-2 first:mt-0 max-w-[62ch] text-base leading-[1.6] text-[#2A1F14]/68">
                    {testo}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
