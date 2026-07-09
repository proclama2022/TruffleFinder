import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { CREAM, INK, GOLD, OLIVE, BROWN, DARKEST, SAND, grotesk, crimson, satoshi } from "@/lib/theme";

const IMG = "/images/gallery/";

const LEGAL_HREFS = ["/privacy-policy", "/cookie-policy", "/termini-e-condizioni"];

type Lang = "it" | "en";

const kicker: React.CSSProperties = {
  fontFamily: grotesk,
  fontWeight: 700,
  fontSize: 15,
  color: OLIVE,
};

function SectionHeader({
  num,
  light,
  main,
  emText,
}: {
  num: string;
  light?: boolean;
  main: string;
  emText: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 28,
        marginBottom: 64,
        borderBottom: light ? "2px solid rgba(255,248,240,0.4)" : `2px solid ${INK}`,
        paddingBottom: 28,
      }}
    >
      <span style={kicker}>{num}</span>
      <h2
        style={{
          margin: 0,
          fontFamily: crimson,
          fontWeight: 600,
          fontSize: "clamp(48px, 6vw, 88px)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: light ? CREAM : INK,
        }}
      >
        {main} <em style={{ fontWeight: 500, color: light ? GOLD : BROWN }}>{emText}</em>
      </h2>
    </div>
  );
}

// ————— Contenuti bilingue —————
const STORIA: Record<Lang, { id: string; titolo: string; testi: string[] }[]> = {
  it: [
    {
      id: "origini",
      titolo: "Le Origini dell'Evento",
      testi: [
        "La Lagotto & Truffle Week nasce dalla passione per il Lagotto Romagnolo e l'arte della ricerca del tartufo, riunendo ogni anno appassionati, cinofili ed esperti nelle splendide colline dell'Appennino Tosco-Romagnolo.",
        "La prima edizione ha gettato le basi per una manifestazione ricca di emozioni, cultura cinofila e condivisione. Ogni anno la Truffle Week si rinnova, coinvolgendo nuovi ospiti e rafforzando la collaborazione con associazioni e operatori locali.",
      ],
    },
    {
      id: "comunita",
      titolo: "Una Comunità Internazionale",
      testi: [
        "Negli anni abbiamo visto partecipanti provenire da tutta Europa – Lituania, Inghilterra, Polonia, Slovacchia, Svizzera, Francia e perfino dall'Australia – tutti accomunati dal desiderio di vivere un'esperienza autentica, tra natura, formazione e convivialità.",
      ],
    },
    {
      id: "attivita",
      titolo: "Attività e Formazione",
      testi: [
        'L\'evento propone sessioni di addestramento con istruttori esperti come Nicoletta Conte, laboratori di cucina gourmet al tartufo, prove di lavoro ENCI, conferenze e attività a sostegno del rescue "Un tesoro di Lagotto".',
      ],
    },
    {
      id: "impatto",
      titolo: "Impatto Sociale",
      testi: [
        "Parte dei ricavati dell'evento è destinata al supporto del rescue Lagotto, rendendo la settimana non solo un'occasione formativa e di divertimento, ma anche di solidarietà.",
        "Vieni a scoprire la storia che scriviamo insieme, anno dopo anno, tra boschi, tartufi e sorrisi.",
      ],
    },
  ],
  en: [
    {
      id: "origini",
      titolo: "The Origins of the Event",
      testi: [
        "Lagotto & Truffle Week was born from a passion for the Lagotto Romagnolo and the art of truffle hunting, bringing together enthusiasts, dog lovers and experts every year in the beautiful hills of the Tuscan-Romagna Apennines.",
        "The first edition laid the foundations for an event full of emotion, dog culture and togetherness. Every year the Truffle Week renews itself, welcoming new guests and strengthening ties with local associations and businesses.",
      ],
    },
    {
      id: "comunita",
      titolo: "An International Community",
      testi: [
        "Over the years we've welcomed participants from all over Europe — Lithuania, England, Poland, Slovakia, Switzerland, France and even Australia — all sharing the same desire to live an authentic experience, between nature, training and conviviality.",
      ],
    },
    {
      id: "attivita",
      titolo: "Activities and Training",
      testi: [
        'The event offers training sessions with expert instructors like Nicoletta Conte, gourmet truffle cooking workshops, ENCI working tests, talks and activities supporting the "Un tesoro di Lagotto" rescue.',
      ],
    },
    {
      id: "impatto",
      titolo: "Social Impact",
      testi: [
        "Part of the event's proceeds go to supporting Lagotto rescue, making the week not just a training and fun experience, but a charitable one too.",
        "Come discover the story we're writing together, year after year, among woods, truffles and smiles.",
      ],
    },
  ],
};

type Attivita = { momento: string; nome: string; descrizione: string };
type Giorno = { numero: number; nome: string; attivita: Attivita[] };

