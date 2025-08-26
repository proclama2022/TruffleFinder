import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/use-language";

export function LocationLogistics() {
  const { currentTranslations } = useLanguage();
  return (
    <section
      id="location"
      className="h-[100vh] bg-[var(--forest-cream)] dark:bg-gray-800 flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Left: Interactive Map */}
      <div className="lg:w-3/5 h-1/2 lg:h-full">
        <iframe
          title={currentTranslations.mapPorticoRomagna}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.1234567890123!2d11.8656789012345!3d44.0612345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cc66e1234567%3A0xabcdef1234567890!2sPortico%20di%20Romagna!5e0!3m2!1sit!2sit!4v1234567890123"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      {/* Right: Practical Info Accordion */}
      <div className="lg:w-2/5 p-8 flex flex-col justify-center glassmorphism backdrop-blur-sm">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-[var(--forest-brown)]">
            <AccordionTrigger className="text-2xl font-heading text-[var(--forest-brown)] hover:no-underline">
              Come Arrivare
            </AccordionTrigger>
            <AccordionContent className="text-lg leading-relaxed text-[var(--forest-brown)]">
              <strong>In auto:</strong> Dall'autostrada A14 uscita Cesena, proseguire SS9 verso
              {currentTranslations.porticoRomagnaDistance}.<br />
              <strong>In treno:</strong> Stazione di Forlì, poi bus locale.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-[var(--forest-brown)]">
            <AccordionTrigger className="text-2xl font-heading text-[var(--forest-brown)] hover:no-underline">
              Dove Dormire
            </AccordionTrigger>
            <AccordionContent className="text-lg leading-relaxed text-[var(--forest-brown)]">
              Hotel e agriturismi consigliati nelle vicinanze:
              <ul className="list-disc list-inside mt-2">
                <li>Agriturismo Le Cascate</li>
                <li>Hotel Monte Busca</li>
                <li>B&B Il Laghetto</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="text-2xl font-heading text-[var(--forest-brown)] hover:no-underline">
              Cosa Portare
            </AccordionTrigger>
            <AccordionContent className="text-lg leading-relaxed text-[var(--forest-brown)]">
              Scarpe comode, abbigliamento a strati, sacchetto per rifiuti,
              acqua e snack. Ricorda guinzaglio e museruola per il cane.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}