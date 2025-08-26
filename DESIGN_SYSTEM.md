# Lagotto & Truffle Week - Design System Guide

## 📋 Panoramica

Questa guida documenta il sistema di design standardizzato per il sito web Lagotto & Truffle Week, creato per risolvere le inconsistenze di design e migliorare l'esperienza utente complessiva.

## 🎨 Palette Colori

### Colori Principali
```css
--primary: #5B4636;        /* Marrone tartufo intenso */
--secondary: #B8A274;      /* Beige/truffle gold */
--accent: #E9C46A;         /* Giallo crema per highlight */
--moss: #97A65F;           /* Verde muschio */
--background: #FFF8F0;     /* Sfondo neutro */
```

### Utilizzo dei Colori
- **Primary**: Testi principali, icone, elementi di navigazione
- **Secondary**: Elementi secondari, bordi, sfumature
- **Accent**: Call-to-action, highlight, elementi interattivi
- **Moss**: Elementi decorativi, accenti naturali
- **Background**: Sfondi delle sezioni, card

### Esempi di Implementazione
```css
/* Testo principale */
color: var(--primary);

/* Pulsanti CTA */
background: linear-gradient(to-r, var(--accent), var(--secondary));

/* Bordi e divisori */
border-color: var(--secondary)/30;
```

## 🔤 Sistema Tipografico

### Gerarchia dei Titoli
```css
.text-h1 { @apply text-6xl md:text-8xl font-headline font-black; }
.text-h2 { @apply text-4xl md:text-6xl font-headline font-bold; }
.text-h3 { @apply text-2xl md:text-4xl font-subtitle font-bold; }
.text-h4 { @apply text-xl md:text-2xl font-subtitle font-semibold; }
.text-h5 { @apply text-lg md:text-xl font-subtitle font-medium; }
.text-h6 { @apply text-base md:text-lg font-subtitle font-medium; }
```

### Testo del Corpo
```css
.text-body-large { @apply text-lg md:text-xl font-body; }
.text-body { @apply text-base font-body; }
.text-body-small { @apply text-sm font-body; }
.text-caption { @apply text-xs font-body; }
```

### Font Families
- **Headline**: 'Montserrat Alternates' - Per titoli principali
- **Subtitle**: 'Montserrat Alternates' - Per sottotitoli
- **Body**: 'Nunito' - Per testo del corpo

### Linee Guida d'Uso
- **H1**: Solo per il titolo principale della pagina
- **H2**: Titoli delle sezioni principali
- **H3**: Sottosezioni e card titles
- **H4-H6**: Elementi minori, nomi, etichette
- **Body**: Paragrafi, descrizioni, contenuto generale

## 🎯 Sistema di Icone

### Standard Adottato
Tutte le icone utilizzano **Lucide React** per garantire coerenza visiva.

### Icone Principali
```tsx
import { 
  Users, Crown, Award, Instagram, Linkedin, Mail,
  Facebook, Youtube, Dog, Phone, MapPin, ArrowUp,
  Sun, Moon, Menu, Camera, X, Search, Calendar
} from "lucide-react";
```

### Dimensioni Standard
- **Small**: `w-3 h-3` (12px)
- **Medium**: `w-4 h-4` (16px) - Default
- **Large**: `w-5 h-5` (20px)
- **XLarge**: `w-6 h-6` (24px)

### Esempi di Utilizzo
```tsx
{/* Icona standard */}
<Users className="w-4 h-4 text-[var(--primary)]" />

{/* Icona con hover effect */}
<Instagram className="w-4 h-4 text-[var(--primary)] hover:text-[var(--accent)] transition-colors" />
```

## 📐 Sistema di Spaziatura

### Classi di Spaziatura Standardizzate

#### Sezioni
```css
.section-padding { @apply py-20 px-6; }
.section-padding-large { @apply py-24 px-6; }
.section-padding-small { @apply py-16 px-6; }
```

#### Container
```css
.container-spacing { @apply max-w-7xl mx-auto px-6; }
.container-spacing-narrow { @apply max-w-4xl mx-auto px-6; }
```

#### Card
```css
.card-padding { @apply p-6; }
.card-padding-large { @apply p-8; }
.card-padding-small { @apply p-4; }
```

#### Elementi
```css
.element-spacing { @apply space-y-6; }
.grid-spacing { @apply gap-6; }
.header-spacing { @apply mb-12; }
```