const PROGRAMMA: Record<Lang, Giorno[]> = {
  it: [
    {
      numero: 14,
      nome: "Mercoledì",
      attivita: [
        { momento: "Mattina", nome: "Training cerca del tartufo base", descrizione: "Sessione di addestramento di base alla cerca del tartufo" },
        { momento: "Mattina", nome: "Functional training for truffle dogs", descrizione: "Addestramento funzionale per cani da tartufo con Elisa Mengozzi" },
        { momento: "Pomeriggio", nome: "Truffle Experience su tartufo bianco", descrizione: "Esperienza pratica di cerca sul pregiato tartufo bianco" },
        { momento: "Sera", nome: "Cena di inaugurazione", descrizione: "Cena di benvenuto presso Al Vecchio Convento" },
      ],
    },
    {
      numero: 15,
      nome: "Giovedì",
      attivita: [
        { momento: "Mattina", nome: "Training sul tartufo", descrizione: "Training sul tartufo e corner gestione del Lagotto Romagnolo" },
        { momento: "Pomeriggio / Sera", nome: "Show cooking e Laboratorio di cucina", descrizione: "Cucina creativa con il tartufo come protagonista" },
        { momento: "Pomeriggio / Sera", nome: "Riffa di beneficenza", descrizione: 'A sostegno del rescue "Un tesoro di Lagotto"' },
      ],
    },
    {
      numero: 16,
      nome: "Venerdì",
      attivita: [
        {
          momento: "Tutto il giorno",
          nome: "Truffle training in montagna",
          descrizione: "Alla scoperta del tartufo uncinato, con shooting fotografico e picnic a cura di Al Vecchio Convento",
        },
        {
          momento: "Sera",
          nome: "Seminario di Katrien van Gemert",
          descrizione: "Il cucciolo e la gestione della cucciolata",
        },
      ],
    },
    {
      numero: 17,
      nome: "Sabato",
      attivita: [
        { momento: "Mattina", nome: "Training prova di lavoro", descrizione: "Prova di lavoro con giudici ufficiali ENCI" },
        { momento: "Pomeriggio", nome: "Conferenza con Gilberto Grandi", descrizione: "Incontro e approfondimento con Gilberto Grandi" },
        { momento: "Pomeriggio", nome: "Intorno al fuoco del Monte Busca", descrizione: "Storie di lagotti e tartufi" },
      ],
    },
    {
      numero: 18,
      nome: "Domenica",
      attivita: [
        { momento: "Tutto il giorno", nome: "Truffle Hunting su tartufo bianco", descrizione: "Caccia al tartufo bianco su campo naturale" },
        { momento: "Tutto il giorno", nome: "Pranzo e saluti", descrizione: "Pranzo finale e saluti con tutti i partecipanti" },
      ],
    },
  ],
  en: [
    {
      numero: 14,
      nome: "Wednesday",
      attivita: [
        { momento: "Morning", nome: "Basic truffle-hunting training", descrizione: "Basic training session on truffle hunting" },
        { momento: "Morning", nome: "Functional training for truffle dogs", descrizione: "Functional training for truffle dogs with Elisa Mengozzi" },
        { momento: "Afternoon", nome: "Truffle Experience on white truffle", descrizione: "Hands-on hunting experience with prized white truffle" },
        { momento: "Evening", nome: "Inauguration dinner", descrizione: "Welcome dinner at Al Vecchio Convento" },
      ],
    },
    {
      numero: 15,
      nome: "Thursday",
      attivita: [
        { momento: "Morning", nome: "Truffle training", descrizione: "Truffle training and Lagotto Romagnolo management corner" },
        { momento: "Afternoon / Evening", nome: "Show cooking and cooking workshop", descrizione: "Creative cuisine with truffle as the star" },
        { momento: "Afternoon / Evening", nome: "Charity raffle", descrizione: 'In support of the "Un tesoro di Lagotto" rescue' },
      ],
    },
    {
      numero: 16,
      nome: "Friday",
      attivita: [
        {
          momento: "All day",
          nome: "Mountain truffle training",
          descrizione: "Discovering the uncinato truffle, with photo shoot and picnic curated by Al Vecchio Convento",
        },
        {
          momento: "Evening",
          nome: "Seminar with Katrien van Gemert",
          descrizione: "The puppy and litter management",
        },
      ],
    },
    {
      numero: 17,
      nome: "Saturday",
      attivita: [
        { momento: "Morning", nome: "Working test training", descrizione: "Working test with official ENCI judges" },
        { momento: "Afternoon", nome: "Conference with Gilberto Grandi", descrizione: "A talk and deep dive with Gilberto Grandi" },
        { momento: "Afternoon", nome: "Around the Monte Busca fire", descrizione: "Stories of Lagottos and truffles" },
      ],
    },
    {
      numero: 18,
      nome: "Sunday",
      attivita: [
        { momento: "All day", nome: "White truffle hunting", descrizione: "Truffle hunting on natural white truffle ground" },
        { momento: "All day", nome: "Lunch and farewells", descrizione: "Closing lunch and farewells with all participants" },
      ],
    },
  ],
};

const FOTO = [
  { src: `${IMG}464948125_17957117483831393_1811134842718160966_n.jpg`, cat: "cani" },
  { src: `${IMG}464380933_17956502999831393_6501081485669265423_n.jpg`, cat: "cani" },
  { src: `${IMG}464469027_17956503017831393_2796787598014715018_n.jpg`, cat: "caccia" },
  { src: `${IMG}464824467_17957117315831393_3218779434772932755_n.jpg`, cat: "cani" },
  { src: `${IMG}464877167_17957117444831393_8590192735761577707_n.jpg`, cat: "eventi" },
  { src: `${IMG}464935188_17957117384831393_7153552770582827653_n.jpg`, cat: "caccia" },
  { src: `${IMG}464968712_17957117327831393_4065399704841922148_n.jpg`, cat: "eventi" },
  { src: `${IMG}469168979_548681407965858_5427275510400062944_n.jpg`, cat: "cani" },
  { src: `${IMG}469362531_548682184632447_550109455162274963_n.jpg`, cat: "eventi" },
  { src: `${IMG}472686206_572405268926805_1526769013100232144_n.jpg`, cat: "caccia" },
  { src: `${IMG}473026623_572405422260123_5681489185905862866_n.jpg`, cat: "cani" },
];

const CATEGORIE: { id: string; it: string; en: string }[] = [
  { id: "tutti", it: "Tutti", en: "All" },
  { id: "cani", it: "Cani", en: "Dogs" },
  { id: "caccia", it: "Caccia", en: "Hunting" },
  { id: "eventi", it: "Eventi", en: "Events" },
];

const SPANS = [
  { c: 2, r: 2 }, { c: 1, r: 1 }, { c: 1, r: 1 }, { c: 1, r: 2 }, { c: 1, r: 1 },
  { c: 2, r: 1 }, { c: 1, r: 1 }, { c: 1, r: 1 }, { c: 2, r: 1 }, { c: 1, r: 1 },
];

