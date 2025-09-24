// DEBUG: Logging structure issues
console.log("DEBUG: Starting translations file analysis");

// Define the translation structure type first to avoid circular references
type TranslationStructure = {
  // Navigation
  home: string;
  program: string;
  activities: string;
  gallery: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  eventDate: string;
  eventSubtitle: string;
  days: string;
  activities_count: string;
  participants: string;
  bookNow: string;
  discoverProgram: string;
  
  // About Section
  unforgettableExperience: string;
  aboutDescription: string;
  truffleHunting: string;
  truffleHuntingDesc: string;
  trainingSessions: string;
  trainingSessionsDesc: string;
  gourmetExperience: string;
  gourmetExperienceDesc: string;
  
  // Program Timeline
  eventProgram: string;
  eventSchedule: string;
  fiveDayJourney: string;
  october: string;
  programDescription: string;
  
  // Days
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  
  // Activities
  ourActivities: string;
  activitiesDescription: string;
  intermediate: string;
  beginner: string;
  allLevels: string;
  family: string;
  premium: string;
  fullDay: string;
  halfDay: string;
  learnMore: string;
  
  // Gallery
  galleryTitle: string;
  galleryDescription: string;
  all: string;
  dogs: string;
  hunting: string;
  food: string;
  
  // Team Section
  teamSection: {
    title: string;
    nicolettaRole: string;
    nicolettaDescription: string;
  };
  
  // About Section additional
  ourStory: string;
  eventOrigins: string;
  eventLocation: string;
  forYouAndYourDog: string;
  uniqueExperience: string;
  mapPorticoRomagna: string;
  porticoRomagnaDistance: string;
  internationalCommunity: string;
  activitiesAndTraining: string;
  socialImpact: string;
  photographicGallery: string;
  unforgettableMoments: string;
  discoverMoments: string;
  training: string;
  events: string;
  lagotto: string;
  videos: string;
  noResults: string;
  element: string;
  elements: string;
  loading: string;
  viewing: string;
  truffleSchool: string;
  learnFromExperts: string;
  featuredArticles: string;
  readMore: string;
  learningPath: string;
  faqSection: string;
  truffleBasics: string;
  truffleBasicsDesc: string;
  identificationGuide: string;
  identificationGuideDesc: string;
  habitatsClimate: string;
  habitatsClimateDesc: string;
  culinaryUses: string;
  culinaryUsesDesc: string;
  faqWhenToHunt: string;
  faqWhenToHuntAnswer: string;
  faqEssentialTools: string;
  faqEssentialToolsAnswer: string;
  faqLegality: string;
  faqLegalityAnswer: string;
  faqStorage: string;
  faqStorageAnswer: string;
  step1UnderstandingTruffles: string;
  step2IdentificationSkills: string;
  step3FindingLocations: string;
  step4SafetyEthics: string;
  step5AdvancedTechniques: string;
  
  // Contact and Event Info
  lagottoTruffleWeek: string;
  lagottoTruffleWeekBirth: string;
  phoneNumber: string;
  emailAddress: string;
  alVecchioConvento: string;
  contactTitle: string;
  contactDescription: string;
  eventInformation: string;
  location: string;
  dates: string;
  phone: string;
  sendMessage: string;
  name: string;
  surname: string;
  dogName: string;
  message: string;
  sendMessageBtn: string;
  contactFormTitle: string;
  contactFormNameLabel: string;
  contactFormEmailLabel: string;
  contactFormMessageLabel: string;
  contactFormSubmitButton: string;
  contactUs: string;
  
  formPlaceholders: {
    yourName: string;
    yourSurname: string;
    yourEmail: string;
    yourPhone: string;
    yourDogName: string;
    tellUsAbout: string;
  };
  
  // Footer
  quickLinks: string;
  followUs: string;
  allRightsReserved: string;
  
  // Messages
  messageSent: string;
  bookingSuccess: string;
  errorOccurred: string;
  
  // Coming Soon Page
  comingSoon: string;
  preparingSpecial: string;
  preparingDescription: string;
  fiveDaysExperience: string;
  porticoLocation: string;
  comingSoonAvailable: string;
  whatToExpect: string;
  truffleHuntingGuided: string;
  dogTrainingSessions: string;
  gourmetCooking: string;
  selectedAccommodation: string;
  wineExperiences: string;
  contactForInfo: string;
  siteProgress: string;
  progressCompleted: string;
  comingSoonRightsReserved: string;
  
  // Additional English-specific keys
  workTrainingBase: string;
  trainingCenter: string;
  lagottoTrainingDescription: string;
  functionalTraining: string;
  trainingArea: string;
  truffleTrainingDescription: string;
  truffleExperienceWhite: string;
  truffleWood: string;
  whiteTruffleHuntingDescription: string;
  inaugurationDinner: string;
  oldConvent: string;
  gourmetDinnerDescription: string;
  handlingGrooming: string;
  workshopRoom: string;
  groomingTechniquesDescription: string;
  showCooking: string;
  professionalKitchen: string;
  truffleCookingDescription: string;
  aperitifDinner: string;
  panoramicTerrace: string;
  localProductsDescription: string;
  truffleHuntingUncinato: string;
  oakWood: string;
  hookedTruffleHuntingDescription: string;
  picnicOldConvent: string;
  picnicArea: string;
  outdoorLunchDescription: string;
  charityRaffle: string;
  eventsHall: string;
  lagottoRescueEventDescription: string;
  officialTraining: string;
  workField: string;
  enciJudgesDescription: string;
  conferenceSurpriseGuest: string;
  monteBusca: string;
  specialEveningDescription: string;
  truffleHuntingWhite: string;
  lastWhiteTruffleHuntingDescription: string;
  lunchGreetings: string;
  finalLunchDescription: string;
  nextEvent: string;
  contactInfo: string;
  monFriHours: string;
  responseWithin: string;
  joinCommunity: string;
  socialMediaText: string;
  privacyPolicy: string;
  cookiePolicy: string;
  terms: string;
  
  // Team Section additional
  meetTheExpert: string;
  heartAndSoul: string;
  yearsExperience: string;
  expertise: string;
  professionalTraining: string;
  advancedTechniques: string;
  behavioralConsulting: string;
  contactNicoletta: string;
  followInstagram: string;
  passionateAbout: string;
  
  // About Section additional
  lagottoTruffleWeekStory: string;
  firstEditionFoundation: string;
  participantsFromEurope: string;
  europeanCommunityDescription: string;
  uniqueExperientialSessions: string;
  eventActivitiesDescription: string;
  solidarityAndSupport: string;
  charityDonationDescription: string;
  discoverOurStory: string;
};

