import { CREAM, FOREST, BROWN, TRUFFLE, grotesk } from "@/lib/theme";

// ⚠️ SEGNAPOSTO — il logo definitivo non è ancora nel repo.
// Salvando l'artwork come client/src/assets/brand-logo.(png|jpg|svg|webp) viene
// raccolto automaticamente a build time e sostituisce ovunque il fallback.
// Il fallback qui sotto NON è il logo: riproduce solo gli elementi tipografici
// del lockup (anello spezzato, "TRUFFLE CAMP" in arco, firma, tartufo), senza
// l'illustrazione del Lagotto, che va presa dal file originale.
const artwork = import.meta.glob("../assets/brand-logo.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const ARTWORK_SRC = (Object.values(artwork)[0] as string | undefined) ?? null;

type BrandLogoProps = {
  /** Diametro in px. */
  size?: number;
  /** Colore dell'anello e del lettering principale. */
  ring?: string;
  /** Colore della firma "Nicoletta Conte". */
  signature?: string;
  /** Nasconde il lettering curvo: utile sotto i ~56px, dove sarebbe illeggibile. */
  markOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export function BrandLogo({
  size = 48,
  ring = FOREST,
  signature = BROWN,
  markOnly = false,
  className,
  style,
}: BrandLogoProps) {
  if (ARTWORK_SRC) {
    return (
      <img
        src={ARTWORK_SRC}
        alt="Truffle Camp · Nicoletta Conte"
        width={size}
        height={size}
        className={className}
        style={{ width: size, height: size, objectFit: "contain", ...style }}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label="Truffle Camp · Nicoletta Conte"
      className={className}
      style={style}
    >
      <defs>
        {/* Archi di supporto per il lettering curvo. Il verso di percorrenza
            determina l'orientamento dei glifi: sweep 1 sopra, sweep 0 sotto. */}
        <path id="tc-arc-top" d="M 20,100 A 80,80 0 0 1 180,100" fill="none" />
        <path id="tc-arc-bottom" d="M 26,100 A 74,74 0 0 0 174,100" fill="none" />
      </defs>

      {/* Anello. Con il lettering è spezzato in due archi che gli lasciano
          spazio, come nel logo originale; da solo torna continuo. */}
      {markOnly ? (
        <circle cx={100} cy={100} r={82} fill="none" stroke={ring} strokeWidth={8} />
      ) : (
        <>
          <path
            d="M 141,29 A 82,82 0 0 1 141,171"
            fill="none"
            stroke={ring}
            strokeWidth={7}
            strokeLinecap="round"
          />
          <path
            d="M 59,171 A 82,82 0 0 1 59,29"
            fill="none"
            stroke={ring}
            strokeWidth={7}
            strokeLinecap="round"
          />
          <text
            fill={ring}
            style={{ fontFamily: grotesk, fontWeight: 700, fontSize: 25, letterSpacing: 1.5 }}
          >
            <textPath href="#tc-arc-top" startOffset="50%" textAnchor="middle">
              TRUFFLE CAMP
            </textPath>
          </text>
          <text
            fill={signature}
            style={{ fontFamily: grotesk, fontWeight: 600, fontSize: 17, letterSpacing: 2.5 }}
          >
            <textPath href="#tc-arc-bottom" startOffset="50%" textAnchor="middle">
              NICOLETTA CONTE
            </textPath>
          </text>
        </>
      )}

      {/* Linea di terra scavata e tartufo: gli unici elementi figurativi del
          logo riproducibili fedelmente senza l'artwork originale. Il Lagotto
          che scava arriva con il file vero. */}
      <g transform={markOnly ? "translate(100,104) scale(1.25) translate(-100,-104)" : undefined}>
        <path
          d="M 38,104 L 96,104 C 108,104 111,116 124,116 C 137,116 146,109 162,104"
          fill="none"
          stroke={ring}
          strokeWidth={5}
          strokeLinecap="round"
        />
        {/* Zolle smosse ai lati della buca */}
        <path d="M 74,104 l 0,-9" stroke={ring} strokeWidth={4} strokeLinecap="round" />
        <path d="M 86,104 l 0,-14" stroke={ring} strokeWidth={4} strokeLinecap="round" />
        <path d="M 146,104 l 0,-8" stroke={ring} strokeWidth={4} strokeLinecap="round" />
        {/* Tartufo nella buca */}
        <circle cx={127} cy={117} r={11} fill={TRUFFLE} />
        <circle cx={124} cy={114} r={1.9} fill={CREAM} opacity={0.85} />
        <circle cx={130} cy={118} r={1.9} fill={CREAM} opacity={0.85} />
        <circle cx={125} cy={120} r={1.6} fill={CREAM} opacity={0.85} />
        <circle cx={131} cy={113} r={1.4} fill={CREAM} opacity={0.85} />
      </g>
    </svg>
  );
}

/**
 * Lockup orizzontale: roundel + nome su due righe.
 * Usato in navigazione, footer e testata delle pagine legali.
 */
export function BrandLockup({
  size = 44,
  color,
  subColor,
  ring,
  compact = false,
}: {
  size?: number;
  /** Colore del nome "Truffle Camp". */
  color?: string;
  /** Colore della firma. */
  subColor?: string;
  /** Colore del roundel (default: verde bosco). */
  ring?: string;
  /** Nasconde la firma: per header stretti. */
  compact?: boolean;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <BrandLogo size={size} ring={ring ?? FOREST} signature={ring ?? BROWN} markOnly />
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: grotesk,
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: 1.6,
            textTransform: "uppercase",
            color: color ?? FOREST,
            whiteSpace: "nowrap",
          }}
        >
          Truffle Camp
        </span>
        {!compact && (
          <span
            style={{
              fontFamily: grotesk,
              fontWeight: 500,
              fontSize: 10.5,
              letterSpacing: 2.4,
              textTransform: "uppercase",
              color: subColor ?? BROWN,
              whiteSpace: "nowrap",
            }}
          >
            Nicoletta Conte
          </span>
        )}
      </span>
    </span>
  );
}
