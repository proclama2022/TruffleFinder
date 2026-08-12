import { Link } from "wouter";
import { BrandLockup } from "@/components/brand-logo";
import { CREAM, INK, FOREST, MOSS, DARKEST, creamA, inkA, grotesk, crimson, satoshi } from "@/lib/theme";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <div style={{ minHeight: "100vh", background: CREAM, fontFamily: satoshi, color: INK }}>
      <nav style={{ background: FOREST, padding: "0 40px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            height: 76,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <BrandLockup size={38} ring={CREAM} color={CREAM} subColor={creamA(0.65)} />
          </Link>
          <Link
            href="/"
            style={{
              fontFamily: grotesk,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: creamA(0.75),
              textDecoration: "none",
            }}
          >
            ← Torna al sito
          </Link>
        </div>
      </nav>

      <main style={{ maxWidth: 820, margin: "0 auto", padding: "80px 40px 120px" }}>
        <h1
          style={{
            margin: "0 0 12px",
            fontFamily: crimson,
            fontWeight: 600,
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: INK,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: "0 0 48px",
            fontFamily: grotesk,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: MOSS,
          }}
        >
          Ultimo aggiornamento: {updated}
        </p>

        {intro && (
          <p style={{ margin: "0 0 48px", fontSize: 18, lineHeight: 1.7, color: inkA(0.8) }}>{intro}</p>
        )}

        {sections.map((s) => (
          <section key={s.heading} style={{ marginBottom: 44 }}>
            <h2
              style={{
                margin: "0 0 16px",
                fontFamily: crimson,
                fontWeight: 600,
                fontSize: 26,
                color: INK,
                borderBottom: `2px solid ${inkA(0.15)}`,
                paddingBottom: 12,
              }}
            >
              {s.heading}
            </h2>
            {s.paragraphs?.map((p, i) => (
              <p key={i} style={{ margin: "0 0 14px", fontSize: 16, lineHeight: 1.75, color: inkA(0.8) }}>
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul style={{ margin: "0 0 14px", paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8 }}>
                {s.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: 16, lineHeight: 1.7, color: inkA(0.8) }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>

      <footer style={{ background: DARKEST, color: CREAM, padding: "36px 40px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <p style={{ margin: 0, fontSize: 13.5, color: creamA(0.45) }}>
            © 2026 Truffle Camp · Nicoletta Conte. Tutti i diritti riservati.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Politica sulla Privacy", href: "/privacy-policy" },
              { label: "Politica sui Cookie", href: "/cookie-policy" },
              { label: "Termini", href: "/termini-e-condizioni" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: 13.5, color: creamA(0.45), textDecoration: "none" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