// ————— Testi statici bilingue —————
const TXT = {
  it: {
    nav: { storia: "Storia", programma: "Programma", gallery: "Gallery", prenota: "Prenota" },
    hero: {
      kicker: "Portico di Romagna · Appennino Tosco-Romagnolo",
      date: "14–18 ottobre 2026",
      countdownLabel: "giorni all'evento",
      cta: "Prenota ora",
      programCta: "Scopri il programma",
      subtitle: "L'esperienza unica per te e il tuo cane",
      alt: "Logo Lagotto & Truffle Week",
      posterAlt: "Locandina Lagotto & Truffle Week — 14–18 ottobre 2026",
      info: [
        { label: "Quando", value: "14–18 ottobre 2026" },
        { label: "Dove", value: "Portico di Romagna · Al Vecchio Convento" },
        { label: "Cosa", value: "Caccia al tartufo, training, show cooking e beneficenza" },
      ],
    },
    marquee: "Caccia al tartufo — Prove ENCI — Show cooking — Lagotto Romagnolo — Al Vecchio Convento — Beneficenza Lagotto Rescue — ",
    storia: {
      num: "03",
      main: "Un'Esperienza",
      em: "Indimenticabile",
      intro:
        "Cinque giorni di caccia al tartufo, sessioni di addestramento, cucina gourmet e momenti indimenticabili con il tuo Lagotto Romagnolo nelle splendide colline di Portico di Romagna.",
      highlights: [
        { titolo: "Caccia al Tartufo", testo: "Vivi l'autentica caccia al tartufo con guide esperte e il tuo Lagotto addestrato." },
        { titolo: "Sessioni di Addestramento", testo: "Addestramento professionale con giudici ufficiali ENCI e handler esperti." },
        { titolo: "Esperienza Gourmet", testo: "Scopri la cucina al tartufo con show cooking e cene gourmet." },
      ],
    },
    program: {
      num: "01",
      main: "Un Viaggio",
      em: "di 5 Giorni",
      closing: "Cinque giorni di attività, addestramento ed esperienze indimenticabili.",
      contactCta: "Contattaci",
    },
    team: {
      num: "04",
      main: "Incontra",
      em: "l'Esperta",
      role: "Fondatrice & Esperta di Lagotto · 15+ anni",
      bio: "Nicoletta è la mente e il cuore dietro Lagotto & Truffle Week. Con anni di esperienza nell'allevamento e nell'addestramento di Lagotto Romagnolo, la sua passione per i cani e la ricerca del tartufo è contagiosa. Guida ogni partecipante attraverso un'esperienza autentica e indimenticabile.",
      bullets: ["Addestramento professionale Lagotto Romagnolo", "Tecniche avanzate di ricerca tartufi", "Consulenza comportamentale canina"],
      contactBtn: "Contatta Nicoletta",
      instagramBtn: "Instagram",
    },
    gallery: { num: "02", main: "Momenti", em: "Indimenticabili", lightboxAlt: "Foto ingrandita" },
    contact: {
      num: "05",
      main: "Pronto a",
      em: "unirti a noi?",
      rows: [
        { label: "Sede", value: "Portico di Romagna, Al Vecchio Convento" },
        { label: "Date", value: "14–18 ottobre 2026" },
        { label: "Telefono", value: "+39 334 750 0887" },
        { label: "Email", value: "nico.conte76543@gmail.com" },
      ],
      practicalHeading: "Informazioni Pratiche",
      practicalInfo: [
        { titolo: "Come Arrivare", testo: "Dall'autostrada A14 uscita Cesena, SS9 verso Portico (30 min)" },
        { titolo: "Dove Dormire", testo: "Hotel e agriturismi consigliati nelle vicinanze" },
        { titolo: "Cosa Portare", testo: "Scarpe comode, abbigliamento a strati, guinzaglio e museruola" },
      ],
      formMain: "Inviaci un",
      formEm: "Messaggio",
      fieldNome: "Nome",
      placeholderNome: "Il tuo nome",
      fieldCognome: "Cognome",
      placeholderCognome: "Il tuo cognome",
      fieldEmail: "Email",
      placeholderEmail: "la.tua.email@esempio.it",
      fieldDog: "Nome del Cane",
      placeholderDog: "Il nome del tuo cane",
      fieldMessage: "Messaggio",
      placeholderMessage: "Raccontaci del tuo interesse per l'evento...",
      sendBtn: "Invia Messaggio",
      sending: "Invio in corso...",
      success: "Messaggio inviato con successo!",
      validationError: "Compila nome, cognome, email e messaggio.",
      genericError: "Si è verificato un errore, riprova più tardi.",
    },
    cta: { text: "Prenota ora →" },
    footer: {
      tagline: "Un'esperienza unica per te e il tuo Lagotto Romagnolo",
      contactHeading: "Contatto & Informazioni",
      hours: "· Lun-Ven 9:00-18:00",
      replyWithin: "· Risposta entro 24h",
      communityHeading: "Unisciti alla Community",
      communityText:
        "Seguici sui social media per rimanere aggiornato su eventi, consigli e storie dalla nostra community di appassionati.",
      copyright: "© 2026 Lagotto & Truffle Week. Tutti i diritti riservati.",
      legal: ["Politica sulla Privacy", "Politica sui Cookie", "Termini"],
    },
  },
  en: {
    nav: { storia: "Story", programma: "Program", gallery: "Gallery", prenota: "Book" },
    hero: {
      kicker: "Portico di Romagna · Tuscan-Romagna Apennines",
      date: "14–18 October 2026",
      countdownLabel: "days to go",
      cta: "Book now",
      programCta: "Discover the program",
      subtitle: "The unique experience for you and your dog",
      alt: "Lagotto & Truffle Week logo",
      posterAlt: "Lagotto & Truffle Week poster — 14–18 October 2026",
      info: [
        { label: "When", value: "14–18 October 2026" },
        { label: "Where", value: "Portico di Romagna · Al Vecchio Convento" },
        { label: "What", value: "Truffle hunting, training, show cooking and charity" },
      ],
    },
    marquee: "Truffle hunting — ENCI working tests — Show cooking — Lagotto Romagnolo — Al Vecchio Convento — Lagotto Rescue charity — ",
    storia: {
      num: "03",
      main: "An Unforgettable",
      em: "Experience",
      intro:
        "Five days of truffle hunting, training sessions, gourmet cuisine and unforgettable moments with your Lagotto Romagnolo in the beautiful hills of Portico di Romagna.",
      highlights: [
        { titolo: "Truffle Hunting", testo: "Experience authentic truffle hunting with expert guides and your trained Lagotto." },
        { titolo: "Training Sessions", testo: "Professional training with official ENCI judges and expert handlers." },
        { titolo: "Gourmet Experience", testo: "Discover truffle cuisine with show cooking and gourmet dinners." },
      ],
    },
    program: {
      num: "01",
      main: "A",
      em: "5-Day Journey",
      closing: "Five days of activities, training and unforgettable experiences.",
      contactCta: "Contact us",
    },
    team: {
      num: "04",
      main: "Meet",
      em: "the Expert",
      role: "Founder & Lagotto Expert · 15+ years",
      bio: "Nicoletta is the mind and heart behind Lagotto & Truffle Week. With years of experience breeding and training Lagotto Romagnolo dogs, her passion for dogs and truffle hunting is contagious. She guides every participant through an authentic, unforgettable experience.",
      bullets: ["Professional Lagotto Romagnolo training", "Advanced truffle-hunting techniques", "Canine behavioral consulting"],
      contactBtn: "Contact Nicoletta",
      instagramBtn: "Instagram",
    },
    gallery: { num: "02", main: "Unforgettable", em: "Moments", lightboxAlt: "Enlarged photo" },
    contact: {
      num: "05",
      main: "Ready to",
      em: "join us?",
      rows: [
        { label: "Location", value: "Portico di Romagna, Al Vecchio Convento" },
        { label: "Dates", value: "14–18 October 2026" },
        { label: "Phone", value: "+39 334 750 0887" },
        { label: "Email", value: "nico.conte76543@gmail.com" },
      ],
      practicalHeading: "Practical Information",
      practicalInfo: [
        { titolo: "How to Get There", testo: "From the A14 motorway, Cesena exit, then SS9 towards Portico (30 min)" },
        { titolo: "Where to Stay", testo: "Recommended hotels and farmhouses nearby" },
        { titolo: "What to Bring", testo: "Comfortable shoes, layered clothing, leash and muzzle" },
      ],
      formMain: "Send us a",
      formEm: "Message",
      fieldNome: "First Name",
      placeholderNome: "Your first name",
      fieldCognome: "Last Name",
      placeholderCognome: "Your last name",
      fieldEmail: "Email",
      placeholderEmail: "your.email@example.com",
      fieldDog: "Dog's Name",
      placeholderDog: "Your dog's name",
      fieldMessage: "Message",
      placeholderMessage: "Tell us about your interest in the event...",
      sendBtn: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      validationError: "Please fill in first name, last name, email and message.",
      genericError: "Something went wrong, please try again later.",
    },
    cta: { text: "Book now →" },
    footer: {
      tagline: "A unique experience for you and your Lagotto Romagnolo",
      contactHeading: "Contact & Information",
      hours: "· Mon-Fri 9am-6pm",
      replyWithin: "· Reply within 24h",
      communityHeading: "Join the Community",
      communityText: "Follow us on social media to stay updated on events, tips and stories from our community of enthusiasts.",
      copyright: "© 2026 Lagotto & Truffle Week. All rights reserved.",
      legal: ["Privacy Policy", "Cookie Policy", "Terms"],
    },
  },
} as const;