console.log("DEBUG: TranslationStructure type defined");

// Italian translations
const itTranslations: TranslationStructure = {
  // Navigation
  home: "Home",
  program: "Programma",
  activities: "Attività",
  gallery: "Gallery",
  contact: "Contatti",
  
  // Hero Section
  heroTitle: "L'esperienza unica per te e il tuo cane",
  eventDate: "15-19 ottobre 2025",
  eventSubtitle: "L'Esperienza Unica per Te e il Tuo Cane",
  days: "Giorni",
  activities_count: "Attività",
  participants: "Partecipanti",
  bookNow: "Prenota Ora",
  discoverProgram: "Scopri il Programma",
  
  // About Section
  unforgettableExperience: "Un'Esperienza Indimenticabile",
  aboutDescription: "Unisciti a noi per cinque giorni di caccia al tartufo, sessioni di addestramento, cucina gourmet e momenti indimenticabili con il tuo Lagotto Romagnolo nelle splendide colline di Portico di Romagna.",
  truffleHunting: "Caccia al Tartufo",
  truffleHuntingDesc: "Vivi l'autentica caccia al tartufo con guide esperte e il tuo Lagotto addestrato.",
  trainingSessions: "Sessioni di Addestramento",
  trainingSessionsDesc: "Addestramento professionale con giudici ufficiali ENCI e handler esperti.",
  gourmetExperience: "Esperienza Gourmet",
  gourmetExperienceDesc: "Scopri la cucina al tartufo con show cooking e cene gourmet.",
  
  // Program Timeline
  eventProgram: "Programma Evento",
  eventSchedule: "Programma dell'Evento",
  fiveDayJourney: "Un Viaggio di 5 Giorni",
  october: "Ottobre",
  programDescription: "Cinque giorni di attività, addestramento ed esperienze indimenticabili con il tuo Lagotto Romagnolo.",
  
  // Days
  wednesday: "Mercoledì",
  thursday: "Giovedì",
  friday: "Venerdì",
  saturday: "Sabato",
  sunday: "Domenica",
  
  // Activities
  ourActivities: "Le Nostre Attività",
  activitiesDescription: "Scopri tutte le emozionanti attività in programma per la settimana.",
  intermediate: "Intermedio",
  beginner: "Principiante",
  allLevels: "Tutti i livelli",
  family: "Famiglia",
  premium: "Premium",
  fullDay: "Intera giornata",
  halfDay: "Mezza giornata",
  learnMore: "Scopri di più",
  
  // Gallery
  galleryTitle: "Galleria",
  galleryDescription: "Scopri la bellezza dei nostri eventi attraverso questi momenti memorabili.",
  all: "Tutti",
  dogs: "Cani",
  hunting: "Caccia",
  food: "Cibo",
  
  // Team Section
  teamSection: {
    title: "Il Nostro Team di Esperti",
    nicolettaRole: "Fondatrice & Esperta di Lagotto",
    nicolettaDescription: "Nicoletta è la mente e il cuore dietro Lagotto & Truffle Week. Con anni di esperienza nell'allevamento e nell'addestramento di Lagotto Romagnolo, la sua passione per i cani e la ricerca del tartufo è contagiosa. Guida ogni partecipante attraverso un'esperienza autentica e indimenticabile.",
  },
  
  // About Section additional
  ourStory: "La Nostra Storia",
  eventOrigins: "Le Origini dell'Evento",
  eventLocation: "Portico di Romagna",
  forYouAndYourDog: "FOR YOU AND YOUR DOG",
  uniqueExperience: "Un'esperienza unica per te e il tuo Lagotto Romagnolo",
  mapPorticoRomagna: "Mappa Portico di Romagna",
  porticoRomagnaDistance: "Portico di Romagna (30 min)",
  internationalCommunity: "Una Comunità Internazionale",
  activitiesAndTraining: "Attività e Formazione",
  socialImpact: "Impatto Sociale",
  photographicGallery: "Galleria Fotografica",
  unforgettableMoments: "Momenti Indimenticabili",
  discoverMoments: "Scopri i momenti più belli delle nostre esperienze con il tartufo e i nostri amati Lagotto Romagnolo",
  training: "Addestramento",
  events: "Eventi",
  lagotto: "Lagotto",
  videos: "Video",
  noResults: "Nessun risultato trovato per la categoria selezionata.",
  element: "elemento",
  elements: "elementi",
  loading: "Caricamento...",
  viewing: "Visualizzando",
  truffleSchool: "Scuola del Tartufo",
  learnFromExperts: "Impara dagli esperti, scopri i segreti della caccia al tartufo e del mondo del Lagotto Romagnolo.",
  featuredArticles: "Articoli in evidenza",
  readMore: "Leggi di più",
  learningPath: "Percorso di apprendimento",
  faqSection: "Sezione FAQ",
  truffleBasics: "Basi del Tartufo",
  truffleBasicsDesc: "Un'introduzione al mondo dei tartufi, la loro storia e il significato culturale.",
  identificationGuide: "Guida all'Identificazione",
  identificationGuideDesc: "Impara a distinguere le diverse specie di tartufo e le loro caratteristiche.",
  habitatsClimate: "Habitat e Clima",
  habitatsClimateDesc: "Scopri gli ambienti ideali per la crescita del tartufo e i fattori climatici.",
  culinaryUses: "Usi Culinari",
  culinaryUsesDesc: "Esplora le applicazioni culinarie tradizionali e moderne dei tartufi.",
  faqWhenToHunt: "Quando è il periodo migliore per la caccia al tartufo?",
  faqWhenToHuntAnswer: "La stagione di caccia al tartufo varia a seconda della specie e della regione, ma generalmente va dal tardo autunno all'inizio della primavera.",
  faqEssentialTools: "Quali sono gli strumenti essenziali per la caccia al tartufo?",
  faqEssentialToolsAnswer: "Un vanghetto da tartufo, un cane addestrato e un abbigliamento adeguato sono essenziali.",
  faqLegality: "La caccia al tartufo è legale ovunque?",
  faqLegalityAnswer: "Le normative sulla caccia al tartufo variano a seconda del paese e della regione. Controlla sempre le leggi locali.",
  faqStorage: "Come si conservano i tartufi?",
  faqStorageAnswer: "Conserva i tartufi freschi in frigorifero avvolti in carta assorbente e riposti in un contenitore ermetico.",
  step1UnderstandingTruffles: "Passo 1: Comprendere i Tartufi",
  step2IdentificationSkills: "Passo 2: Abilità di Identificazione",
  step3FindingLocations: "Passo 3: Trovare i Luoghi",
  step4SafetyEthics: "Passo 4: Sicurezza ed Etica",
  step5AdvancedTechniques: "Passo 5: Tecniche Avanzate",
  
  // Contact and Event Info
  lagottoTruffleWeek: "Lagotto & Truffle Week",
  lagottoTruffleWeekBirth: "Lagotto & Truffle Week - La Nascita",
  phoneNumber: "+39 334 750 0887",
  emailAddress: "info@lagottotruffleweek.it",
  alVecchioConvento: "Al Vecchio Convento",
  contactTitle: "Contatti e Prenotazioni",
  contactDescription: "Pronto a unirti a noi? Mettiti in contatto per assicurarti il posto per questa esperienza indimenticabile.",
  eventInformation: "Informazioni Evento",
  location: "Sede",
  dates: "Date",
  phone: "Telefono",
  sendMessage: "Inviaci un Messaggio",
  name: "Nome",
  surname: "Cognome",
  dogName: "Nome del Cane",
  message: "Messaggio",
  sendMessageBtn: "Invia Messaggio",
  contactFormTitle: "Inviaci un Messaggio",
  contactFormNameLabel: "Nome",
  contactFormEmailLabel: "Email",
  contactFormMessageLabel: "Messaggio",
  contactFormSubmitButton: "Invia Messaggio",
  contactUs: "Contattaci",
  
  formPlaceholders: {
    yourName: "Il tuo nome",
    yourSurname: "Il tuo cognome",
    yourEmail: "la.tua.email@esempio.it",
    yourPhone: "Il tuo numero di telefono",
    yourDogName: "Il nome del tuo cane",
    tellUsAbout: "Raccontaci del tuo interesse per l'evento..."
  },
  
  // Footer
  quickLinks: "Link Rapidi",
  followUs: "Seguici",
  allRightsReserved: "© 2025 Lagotto & Truffle Week. Tutti i diritti riservati.",
  
  // Messages
  messageSent: "Messaggio inviato con successo!",
  bookingSuccess: "Prenotazione effettuata con successo!",
  errorOccurred: "Si è verificato un errore. Riprova.",
  
  // Coming Soon Page
  comingSoon: "Coming Soon - Presto Online!",
  preparingSpecial: "Stiamo Preparando Qualcosa di Speciale",
  preparingDescription: "Il nostro sito web è in fase di completamento per offrirvi la migliore esperienza possibile. Presto potrete prenotare la vostra avventura indimenticabile nelle splendide colline di Portico di Romagna.",
  fiveDaysExperience: "5 giorni di esperienza completa",
  porticoLocation: "Portico di Romagna, Emilia-Romagna",
  comingSoonAvailable: "Prossimamente disponibile",
  whatToExpect: "Cosa Aspettarsi",
  truffleHuntingGuided: "Caccia al tartufo guidata",
  dogTrainingSessions: "Sessioni di addestramento per cani",
  gourmetCooking: "Cucina gourmet con tartufi",
  selectedAccommodation: "Alloggio in strutture selezionate",
  wineExperiences: "Esperienze enogastronomiche",
  contactForInfo: "Contattaci per Maggiori Informazioni",
  siteProgress: "Progresso del Sito",
  progressCompleted: "85% Completato - Quasi Pronto!",
  comingSoonRightsReserved: "Tutti i diritti riservati.",
  
  // Additional English-specific keys (Italian placeholders)
  workTrainingBase: "Lavoro di addestramento di base",
  trainingCenter: "Centro di addestramento",
  lagottoTrainingDescription: "Sessione di addestramento di base per cani Lagotto",
  functionalTraining: "Addestramento funzionale per cani da tartufo",
  trainingArea: "Area di addestramento",
  truffleTrainingDescription: "Addestramento specializzato per la caccia al tartufo",
  truffleExperienceWhite: "Esperienza tartufo bianco",
  truffleWood: "Bosco da tartufo",
  whiteTruffleHuntingDescription: "Esperienza pratica di caccia al tartufo bianco",
  inaugurationDinner: "Cena di inaugurazione",
  oldConvent: "Al Vecchio Convento",
  gourmetDinnerDescription: "Cena gourmet di benvenuto con specialità locali",
  handlingGrooming: "Workshop di handling e toelettatura",
  workshopRoom: "Sala workshop",
  groomingTechniquesDescription: "Tecniche professionali di toelettatura e presentazione",
  showCooking: "Show cooking e workshop di cucina",
  professionalKitchen: "Cucina professionale",
  truffleCookingDescription: "Cucina creativa con il tartufo come protagonista",
  aperitifDinner: "Apericena",
  panoramicTerrace: "Terrazza panoramica",
  localProductsDescription: "Aperitivo con degustazione di prodotti locali",
  truffleHuntingUncinato: "Caccia al tartufo uncinato",
  oakWood: "Bosco di querce",
  hookedTruffleHuntingDescription: "Caccia al tartufo uncinato con guide esperte",
  picnicOldConvent: "Pic-nic presso Al Vecchio Convento",
  picnicArea: "Area picnic",
  outdoorLunchDescription: "Pranzo all'aperto con specialità locali",
  charityRaffle: "Lotteria di beneficenza",
  eventsHall: "Sala eventi",
  lagottoRescueEventDescription: "Evento di beneficenza per sostenere Lagotto Rescue",
  officialTraining: "Prova di lavoro di addestramento",
  workField: "Campo di lavoro",
  enciJudgesDescription: "Prove ufficiali con giudici ENCI qualificati",
  conferenceSurpriseGuest: "Conferenza con ospite a sorpresa",
  monteBusca: "Monte Busca",
  specialEveningDescription: "Serata speciale con ospite a sorpresa e cena gourmet",
  truffleHuntingWhite: "Caccia al tartufo bianco",
  lastWhiteTruffleHuntingDescription: "Ultima caccia al tartufo bianco della settimana",
  lunchGreetings: "Pranzo e saluti",
  finalLunchDescription: "Pranzo finale e saluti con tutti i partecipanti",
  nextEvent: "Prossimo evento",
  contactInfo: "Contatto & Informazioni",
  monFriHours: "Lun-Ven 9:00-18:00",
  responseWithin: "Risposta entro 24h",
  joinCommunity: "Unisciti alla Community",
  socialMediaText: "Seguici sui social media per rimanere aggiornato su eventi, consigli e storie dalla nostra community di appassionati.",
  privacyPolicy: "Politica sulla Privacy",
  cookiePolicy: "Politica sui Cookie",
  terms: "Termini",
  
  // Team Section additional
  meetTheExpert: "Incontra l'Esperta",
  heartAndSoul: "Il cuore e l'anima dietro Lagotto & Truffle Week",
  yearsExperience: "15+ anni di esperienza",
  expertise: "Competenze",
  professionalTraining: "Addestramento professionale Lagotto Romagnolo",
  advancedTechniques: "Tecniche avanzate di ricerca tartufi",
  behavioralConsulting: "Consulenza comportamentale canina",
  contactNicoletta: "Contatta Nicoletta",
  followInstagram: "Segui su Instagram",
  passionateAbout: "Appassionata di Lagotto Romagnolo e ricerca tartufi",
  
  // About Section additional
  lagottoTruffleWeekStory: "La Lagotto & Truffle Week nasce dalla passione per il Lagotto Romagnolo e l'arte della ricerca del tartufo, riunendo ogni anno appassionati, cinofili ed esperti nelle splendide colline dell'Appennino Tosco-Romagnolo.",
  firstEditionFoundation: "La prima edizione ha gettato le basi per una manifestazione ricca di emozioni, cultura cinofila e condivisione. Ogni anno la Truffle Week si rinnova, coinvolgendo nuovi ospiti e rafforzando la collaborazione con associazioni e operatori locali.",
  participantsFromEurope: "Partecipanti da tutta Europa",
  europeanCommunityDescription: "Negli anni abbiamo visto partecipanti provenire da tutta Europa – Lituania, Inghilterra, Polonia, Slovacchia, Svizzera, Francia e perfino dall'Australia – tutti accomunati dal desiderio di vivere un'esperienza autentica, tra natura, formazione e convivialità.",
  uniqueExperientialSessions: "Sessioni esperienziali uniche",
  eventActivitiesDescription: "L'evento propone sessioni di addestramento con istruttori esperti come Nicoletta Conte, laboratori di cucina gourmet al tartufo, prove di lavoro ENCI, conferenze e attività a sostegno del rescue \"Un tesoro di Lagotto\".",
  solidarityAndSupport: "Solidarietà e supporto alla comunità",
  charityDonationDescription: "Parte dei ricavati dell'evento è destinata al supporto del rescue Lagotto, rendendo la settimana non solo un'occasione formativa e di divertimento, ma anche di solidarietà.",
  discoverOurStory: "Vieni a scoprire la storia che scriviamo insieme, anno dopo anno, tra boschi, tartufi e sorrisi."
};

