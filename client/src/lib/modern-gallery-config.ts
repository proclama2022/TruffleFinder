// Configurazione semplificata per la nuova galleria moderna
export interface GalleryImage {
  id: string;
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
  category: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  featured?: boolean;
  type: 'image' | 'video';
  videoSrc?: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface GalleryCategory {
  id: string;
  label: string;
  count: number;
}

// Immagini della galleria organizzate per categoria
export const GALLERY_IMAGES: GalleryImage[] = [
  // HERO/FEATURED
  {
    id: 'hero-truffle-hunting',
    src: '/images/gallery/464380933_17956502999831393_6501081485669265423_n.jpg',
    title: 'Caccia al Tartufo',
    description: 'Lagotto Romagnolo alla ricerca di tartufi nel bosco',
    category: 'caccia',
    aspectRatio: 'landscape',
    featured: true,
    type: 'image',
    alt: 'Lagotto Romagnolo che cerca tartufi nel bosco di quercia durante una sessione di addestramento'
  },
  {
    id: 'hero-gourmet-dinner',
    src: '/images/gallery/464469027_17956503017831393_2796787598014715018_n.jpg',
    title: 'Cena Gourmet',
    description: 'Degustazione di piatti prelibati con tartufo fresco',
    category: 'cucina',
    aspectRatio: 'landscape',
    featured: true,
    type: 'image',
    alt: 'Cena gourmet con tartufo fresco appena raccolto, servita in un ristorante di alta cucina'
  },

  // ADDESTRAMENTO
  {
    id: 'training-session-1',
    src: '/images/gallery/464824467_17957117315831393_3218779434772932755_n.jpg',
    title: 'Sessione di Addestramento',
    description: 'Addestramento professionale di cani da tartufo con giudici ENCI',
    category: 'addestramento',
    aspectRatio: 'portrait',
    type: 'image',
    alt: 'Sessione di addestramento professionale per cani da tartufo con giudici ENCI in un campo di prova'
  },
  {
    id: 'training-session-2',
    src: '/images/gallery/469330765_548666107967388_5542956395496543445_n.jpg',
    title: 'Tecniche di Ricerca',
    description: 'Cane che impara le tecniche di ricerca del tartufo durante una sessione di addestramento professionale',
    category: 'addestramento',
    aspectRatio: 'square',
    type: 'image',
    alt: 'Cane che impara le tecniche di ricerca del tartufo durante una sessione di addestramento professionale'
  },
  {
    id: 'training-session-3',
    src: '/images/gallery/469362531_548682184632447_550109455162274963_n.jpg',
    title: 'Addestramento Avanzato',
    description: 'Sessioni avanzate per cani esperti nella ricerca del tartufo',
    category: 'addestramento',
    aspectRatio: 'landscape',
    type: 'image',
    alt: 'Sessione di addestramento avanzato per cani esperti nella ricerca del tartufo in un ambiente naturale'
  },

  // CACCIA AL TARTUFO
  {
    id: 'hunting-1',
    src: '/images/gallery/464877167_17957117444831393_8590192735761577707_n.jpg',
    title: 'Ricerca nel Bosco',
    description: 'Esplorazione dei boschi romagnoli alla ricerca del tartufo',
    category: 'caccia',
    aspectRatio: 'portrait',
    type: 'image',
    alt: 'Lagotto Romagnolo che esplora i boschi romagnoli alla ricerca di tartufi in un ambiente naturale'
  },
  {
    id: 'hunting-2',
    src: '/images/gallery/464935188_17957117384831393_7153552770582827653_n.jpg',
    title: 'Momento della Scoperta',
    description: 'L\'emozione di trovare il primo tartufo nel terreno',
    category: 'caccia',
    aspectRatio: 'square',
    type: 'image',
    alt: 'Momento emozionante della scoperta del primo tartufo nel terreno da parte del Lagotto Romagnolo'
  },
  {
    id: 'hunting-3',
    src: '/images/gallery/464948125_17957117483831393_1811134842718160966_n.jpg',
    title: 'Raccolta del Tartufo',
    description: 'La delicata fase di raccolta del tartufo dal terreno',
    category: 'caccia',
    aspectRatio: 'landscape',
    type: 'image',
    alt: 'Fase delicata di raccolta del tartufo dal terreno da parte del conduttore dopo che il Lagotto ha individuato la posizione'
  },
  {
    id: 'hunting-4',
    src: '/images/gallery/freshly-picked-black-truffles-market-table-with-very-fancy-decoration.jpg',
    title: 'Tartufi Freschi',
    description: 'Tartufi neri appena raccolti su tavolo del mercato con decorazioni raffinate',
    category: 'caccia',
    aspectRatio: 'landscape',
    type: 'image',
    alt: 'Tartufi neri appena raccolti disposti su un tavolo del mercato con decorazioni raffinate e prodotti tipici locali'
  },

  // CUCINA
  {
    id: 'cooking-1',
    src: '/images/gallery/464968712_17957117327831393_4065399704841922148_n.jpg',
    title: 'Laboratorio di Cucina',
    description: 'Impara a cucinare con tartufo fresco in sessioni pratiche',
    category: 'cucina',
    aspectRatio: 'portrait',
    type: 'image',
    alt: 'Partecipanti che imparano a cucinare con tartufo fresco in un laboratorio di cucina pratico'
  },
  {
    id: 'cooking-2',
    src: '/images/gallery/464988699_17957117363831393_7097505010954522008_n.jpg',
    title: 'Preparazione Gourmet',
    description: 'Chef preparano piatti gourmet con tartufo appena raccolto',
    category: 'cucina',
    aspectRatio: 'square',
    type: 'image',
    alt: 'Chef professionista che prepara piatti gourmet con tartufo fresco appena raccolto in una cucina professionale'
  },

  // NATURA E PAESAGGI
  {
    id: 'nature-1',
    src: '/images/gallery/465009090_17957117462831393_8402184989260741843_n.jpg',
    title: 'Paesaggi Romagnoli',
    description: 'Panorama delle colline romagnole con boschi e campi coltivati',
    category: 'natura',
    aspectRatio: 'landscape',
    type: 'image',
    alt: 'Panorama delle colline romagnole con boschi e campi coltivati'
  },
  {
    id: 'nature-2',
    src: '/images/gallery/469168979_548681407965858_5427275510400062944_n.jpg',
    title: 'Sentieri nel Bosco',
    description: 'Passeggiate nei sentieri naturali delle zone tartufigene',
    category: 'natura',
    aspectRatio: 'portrait',
    type: 'image',
    alt: 'Sentieri naturali nel bosco romagnolo, ideali per la ricerca del tartufo'
  },

  // LAGOTTO ROMAGNOLO
  {
    id: 'dogs-1',
    src: '/images/gallery/469388705_548682361299096_1955431366200291031_n.jpg',
    title: 'Lagotto Campioni',
    description: 'Lagotto Romagnolo di alta genealogia in azione',
    category: 'lagotto',
    aspectRatio: 'square',
    type: 'image',
    alt: 'Lagotto Romagnolo di alta genealogia in azione durante una sessione di addestramento'
  },
  {
    id: 'dogs-2',
    src: '/images/gallery/469419463_548682374632428_4050602561978334808_n.jpg',
    title: 'Cuccioli Lagotto',
    description: 'Adorabili cuccioli di Lagotto Romagnolo in addestramento',
    category: 'lagotto',
    aspectRatio: 'portrait',
    type: 'image',
    alt: 'Adorabili cuccioli di Lagotto Romagnolo durante una sessione di addestramento'
  },
  {
    id: 'dogs-3',
    src: '/images/gallery/469465455_548682284632437_4087496900358609404_n.jpg',
    title: 'Lagotto al Lavoro',
    description: 'Lagotto Romagnolo durante le sessioni di lavoro tartufigene',
    category: 'lagotto',
    aspectRatio: 'landscape',
    type: 'image',
    alt: 'Lagotto Romagnolo durante una sessione di lavoro tartufigeno nel bosco'
  },
  {
    id: 'dogs-4',
    src: '/images/gallery/469531130_548682141299118_4498532712770348659_n.jpg',
    title: 'Lagotto Romagnolo',
    description: 'Il cane da tartufo tipico della Romagna',
    category: 'lagotto',
    aspectRatio: 'square',
    type: 'image',
    alt: 'Lagotto Romagnolo, il cane da tartufo tipico della regione Romagna'
  },
  {
    id: 'dogs-5',
    src: '/images/gallery/469583711_549459434554722_6473981523280719985_n.jpg',
    title: 'Lagotto in Addestramento',
    description: 'Lagotto Romagnolo durante sessioni di addestramento',
    category: 'lagotto',
    aspectRatio: 'portrait',
    type: 'image',
    alt: 'Lagotto Romagnolo durante una sessione di addestramento professionale'
  },
  {
    id: 'dogs-6',
    src: '/images/gallery/469592579_549458984554767_9181874361673783272_n.jpg',
    title: 'Lagotto Esperto',
    description: 'Lagotto Romagnolo esperto nella ricerca del tartufo',
    category: 'lagotto',
    aspectRatio: 'square',
    type: 'image',
    alt: 'Lagotto Romagnolo esperto nella ricerca del tartufo durante una sessione professionale'
  },
  {
    id: 'dogs-7',
    src: '/images/gallery/469622289_548682221299110_4007289453808012302_n.jpg',
    title: 'Lagotto al Lavoro',
    description: 'Lagotto Romagnolo al lavoro nella ricerca del tartufo',
    category: 'lagotto',
    aspectRatio: 'landscape',
    type: 'image',
    alt: 'Lagotto Romagnolo al lavoro durante una sessione di ricerca del tartufo nel bosco'
  },
  {
    id: 'dogs-8',
    src: '/images/gallery/472684242_572402118927120_6484107809680411241_n.jpg',
    title: 'Lagotto Romagnolo',
    description: 'Il cane da tartufo specializzato della Romagna',
    category: 'lagotto',
    aspectRatio: 'portrait',
    type: 'image',
    alt: 'Lagotto Romagnolo specializzato nella ricerca del tartufo della Romagna'
  },
  {
    id: 'dogs-9',
    src: '/images/gallery/472686206_572405268926805_1526769013100232144_n.jpg',
    title: 'Lagotto in Azione',
    description: 'Lagotto Romagnolo in azione durante la caccia al tartufo',
    category: 'lagotto',
    aspectRatio: 'square',
    type: 'image',
    alt: 'Lagotto Romagnolo in azione durante una sessione di caccia al tartufo nel bosco'
  },
  {
    id: 'dogs-10',
    src: '/images/gallery/472714145_572402112260454_3710055152020555970_n.jpg',
    title: 'Lagotto ad Allenamento',
    description: 'Lagotto Romagnolo durante sessioni di allenamento',
    category: 'lagotto',
    aspectRatio: 'portrait',
    type: 'image',
    alt: 'Lagotto Romagnolo durante una sessione di allenamento professionale per la ricerca del tartufo'
  },
  {
    id: 'dogs-11',
    src: '/images/gallery/472717070_572400058927326_4352450868554709735_n.jpg',
    title: 'Lagotto Professionale',
    description: 'Lagotto Romagnolo professionale nella ricerca del tartufo',
    category: 'lagotto',
    aspectRatio: 'square',
    type: 'image',
    alt: 'Lagotto Romagnolo professionale nella ricerca del tartufo durante una sessione ufficiale'
  },
  {
    id: 'dogs-12',
    src: '/images/gallery/473026623_572405422260123_5681489185905862866_n.jpg',
    title: 'Lagotto Romagnolo',
    description: 'Il cane da tartufo tipico della regione Romagna',
    category: 'lagotto',
    aspectRatio: 'landscape',
    type: 'image',
    alt: 'Lagotto Romagnolo, il cane da tartufo tipico della regione Romagna durante una sessione di ricerca'
  },
  {
    id: 'dogs-13',
    src: '/images/gallery/473079802_572399962260669_2735645614816818045_n.jpg',
    title: 'Lagotto al Lavoro',
    description: 'Lagotto Romagnolo al lavoro nella ricerca del tartufo',
    category: 'lagotto',
    aspectRatio: 'portrait',
    type: 'image',
    alt: 'Lagotto Romagnolo al lavoro durante una sessione di ricerca del tartufo nel bosco'
  },
  {
    id: 'dogs-14',
    src: '/images/gallery/525098126_17988052070831393_4383520019337702928_n.jpg',
    title: 'Lagotto Romagnolo',
    description: 'Il cane da tartufo specializzato della Romagna',
    category: 'lagotto',
    aspectRatio: 'landscape',
    type: 'image',
    alt: 'Lagotto Romagnolo specializzato nella ricerca del tartufo della Romagna durante una sessione professionale'
  },

  // VIDEO
  {
    id: 'video-1',
    src: '/videos/AQNbmIaankiAHg5fELBAhndRM-GabH6GkgdOgh91zaxYm_jyz5TTfJXh9FH-xaH4EbYHSj5f-bw6h2czjfgPD-oFCk-Wy1HkCd4veMg.mp4',
    thumbnail: '/images/gallery/background.jpg',
    title: 'Addestramento Lagotto',
    description: 'Sessione di addestramento per cani Lagotto Romagnolo',
    category: 'addestramento',
    aspectRatio: 'landscape',
    type: 'video',
    videoSrc: '/videos/AQNbmIaankiAHg5fELBAhndRM-GabH6GkgdOgh91zaxYm_jyz5TTfJXh9FH-xaH4EbYHSj5f-bw6h2czjfgPD-oFCk-Wy1HkCd4veMg.mp4',
    alt: 'Video di addestramento professionale per cani Lagotto Romagnolo nella ricerca del tartufo'
  },
  {
    id: 'video-2',
    src: '/videos/AQO9U5aRtwpG2dG9WeFFTfPuvp23Ub1uLqzVEiwXsOz7bi3mIRfh6w0LljicTMQArsBIL6AtvkJsVwyOPxJWRztgJ-etihhBBlzRefQ.mp4',
    thumbnail: '/images/gallery/background.jpg',
    title: 'Caccia al Tartufo',
    description: 'Esperienza autentica di ricerca del tartufo con Lagotto',
    category: 'caccia',
    aspectRatio: 'landscape',
    type: 'video',
    videoSrc: '/videos/AQO9U5aRtwpG2dG9WeFFTfPuvp23Ub1uLqzVEiwXsOz7bi3mIRfh6w0LljicTMQArsBIL6AtvkJsVwyOPxJWRztgJ-etihhBBlzRefQ.mp4',
    alt: 'Video di una sessione autentica di caccia al tartufo con cani Lagotto Romagnolo nel bosco romagnolo'
  },
  {
    id: 'video-3',
    src: '/videos/AQOvVNmegnUqdN2lHGmyaEljBkiga105k47qwafGCyDaZyba4lg0R353Sbs8W4rhKFXJhbTj_7A0IbmNA02LDBcFn7BdtmFhv_vKj6Y.mp4',
    thumbnail: '/images/gallery/background.jpg',
    title: 'Cucina con Tartufo',
    description: 'Preparazione di piatti gourmet con tartufo fresco',
    category: 'cucina',
    aspectRatio: 'landscape',
    type: 'video',
    videoSrc: '/videos/AQOvVNmegnUqdN2lHGmyaEljBkiga105k47qwafGCyDaZyba4lg0R353Sbs8W4rhKFXJhbTj_7A0IbmNA02LDBcFn7BdtmFhv_vKj6Y.mp4',
    alt: 'Video della preparazione di piatti gourmet con tartufo fresco appena raccolto, mostrando tecniche culinarie professionali'
  },
  {
    id: 'video-4',
    src: '/videos/AQPCuFedhPTk4CzeHdM0DMR96Qdv5dl3WThvPv9Zqx0YSj_A8yDacHuau11gxt9oa3XIyBQTrR1VOcnOqhiPdu18yqc8Onld6c7MkTM.mp4',
    thumbnail: '/images/gallery/background.jpg',
    title: 'Natura e Paesaggi',
    description: 'Passeggiata nei boschi romagnoli alla ricerca del tartufo',
    category: 'natura',
    aspectRatio: 'landscape',
    type: 'video',
    videoSrc: '/videos/AQPCuFedhPTk4CzeHdM0DMR96Qdv5dl3WThvPv9Zqx0YSj_A8yDacHuau11gxt9oa3XIyBQTrR1VOcnOqhiPdu18yqc8Onld6c7MkTM.mp4',
    alt: 'Video di una passeggiata nei boschi romagnoli durante una sessione di ricerca del tartufo, mostrando il paesaggio naturale e l\'ambiente ideale per la caccia al tartufo'
  }
];

// Categorie disponibili
export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: 'all',
    label: 'Tutte',
    count: GALLERY_IMAGES.length
  },
  {
    id: 'caccia',
    label: 'Caccia al Tartufo',
    count: GALLERY_IMAGES.filter(img => img.category === 'caccia').length
  },
  {
    id: 'addestramento',
    label: 'Addestramento',
    count: GALLERY_IMAGES.filter(img => img.category === 'addestramento').length
  },
  {
    id: 'cucina',
    label: 'Cucina',
    count: GALLERY_IMAGES.filter(img => img.category === 'cucina').length
  },
  {
    id: 'natura',
    label: 'Natura',
    count: GALLERY_IMAGES.filter(img => img.category === 'natura').length
  },
  {
    id: 'lagotto',
    label: 'Lagotto Romagnolo',
    count: GALLERY_IMAGES.filter(img => img.category === 'lagotto').length
  }
];

// Immagini hero per la sezione principale
export const HERO_IMAGES = GALLERY_IMAGES.filter(img => img.featured);

// Utility functions
export const getImagesByCategory = (categoryId: string): GalleryImage[] => {
  if (categoryId === 'all') return GALLERY_IMAGES;
  return GALLERY_IMAGES.filter(img => img.category === categoryId);
};

export const getImageById = (id: string): GalleryImage | undefined => {
  return GALLERY_IMAGES.find(img => img.id === id);
};
