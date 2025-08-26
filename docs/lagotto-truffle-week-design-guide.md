# Guida Design One-Page: Lagotto & Truffle Week

## Panoramica Generale

Sito one-page per la "Lagotto & Truffle Week" 2025 - un'esperienza immersiva che scorre verticalmente attraverso tutte le sezioni, dall'hero iniziale fino ai contatti finali, con navigazione fluida tramite scroll e menu ancorato.

## Palette Cromatica

### Colori Primari
- **Arancione Bruciato**: `#AE5B22` (CTA, accenti, hover states)
- **Oro/Mustard**: `#E5CFBA` (backgrounds secondari, highlights)  
- **Marrone Terra**: `#925C2B` (testi importanti, bordi)
- **Verde Muschio**: `#97A65F` (elementi natura, dettagli)
- **Avorio**: `#F5F5DC` (background principale, testi su dark)

### Uso Strategico
- Background principale: Avorio con overlay pattern di foglie sottili
- CTA e bottoni: Arancione bruciato con hover su Verde muschio
- Testi: Marrone terra su sfondi chiari, Avorio su sfondi scuri
- Accenti decorativi: Oro per separatori e micro-elementi

## Tipografia

### Font Stack Consigliato
- **Headlines**: `'Playfair Display', serif` o `'Abril Fatface', serif`
- **Sottotitoli**: `'Montserrat', sans-serif`
- **Body Text**: `'Source Sans Pro', sans-serif`
- **Accenti**: `'Lora', serif` per quote e elementi speciali

### Dimensioni One-Page
- **Hero Title**: 48-72px (mobile: 32-48px)
- **Section Headers**: 36-48px (mobile: 24-32px)
- **Sottotitoli**: 24-28px (mobile: 18-22px)
- **Body**: 18-20px (mobile: 16-18px)
- **Caption**: 14-16px

## Struttura One-Page (Sezioni Verticali)

### 1. Hero Section (100vh)
- **Background**: Immagine full-screen del lagotto con tartufi + overlay pattern foglie
- **Elemento centrale**: Logo animato + Tagline "THE UNIQUE EXPERIENCE FOR YOU AND YOUR DOG"
- **CTA principale**: "SCOPRI L'ESPERIENZA" (scroll to programma)
- **Countdown**: Timer animato fino all'evento (15-19 Ottobre 2025)
- **Scroll indicator**: Freccia animata che pulsa verso il basso

### 2. About Section (80vh)
- **Layout**: Split screen - testo a sinistra, gallery animata a destra
- **Contenuto**: Chi è Nicoletta Conte, cosa rende unica l'esperienza
- **Animazione**: Testo che appare con fade-in su scroll, gallery con parallax leggero

### 3. Programma Section (100vh+)
- **Design**: Timeline verticale interattiva con card per ogni giorno
- **Giorni**: 15-19 Ottobre con espansione al click/hover
- **Icone custom**: Per ogni attività (training, cucina, hunting, grooming)
- **Animazione**: Timeline che si "disegna" durante lo scroll + card che si rivelano progressivamente

### 4. Esperienza Visiva (80vh)
- **Layout**: Galleria immersiva con lazy loading
- **Contenuto**: Foto di lagotti, tartufi, momenti conviviali, paesaggi autunnali
- **Interazione**: Lightbox modal al click, cursor personalizzato su hover
- **Background**: Pattern di foglie che si muovono sottilmente

### 5. Location & Logistica (100vh)
- **Split**: Mappa interattiva (60%) + info pratiche (40%)
- **Mappa**: Custom markers per hotel, ristoranti, punti d'interesse
- **Info**: Come arrivare, dove dormire, cosa portare
- **Design**: Card sovrapposte con glassmorphism effect

### 6. CTA & Prenotazione (80vh)
- **Form**: Multi-step con validazione real-time
- **Layout**: Centrato con background sfocato
- **Elementi**: Prezzi, early bird, pacchetti disponibili
- **Animazione**: Micro-interazioni per ogni field, success animation

### 7. Footer & Contatti (60vh)
- **Layout**: Multi-colonna responsive
- **Contenuto**: Contatti Nicoletta, social links, partner, credits
- **Background**: Pattern discreto con logo watermark

## Animazioni e Micro-Interazioni

