import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { SectionHeadingEditoriale } from "@/components/section-heading-editoriale";

interface ContactFormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  dogName: string;
  message: string;
}

const emptyForm: ContactFormData = { name: "", surname: "", email: "", phone: "", dogName: "", message: "" };

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-grotesk text-xs font-bold tracking-[0.1em] uppercase text-[#FFFBF3]/55">{children}</span>
  );
}

const fieldClass =
  "px-0.5 py-3 border-0 border-b border-[#FFFBF3]/30 bg-transparent font-sans text-[16.5px] text-[#FFFBF3] outline-none focus:border-b-[#C68A3E] transition-colors placeholder:text-[#FFFBF3]/35";

export function ContactEditoriale() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: t("messageSent") });
      setFormData(emptyForm);
    },
    onError: () => toast({ title: t("errorOccurred"), variant: "destructive" }),
  });

  const handleChange = (field: keyof ContactFormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const infoRows = [
    { label: t("location"), value: "Portico di Romagna, Al Vecchio Convento" },
    { label: t("dates"), value: t("eventDate") },
    { label: t("phone"), value: "+39 334 750 0887" },
    { label: t("email"), value: "nico.conte76543@gmail.com" },
  ];

  const practicalInfo = [
    { label: t("howToArrive"), desc: t("howToArriveDesc") },
    { label: t("whereToSleep"), desc: t("whereToSleepDesc") },
    { label: t("whatToBring"), desc: t("whatToBringDesc") },
  ];

  return (
    <section id="contact" className="bg-[#FBF3E6] px-6 md:px-8 py-20 md:py-24">
      <div className="max-w-[1320px] mx-auto">
        <SectionHeadingEditoriale index="05" normal={t("sectionContactNormal")} italic={t("sectionContactItalic")} />

        <div className="grid md:grid-cols-[5fr_7fr] gap-10 md:gap-16 items-start">
          <div>
            <div className="mb-11">
              {infoRows.map((row) => (
                <div key={row.label} className="py-4 border-b border-[#2A1F14]/16 flex justify-between gap-5">
                  <span className="font-grotesk text-[12.5px] font-bold tracking-[0.1em] uppercase text-[#2A1F14]/50 pt-1">
                    {row.label}
                  </span>
                  <span className="text-[17px] text-[#2A1F14] text-right break-all">{row.value}</span>
                </div>
              ))}
            </div>

            <h3 className="m-0 mb-5 font-fraunces font-medium text-[26px] text-[#2A1F14]">
              {t("practicalInfo")}
            </h3>
            <div className="flex flex-col gap-4 mb-11">
              {practicalInfo.map((item) => (
                <div key={item.label}>
                  <p className="m-0 mb-0.5 font-bold text-[15.5px] text-[#2A1F14]">{item.label}</p>
                  <p className="m-0 text-[15.5px] leading-[1.55] text-[#2A1F14]/65">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="h-[220px] rounded-sm overflow-hidden">
              <iframe
                title="Portico di Romagna"
                src="https://www.google.com/maps?q=Portico+di+Romagna&output=embed"
                className="w-full h-full border-0"
                style={{ filter: "sepia(0.25) saturate(0.85)" }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-[#2A1F14] text-[#FFFBF3] rounded-sm p-8 md:p-12">
            <h3 className="m-0 mb-9 font-fraunces font-medium text-3xl md:text-4xl text-[#FFFBF3]">
              {t("sendMessage").replace(t("sendMessageItalic"), "").trim()}{" "}
              <em className="font-medium not-italic italic text-[#C68A3E]">{t("sendMessageItalic")}</em>
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="grid grid-cols-2 gap-7">
                <label className="flex flex-col gap-2">
                  <FieldLabel>{t("name")}</FieldLabel>
                  <input
                    className={fieldClass}
                    placeholder={t("yourName")}
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <FieldLabel>{t("surname")}</FieldLabel>
                  <input
                    className={fieldClass}
                    placeholder={t("yourSurname")}
                    value={formData.surname}
                    onChange={(e) => handleChange("surname", e.target.value)}
                    required
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <FieldLabel>Email</FieldLabel>
                <input
                  type="email"
                  className={fieldClass}
                  placeholder={t("yourEmail")}
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </label>
              <label className="flex flex-col gap-2">
                <FieldLabel>{t("dogName")}</FieldLabel>
                <input
                  className={fieldClass}
                  placeholder={t("yourDogName")}
                  value={formData.dogName}
                  onChange={(e) => handleChange("dogName", e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2">
                <FieldLabel>{t("message")}</FieldLabel>
                <textarea
                  rows={4}
                  className={`${fieldClass} resize-y`}
                  placeholder={t("tellUsAbout")}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </label>
              <button
                type="submit"
                disabled={mutation.isPending}
                className="mt-2 py-[18px] rounded-full bg-[#C68A3E] hover:bg-[#E4B876] text-[#2A1F14] font-grotesk font-bold text-base border-none cursor-pointer transition-colors"
              >
                {t("sendMessageBtn")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
