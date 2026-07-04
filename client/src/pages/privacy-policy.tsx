import { LegalPage } from "./legal-page";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Informativa sulla Privacy"
      updated="4 luglio 2026"
      intro="Questa informativa descrive come Lagotto & Truffle Week raccoglie e utilizza i dati personali degli utenti del sito, in conformità al Regolamento (UE) 2016/679 (GDPR)."
      sections={[
        {
          heading: "Titolare del trattamento",
          paragraphs: [
            "Il titolare del trattamento è Nicoletta Conte, organizzatrice di Lagotto & Truffle Week, con sede dell'evento a Portico di Romagna, Al Vecchio Convento.",
            "Per qualsiasi richiesta relativa ai dati personali è possibile scrivere a nico.conte76543@gmail.com o chiamare il numero +39 334 750 0887.",
          ],
        },
        {
          heading: "Quali dati raccogliamo",
          paragraphs: [
            "Attraverso il modulo di contatto presente sul sito raccogliamo i seguenti dati, forniti volontariamente dall'utente:",
          ],
          bullets: [
            "Nome e cognome",
            "Indirizzo email",
            "Nome del cane (facoltativo)",
            "Il contenuto del messaggio inviato",
          ],
        },
        {
          heading: "Finalità e base giuridica del trattamento",
          paragraphs: [
            "I dati raccolti tramite il modulo di contatto sono utilizzati esclusivamente per rispondere alle richieste di informazioni e di prenotazione relative a Lagotto & Truffle Week.",
            "La base giuridica del trattamento è l'esecuzione di misure precontrattuali adottate su richiesta dell'interessato (art. 6.1.b GDPR), oltre al consenso implicito nell'invio volontario del modulo.",
          ],
        },
        {
          heading: "Come vengono trattati i dati",
          paragraphs: [
            "I messaggi inviati dal modulo di contatto vengono trasmessi in modo sicuro a un servizio di automazione (Make.com), utilizzato per instradare le richieste all'organizzazione dell'evento. I dati non vengono ceduti, venduti o comunicati a terzi per finalità di marketing.",
            "Durante l'evento potranno essere scattate fotografie e video utilizzati a scopo promozionale sul sito e sui canali social di Lagotto & Truffle Week; i dettagli sono descritti nei Termini e Condizioni.",
          ],
        },
        {
          heading: "Conservazione dei dati",
          paragraphs: [
            "I dati raccolti tramite il modulo di contatto sono conservati per il tempo necessario a gestire la richiesta e comunque non oltre 24 mesi dall'ultimo contatto, salvo diversi obblighi di legge.",
          ],
        },
        {
          heading: "Diritti dell'interessato",
          paragraphs: [
            "In qualsiasi momento è possibile esercitare i diritti previsti dagli articoli 15-22 del GDPR, tra cui:",
          ],
          bullets: [
            "Accesso ai propri dati personali",
            "Rettifica di dati inesatti o incompleti",
            "Cancellazione dei dati (\"diritto all'oblio\")",
            "Limitazione del trattamento",
            "Portabilità dei dati",
            "Opposizione al trattamento",
          ],
        },
        {
          heading: "Reclami",
          paragraphs: [
            "È possibile presentare reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it) qualora si ritenga che il trattamento dei propri dati violi la normativa vigente.",
          ],
        },
      ]}
    />
  );
}
