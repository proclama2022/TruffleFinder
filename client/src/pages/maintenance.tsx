import { useEffect } from "react";
import { CREAM, INK, BROWN, OLIVE, grotesk, crimson, satoshi } from "@/lib/theme";

export default function Maintenance() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
        padding: "40px 24px",
        textAlign: "center",
        background: `radial-gradient(ellipse at 50% 30%, ${CREAM} 0%, #EDDDC5 85%)`,
        fontFamily: satoshi,
        color: INK,
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: grotesk,
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 3.5,
          textTransform: "uppercase",
          color: OLIVE,
        }}
      >
        Torneremo presto · We'll be back soon
      </p>
      <h1
        style={{
          margin: 0,
          fontFamily: crimson,
          fontWeight: 600,
          fontSize: "clamp(40px, 7vw, 84px)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: INK,
        }}
      >
        Sito in <em style={{ fontWeight: 500, color: BROWN }}>manutenzione</em>
      </h1>
      <p style={{ margin: 0, maxWidth: 520, fontSize: 17, lineHeight: 1.65, color: "rgba(44,34,26,0.7)" }}>
        Stiamo lavorando per voi: il sito tornerà online a breve.
        <br />
        We're working on it: the website will be back online shortly.
      </p>
      <div style={{ width: 64, height: 2, background: "rgba(44,34,26,0.25)", marginTop: 8 }} />
    </div>
  );
}