const CSS = `
  @keyframes ltw-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .ltw-navlink { transition: color 0.25s; }
  .ltw-navlink:hover { color: ${CREAM} !important; }
  .ltw-btn-gold { transition: background 0.25s; }
  .ltw-btn-gold:hover { background: ${CREAM} !important; }
  .ltw-btn-ink { transition: background 0.25s; }
  .ltw-btn-ink:hover { background: ${BROWN} !important; }
  .ltw-btn-outline { transition: border-color 0.25s, background 0.25s; }
  .ltw-btn-outline:hover { border-color: ${INK} !important; background: rgba(44,34,26,0.05) !important; }
  .ltw-btn-outline-cream { transition: border-color 0.25s, background 0.25s; }
  .ltw-btn-outline-cream:hover { border-color: ${GOLD} !important; background: rgba(233,196,106,0.12) !important; }
  .ltw-cell { transition: opacity 0.3s; }
  .ltw-cell:hover { opacity: 0.85; }
  .ltw-footlink { transition: color 0.25s, border-color 0.25s; }
  .ltw-footlink:hover { color: ${GOLD} !important; border-color: ${GOLD} !important; }
  .ltw-cta-big span { transition: color 0.3s; }
  .ltw-cta-big:hover span { color: ${INK} !important; }
  .ltw-input { transition: border-color 0.25s; }
  .ltw-input:focus { border-bottom-color: ${GOLD} !important; }
  .ltw-lang-btn { transition: color 0.2s, opacity 0.2s; }

  .ltw-storia-grid { display: grid; grid-template-columns: 7fr 5fr; gap: 72px; align-items: start; }
  .ltw-team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: center; }
  .ltw-contact-grid { display: grid; grid-template-columns: 5fr 7fr; gap: 72px; align-items: start; }
  .ltw-program-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
  .ltw-gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 210px; gap: 14px; }
  .ltw-footer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 56px; margin-bottom: 52px; }
  .ltw-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .ltw-hero-grid { display: grid; grid-template-columns: 7fr 5fr; gap: 72px; align-items: center; width: 100%; }
  .ltw-hero-poster { justify-self: center; width: 100%; max-width: 460px; }
  .ltw-hero-info { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; width: 100%; max-width: 940px; border-top: 1px solid rgba(44,34,26,0.25); }
  .ltw-hero-info > div { padding: 22px 28px 0; border-left: 1px solid rgba(44,34,26,0.25); }
  .ltw-hero-info > div:first-child { border-left: none; }
  .ltw-team-name { margin-right: -140px; }

  @media (max-width: 1024px) {
    .ltw-hero-grid { grid-template-columns: 1fr; gap: 44px; }
    .ltw-hero-poster { max-width: 380px; }
    .ltw-storia-grid, .ltw-contact-grid { grid-template-columns: 1fr; gap: 56px; }
    .ltw-program-grid, .ltw-footer-grid { grid-template-columns: 1fr 1fr; }
    .ltw-gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
    .ltw-team-grid { grid-template-columns: 1fr; }
    .ltw-team-name { margin-right: 0; }
    .ltw-team-photo { margin-top: 40px; }
  }
  @media (max-width: 640px) {
    .ltw-navlinks a:not(.ltw-nav-cta) { display: none; }
    .ltw-hero-info { grid-template-columns: 1fr; }
    .ltw-hero-info > div { border-left: none; padding: 16px 0 0; }
    .ltw-brand-text { display: none; }
    .ltw-program-grid, .ltw-footer-grid, .ltw-form-row { grid-template-columns: 1fr; }
    .ltw-gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 240px; }
    .ltw-gallery-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
    .ltw-section-pad { padding-left: 20px !important; padding-right: 20px !important; }
  }
`;

const DATA_EVENTO_ISO = "2026-10-14T00:00:00";
const MOSTRA_COUNTDOWN = true;

