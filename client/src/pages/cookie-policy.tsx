import { LegalPage } from "./legal-page";

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Politica sui Cookie"
      updated="4 luglio 2026"
      intro="Questa pagina descrive l'utilizzo di cookie e tecnologie simili sul sito di Truffle Camp."
      sections={[
        {
          heading: "Cosa sono i cookie",
          paragraphs: [
            "I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.",
          ],
        },
        {
          heading: "Cookie utilizzati da questo sito",
          paragraphs: [
            "Questo sito non utilizza cookie di profilazione né strumenti di analisi o tracciamento pubblicitario.",
            "Utilizziamo esclusivamente:",
          ],
          bullets: [
            "Memoria locale del browser (localStorage) per ricordare la lingua selezionata (italiano/inglese) durante la navigazione. Questo dato resta sul dispositivo dell'utente e non viene mai trasmesso a noi.",
          ],
        },
        {
          heading: "Contenuti di terze parti",
          paragraphs: [
            "Nella sezione Contatti il sito integra una mappa di Google Maps tramite iframe, per mostrare la posizione di Portico di Romagna. Google può impostare propri cookie quando la mappa viene caricata o utilizzata, secondo la sua informativa privacy (policies.google.com/privacy).",
            "Non abbiamo controllo diretto su questi cookie di terze parti; per maggiori informazioni si consiglia di consultare l'informativa privacy di Google.",
          ],
        },
        {
          heading: "Come gestire i cookie dal browser",
          paragraphs: [
            "È possibile gestire o disabilitare i cookie in qualsiasi momento tramite le impostazioni del proprio browser. Disabilitare i cookie di terze parti (ad esempio quelli di Google Maps) potrebbe impedire la corretta visualizzazione della mappa nella sezione Contatti, senza però compromettere la fruizione delle altre sezioni del sito.",
          ],
        },
      ]}
    />
  );
}