console.log("DEBUG: Italian translations defined");

// English translations
const enTranslations: TranslationStructure = {
  // Navigation
  home: "Home",
  program: "Program",
  activities: "Activities",
  gallery: "Gallery",
  contact: "Contact",
  
  // Hero Section
  heroTitle: "The unique experience for you and your dog",
  eventDate: "October 15-19, 2025",
  eventSubtitle: "The Unique Experience for You and Your Dog",
  days: "Days",
  activities_count: "Activities",
  participants: "Participants",
  bookNow: "Book Now",
  discoverProgram: "Discover Program",
  
  // About Section
  unforgettableExperience: "An Unforgettable Experience",
  aboutDescription: "Join us for five days of truffle hunting, training sessions, gourmet cooking, and unforgettable moments with your Lagotto Romagnolo in the beautiful hills of Portico di Romagna.",
  truffleHunting: "Truffle Hunting",
  truffleHuntingDesc: "Experience authentic truffle hunting with expert guides and your trained Lagotto.",
  trainingSessions: "Training Sessions",
  trainingSessionsDesc: "Professional training with official ENCI judges and expert handlers.",
  gourmetExperience: "Gourmet Experience",
  gourmetExperienceDesc: "Discover truffle cuisine with show cooking and gourmet dinners.",
  
  // Program Timeline
  eventProgram: "Event Program",
  eventSchedule: "Event Schedule",
  fiveDayJourney: "A 5-Day Journey",
  october: "October",
  programDescription: "Five days of activities, training, and unforgettable experiences with your Lagotto Romagnolo.",
  
  // Days
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
  
  // Activities
  ourActivities: "Our Activities",
  activitiesDescription: "Discover all the exciting activities planned for the week.",
  intermediate: "Intermediate",
  beginner: "Beginner",
  allLevels: "All Levels",
  family: "Family",
  premium: "Premium",
  fullDay: "Full day",
  halfDay: "Half day",
  learnMore: "Learn More",
  
  // Gallery
  galleryTitle: "Gallery",
  galleryDescription: "Discover the beauty of our events through these memorable moments.",
  all: "All",
  dogs: "Dogs",
  hunting: "Hunting",
  food: "Food",
  
  // Team Section
  teamSection: {
    title: "Our Team of Experts",
    nicolettaRole: "Founder & Lagotto Expert",
    nicolettaDescription: "Nicoletta is the mind and heart behind Lagotto & Truffle Week. With years of experience in breeding and training Lagotto Romagnolo, her passion for dogs and truffle hunting is contagious. She guides every participant through an authentic and unforgettable experience.",
  },
  
  // About Section additional
  ourStory: "Our Story",
  eventOrigins: "The Event Origins",
  eventLocation: "Portico di Romagna",
  forYouAndYourDog: "FOR YOU AND YOUR DOG",
  uniqueExperience: "A unique experience for you and your Lagotto Romagnolo",
  mapPorticoRomagna: "Map Portico di Romagna",
  porticoRomagnaDistance: "Portico di Romagna (30 min)",
  internationalCommunity: "An International Community",
  activitiesAndTraining: "Activities and Training",
  socialImpact: "Social Impact",
  photographicGallery: "Photographic Gallery",
  unforgettableMoments: "Unforgettable Moments",
  discoverMoments: "Discover the most beautiful moments of our truffle experiences and our beloved Lagotto Romagnolo",
  training: "Training",
  events: "Events",
  lagotto: "Lagotto",
  videos: "Videos",
  noResults: "No results found for the selected category.",
  element: "item",
  elements: "items",
  loading: "Loading...",
  viewing: "Viewing",
  truffleSchool: "Truffle School",
  learnFromExperts: "Learn from the experts, discover the secrets of truffle hunting and the world of Lagotto Romagnolo.",
  featuredArticles: "Featured Articles",
  readMore: "Read More",
  learningPath: "Learning Path",
  faqSection: "FAQ Section",
  truffleBasics: "Truffle Basics",
  truffleBasicsDesc: "An introduction to the world of truffles, their history, and cultural significance.",
  identificationGuide: "Identification Guide",
  identificationGuideDesc: "Learn to distinguish different truffle species and their characteristics.",
  habitatsClimate: "Habitats and Climate",
  habitatsClimateDesc: "Discover the ideal environments for truffle growth and climate factors.",
  culinaryUses: "Culinary Uses",
  culinaryUsesDesc: "Explore traditional and modern culinary applications of truffles.",
  faqWhenToHunt: "When is the best time to hunt truffles?",
  faqWhenToHuntAnswer: "Truffle hunting season varies by species and region, but generally occurs from late autumn to early spring.",
  faqEssentialTools: "What are the essential tools for truffle hunting?",
  faqEssentialToolsAnswer: "A truffle spade, a trained dog, and appropriate clothing are essential.",
  faqLegality: "Is truffle hunting legal everywhere?",
  faqLegalityAnswer: "Truffle hunting regulations vary by country and region. Always check local laws.",
  faqStorage: "How should truffles be stored?",
  faqStorageAnswer: "Store fresh truffles in the refrigerator wrapped in paper towel and placed in an airtight container.",
  step1UnderstandingTruffles: "Step 1: Understanding Truffles",
  step2IdentificationSkills: "Step 2: Identification Skills",
  step3FindingLocations: "Step 3: Finding Locations",
  step4SafetyEthics: "Step 4: Safety and Ethics",
  step5AdvancedTechniques: "Step 5: Advanced Techniques",
  
  // Contact and Event Info
  lagottoTruffleWeek: "Lagotto & Truffle Week",
  lagottoTruffleWeekBirth: "Lagotto & Truffle Week - The Birth",
  phoneNumber: "+39 334 750 0887",
  emailAddress: "info@lagottotruffleweek.it",
  alVecchioConvento: "Al Vecchio Convento",
  contactTitle: "Contact & Reservations",
  contactDescription: "Ready to join us? Get in touch to secure your spot for this unforgettable experience.",
  eventInformation: "Event Information",
  location: "Location",
  dates: "Dates",
  phone: "Phone",
  sendMessage: "Send Us a Message",
  name: "Name",
  surname: "Surname",
  dogName: "Dog's Name",
  message: "Message",
  sendMessageBtn: "Send Message",
  contactFormTitle: "Send Us a Message",
  contactFormNameLabel: "Name",
  contactFormEmailLabel: "Email",
  contactFormMessageLabel: "Message",
  contactFormSubmitButton: "Send Message",
  contactUs: "Contact Us",
  
  formPlaceholders: {
    yourName: "Your name",
    yourSurname: "Your surname",
    yourEmail: "your.email@example.com",
    yourPhone: "Your phone number",
    yourDogName: "Your dog's name",
    tellUsAbout: "Tell us about your interest in the event..."
  },
  
  // Footer
  quickLinks: "Quick Links",
  followUs: "Follow Us",
  allRightsReserved: "© 2025 Lagotto & Truffle Week. All rights reserved.",
  
  // Messages
  messageSent: "Message sent successfully!",
  bookingSuccess: "Booking completed successfully!",
  errorOccurred: "An error occurred. Please try again.",
  
  // Coming Soon Page
  comingSoon: "Coming Soon - Coming Online!",
  preparingSpecial: "We're Preparing Something Special",
  preparingDescription: "Our website is being completed to offer you the best possible experience. Soon you'll be able to book your unforgettable adventure in the beautiful hills of Portico di Romagna.",
  fiveDaysExperience: "5 days of complete experience",
  porticoLocation: "Portico di Romagna, Emilia-Romagna",
  comingSoonAvailable: "Coming soon",
  whatToExpect: "What to Expect",
  truffleHuntingGuided: "Guided truffle hunting",
  dogTrainingSessions: "Dog training sessions",
  gourmetCooking: "Gourmet cooking with truffles",
  selectedAccommodation: "Accommodation in selected facilities",
  wineExperiences: "Wine and gastronomic experiences",
  contactForInfo: "Contact Us for More Information",
  siteProgress: "Site Progress",
  progressCompleted: "85% Completed - Almost Ready!",
  comingSoonRightsReserved: "All rights reserved.",
  
  // Additional English-specific keys
  workTrainingBase: "Basic Training Work",
  trainingCenter: "Training Center",
  lagottoTrainingDescription: "Basic training session for Lagotto dogs",
  functionalTraining: "Functional training for truffle dogs with Elisa Mengozzi",
  trainingArea: "Training Area",
  truffleTrainingDescription: "Specialized training for truffle hunting",
  truffleExperienceWhite: "White Truffle Experience",
  truffleWood: "Truffle Wood",
  whiteTruffleHuntingDescription: "Practical experience of white truffle hunting",
  inaugurationDinner: "Inauguration Dinner at Al Vecchio Convento",
  oldConvent: "Al Vecchio Convento",
  gourmetDinnerDescription: "Welcome gourmet dinner with local specialties",
  handlingGrooming: "Handling and Grooming Workshop with Daniele Tabarrini",
  workshopRoom: "Workshop Room",
  groomingTechniquesDescription: "Professional grooming and presentation techniques",
  showCooking: "Show cooking and Cooking Workshop",
  professionalKitchen: "Professional Kitchen",
  truffleCookingDescription: "Creative cooking with truffle as the protagonist",
  aperitifDinner: "Aperitif Dinner",
  panoramicTerrace: "Panoramic Terrace",
  localProductsDescription: "Aperitif with tasting of local products",
  truffleHuntingUncinato: "Truffle Hunting for hooked truffle",
  oakWood: "Oak Wood",
  hookedTruffleHuntingDescription: "Hooked truffle hunting with expert guides",
  picnicOldConvent: "Picnic by Al Vecchio Convento",
  picnicArea: "Picnic Area",
  outdoorLunchDescription: "Outdoor lunch with local specialties",
  charityRaffle: "Charity raffle for a Lagotto Rescue treasure",
  eventsHall: "Events Hall",
  lagottoRescueEventDescription: "Charity event to support Lagotto Rescue",
  officialTraining: "Work training test with official ENCI judges",
  workField: "Work Field",
  enciJudgesDescription: "Official tests with qualified ENCI judges",
  conferenceSurpriseGuest: "Conference with surprise guest and dinner at Monte Busca",
  monteBusca: "Monte Busca",
  specialEveningDescription: "Special evening with surprise guest and gourmet dinner",
  truffleHuntingWhite: "White Truffle Hunting",
  lastWhiteTruffleHuntingDescription: "Last white truffle hunt of the week",
  lunchGreetings: "Lunch and greetings",
  finalLunchDescription: "Final lunch and greetings with all participants",
  nextEvent: "Next Event",
  contactInfo: "Contact & Information",
  monFriHours: "Mon-Fri 9:00-18:00",
  responseWithin: "Response within 24h",
  joinCommunity: "Join the Community",
  socialMediaText: "Follow us on social media to stay updated on events, tips, and stories from our community of enthusiasts.",
  privacyPolicy: "Privacy Policy",
  cookiePolicy: "Cookie Policy",
  terms: "Terms",
  
  // Team Section additional
  meetTheExpert: "Meet the Expert",
  heartAndSoul: "The heart and soul behind Lagotto & Truffle Week",
  yearsExperience: "15+ Years Experience",
  expertise: "Expertise",
  professionalTraining: "Professional Lagotto Romagnolo Training",
  advancedTechniques: "Advanced Truffle Hunting Techniques",
  behavioralConsulting: "Canine Behavioral Consulting",
  contactNicoletta: "Contact Nicoletta",
  followInstagram: "Follow on Instagram",
  passionateAbout: "Passionate about Lagotto Romagnolo & Truffle Hunting",
  
  // About Section additional
  lagottoTruffleWeekStory: "Lagotto & Truffle Week was born from a passion for the Lagotto Romagnolo and the art of truffle hunting, bringing together enthusiasts, dog lovers and experts every year in the beautiful hills of the Tuscan-Romagna Apennines.",
  firstEditionFoundation: "The first edition laid the foundations for an event full of emotions, dog culture and sharing. Every year the Truffle Week renews itself, involving new guests and strengthening collaboration with associations and local operators.",
  participantsFromEurope: "Participants from all over Europe",
  europeanCommunityDescription: "Over the years we have seen participants come from all over Europe – Lithuania, England, Poland, Slovakia, Switzerland, France and even from Australia – all united by the desire to live an authentic experience, between nature, training and conviviality.",
  uniqueExperientialSessions: "Unique experiential sessions",
  eventActivitiesDescription: "The event offers training sessions with expert instructors like Nicoletta Conte, gourmet truffle cooking workshops, ENCI work tests, conferences and activities in support of the \"A Treasure of Lagotto\" rescue.",
  solidarityAndSupport: "Solidarity and community support",
  charityDonationDescription: "Part of the event's proceeds are destined to support the Lagotto rescue, making the week not only an educational and fun opportunity, but also one of solidarity.",
  discoverOurStory: "Come and discover the story we write together, year after year, among woods, truffles and smiles."
};

console.log("DEBUG: English translations defined");

// Now create the main translations object with proper typing
export const translations = {
  it: itTranslations,
  en: enTranslations
} as const;

console.log("DEBUG: Main translations object created");

export type Language = 'it' | 'en';
export type TranslationKey = keyof typeof translations.it;

console.log("DEBUG: Types exported successfully");
