import { useLanguage } from "@/hooks/use-language";
import { scrollToElement } from "@/lib/utils";
import { SectionHeadingEditoriale } from "@/components/section-heading-editoriale";

export function ProgramEditoriale() {
  const { t } = useLanguage();

  const programma = [
    {
      numero: 15,
      nomeKey: "wednesday" as const,
      attivita: [
        { nome: t("workTrainingBase"), descrizione: t("lagottoTrainingDescription") },
        { nome: t("truffleExperienceWhite"), descrizione: t("whiteTruffleHuntingDescription") },
        { nome: t("inaugurationDinner"), descrizione: t("gourmetDinnerDescription") },
      ],
    },
    {
      numero: 16,
      nomeKey: "thursday" as const,
      attivita: [
        { nome: t("handlingGrooming"), descrizione: t("groomingTechniquesDescription") },
        { nome: t("showCooking"), descrizione: t("truffleCookingDescription") },
      ],
    },
    {
      numero: 17,
      nomeKey: "friday" as const,
      attivita: [
        { nome: t("truffleHuntingUncinato"), descrizione: t("hookedTruffleHuntingDescription") },
        { nome: t("charityRaffle"), descrizione: t("lagottoRescueEventDescription") },
      ],
    },
    {
      numero: 18,
      nomeKey: "saturday" as const,
      attivita: [
        { nome: t("officialTraining"), descrizione: t("enciJudgesDescription") },
        { nome: t("conferenceSurpriseGuest"), descrizione: t("specialEveningDescription") },
      ],
    },
    {
      numero: 19,
      nomeKey: "sunday" as const,
      attivita: [
        { nome: t("truffleHuntingWhite"), descrizione: t("lastWhiteTruffleHuntingDescription") },
        { nome: t("lunchGreetings"), descrizione: t("finalLunchDescription") },
      ],
    },
  ];

  const jumpToDay = (numero: number) => {
    document.getElementById(`program-day-${numero}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="program" className="bg-[#2A1F14] text-[#FFFBF3] px-6 md:px-8 py-20 md:py-24">
      <div className="max-w-[1320px] mx-auto">
        <SectionHeadingEditoriale index="02" normal={t("sectionProgramNormal")} italic={t("sectionProgramItalic")} dark />

        <div className="flex gap-6 md:gap-8 mb-14 md:mb-16 flex-wrap">
          {programma.map((g) => (
            <button
              key={g.numero}
              onClick={() => jumpToDay(g.numero)}
              className="bg-transparent border-none cursor-pointer p-0 text-left text-[#FFFBF3]/45 hover:text-[#C68A3E] transition-colors"
            >
              <span
                className="font-fraunces font-medium block"
                style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.9 }}
              >
                {g.numero}
              </span>
              <span className="font-grotesk text-xs font-bold tracking-[0.1em] uppercase block mt-2">
                {t(g.nomeKey)}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col">
          {programma.map((giorno) => (
            <div
              key={giorno.numero}
              id={`program-day-${giorno.numero}`}
              className="scroll-mt-24 pt-12 mt-12 first:pt-0 first:mt-0 border-t border-[#FFFBF3]/20 first:border-t-0"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-fraunces font-medium text-[28px] text-[#C68A3E]">{giorno.numero}</span>
                <span className="font-grotesk text-[13px] font-bold tracking-[0.1em] uppercase text-[#FFFBF3]/70">
                  {t(giorno.nomeKey)}
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {giorno.attivita.map((att, i) => (
                  <div key={att.nome} className="border-t border-[#FFFBF3]/25 pt-6">
                    <span className="font-grotesk text-xs font-bold text-[#4C6430]">
                      {t(giorno.nomeKey)} — 0{i + 1}
                    </span>
                    <h4 className="mt-2.5 mb-2 font-fraunces font-medium text-2xl leading-[1.1] text-[#FFFBF3]">
                      {att.nome}
                    </h4>
                    <p className="m-0 text-[15px] leading-[1.6] text-[#FFFBF3]/65">{att.descrizione}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex items-center justify-between gap-6 flex-wrap">
          <p className="m-0 font-fraunces font-normal italic text-lg md:text-xl text-[#FFFBF3]/70">
            {t("programDescription")}
          </p>
          <button
            onClick={() => scrollToElement("contact")}
            className="bg-[#C68A3E] hover:bg-[#E4B876] text-[#2A1F14] font-grotesk font-bold text-sm rounded-full px-8 py-[17px] border-none cursor-pointer transition-colors"
          >
            {t("contactUs")}
          </button>
        </div>
      </div>
    </section>
  );
}
