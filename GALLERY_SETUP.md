# 🖼️ Guida al Caricamento delle Immagini - Bento Grid Gallery

## 📁 Struttura delle Cartelle

```
client/public/
├── images/
│   └── gallery/
│       ├── 01-truffle-hunting-hero.jpg     # Card Hero principale
│       ├── 02-training-thumb.jpg           # Thumbnail video training
│       ├── 03-moment-1.jpg                 # Mini galleria momenti
│       ├── 03-moment-2.jpg                 # Mini galleria momenti
│       ├── 03-moment-3.jpg                 # Mini galleria momenti
│       ├── 04-cooking-workshop.jpg         # Card featured cucina
│       ├── 06-nature-walk-thumb.jpg        # Thumbnail video passeggiate
│       ├── 08-lagotto-1.jpg                # Mini galleria lagotto
│       ├── 08-lagotto-2.jpg                # Mini galleria lagotto
│       └── 09-gourmet-dinner-hero.jpg      # Card Hero cene gourmet
└── videos/
    ├── 01-truffle-hunting.mp4              # Video caccia al tartufo
    ├── 02-training-session.mp4             # Video training
    └── 06-nature-walk.mp4                  # Video passeggiate
```

## 🎯 Come Distinguere le Immagini

### **1. Sistema di Nomenclatura**
- **01, 02, 03...**: Ordine di visualizzazione nella Bento Grid
- **tipo-contenuto**: Descrizione del contenuto
- **hero/thumb/featured**: Tipo di card

### **2. Tipi di Immagini**

#### **🟢 HERO IMAGES (Card Grandi 2x2)**
- **File**: `01-truffle-hunting-hero.jpg`, `09-gourmet-dinner-hero.jpg`
- **Dimensione**: 1920x1080px o 1600x900px
- **Formato**: JPG o WebP
- **Uso**: Card principali con testo sovrapposto

#### **🟡 VIDEO THUMBNAILS (Anteprime Video)**
- **File**: `02-training-thumb.jpg`, `06-nature-walk-thumb.jpg`
- **Dimensione**: 800x600px
- **Formato**: JPG
- **Uso**: Anteprime per i video con pulsante play

#### **🔵 FEATURED IMAGES (Card in Evidenza)**
- **File**: `04-cooking-workshop.jpg`
- **Dimensione**: 1200x800px
- **Formato**: JPG
- **Uso**: Card con badge "Popolare" o "Premium"

#### **🟣 GALLERY MINI (Mini Gallerie)**
- **File**: `03-moment-1.jpg`, `03-moment-2.jpg`, `03-moment-3.jpg`
- **Dimensione**: 600x600px
- **Formato**: JPG
- **Uso**: Mini gallerie con 2-3 immagini

## 📋 Checklist per il Caricamento

### **Passo 1: Prepara le Immagini**
- [ ] Ridimensiona le immagini secondo le specifiche
- [ ] Ottimizza la qualità (JPG 80-85%)
- [ ] Rinomina i file seguendo la nomenclatura

### **Passo 2: Carica le Immagini**
- [ ] Copia le immagini in `client/public/images/gallery/`
- [ ] Copia i video in `client/public/videos/`
- [ ] Verifica che i nomi dei file corrispondano

### **Passo 3: Verifica la Configurazione**
- [ ] Controlla il file `client/src/lib/gallery-config.ts`
- [ ] Assicurati che i percorsi siano corretti
- [ ] Testa la galleria nel browser

## 🎨 Specifiche Tecniche

### **Dimensioni Consigliate**
```css
/* Hero Images (2x2) */
.hero-image {
  width: 1920px;
  height: 1080px;
  aspect-ratio: 16:9;
}

/* Video Thumbnails (1x2) */
.video-thumb {
  width: 800px;
  height: 600px;
  aspect-ratio: 4:3;
}

/* Featured Images (1x2) */
.featured-image {
  width: 1200px;
  height: 800px;
  aspect-ratio: 3:2;
}

/* Gallery Mini (1x1) */
.gallery-mini {
  width: 600px;
  height: 600px;
  aspect-ratio: 1:1;
}
```

### **Formati Supportati**
- **Immagini**: JPG, WebP, PNG
- **Video**: MP4, WebM
- **Qualità**: 720p o 1080p per i video

## 🔧 Personalizzazione

### **Modificare i Contenuti**
1. Apri `client/src/lib/gallery-config.ts`
2. Modifica i testi, titoli, descrizioni
3. Aggiorna i percorsi delle immagini se necessario

### **Aggiungere Nuove Card**
1. Aggiungi l'immagine nella cartella appropriata
2. Aggiungi la configurazione in `BENTO_DATA`
3. Aggiorna `GALLERY_IMAGES` se necessario

### **Cambiare l'Ordine**
1. Modifica i numeri nei nomi dei file (01, 02, 03...)
2. Aggiorna l'ordine in `BENTO_DATA`

## 🚀 Test della Galleria

Dopo aver caricato le immagini:

1. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```

2. **Vai alla sezione galleria**:
   - Scorri fino alla sezione "Esperienze Visive"
   - Verifica che tutte le immagini si carichino
   - Testa il lightbox cliccando sulle card

3. **Verifica la responsività**:
   - Testa su mobile, tablet e desktop
   - Controlla che il layout si adatti correttamente

## 🐛 Risoluzione Problemi

### **Immagini Non Si Caricano**
- Verifica che i file siano nella cartella corretta
- Controlla i nomi dei file (case-sensitive)
- Verifica i percorsi in `gallery-config.ts`

### **Layout Non Corretto**
- Controlla le dimensioni delle immagini
- Verifica che i file siano ottimizzati
- Controlla la console del browser per errori

### **Video Non Riproducono**
- Verifica che i file MP4 siano validi
- Controlla che i percorsi siano corretti
- Testa con browser diversi

## 📞 Supporto

Se hai problemi:
1. Controlla la console del browser (F12)
2. Verifica che tutti i file siano caricati
3. Controlla la configurazione in `gallery-config.ts`
4. Assicurati che i nomi dei file corrispondano esattamente 