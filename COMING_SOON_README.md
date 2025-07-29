# Pagina di Cortesia - TruffleFinder

## Come Gestire la Pagina "Coming Soon"

### Comandi Disponibili

1. **Mostra pagina di cortesia** (default):
   ```bash
   npm run dev
   ```

2. **Mostra sito completo** (per test):
   ```bash
   npm run dev:live
   ```

### Caratteristiche della Pagina di Cortesia

✅ **Design elegante** con gradiente ambrato
✅ **Informazioni essenziali** sul servizio
✅ **Contatti** per informazioni
✅ **Pulsante nascosto** per accedere al sito completo (solo per test)
✅ **Responsive design** per tutti i dispositivi
✅ **Supporto multilingua** (Italiano, Inglese, Tedesco, Francese)

### Contenuto della Pagina

- **Header**: Titolo e sottotitolo del servizio
- **Sezione principale**: Descrizione dell'esperienza
- **Dettagli**: Durata, località, disponibilità
- **Cosa aspettarsi**: Lista delle attività incluse
- **Contatti**: Email e telefono per informazioni
- **Footer**: Copyright e link nascosto al sito completo

### Come Cambiare Modalità

1. **Per attivare la modalità "Coming Soon"**:
   - Usa `npm run dev` (default)
   - Oppure imposta `SHOW_COMING_SOON=true`

2. **Per mostrare il sito completo**:
   - Usa `npm run dev:live`
   - Oppure imposta `SHOW_COMING_SOON=false`

### Lingue Supportate

- **Italiano (IT)** - Lingua principale
- **Inglese (EN)** - Per visitatori internazionali
- **Tedesco (DE)** - Per mercato tedesco
- **Francese (FR)** - Per mercato francese

### URL di Accesso

- **Pagina di cortesia**: `http://localhost:4000/`
- **Sito completo** (quando attivo): `http://localhost:4000/home`
- **API Status**: `http://localhost:4000/api/status`

### Personalizzazione

Per modificare il contenuto della pagina di cortesia, edita il file:
`client/src/pages/coming-soon.tsx`

### Note per il Deploy

Quando il sito sarà pronto per andare online:
1. Cambia `SHOW_COMING_SOON=false` nel file di configurazione
2. Usa `npm run dev:live` per testare
3. Fai il build con `npm run build`
4. Deploya con `npm start` 