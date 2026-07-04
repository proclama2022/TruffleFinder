import { useEffect, useMemo, useState } from "react";

// ————— Palette e font del design "Radice" —————
const CREAM = "#FFF8F0";
const INK = "#2C221A";
const GOLD = "#E9C46A";
const OLIVE = "#97A65F";
const BROWN = "#5B4636";
const DARKEST = "#1C140E";
const SAND = "#F5EBDC";

const grotesk = "'Space Grotesk', sans-serif";
const crimson = "'Crimson Pro', serif";
const satoshi = "'Satoshi', sans-serif";

const IMG = "/images/gallery/";

const DATA_EVENTO = "14–18 ottobre 2026";
const DATA_EVENTO_ISO = "2026-10-14T00:00:00";
const MOSTRA_COUNTDOWN = true;

const kicker: React.CSSProperties = {
  fontFamily: grotesk,
  fontWeight: 700,
  fontSize: 15,
  color: OLIVE,
};

function SectionHeader({
  num,
  light,
  children,
}: {
  num: string;
  light?: boolean;
  children: React.ReactNode;
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
        {children}
      </h2>
    </div>
  );
}

// ————— Dati contenuto (dal design) —————
const STORIA = [
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
];

const PROGRAMMA = [
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
];

const FOTO = [
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

const CATEGORIE = [
  { id: "tutti", etichetta: "Tutti" },
  { id: "cani", etichetta: "Cani" },
  { id: "caccia", etichetta: "Caccia" },
  { id: "eventi", etichetta: "Eventi" },
];

const SPANS = [
  { c: 2, r: 2 }, { c: 1, r: 1 }, { c: 1, r: 1 }, { c: 1, r: 2 }, { c: 1, r: 1 },
  { c: 2, r: 1 }, { c: 1, r: 1 }, { c: 1, r: 1 }, { c: 2, r: 1 }, { c: 1, r: 1 },
];

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
  .ltw-cell { transition: opacity 0.3s; }
  .ltw-cell:hover { opacity: 0.85; }
  .ltw-footlink { transition: color 0.25s, border-color 0.25s; }
  .ltw-footlink:hover { color: ${GOLD} !important; border-color: ${GOLD} !important; }
  .ltw-cta-big span { transition: color 0.3s; }
  .ltw-cta-big:hover span { color: ${INK} !important; }
  .ltw-input { transition: border-color 0.25s; }
  .ltw-input:focus { border-bottom-color: ${GOLD} !important; }

  .ltw-storia-grid { display: grid; grid-template-columns: 7fr 5fr; gap: 72px; align-items: start; }
  .ltw-team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: center; }
  .ltw-contact-grid { display: grid; grid-template-columns: 5fr 7fr; gap: 72px; align-items: start; }
  .ltw-program-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
  .ltw-gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 210px; gap: 14px; }
  .ltw-footer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 56px; margin-bottom: 52px; }
  .ltw-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .ltw-team-name { margin-right: -140px; }

  @media (max-width: 1024px) {
    .ltw-storia-grid, .ltw-contact-grid { grid-template-columns: 1fr; gap: 56px; }
    .ltw-program-grid, .ltw-footer-grid { grid-template-columns: 1fr 1fr; }
    .ltw-gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
    .ltw-team-grid { grid-template-columns: 1fr; }
    .ltw-team-name { margin-right: 0; }
    .ltw-team-photo { margin-top: 40px; }
  }
  @media (max-width: 640px) {
    .ltw-navlinks a:not(.ltw-nav-cta) { display: none; }
    .ltw-program-grid, .ltw-footer-grid, .ltw-form-row { grid-template-columns: 1fr; }
    .ltw-gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 240px; }
    .ltw-gallery-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
    .ltw-section-pad { padding-left: 20px !important; padding-right: 20px !important; }
  }
