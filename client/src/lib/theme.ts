// ─────────────────────────────────────────────────────────────────────────────
//  TRUFFLE CAMP · NICOLETTA CONTE — Design tokens
//  Unica fonte di verità per colori, font e naming del brand.
//  La palette è campionata direttamente dal logo: anello e lettering verde
//  bosco, firma marrone tartufo, fondo crema.
// ─────────────────────────────────────────────────────────────────────────────

// ————— Identità —————
/** Nome breve del brand: da usare in nav, footer, titoli. */
export const BRAND = "Truffle Camp";
/** Firma dell'autrice, seconda riga del lockup del logo. */
export const BRAND_SIGNATURE = "Nicoletta Conte";
/** Lockup completo, come compare nel logo. */
export const BRAND_FULL = "Truffle Camp · Nicoletta Conte";
/** Payoff bilingue, eredita il posizionamento "Lagotto + tartufo". */
export const BRAND_TAGLINE_IT = "Il campo di addestramento per te e il tuo cane da tartufo";
export const BRAND_TAGLINE_EN = "The training camp for you and your truffle dog";

// ————— Palette —————
/** Fondo crema del logo. Superficie principale del sito. */
export const CREAM = "#FAF3E7";
/** Crema più caldo/profondo per le sezioni alternate. */
export const SAND = "#F1E5CF";
/** Verde quasi nero: testo corrente e superfici scure chiare. */
export const INK = "#22301D";
/** Verde bosco del logo: colore primario di brand (CTA, nav, footer). */
export const FOREST = "#2F4A2B";
/** Verde bosco schiarito, per hover e stati attivi. */
export const FOREST_LIGHT = "#3D5F37";
/** Verde muschio: kicker, numerazioni di sezione, dettagli. */
export const MOSS = "#5F7D4C";
/** Marrone della firma "Nicoletta Conte": colore secondario. */
export const BROWN = "#6B4A2E";
/** Ocra del tartufo nel logo: micro-accento, mai su grandi superfici. */
export const TRUFFLE = "#B08A4E";
/** Verde più profondo del bosco: footer legali e fondi pieni. */
export const DARKEST = "#18220F";
/** Bordo esterno del gradiente hero (crema che vira alla salvia). */
export const HAZE = "#E7E0C9";

// ————— Helper alpha —————
// Evitano rgba() hardcoded che si disallineano quando la palette cambia.
const rgba = (r: number, g: number, b: number) => (a: number) => `rgba(${r}, ${g}, ${b}, ${a})`;

/** Testo/bordi su fondo chiaro. */
export const inkA = rgba(34, 48, 29);
/** Testo/bordi su fondo scuro. */
export const creamA = rgba(250, 243, 231);
/** Velature verde bosco (sfondi soft di bottoni e badge). */
export const forestA = rgba(47, 74, 43);
/** Velature marrone. */
export const brownA = rgba(107, 74, 46);
/** Velature ocra tartufo. */
export const truffleA = rgba(176, 138, 78);

// ————— Tipografia —————
export const grotesk = "'Space Grotesk', sans-serif";
export const crimson = "'Crimson Pro', serif";
export const satoshi = "'Satoshi', sans-serif";
