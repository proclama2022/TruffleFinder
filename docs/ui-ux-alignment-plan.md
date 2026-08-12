# Piano di Allineamento UI/UX per Truffle Camp

## Introduzione
Questo documento presenta un piano dettagliato per allineare l'interfaccia utente e l'esperienza utente del sito "Truffle Camp" alle specifiche definite nel design guide. L'analisi ha rivelato diverse discrepanze tra l'implementazione attuale e le linee guida di design, che devono essere corrette per garantire coerenza visiva e esperienza utente ottimale.

## Discrepanze Identificate

### 1. Palette Cromatica
**Problema**: Il sito utilizza una palette di colori basata su variabili CSS personalizzate che non corrispondono esattamente alle specifiche del design guide.

**Specifiche Design Guide**:
- Arancione Bruciato: `#AE5B22` (CTA, accenti)
- Oro/Mustard: `#E5CFBA` (backgrounds secondari)
- Marrone Terra: `#925C2B` (testi importanti)
- Verde Muschio: `#97A65F` (elementi natura)
- Avorio: `#F5F5DC` (background principale)

**Implementazione Attuale**:
- Utilizzo di variabili come `--forest-brown`, `--forest-gold`, `--forest-moss` con valori simili ma non identici
- Mancato utilizzo coerente dei colori primari in tutta l'applicazione

### 2. Tipografia
**Problema**: I font utilizzati non corrispondono a quelli specificati nel design guide.

**Specifiche Design Guide**:
- Headlines: `'Playfair Display', serif`
- Sottotitoli: `'Montserrat', sans-serif`
- Body Text: `'Source Sans Pro', sans-serif`
- Accenti: `'Lora', serif`

**Implementazione Attuale**:
- Utilizzo di font personalizzati come `font-display`, `font-organic`, `font-heading`
- Mancato caricamento dei font specificati nel design guide

### 3. Stile dei Componenti
**Problema**: I componenti presentano stili incoerenti tra loro, con diverse classi CSS personalizzate.

**Esempi Specifici**:
- Hero Section: Utilizza gradienti e ombre non specificati
- About Section: Utilizza card con stili personalizzati invece di seguire il design guide
- Program Timeline: Stile delle card non allineato alle specifiche

## Piano di Implementazione

### Fase 1: Aggiornamento Variabili CSS
1. Verificare che le variabili CSS in `index.css` corrispondano esattamente ai colori specificati:
```css
:root {
  --primary: #AE5B22; /* Arancione Bruciato */
  --secondary: #E5CFBA; /* Oro/Mustard */
  --accent: #925C2B; /* Marrone Terra */
  --moss: #97A65F; /* Verde Muschio */
  --ivory: #F5F5DC; /* Avorio */
}
```

2. Rimuovere variabili ridondanti o non utilizzate
3. Assicurarsi che tutte le componenti utilizzino queste variabili invece di valori hardcoded

### Fase 2: Aggiornamento Font
1. Aggiungere i font specificati nel design guide al progetto:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;700&family=Source+Sans+Pro:wght@400;700&family=Lora:wght@400;700&display=swap" rel="stylesheet">
```

2. Aggiornare le classi CSS per utilizzare i font corretti:
```css
.font-headline {
  font-family: 'Playfair Display', serif;
}

.font-subtitle {
  font-family: 'Montserrat', sans-serif;
}

.font-body {
  font-family: 'Source Sans Pro', sans-serif;
}

.font-accent {
  font-family: 'Lora', serif;
}
```

3. Sostituire tutte le istanze di font personalizzati con le nuove classi

### Fase 3: Standardizzazione Componenti
1. Hero Section:
   - Allineare lo stile al design guide
   - Utilizzare il colore Arancione Bruciato per i CTA
   - Implementare il countdown con stile specificato
   - Aggiornare la scroll indicator

2. About Section:
   - Standardizzare lo stile delle card
   - Utilizzare il layout split screen specificato
   - Applicare le animazioni fade-in su scroll

3. Program Timeline:
   - Implementare la timeline verticale interattiva
   - Utilizzare le icone custom specificate
   - Aggiungere l'animazione di disegno progressivo

4. Galleria:
   - Implementare il layout masonry grid
   - Aggiungere i filtri per tipo contenuto
   - Implementare la lightbox modal

### Fase 4: Verifica e Testing
1. Verificare la coerenza visiva in tutte le sezioni
2. Testare su diversi dispositivi e risoluzioni
3. Verificare il contrasto per accessibilità WCAG
4. Testare le animazioni e micro-interazioni

## Priorità di Implementazione
1. Aggiornamento palette cromatica (Alta priorità)
2. Aggiornamento font (Alta priorità)
3. Standardizzazione Hero Section (Alta priorità)
4. Standardizzazione About Section (Media priorità)
5. Implementazione Program Timeline (Media priorità)
6. Aggiornamento Galleria (Bassa priorità)

## Risorse Necessarie
- Accesso al design guide originale
- Font specificati (Playfair Display, Montserrat, Source Sans Pro, Lora)
- Icone custom per la timeline
- Immagini ottimizzate per tutte le sezioni

## Tempistica Stimata
- Fase 1: 2 ore
- Fase 2: 1 ora
- Fase 3: 6 ore
- Fase 4: 2 ore
- Totale stimato: 11 ore

## Note per lo Sviluppatore
1. Utilizzare Tailwind CSS per l'implementazione quando possibile
2. Assicurarsi che tutte le modifiche siano responsive
3. Mantenere le animazioni performanti con hardware acceleration
4. Verificare l'accessibilità di tutti gli elementi
5. Testare regolarmente su dispositivi mobili