`;

function giorniAllEvento(now: number) {
  const diff = Math.max(0, new Date(DATA_EVENTO_ISO).getTime() - now);
  return Math.floor(diff / 86400000);
}

export default function Home() {
  const [accordion, setAccordion] = useState<string | null>("origini");
  const [giornoAttivo, setGiornoAttivo] = useState(0);
  const [categoria, setCategoria] = useState("tutti");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [ora, setOra] = useState(() => Date.now());

  const [form, setForm] = useState({ name: "", surname: "", email: "", dogName: "", message: "" });
  const [inviato, setInviato] = useState(false);
  const [invioErrore, setInvioErrore] = useState<string | null>(null);
  const [inviando, setInviando] = useState(false);
  const [navScura, setNavScura] = useState(false);

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

  const cdGiorni = giorniAllEvento(ora);
  const giorno = PROGRAMMA[giornoAttivo];
  const filtrate = useMemo(
    () => FOTO.filter((f) => categoria === "tutti" || f.cat === categoria),
    [categoria]
  );
  const lightboxAperto = lightbox !== null && filtrate.length > 0;
  const lightboxSrc = lightboxAperto ? filtrate[Math.min(lightbox as number, filtrate.length - 1)].src : "";

  const campo = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value }),
  });

  async function inviaMessaggio() {
    setInvioErrore(null);
    if (!form.name || !form.surname || !form.email || !form.message) {
      setInvioErrore("Compila nome, cognome, email e messaggio.");
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
      setInvioErrore("Si è verificato un errore, riprova più tardi.");
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
    color: "rgba(255,248,240,0.8)",
    textDecoration: "none",
    textShadow: "0 1px 8px rgba(0,0,0,0.4)",
  };

  const marqueeText = `${DATA_EVENTO} — Caccia al tartufo — Prove ENCI — Show cooking — Lagotto Romagnolo — Al Vecchio Convento — Beneficenza Lagotto Rescue — `;

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
          background: navScura ? "rgba(28,20,14,0.88)" : "none",
          backdropFilter: navScura ? "blur(10px)" : "none",
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
              style={{
                fontFamily: grotesk,
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: CREAM,
                whiteSpace: "nowrap",
                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              Lagotto &amp; Truffle Week
            </span>
          </a>
          <div className="ltw-navlinks" style={{ display: "flex", alignItems: "center", gap: 26 }}>
            <a className="ltw-navlink" href="#about" style={navLinkStyle}>Storia</a>
            <a className="ltw-navlink" href="#program" style={navLinkStyle}>Programma</a>
            <a className="ltw-navlink" href="#gallery" style={navLinkStyle}>Gallery</a>
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
              Prenota
            </a>
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section
        id="home"
        style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}
      >
        <img
          src={`${IMG}465009090_17957117462831393_8402184989260741843_n.jpg`}
          alt="Caccia al tartufo nel bosco con i Lagotti"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(28,20,14,0.92) 0%, rgba(28,20,14,0.35) 45%, rgba(28,20,14,0.3))",
          }}
        />

        <div className="ltw-section-pad" style={{ position: "relative", zIndex: 2, padding: "0 40px 20px", maxWidth: 1400, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 36 }}>
            <div>
              <p
                style={{
                  margin: "0 0 16px",
                  fontFamily: grotesk,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: GOLD,
                }}
              >
                Portico di Romagna · Appennino Tosco-Romagnolo
              </p>
              <h1
                style={{
                  margin: 0,
                  fontFamily: crimson,
                  fontWeight: 600,
                  fontSize: "clamp(72px, 11vw, 160px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  color: CREAM,
                }}
              >
                Lagotto
                <br />
                <em style={{ fontWeight: 500, color: GOLD }}>&amp; Truffle Week</em>
              </h1>
            </div>
            {MOSTRA_COUNTDOWN && (
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div
                  style={{
                    fontFamily: crimson,
                    fontWeight: 600,
                    fontSize: "clamp(90px, 10vw, 150px)",
                    lineHeight: 0.85,
                    color: "transparent",
                    WebkitTextStroke: `2px ${CREAM}`,
                  }}
                >
                  {cdGiorni}
                </div>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontFamily: grotesk,
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "rgba(255,248,240,0.7)",
                  }}
                >
                  giorni all'evento
                </p>
              </div>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 28, paddingBottom: 28, flexWrap: "wrap" }}>
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
                letterSpacing: 0.5,
                textDecoration: "none",
                padding: "18px 44px",
                borderRadius: 999,
              }}
            >
              Prenota ora
            </a>
            <p style={{ margin: 0, fontSize: 18, fontStyle: "italic", fontFamily: crimson, color: "rgba(255,248,240,0.85)" }}>
              L'esperienza unica per te e il tuo cane
            </p>
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
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STORIA ============ */}
      <section id="about" className="ltw-section-pad" style={{ padding: "140px 40px 120px", background: CREAM }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <SectionHeader num="01">
            Un'Esperienza <em style={{ fontWeight: 500, color: BROWN }}>Indimenticabile</em>
          </SectionHeader>

          <div className="ltw-storia-grid">
            <div>
              <p style={{ margin: "0 0 56px", fontFamily: crimson, fontSize: 30, lineHeight: 1.45, color: INK, textWrap: "pretty" as any }}>
                Cinque giorni di caccia al tartufo, sessioni di addestramento, cucina gourmet e momenti indimenticabili con il tuo Lagotto
                Romagnolo nelle splendide colline di Portico di Romagna.
              </p>

              <div style={{ borderTop: "1px solid rgba(44,34,26,0.25)" }}>
                {STORIA.map((voce, i) => {
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
                    For you and your dog — {DATA_EVENTO}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 76, display: "flex", flexDirection: "column", gap: 26 }}>
                {[
                  { titolo: "Caccia al Tartufo", testo: "Vivi l'autentica caccia al tartufo con guide esperte e il tuo Lagotto addestrato." },
                  { titolo: "Sessioni di Addestramento", testo: "Addestramento professionale con giudici ufficiali ENCI e handler esperti." },
                  { titolo: "Esperienza Gourmet", testo: "Scopri la cucina al tartufo con show cooking e cene gourmet." },
                ].map((f, i, arr) => (
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

      {/* ============ PROGRAMMA ============ */}
      <section id="program" className="ltw-section-pad" style={{ padding: "120px 40px", background: INK, color: CREAM }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <SectionHeader num="02" light>
            Un Viaggio <em style={{ fontWeight: 500, color: GOLD }}>di 5 Giorni</em>
          </SectionHeader>

          <div style={{ display: "flex", gap: 40, marginBottom: 72, flexWrap: "wrap", alignItems: "flex-end" }}>
            {PROGRAMMA.map((g, i) => (
              <button
                key={g.numero}
                onClick={() => setGiornoAttivo(i)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "left",
                  transition: "all 0.25s",
                  fontFamily: satoshi,
                  color: i === giornoAttivo ? GOLD : "rgba(255,248,240,0.3)",
                }}
              >
                <span style={{ display: "block", fontFamily: crimson, fontSize: "clamp(56px, 6vw, 96px)", fontWeight: 600, lineHeight: 0.9 }}>
                  {g.numero}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: grotesk,
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginTop: 10,
                  }}
                >
                  {g.nome}
                </span>
              </button>
            ))}
          </div>

          <div className="ltw-program-grid">
            {giorno.attivita.map((att) => (
              <div key={att.nome} style={{ borderTop: "1px solid rgba(255,248,240,0.3)", paddingTop: 24 }}>
                <span style={{ ...kicker, fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5 }}>
                  {giorno.nome} {giorno.numero} — {att.momento}
                </span>
                <h4 style={{ margin: "14px 0 10px", fontFamily: crimson, fontWeight: 600, fontSize: 30, lineHeight: 1.1, color: CREAM }}>
                  {att.nome}
                </h4>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "rgba(255,248,240,0.65)" }}>{att.descrizione}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 88, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <p style={{ margin: 0, fontFamily: crimson, fontStyle: "italic", fontSize: 22, color: "rgba(255,248,240,0.7)" }}>
              Cinque giorni di attività, addestramento ed esperienze indimenticabili.
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
              Contattaci
            </a>
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section id="team" className="ltw-section-pad" style={{ padding: "140px 40px", background: CREAM, position: "relative" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <SectionHeader num="03">
            Incontra <em style={{ fontWeight: 500, color: BROWN }}>l'Esperta</em>
          </SectionHeader>

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
                Fondatrice &amp; Esperta di Lagotto · 15+ anni
              </p>
              <p style={{ margin: "26px 0 0", fontSize: 18, lineHeight: 1.7, color: "rgba(44,34,26,0.75)", maxWidth: 460, textWrap: "pretty" as any }}>
                Nicoletta è la mente e il cuore dietro Lagotto &amp; Truffle Week. Con anni di esperienza nell'allevamento e
                nell'addestramento di Lagotto Romagnolo, la sua passione per i cani e la ricerca del tartufo è contagiosa. Guida ogni
                partecipante attraverso un'esperienza autentica e indimenticabile.
              </p>
              <div style={{ margin: "32px 0 0", display: "flex", flexDirection: "column", maxWidth: 440 }}>
                {["Addestramento professionale Lagotto Romagnolo", "Tecniche avanzate di ricerca tartufi", "Consulenza comportamentale canina"].map(
                  (riga, i, arr) => (
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
                  )
                )}
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
                  Contatta Nicoletta
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
                  Instagram
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
              <span style={kicker}>04</span>
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
                Momenti <em style={{ fontWeight: 500, color: BROWN }}>Indimenticabili</em>
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
                  {cat.etichetta}
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
                  aria-label={`Lagotto & Truffle Week — ${foto.cat}`}
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
                aria-label="Foto ingrandita"
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

      {/* ============ CONTATTI ============ */}
      <section id="contact" className="ltw-section-pad" style={{ padding: "120px 40px", background: CREAM }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <SectionHeader num="05">
            Pronto a <em style={{ fontWeight: 500, color: BROWN }}>unirti a noi?</em>
          </SectionHeader>

          <div className="ltw-contact-grid">
            <div>
              <div style={{ marginBottom: 44 }}>
                {[
                  { label: "Sede", value: "Portico di Romagna, Al Vecchio Convento" },
                  { label: "Date", value: DATA_EVENTO },
                  { label: "Telefono", value: "+39 334 750 0887" },
                  { label: "Email", value: "nico.conte76543@gmail.com" },
                ].map((riga) => (
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
                    <span style={{ fontSize: 17, color: INK, textAlign: "right", wordBreak: riga.label === "Email" ? "break-all" : "normal" }}>
                      {riga.value}
                    </span>
                  </div>
                ))}
              </div>

              <h3 style={{ margin: "0 0 20px", fontFamily: crimson, fontWeight: 600, fontSize: 28, color: INK }}>Informazioni Pratiche</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 44 }}>
                {[
                  { titolo: "Come Arrivare", testo: "Dall'autostrada A14 uscita Cesena, SS9 verso Portico (30 min)" },
                  { titolo: "Dove Dormire", testo: "Hotel e agriturismi consigliati nelle vicinanze" },
                  { titolo: "Cosa Portare", testo: "Scarpe comode, abbigliamento a strati, guinzaglio e museruola" },
                ].map((info) => (
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
                Inviaci un <em style={{ fontWeight: 500, color: GOLD }}>Messaggio</em>
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div className="ltw-form-row">
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelInput}>Nome</span>
                    <input className="ltw-input" type="text" placeholder="Il tuo nome" style={inputStyle} {...campo("name")} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelInput}>Cognome</span>
                    <input className="ltw-input" type="text" placeholder="Il tuo cognome" style={inputStyle} {...campo("surname")} />
                  </label>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelInput}>Email</span>
                  <input className="ltw-input" type="email" placeholder="la.tua.email@esempio.it" style={inputStyle} {...campo("email")} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelInput}>Nome del Cane</span>
                  <input className="ltw-input" type="text" placeholder="Il nome del tuo cane" style={inputStyle} {...campo("dogName")} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelInput}>Messaggio</span>
                  <textarea
                    className="ltw-input"
                    rows={4}
                    placeholder="Raccontaci del tuo interesse per l'evento..."
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
                  {inviando ? "Invio in corso..." : "Invia Messaggio"}
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
                    Messaggio inviato con successo!
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
            Prenota ora →
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
          Portico di Romagna · {DATA_EVENTO}
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
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "rgba(255,248,240,0.65)" }}>
                Un'esperienza unica per te e il tuo Lagotto Romagnolo
              </p>
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
                Contatto &amp; Informazioni
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 15, color: "rgba(255,248,240,0.8)" }}>
                <span>
                  +39 334 750 0887 <span style={{ color: "rgba(255,248,240,0.4)", fontSize: 13 }}>· Lun-Ven 9:00-18:00</span>
                </span>
                <span>
                  nico.conte76543@gmail.com <span style={{ color: "rgba(255,248,240,0.4)", fontSize: 13 }}>· Risposta entro 24h</span>
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
                Unisciti alla Community
              </h4>
              <p style={{ margin: "0 0 18px", fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,248,240,0.65)" }}>
                Seguici sui social media per rimanere aggiornato su eventi, consigli e storie dalla nostra community di appassionati.
              </p>
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
            <p style={{ margin: 0, fontSize: 13.5, color: "rgba(255,248,240,0.45)" }}>
              © 2025 Lagotto &amp; Truffle Week. Tutti i diritti riservati.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Politica sulla Privacy", "Politica sui Cookie", "Termini"].map((voce) => (
                <a key={voce} className="ltw-footlink" href="#" style={{ fontSize: 13.5, color: "rgba(255,248,240,0.45)", textDecoration: "none" }}>
                  {voce}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