function giorniAllEvento(now: number) {
  const diff = Math.max(0, new Date(DATA_EVENTO_ISO).getTime() - now);
  return Math.floor(diff / 86400000);
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("it");
  const [accordion, setAccordion] = useState<string | null>("origini");
  const [categoria, setCategoria] = useState("tutti");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [ora, setOra] = useState(() => Date.now());

  const [form, setForm] = useState({ name: "", surname: "", email: "", dogName: "", message: "" });
  const [inviato, setInviato] = useState(false);
  const [invioErrore, setInvioErrore] = useState<string | null>(null);
  const [inviando, setInviando] = useState(false);
  const [navScura, setNavScura] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved === "it" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setNavScura(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setOra(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const t = TXT[lang];
  const storia = STORIA[lang];
  const programma = PROGRAMMA[lang];
  const cdGiorni = giorniAllEvento(ora);
  const filtrate = useMemo(
    () => FOTO.filter((f) => categoria === "tutti" || f.cat === categoria),
    [categoria]
  );
  const lightboxAperto = lightbox !== null && filtrate.length > 0;
  const lightboxSrc = lightboxAperto ? filtrate[Math.min(lightbox as number, filtrate.length - 1)].src : "";
  const catLabel = (id: string) => CATEGORIE.find((c) => c.id === id)?.[lang] ?? id;

  const campo = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value }),
  });

  async function inviaMessaggio() {
    setInvioErrore(null);
    if (!form.name || !form.surname || !form.email || !form.message) {
      setInvioErrore(t.contact.validationError);
      return;
    }
    setInviando(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Invio non riuscito");
      setInviato(true);
    } catch {
      setInvioErrore(t.contact.genericError);
    } finally {
      setInviando(false);
    }
  }

  const navLinkStyle: React.CSSProperties = {
    fontFamily: grotesk,
    fontWeight: 600,
    fontSize: 13.5,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "rgba(255,248,240,0.85)",
    textDecoration: "none",
    textShadow: "0 1px 8px rgba(0,0,0,0.5)",
  };

  const labelInput: React.CSSProperties = {
    fontFamily: grotesk,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "rgba(255,248,240,0.55)",
  };
  const inputStyle: React.CSSProperties = {
    padding: "13px 2px",
    border: "none",
    borderBottom: "1px solid rgba(255,248,240,0.3)",
    background: "none",
    fontFamily: satoshi,
    fontSize: 16.5,
    color: CREAM,
    outline: "none",
  };

  return (
    <div style={{ minHeight: "100vh", background: CREAM, overflowX: "hidden", fontFamily: satoshi, color: INK }}>
      <style>{CSS}</style>

      {/* ============ NAV ============ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: navScura ? "rgba(28,20,14,0.92)" : "rgba(28,20,14,0.82)",
          backdropFilter: "blur(10px)",
          transition: "background 0.3s",
        }}
      >
        <div
          className="ltw-section-pad"
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 40px",
            height: 84,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <img
              src={`${IMG}logo.jpg`}
              alt="Lagotto & Truffle Week"
              style={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,248,240,0.5)" }}
            />
            <span
              className="ltw-brand-text"
              style={{
                fontFamily: grotesk,
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: CREAM,
                whiteSpace: "nowrap",
                textShadow: "0 1px 8px rgba(0,0,0,0.5)",
              }}
            >
              Lagotto &amp; Truffle Week
            </span>
          </a>
          <div className="ltw-navlinks" style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <a className="ltw-navlink" href="#program" style={navLinkStyle}>{t.nav.programma}</a>
            <a className="ltw-navlink" href="#gallery" style={navLinkStyle}>{t.nav.gallery}</a>
            <a className="ltw-navlink" href="#about" style={navLinkStyle}>{t.nav.storia}</a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                border: "1px solid rgba(255,248,240,0.4)",
                borderRadius: 999,
                padding: 3,
              }}
            >
              {(["it", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  className="ltw-lang-btn"
                  onClick={() => setLang(l)}
                  aria-label={l === "it" ? "Italiano" : "English"}
                  style={{
                    border: "none",
                    borderRadius: 999,
                    padding: "6px 12px",
                    cursor: "pointer",
                    fontFamily: grotesk,
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: 1,
                    background: lang === l ? GOLD : "transparent",
                    color: lang === l ? INK : "rgba(255,248,240,0.85)",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              className="ltw-btn-gold ltw-nav-cta"
              href="#contact"
              style={{
                fontFamily: grotesk,
                fontWeight: 700,
                fontSize: 13.5,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: INK,
                background: GOLD,
                textDecoration: "none",
                padding: "12px 26px",
                borderRadius: 999,
              }}
            >
              {t.nav.prenota}
            </a>
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: `radial-gradient(ellipse at 50% 25%, ${CREAM} 0%, #EDDDC5 82%)`,
          overflow: "hidden",
        }}
      >
        <div
          className="ltw-section-pad"
          style={{
            position: "relative",
            zIndex: 2,
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "110px 40px 56px",
            maxWidth: 1320,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div className="ltw-hero-grid">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 20,
              }}
            >
              <img
                src={`${IMG}logo.jpg`}
                alt={t.hero.alt}
                style={{
                  width: "clamp(110px, 12vw, 150px)",
                  height: "clamp(110px, 12vw, 150px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `4px solid ${GOLD}`,
                  boxShadow: "0 18px 45px rgba(44,34,26,0.28)",
                }}
              />
              <div>
                <p
                  style={{
                    margin: "0 0 14px",
                    fontFamily: grotesk,
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: OLIVE,
                  }}
                >
                  {t.hero.kicker}
                </p>
                <h1
                  style={{
                    margin: 0,
                    fontFamily: crimson,
                    fontWeight: 600,
                    fontSize: "clamp(48px, 6vw, 88px)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                    color: INK,
                  }}
                >
                  Lagotto <em style={{ fontWeight: 500, color: BROWN }}>&amp; Truffle Week</em>
                </h1>
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: crimson,
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "clamp(36px, 4.5vw, 60px)",
                    lineHeight: 1,
                    color: BROWN,
                  }}
                >
                  {t.hero.date}
                </p>
                {MOSTRA_COUNTDOWN && (
                  <p
                    style={{
                      margin: "18px 0 0",
                      display: "inline-block",
                      padding: "9px 22px",
                      borderRadius: 999,
                      border: "1px solid rgba(44,34,26,0.35)",
                      fontFamily: grotesk,
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: "rgba(44,34,26,0.8)",
                    }}
                  >
                    −{cdGiorni} {t.hero.countdownLabel}
                  </p>
                )}
              </div>
              <div className="ltw-hero-info" style={{ marginTop: 10 }}>
                {t.hero.info.map((voce) => (
                  <div key={voce.label}>
                    <p
                      style={{
                        margin: "0 0 6px",
                        fontFamily: grotesk,
                        fontSize: 12.5,
                        fontWeight: 700,
                        letterSpacing: 2.5,
                        textTransform: "uppercase",
                        color: OLIVE,
                      }}
                    >
                      {voce.label}
                    </p>
                    <p style={{ margin: 0, fontFamily: crimson, fontSize: 20, lineHeight: 1.35, color: INK }}>{voce.value}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, marginTop: 14, flexWrap: "wrap" }}>
                <a
                  className="ltw-btn-gold"
                  href="#program"
                  style={{
                    display: "inline-block",
                    background: GOLD,
                    color: INK,
                    fontFamily: grotesk,
                    fontWeight: 700,
                    fontSize: 16,
                    letterSpacing: 0.5,
                    textDecoration: "none",
                    padding: "18px 44px",
                    borderRadius: 999,
                  }}
                >
                  {t.hero.programCta}
                </a>
                <a
                  className="ltw-btn-outline"
                  href="#contact"
                  style={{
                    display: "inline-block",
                    background: "none",
                    color: INK,
                    fontFamily: grotesk,
                    fontWeight: 700,
                    fontSize: 16,
                    letterSpacing: 0.5,
                    textDecoration: "none",
                    padding: "17px 44px",
                    borderRadius: 999,
                    border: "1px solid rgba(44,34,26,0.4)",
                  }}
                >
                  {t.hero.cta}
                </a>
              </div>
              <p style={{ margin: 0, fontSize: 18, fontStyle: "italic", fontFamily: crimson, color: "rgba(44,34,26,0.75)" }}>
                {t.hero.subtitle}
              </p>
            </div>

            <img
              className="ltw-hero-poster"
              src={`${IMG}locandina-2026.jpg`}
              alt={t.hero.posterAlt}
              style={{
                display: "block",
                borderRadius: 10,
                boxShadow: "0 26px 70px rgba(44,34,26,0.32)",
                border: "6px solid #FFFFFF",
              }}
            />
          </div>
        </div>

        {/* Marquee */}
        <div style={{ position: "relative", zIndex: 2, background: GOLD, padding: "14px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
          <div style={{ display: "inline-flex", animation: "ltw-marquee 28s linear infinite" }}>
            {[0, 1].map((i) => (
              <span
                key={i}
                style={{
                  fontFamily: grotesk,
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  color: INK,
                  paddingRight: 48,
                }}
              >
                {t.hero.date} — {t.marquee}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROGRAMMA ============ */}
      <section id="program" className="ltw-section-pad" style={{ padding: "120px 40px", background: INK, color: CREAM }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <SectionHeader num={t.program.num} light main={t.program.main} emText={t.program.em} />

          <div style={{ display: "flex", flexDirection: "column", gap: 88 }}>
            {programma.map((g) => (
              <div key={g.numero}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 24, marginBottom: 40 }}>
                  <span
                    style={{
                      fontFamily: crimson,
                      fontSize: "clamp(56px, 6vw, 96px)",
                      fontWeight: 600,
                      lineHeight: 0.9,
                      color: GOLD,
                    }}
                  >
                    {g.numero}
                  </span>
                  <span
                    style={{
                      fontFamily: grotesk,
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: "rgba(255,248,240,0.7)",
                    }}
                  >
                    {g.nome}
                  </span>
                </div>
                <div className="ltw-program-grid">
                  {g.attivita.map((att) => (
                    <div key={att.nome} style={{ borderTop: "1px solid rgba(255,248,240,0.3)", paddingTop: 24 }}>
                      <span style={{ ...kicker, fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5 }}>
                        {g.nome} {g.numero} — {att.momento}
                      </span>
                      <h4 style={{ margin: "14px 0 10px", fontFamily: crimson, fontWeight: 600, fontSize: 30, lineHeight: 1.1, color: CREAM }}>
                        {att.nome}
                      </h4>
                      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "rgba(255,248,240,0.65)" }}>{att.descrizione}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 88, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <p style={{ margin: 0, fontFamily: crimson, fontStyle: "italic", fontSize: 22, color: "rgba(255,248,240,0.7)" }}>
              {t.program.closing}
            </p>
            <a
              className="ltw-btn-gold"
              href="#contact"
              style={{
                display: "inline-block",
                background: GOLD,
                color: INK,
                fontFamily: grotesk,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                padding: "18px 44px",
                borderRadius: 999,
              }}
            >
              {t.program.contactCta}
            </a>
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="gallery" style={{ padding: "120px 0 140px", background: SAND }}>
        <div className="ltw-section-pad" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 28,
              marginBottom: 64,
              borderBottom: `2px solid ${INK}`,
              paddingBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 28 }}>
              <span style={kicker}>{t.gallery.num}</span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: crimson,
                  fontWeight: 600,
                  fontSize: "clamp(48px, 6vw, 88px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: INK,
                }}
              >
                {t.gallery.main} <em style={{ fontWeight: 500, color: BROWN }}>{t.gallery.em}</em>
              </h2>
            </div>
            <div style={{ display: "flex", gap: 26 }}>
              {CATEGORIE.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCategoria(cat.id);
                    setLightbox(null);
                  }}
                  style={{
                    padding: "6px 2px",
                    background: "none",
                    cursor: "pointer",
                    border: "none",
                    fontFamily: grotesk,
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: cat.id === categoria ? INK : "rgba(44,34,26,0.4)",
                    borderBottom: cat.id === categoria ? `2px solid ${OLIVE}` : "2px solid transparent",
                    transition: "all 0.25s",
                  }}
                >
                  {cat[lang]}
                </button>
              ))}
            </div>
          </div>

          <div className="ltw-gallery-grid">
            {filtrate.map((foto, i) => {
              const s = SPANS[i % SPANS.length];
              return (
                <div
                  key={foto.src}
                  className="ltw-cell"
                  onClick={() => setLightbox(i)}
                  role="img"
                  aria-label={`Lagotto & Truffle Week — ${catLabel(foto.cat)}`}
                  style={{
                    borderRadius: 4,
                    overflow: "hidden",
                    cursor: "pointer",
                    gridColumn: `span ${s.c}`,
                    gridRow: `span ${s.r}`,
                    backgroundImage: `url('${foto.src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              );
            })}
          </div>

          {lightboxAperto && (
            <div
              onClick={() => setLightbox(null)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 200,
                background: "rgba(28,20,14,0.95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 48,
              }}
            >
              <div
                role="img"
                aria-label={t.gallery.lightboxAlt}
                style={{
                  width: "86vw",
                  height: "86vh",
                  borderRadius: 4,
                  backgroundImage: `url('${lightboxSrc}')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(null);
                }}
                style={{
                  position: "absolute",
                  top: 24,
                  right: 28,
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,248,240,0.3)",
                  background: "none",
                  color: CREAM,
                  fontSize: 20,
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(((lightbox as number) - 1 + filtrate.length) % filtrate.length);
                }}
                style={{
                  position: "absolute",
                  left: 24,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,248,240,0.3)",
                  background: "none",
                  color: CREAM,
                  fontSize: 24,
                  cursor: "pointer",
                }}
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(((lightbox as number) + 1) % filtrate.length);
                }}
                style={{
                  position: "absolute",
                  right: 24,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,248,240,0.3)",
                  background: "none",
                  color: CREAM,
                  fontSize: 24,
                  cursor: "pointer",
                }}
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============ STORIA ============ */}
      <section id="about" className="ltw-section-pad" style={{ padding: "140px 40px 120px", background: CREAM }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <SectionHeader num={t.storia.num} main={t.storia.main} emText={t.storia.em} />

          <div className="ltw-storia-grid">
            <div>
              <p style={{ margin: "0 0 56px", fontFamily: crimson, fontSize: 30, lineHeight: 1.45, color: INK, textWrap: "pretty" as any }}>
                {t.storia.intro}
              </p>

              <div style={{ borderTop: "1px solid rgba(44,34,26,0.25)" }}>
                {storia.map((voce, i) => {
                  const aperta = accordion === voce.id;
                  return (
                    <div key={voce.id} style={{ borderBottom: "1px solid rgba(44,34,26,0.25)" }}>
                      <button
                        onClick={() => setAccordion(aperta ? null : voce.id)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "baseline",
                          gap: 26,
                          padding: "30px 0",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          fontFamily: satoshi,
                        }}
                      >
                        <span style={{ ...kicker, fontSize: 13, flexShrink: 0, width: 30 }}>0{i + 1}</span>
                        <span style={{ flex: 1, fontFamily: crimson, fontWeight: 600, fontSize: 32, color: INK }}>{voce.titolo}</span>
                        <span style={{ fontFamily: grotesk, fontSize: 26, fontWeight: 400, color: BROWN, flexShrink: 0 }}>
                          {aperta ? "−" : "+"}
                        </span>
                      </button>
                      {aperta && (
                        <div style={{ padding: "0 0 34px 56px", display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
                          {voce.testi.map((testo, j) => (
                            <p key={j} style={{ margin: 0, fontSize: 17.5, lineHeight: 1.7, color: "rgba(44,34,26,0.78)", textWrap: "pretty" as any }}>
                              {testo}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ position: "sticky", top: 100 }}>
              <div style={{ position: "relative" }}>
                <img
                  src={`${IMG}473026623_572405422260123_5681489185905862866_n.jpg`}
                  alt="Lagotto & Truffle Week Experience"
                  style={{ width: "100%", height: 540, objectFit: "cover", display: "block", borderRadius: 4 }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -28,
                    left: -28,
                    background: OLIVE,
                    color: CREAM,
                    padding: "22px 30px",
                    borderRadius: 4,
                    maxWidth: 300,
                  }}
                >
                  <p style={{ margin: 0, fontFamily: crimson, fontStyle: "italic", fontSize: 21, lineHeight: 1.35 }}>
                    For you and your dog — {t.hero.date}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 76, display: "flex", flexDirection: "column", gap: 26 }}>
                {t.storia.highlights.map((f, i, arr) => (
                  <div
                    key={f.titolo}
                    style={{
                      display: "flex",
                      gap: 18,
                      alignItems: "baseline",
                      borderBottom: i < arr.length - 1 ? "1px solid rgba(44,34,26,0.2)" : "none",
                      paddingBottom: i < arr.length - 1 ? 22 : 0,
                    }}
                  >
                    <span style={{ fontFamily: crimson, fontSize: 24, fontWeight: 600, color: OLIVE }}>→</span>
                    <div>
                      <h3 style={{ margin: "0 0 5px", fontFamily: crimson, fontWeight: 600, fontSize: 24, color: INK }}>{f.titolo}</h3>
                      <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55, color: "rgba(44,34,26,0.65)" }}>{f.testo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section id="team" className="ltw-section-pad" style={{ padding: "140px 40px", background: CREAM, position: "relative" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <SectionHeader num={t.team.num} main={t.team.main} emText={t.team.em} />

          <div className="ltw-team-grid">
            <div style={{ position: "relative", zIndex: 2 }}>
              <h3
                className="ltw-team-name"
                style={{
                  margin: "0 0 6px",
                  fontFamily: crimson,
                  fontWeight: 600,
                  fontSize: "clamp(56px, 6.5vw, 100px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: INK,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Nicoletta
                <br />
                <em style={{ fontWeight: 500, color: OLIVE }}>Conte</em>
              </h3>
              <p
                style={{
                  margin: "26px 0 0",
                  fontFamily: grotesk,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  color: BROWN,
                }}
              >
                {t.team.role}
              </p>
              <p style={{ margin: "26px 0 0", fontSize: 18, lineHeight: 1.7, color: "rgba(44,34,26,0.75)", maxWidth: 460, textWrap: "pretty" as any }}>
                {t.team.bio}
              </p>
              <div style={{ margin: "32px 0 0", display: "flex", flexDirection: "column", maxWidth: 440 }}>
                {t.team.bullets.map((riga, i, arr) => (
                  <div
                    key={riga}
                    style={{
                      padding: "14px 0",
                      borderTop: "1px solid rgba(44,34,26,0.2)",
                      borderBottom: i === arr.length - 1 ? "1px solid rgba(44,34,26,0.2)" : "none",
                      fontSize: 16,
                      color: "rgba(44,34,26,0.85)",
                    }}
                  >
                    {riga}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a
                  className="ltw-btn-ink"
                  href="mailto:nico.conte76543@gmail.com"
                  style={{
                    display: "inline-block",
                    background: INK,
                    color: CREAM,
                    fontFamily: grotesk,
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                    padding: "15px 32px",
                    borderRadius: 999,
                  }}
                >
                  {t.team.contactBtn}
                </a>
                <a
                  className="ltw-btn-outline"
                  href="https://www.instagram.com/nicoletta_truffle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "none",
                    color: INK,
                    fontFamily: grotesk,
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                    padding: "15px 32px",
                    borderRadius: 999,
                    border: "1px solid rgba(44,34,26,0.4)",
                  }}
                >
                  {t.team.instagramBtn}
                </a>
              </div>
            </div>
            <div className="ltw-team-photo">
              <img
                src={`${IMG}nicoletta.jpg`}
                alt="Nicoletta Conte"
                style={{ width: "100%", height: 680, objectFit: "cover", objectPosition: "70% 20%", display: "block", borderRadius: 4 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTATTI ============ */}
      <section id="contact" className="ltw-section-pad" style={{ padding: "120px 40px", background: CREAM }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <SectionHeader num={t.contact.num} main={t.contact.main} emText={t.contact.em} />

          <div className="ltw-contact-grid">
            <div>
              <div style={{ marginBottom: 44 }}>
                {t.contact.rows.map((riga) => (
                  <div
                    key={riga.label}
                    style={{
                      padding: "18px 0",
                      borderBottom: "1px solid rgba(44,34,26,0.2)",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 20,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: grotesk,
                        fontSize: 12.5,
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "rgba(44,34,26,0.5)",
                        paddingTop: 4,
                      }}
                    >
                      {riga.label}
                    </span>
                    <span style={{ fontSize: 17, color: INK, textAlign: "right", wordBreak: riga.value.includes("@") ? "break-all" : "normal" }}>
                      {riga.value}
                    </span>
                  </div>
                ))}
              </div>

              <h3 style={{ margin: "0 0 20px", fontFamily: crimson, fontWeight: 600, fontSize: 28, color: INK }}>{t.contact.practicalHeading}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 44 }}>
                {t.contact.practicalInfo.map((info) => (
                  <div key={info.titolo}>
                    <p style={{ margin: "0 0 3px", fontWeight: 700, fontSize: 15.5, color: INK }}>{info.titolo}</p>
                    <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55, color: "rgba(44,34,26,0.65)" }}>{info.testo}</p>
                  </div>
                ))}
              </div>

              <div style={{ height: 240, borderRadius: 4, overflow: "hidden" }}>
                <iframe
                  title="Portico di Romagna"
                  src="https://www.google.com/maps?q=Portico+di+Romagna&output=embed"
                  style={{ width: "100%", height: "100%", border: 0, filter: "sepia(0.25) saturate(0.85)" }}
                  loading="lazy"
                />
              </div>
            </div>

            <div style={{ background: INK, color: CREAM, borderRadius: 4, padding: 56 }}>
              <h3 style={{ margin: "0 0 38px", fontFamily: crimson, fontWeight: 600, fontSize: 36, color: CREAM }}>
                {t.contact.formMain} <em style={{ fontWeight: 500, color: GOLD }}>{t.contact.formEm}</em>
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div className="ltw-form-row">
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelInput}>{t.contact.fieldNome}</span>
                    <input className="ltw-input" type="text" placeholder={t.contact.placeholderNome} style={inputStyle} {...campo("name")} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelInput}>{t.contact.fieldCognome}</span>
                    <input className="ltw-input" type="text" placeholder={t.contact.placeholderCognome} style={inputStyle} {...campo("surname")} />
                  </label>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelInput}>{t.contact.fieldEmail}</span>
                  <input className="ltw-input" type="email" placeholder={t.contact.placeholderEmail} style={inputStyle} {...campo("email")} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelInput}>{t.contact.fieldDog}</span>
                  <input className="ltw-input" type="text" placeholder={t.contact.placeholderDog} style={inputStyle} {...campo("dogName")} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelInput}>{t.contact.fieldMessage}</span>
                  <textarea
                    className="ltw-input"
                    rows={4}
                    placeholder={t.contact.placeholderMessage}
                    style={{ ...inputStyle, resize: "vertical" }}
                    {...campo("message")}
                  />
                </label>
                <button
                  className="ltw-btn-gold"
                  onClick={inviaMessaggio}
                  disabled={inviando}
                  style={{
                    marginTop: 8,
                    padding: 18,
                    border: "none",
                    borderRadius: 999,
                    background: GOLD,
                    color: INK,
                    fontFamily: grotesk,
                    fontWeight: 700,
                    fontSize: 16,
                    cursor: inviando ? "wait" : "pointer",
                    opacity: inviando ? 0.7 : 1,
                  }}
                >
                  {inviando ? t.contact.sending : t.contact.sendBtn}
                </button>
                {inviato && (
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 6,
                      background: "rgba(151,166,95,0.25)",
                      border: "1px solid rgba(151,166,95,0.5)",
                      color: CREAM,
                      fontWeight: 600,
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    {t.contact.success}
                  </div>
                )}
                {invioErrore && !inviato && (
                  <div
                    style={{
                      padding: "14px 18px",
                      borderRadius: 6,
                      background: "rgba(233,196,106,0.15)",
                      border: `1px solid rgba(233,196,106,0.5)`,
                      color: CREAM,
                      fontWeight: 600,
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    {invioErrore}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA GIGANTE ============ */}
      <section className="ltw-section-pad" style={{ background: OLIVE, padding: "100px 40px", textAlign: "center" }}>
        <a className="ltw-cta-big" href="#contact" style={{ textDecoration: "none" }}>
          <span
            style={{
              display: "block",
              fontFamily: crimson,
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "clamp(56px, 9vw, 140px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: CREAM,
            }}
          >
            {t.cta.text}
          </span>
        </a>
        <p
          style={{
            margin: "28px 0 0",
            fontFamily: grotesk,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,248,240,0.85)",
          }}
        >
          Portico di Romagna · {t.hero.date}
        </p>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="ltw-section-pad" style={{ background: DARKEST, color: CREAM, padding: "64px 40px 36px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="ltw-footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <img
                  src={`${IMG}logo.jpg`}
                  alt="Lagotto & Truffle Week"
                  style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }}
                />
                <h3 style={{ margin: 0, fontFamily: crimson, fontWeight: 600, fontSize: 20, color: CREAM }}>Lagotto &amp; Truffle Week</h3>
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "rgba(255,248,240,0.65)" }}>{t.footer.tagline}</p>
            </div>
            <div>
              <h4
                style={{
                  margin: "0 0 18px",
                  fontFamily: grotesk,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "rgba(255,248,240,0.45)",
                }}
              >
                {t.footer.contactHeading}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 15, color: "rgba(255,248,240,0.8)" }}>
                <span>
                  +39 334 750 0887 <span style={{ color: "rgba(255,248,240,0.4)", fontSize: 13 }}>{t.footer.hours}</span>
                </span>
                <span>
                  nico.conte76543@gmail.com <span style={{ color: "rgba(255,248,240,0.4)", fontSize: 13 }}>{t.footer.replyWithin}</span>
                </span>
                <span>
                  Al Vecchio Convento <span style={{ color: "rgba(255,248,240,0.4)", fontSize: 13 }}>· Portico di Romagna</span>
                </span>
              </div>
            </div>
            <div>
              <h4
                style={{
                  margin: "0 0 18px",
                  fontFamily: grotesk,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "rgba(255,248,240,0.45)",
                }}
              >
                {t.footer.communityHeading}
              </h4>
              <p style={{ margin: "0 0 18px", fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,248,240,0.65)" }}>{t.footer.communityText}</p>
              <div style={{ display: "flex", gap: 20 }}>
                {["Facebook", "Instagram", "YouTube"].map((social) => (
                  <a
                    key={social}
                    className="ltw-footlink"
                    href={social === "Instagram" ? "https://www.instagram.com/nicoletta_truffle/" : "#"}
                    style={{
                      fontSize: 14,
                      color: "rgba(255,248,240,0.75)",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,248,240,0.3)",
                      paddingBottom: 2,
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,248,240,0.12)",
              paddingTop: 26,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 14,
            }}
          >
            <p style={{ margin: 0, fontSize: 13.5, color: "rgba(255,248,240,0.45)" }}>{t.footer.copyright}</p>
            <div style={{ display: "flex", gap: 24 }}>
              {t.footer.legal.map((voce, i) => (
                <Link
                  key={voce}
                  href={LEGAL_HREFS[i]}
                  className="ltw-footlink"
                  style={{ fontSize: 13.5, color: "rgba(255,248,240,0.45)", textDecoration: "none" }}
                >
                  {voce}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