### Scroll-Triggered Animations
```css
/* Reveal elements on scroll */
.fade-in-up {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s ease-out;
}

.fade-in-up.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

### Custom Cursor
- **Default**: Piccola foglia stilizzata
- **Hover su bottoni**: Si trasforma in zampa di lagotto
- **Hover su immagini**: Expand con ombra
- **Su timeline**: Cursor che cambia colore per ogni giorno

### Micro-Animazioni
- **Bottoni**: Ripple effect + leggera rotazione
- **Card programma**: Lift effect con ombra dinamica
- **Timeline**: Linea che si disegna progressivamente
- **Countdown**: Numeri che "flippano" ogni secondo
- **Foglie decorative**: Movimento organico con CSS/JS

## Navigazione One-Page

### Menu Fisso (Sticky Header)
- **Position**: Fixed top, background trasparente → opaco su scroll
- **Elementi**: Logo (sx), Menu items ancorati (centro), CTA "Prenota" (dx)
- **Stile**: Glassmorphism con backdrop-blur
- **Mobile**: Hamburger menu con slide-in drawer

### Anchor Links
- **Smooth scroll**: CSS `scroll-behavior: smooth` + JS enhancement
- **Active states**: Indicatore visivo per sezione corrente
- **Offset**: Compensazione per header fisso

### Navigazione Alternativa
- **Progress bar**: Sottile barra in cima che si riempie con lo scroll
- **Floating nav**: Dots laterali per jump tra sezioni (desktop only)
- **Back to top**: Pulsante animato che appare dopo 50% scroll

## Responsive & Mobile

### Breakpoints
- **Mobile**: < 768px (layout single column, font ridotti)
- **Tablet**: 768px - 1024px (layout adattato, menu collapsed)
- **Desktop**: > 1024px (layout completo, tutte le animazioni)

### Mobile Specific
- **Touch gestures**: Swipe per galleria, pull-to-refresh
- **Bottom navigation**: Tab bar fissa per sezioni principali
- **Reduced animations**: Meno parallax, più fade semplici
- **Optimized images**: WebP format, lazy loading aggressivo

## Elementi Interattivi Specifici

### Timeline Programma
```html
<div class="timeline">
  <div class="day-card" data-day="15">
    <div class="day-header">Mercoledì 15</div>
    <div class="activities">
      <div class="activity">
        <icon>🎯</icon>
        <span>Training Base</span>
      </div>
    </div>
  </div>
</div>
```

### Form Prenotazione
- **Step 1**: Dati personali + cane
- **Step 2**: Selezione attività 
- **Step 3**: Alloggio + extra
- **Step 4**: Pagamento + conferma
- **Validazione**: Real-time con micro-animazioni

### Galleria Interattiva
- **Layout**: Masonry grid responsive
- **Filtri**: Per tipo contenuto (cani, tartufi, paesaggi, persone)
- **Lightbox**: Custom modal con navigation

## Performance & Ottimizzazione

### Loading Strategy
- **Critical CSS**: Inline per above-the-fold
- **Lazy loading**: Immagini, iframe, componenti pesanti
- **Preload**: Font critici, hero image
- **Service Worker**: Cache strategica per assets statici

### Animazioni Performance
- **CSS Transforms**: Preferire translate3d per hardware acceleration
- **RequestAnimationFrame**: Per animazioni smooth
- **Intersection Observer**: Per trigger scroll-based
- **Throttle/Debounce**: Per eventi scroll/resize

## Accessibilità

### WCAG Compliance
- **Contrasto**: Minimo 4.5:1 per testi normali
- **Focus indicators**: Visibili e con outline personalizzato
- **Alt text**: Per tutte le immagini decorative e informative
- **Keyboard navigation**: Tab order logico, skip links

### Screen Reader Support
- **Semantic HTML**: Header, nav, main, section, footer
- **ARIA labels**: Per elementi interattivi complessi
- **Live regions**: Per aggiornamenti dinamici (countdown, form feedback)

## Checklist Pre-Launch

### Content
- [ ] Tutti i testi tradotti e revisionati
- [ ] Immagini ottimizzate (WebP + fallback)
- [ ] Video compressi e con sottotitoli
- [ ] Form collegati a backend/email

### Technical
- [ ] SSL certificate installato
- [ ] Google Analytics configurato
- [ ] Sitemap XML generata
- [ ] Meta tags Open Graph per social share
- [ ] Favicon set completo

### Testing
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing su device reali
- [ ] Accessibility testing con screen reader
- [ ] Performance audit con Lighthouse (>90 score)
- [ ] Form submission testing

## Note Tecniche per Implementazione

### Libraries Consigliate
- **Animations**: GSAP + ScrollTrigger
- **Smooth Scroll**: Lenis o custom solution
- **Lazy Loading**: Intersection Observer API
- **Form Validation**: Joi + custom UI feedback

### CSS Framework
- **Option 1**: Custom CSS con CSS Grid + Flexbox
- **Option 2**: Tailwind CSS per utility-first approach
- **Components**: Styled-components o CSS Modules per scoping

Questa guida fornisce una base solida per implementare il sito one-page per Lagotto & Truffle Week, mantenendo focus su UX moderna, performance e brand identity coerente.