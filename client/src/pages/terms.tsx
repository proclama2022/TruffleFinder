import { LegalPage } from "./legal-page";

export default function Terms() {
  return (
    <LegalPage
      title="Termini e Condizioni"
      updated="4 luglio 2026"
      intro="I presenti Termini e Condizioni regolano la partecipazione a Lagotto & Truffle Week, evento organizzato da Nicoletta Conte a Portico di Romagna, Al Vecchio Convento."
      sections={[
        {
          heading: "Richieste e prenotazioni",
          paragraphs: [
            "L'invio del modulo di contatto presente sul sito costituisce una richiesta di informazioni o di prenotazione, ma non rappresenta una prenotazione confermata.",
            "La conferma della partecipazione avviene solo a seguito di contatto diretto (email o telefono) da parte dell'organizzazione, che comunicherà le modalità di adesione, i costi delle attività scelte e le modalità di pagamento.",
          ],
        },
        {
          heading: "Pagamenti",
          paragraphs: [
            "I costi delle attività, dei pasti e del pernottamento vengono comunicati e saldati direttamente presso la struttura Al Vecchio Convento, secondo le modalità indicate al momento della conferma della prenotazione.",
          ],
        },
        {
          heading: "Partecipazione con il proprio cane",
          paragraphs: [
            "Ogni partecipante è responsabile del proprio cane durante l'intera durata dell'evento, incluse le attività di caccia al tartufo, addestramento e i momenti conviviali.",
          ],
          bullets: [
            "Il cane deve essere in regola con le vaccinazioni e il libretto sanitario previsti dalla normativa vigente.",
            "È richiesto l'uso di guinzaglio (e museruola dove indicato dallo staff) negli spostamenti e nelle aree comuni.",
            "L'organizzazione non risponde di danni causati dal proprio cane a persone, cose o altri animali, né di danni subiti dal proprio cane durante lo svolgimento delle attività.",
          ],
        },
        {
          heading: "Attività nel bosco e sicurezza",
          paragraphs: [
            "Le attività di caccia al tartufo e le escursioni si svolgono in ambiente naturale, spesso su terreno collinare o boschivo. I partecipanti prendono parte alle attività seguendo le indicazioni delle guide e degli istruttori, a proprio rischio.",
            "Si raccomanda un abbigliamento adeguato (scarpe da trekking, abbigliamento a strati) come indicato nella sezione Informazioni Pratiche del sito.",
          ],
        },
        {
          heading: "Modifiche al programma",
          paragraphs: [
            "L'organizzazione si riserva il diritto di modificare orari, attività o relatori del programma per cause di forza maggiore (condizioni meteo, indisponibilità di relatori o guide, disposizioni delle autorità locali), dandone comunicazione ai partecipanti il prima possibile.",
          ],
        },
        {
          heading: "Diritti d'immagine",
          paragraphs: [
            "Durante l'evento potranno essere realizzate fotografie e riprese video, anche ritraenti i partecipanti e i loro cani, utilizzate a scopo promozionale sul sito di Lagotto & Truffle Week e sui relativi canali social.",
            "Chi non desidera essere ripreso può comunicarlo allo staff dell'organizzazione all'inizio dell'evento.",
          ],
        },
        {
          heading: "Legge applicabile",
          paragraphs: [
            "I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia è competente il foro previsto dalla normativa vigente a tutela del consumatore.",
          ],
        },
      ]}
    />
  );
}