### Scala di Spaziatura (basata su 4px)
- **xs**: 4px
- **sm**: 8px
- **md**: 16px (default)
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

## 🃏 Sistema di Card


```tsx
<div className="relative rounded-3xl bg-[var(--background)] border border-[var(--secondary)]/30 card-padding-large shadow-lg hover:shadow-xl transition-all duration-300">
  {/* Contenuto card */}
</div>
```

### Caratteristiche Standard
- **Border Radius**: `rounded-3xl` (24px)
- **Background**: `bg-[var(--background)]`
- **Border**: `border-[var(--secondary)]/30`
- **Padding**: `card-padding-large` (32px)
- **Shadow**: `shadow-lg hover:shadow-xl`
- **Transition**: `transition-all duration-300`

## 🎬 Sezione Video/Media

### Struttura della Gallery
```tsx
<section className="section-padding bg-[var(--background)]">
  <div className="container-spacing">
    {/* Header con badge */}
    <div className="text-center header-spacing">
      <div className="inline-flex items-center bg-[var(--primary)]/10 px-6 py-3 rounded-full mb-6">
        <Icon className="w-5 h-5 text-[var(--primary)]" />
        <span className="text-[var(--primary)] font-subtitle">Media Gallery</span>
      </div>
      <h2 className="text-h2">Titolo Sezione</h2>
    </div>
  </div>
</section>
```

### Indicatori Video
- **Badge VIDEO**: Posizione top-left
- **Play Button**: Centro, con hover effects
- **Duration**: Bottom-right (se disponibile)

## 🦶 Footer Design

### Struttura Differenziata
Il footer è stato completamente ridisegnato per differenziarsi dalla navigazione:

```tsx
<footer className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/95 to-[var(--secondary)]/20 text-white py-16">
  {/* 3 colonne: Brand & Story, Contact & Info, Community & Social */}
</footer>
```

### Caratteristiche Uniche
- **Background**: Gradiente dal primary al secondary
- **Layout**: 3 colonne invece di 4
- **Contenuto**: Focus su community e storytelling
- **Colori**: Testo bianco su sfondo scuro
- **Elementi**: Highlight box per prossimo evento

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adattamenti Mobile
```css
@media (max-width: 768px) {
  .section-padding { @apply py-16 px-4; }
  .card-padding-large { @apply p-6; }
  .text-h1 { @apply text-4xl; }
  .text-h2 { @apply text-3xl; }
}
```

## ♿ Accessibilità

### Contrasto
- Tutti i testi rispettano il rapporto di contrasto WCAG AA (4.5:1)
- Elementi interattivi hanno contrasto minimo 3:1

### Focus States
```css
.focus-ring:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: 8px;
}
```

### Aria Labels
```tsx
<button aria-label="Chiudi lightbox" aria-pressed={isOpen}>
  <X className="w-5 h-5" />
</button>
```

## 🔧 Implementazione

### Classi CSS Personalizzate
Tutte le classi personalizzate sono definite in `src/index.css` nella sezione `@layer base`.

### Variabili CSS
Le variabili colore sono definite in `:root` e `.dark` per il supporto dark mode.

### Componenti Standardizzati
Ogni componente utilizza le classi standardizzate per garantire coerenza.

## 📋 Checklist di Implementazione

### ✅ Completato
- [x] Sistema di icone standardizzato (Lucide React)
- [x] Palette colori con variabili CSS
- [x] Gerarchia tipografica completa
- [x] Sezione video/media migliorata

- [x] Footer differenziato dalla navigazione
- [x] Sistema di spaziatura coerente

### 🔄 In Corso
- [ ] Test responsive su tutti i dispositivi
- [ ] Ottimizzazione performance
- [ ] Test accessibilità completi

### 📝 Note per Sviluppatori

1. **Utilizzare sempre le variabili CSS** invece di colori hardcoded
2. **Applicare le classi tipografiche standardizzate** per tutti i testi
3. **Usare le classi di spaziatura** invece di valori custom
4. **Importare icone da Lucide React** mantenendo coerenza
5. **Testare su mobile** prima di considerare completa una feature

### 🚀 Prossimi Passi

1. Implementare animazioni coerenti
2. Ottimizzare le immagini per performance
3. Aggiungere più varianti di card per diversi contenuti
4. Espandere il sistema di componenti riutilizzabili
5. Documentare pattern di interazione comuni

---

**Versione**: 1.0  
**Ultimo Aggiornamento**: Gennaio 2025