import { useLanguage } from "@/hooks/use-language";
import { SectionHeadingEditoriale } from "@/components/section-heading-editoriale";
import nicolettaImage from "/images/gallery/nicoletta.jpg";

export function TeamEditoriale() {
  const { currentTranslations, t } = useLanguage();

  const skills = [t("professionalTraining"), t("advancedTechniques"), t("behavioralConsulting")];

  return (
    <section id="team" className="bg-[#FBF3E6] px-6 md:px-8 py-20 md:py-24">
      <div className="max-w-[1320px] mx-auto">
        <SectionHeadingEditoriale index="04" normal={t("sectionTeamNormal")} italic={t("sectionTeamItalic")} />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h3
              className="m-0 font-fraunces font-medium text-[#2A1F14]"
              style={{ fontSize: "clamp(44px, 6.5vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}
            >
              Nicoletta
              <br />
              <em className="font-medium not-italic italic text-[#C68A3E]">Conte</em>
            </h3>
            <p className="mt-4 mb-0 font-grotesk text-[13px] font-bold tracking-[0.1em] uppercase text-[#6B4A2E]">
              {currentTranslations.teamSection.nicolettaRole}
            </p>
            <p className="mt-6 mb-0 text-lg leading-[1.7] text-[#2A1F14]/75 max-w-[46ch]">
              {currentTranslations.teamSection.nicolettaDescription}
            </p>
            <div className="mt-8 flex flex-col max-w-[44ch]">
              {skills.map((skill, i) => (
                <div
                  key={skill}
                  className={`py-3.5 border-t border-[#2A1F14]/16 text-base text-[#2A1F14]/85 ${
                    i === skills.length - 1 ? "border-b" : ""
                  }`}
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="mt-9 flex gap-4 flex-wrap">
              <a
                href="mailto:nico.conte76543@gmail.com"
                className="inline-block bg-[#2A1F14] hover:bg-[#6B4A2E] text-[#FFFBF3] no-underline font-grotesk font-semibold text-sm rounded-full px-8 py-[15px] transition-colors"
              >
                {t("contactNicoletta")}
              </a>
              <a
                href="https://www.instagram.com/nicoletta_truffle/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent text-[#2A1F14] no-underline font-grotesk font-semibold text-sm rounded-full px-8 py-[15px] border border-[#2A1F14]/40 hover:border-[#2A1F14] hover:bg-[#2A1F14]/5 transition-colors"
              >
                {t("followInstagram")}
              </a>
            </div>
          </div>
          <div className="rounded overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img
              src={nicolettaImage}
              alt="Nicoletta Conte"
              className="w-full h-full object-cover block"
              style={{ objectPosition: "70% 20%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
