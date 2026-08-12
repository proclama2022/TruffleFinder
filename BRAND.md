# Truffle Camp · Nicoletta Conte — Linee guida di brand

## Nome

| Contesto | Forma da usare |
|---|---|
| Nav, footer, titoli, testo corrente | **Truffle Camp** |
| Lockup completo (logo, `<title>`, copyright, legal) | **Truffle Camp · Nicoletta Conte** |
| Firma da sola (seconda riga del logo) | **Nicoletta Conte** |

Il nome precedente — *Lagotto & Truffle Week* — è dismesso: non va più usato in
pagina, nelle email o nei metadati. "Lagotto Romagnolo" resta, ma solo come
**nome della razza**, non come parte del brand.

Le stringhe sono centralizzate in `client/src/lib/theme.ts`
(`BRAND`, `BRAND_SIGNATURE`, `BRAND_FULL`, `BRAND_TAGLINE_IT/EN`).

## Colori

Campionati dal logo. Definizione unica in `client/src/lib/theme.ts`, riflessa in
`client/src/index.css` (`:root`) e in `tailwind.config.ts` (`brand-*`).

| Token | Hex | Ruolo |
|---|---|---|
| `FOREST` | `#2F4A2B` | Primario: CTA, nav, marquee, anello del logo |
| `FOREST_LIGHT` | `#3D5F37` | Hover dei pieni |
| `BROWN` | `#6B4A2E` | Secondario: corsivi, firma |
| `MOSS` | `#5F7D4C` | Kicker, numerazioni |
| `TRUFFLE` | `#B08A4E` | Micro-accento (ocra del tartufo) |
| `CREAM` | `#FAF3E7` | Fondo |
| `SAND` | `#F1E5CF` | Sezioni alternate |
| `INK` | `#22301D` | Testo |
| `DARKEST` | `#18220F` | Fondi pieni |

Per le trasparenze usare gli helper (`inkA(0.7)`, `creamA(0.45)`, …) e mai
`rgba()` scritti a mano: restano allineati se la palette cambia.

## Logo — come inserire il file definitivo

⚠️ **L'artwork illustrato del logo non è ancora nel repository.** Al suo posto
`BrandLogo` disegna un segnaposto vettoriale che riproduce solo la parte
tipografica del lockup (anello, "TRUFFLE CAMP" in arco, firma, tartufo nella
buca). **Manca l'illustrazione del Lagotto che scava**, che va presa dal file
originale.

Per completarlo, salvare l'artwork come:

```
client/src/assets/brand-logo.png     (oppure .svg, .jpg, .webp)
```

Non serve altro: il file viene raccolto a build time da `import.meta.glob` in
`client/src/components/brand-logo.tsx` e sostituisce il segnaposto **ovunque**
(hero, navigazione, footer, pagina di manutenzione, coming soon), senza toccare
il codice.

Formati consigliati, in ordine:
1. **SVG** — ideale, nitido a ogni dimensione;
2. **PNG con trasparenza**, lato ≥ 1000 px.

Il file va esportato **senza il fondo crema rettangolare**: il fondo lo mette
già la pagina.

### Favicon

`client/public/favicon.svg` è anch'esso un segnaposto costruito con gli stessi
elementi. Va rigenerato dal logo definitivo quando disponibile.

## Tipografia

| Ruolo | Font |
|---|---|
| Titoli e corsivi di enfasi | Crimson Pro (serif) |
| Kicker, nav, bottoni, etichette maiuscole | Space Grotesk |
| Testo corrente | Satoshi |

## Componenti

```tsx
import { BrandLogo, BrandLockup } from "@/components/brand-logo";

<BrandLogo size={160} />                 // roundel completo (hero, manutenzione)
<BrandLogo size={64} markOnly />         // solo anello + motivo, senza lettering
<BrandLockup size={44} />                // roundel + nome su due righe (nav, footer)
<BrandLockup size={38} ring={CREAM} color={CREAM} />  // versione su fondo scuro
```

`markOnly` va usato sotto i ~56 px, dove il lettering curvo diventa illeggibile.
