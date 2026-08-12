# Fix Hardcoded Italian Translations Plan

## Issue
The about-section.tsx file contains hardcoded Italian text in the accordion sections that needs to be translated.

## Hardcoded Text Found:
1. Line 95: "Il Truffle Camp nasce dalla passione per il Lagotto Romagnolo e l'arte della ricerca del tartufo, riunendo ogni anno appassionati, cinofili ed esperti nelle splendide colline dell'Appennino Tosco-Romagnolo."
2. Line 98: "La prima edizione ha gettato le basi per una manifestazione ricca di emozioni, cultura cinofila e condivisione. Ogni anno la Truffle Camp si rinnova, coinvolgendo nuovi ospiti e rafforzando la collaborazione con associazioni e operatori locali."
3. Line 112: "Partecipanti da tutta Europa"
4. Line 118: "Negli anni abbiamo visto partecipanti provenire da tutta Europa – Lituania, Inghilterra, Polonia, Slovacchia, Svizzera, Francia e perfino dall'Australia – tutti accomunati dal desiderio di vivere un'esperienza autentica, tra natura, formazione e convivialità."
5. Line 131: "Sessioni esperienziali uniche"
6. Line 137: "L'evento propone sessioni di addestramento con istruttori esperti come Nicoletta Conte, laboratori di cucina gourmet al tartufo, prove di lavoro ENCI, conferenze e attività a sostegno del rescue "Un tesoro di Lagotto"."
7. Line 150: "Solidarietà e supporto alla comunità"
8. Line 157: "Parte dei ricavati dell'evento è destinata al supporto del rescue Lagotto, rendendo la settimana non solo un'occasione formativa e di divertimento, ma anche di solidarietà."
9. Line 160: "Vieni a scoprire la storia che scriviamo insieme, anno dopo anno, tra boschi, tartufi e sorrisi."

## Solution Steps:
1. Add new translation keys to the TranslationStructure type in translations.ts
2. Add Italian translations for all the new keys
3. Add English translations for all the new keys
4. Update about-section.tsx to use the translation keys instead of hardcoded text

## New Translation Keys Needed:
- lagottoTruffleWeekStory
- firstEditionFoundation
- participantsFromEurope
- europeanCommunityDescription
- uniqueExperientialSessions
- eventActivitiesDescription
- solidarityAndSupport
- charityDonationDescription
- discoverOurStory