// Configurazione della Bento Grid Gallery
// Questo file ti aiuta a organizzare e distinguere facilmente le immagini

export interface GalleryItem {
  id: number;
  type: 'hero' | 'video' | 'gallery' | 'featured' | 'stats' | 'testimonial';
  size: 'small' | 'medium' | 'large';
  title: string;
  subtitle: string;
  description?: string;
  featured?: boolean;
  badge?: string;
  
  // Per immagini
  image?: string;
  thumbnail?: string;
  
  // Per video
  video?: string;
  duration?: string;
  
  // Per gallerie
  images?: string[];
  
  // Per statistiche
  stats?: Record<string, string | number>;
  
  // Per testimonianze
  quote?: string;
  author?: string;
  rating?: number;
}

// MAPPING DELLE IMMAGINI - AGGIORNA QUI I NOMI DEI FILE
export const GALLERY_IMAGES = {
    // HERO SECTIONS
    truffleHuntingHero: '/images/gallery/464380933_17956502999831393_6501081485669265423_n.jpg',
    gourmetDinnerHero: '/images/gallery/464469027_17956503017831393_2796787598014715018_n.jpg',
  
    // VIDEO THUMBNAILS
    trainingThumb: '/images/gallery/464824467_17957117315831393_3218779434772932755_n.jpg',
    natureWalkThumb: '/images/gallery/464877167_17957117444831393_8590192735761577707_n.jpg',
  
    // FEATURED CARDS
    cookingWorkshop: '/images/gallery/464935188_17957117384831393_7153552770582827653_n.jpg',
  
    // GALLERY MINI
    moment1: '/images/gallery/464948125_17957117483831393_1811134842718160966_n.jpg',
    moment2: '/images/gallery/464968712_17957117327831393_4065399704841922148_n.jpg',
    moment3: '/images/gallery/464988699_17957117363831393_7097505010954522008_n.jpg',
    lagotto1: '/images/gallery/465009090_17957117462831393_8402184989260741843_n.jpg',
    lagotto2: '/images/gallery/469168979_548681407965858_5427275510400062944_n.jpg',
    dogTraining1: '/images/gallery/469330765_548666107967388_5542956395496543445_n.jpg',
    dogTraining2: '/images/gallery/469362531_548682184632447_550109455162274963_n.jpg',
  } as const;
  
  // MAPPING DEI VIDEO
  export const GALLERY_VIDEOS = {
    truffleHunting: '/videos/AQNbmIaankiAHg5fELBAhndRM-GabH6GkgdOgh91zaxYm_jyz5TTfJXh9FH-xaH4EbYHSj5f-bw6h2czjfgPD-oFCk-Wy1HkCd4veMg.mp4',
    trainingSession: '/videos/AQO9U5aRtwpG2dG9WeFFTfPuvp23Ub1uLqzVEiwXsOz7bi3mIRfh6w0LljicTMQArsBIL6AtvkJsVwyOPxJWRztgJ-etihhBBlzRefQ.mp4',
    natureWalk: '/videos/AQOvVNmegnUqdN2lHGmyaEljBkiga105k47qwafGCyDaZyba4lg0R353Sbs8W4rhKFXJhbTj_7A0IbmNA02LDBcFn7BdtmFhv_vKj6Y.mp4',
  } as const;
  
  // CONFIGURAZIONE COMPLETA DELLA BENTO GRID
  export const BENTO_DATA: GalleryItem[] = [
    {
      id: 1,
      type: "hero",
      size: "large",
      title: "Caccia al Tartufo",
      subtitle: "Esperienza Autentica",
      description: "Vivi l'emozione della ricerca del tartufo con i nostri Lagotto addestrati.",
      image: GALLERY_IMAGES.truffleHuntingHero,
      video: GALLERY_VIDEOS.truffleHunting,
      featured: true,
      stats: { duration: "4 ore", difficulty: "Intermedio", rating: 4.9 }
    },
    {
      id: 2,
      type: "video",
      size: "medium",
      title: "Sessioni di Addestramento",
      subtitle: "Con Giudici ENCI",
      description: "Sessioni di addestramento professionali per cani da tartufo.",
      thumbnail: GALLERY_IMAGES.trainingThumb,
      video: GALLERY_VIDEOS.trainingSession,
      duration: "2:34"
    },
    {
      id: 3,
      type: "gallery",
      size: "small",
      title: "Momenti Speciali",
      subtitle: "Highlights dell'Evento",
      images: [
        GALLERY_IMAGES.moment1,
        GALLERY_IMAGES.moment2,
        GALLERY_IMAGES.moment3
      ],
    },
    {
        id: 4,
        type: "featured",
        size: "medium",
        title: "Laboratorio di Cucina",
        subtitle: "Con Chef Stellati",
        description: "Impara a creare piatti gourmet con il tartufo fresco.",
        image: GALLERY_IMAGES.cookingWorkshop,
        featured: true,
        badge: "Popolare"
      },
      {
        id: 5,
        type: "stats",
        size: "small",
        title: "Statistiche Evento 2025",
        subtitle: "I Nostri Numeri",
        stats: {
          partecipanti: "200+",
          cani: "50+",
          attività: "15",
          rating: "4.9/5"
        },
      },
      {
        id: 6,
        type: "video",
        size: "medium",
        title: "Passeggiate nei Boschi",
        subtitle: "Natura e Avventura",
        description: "Esplora i sentieri più belli delle colline romagnole.",
        thumbnail: GALLERY_IMAGES.natureWalkThumb,
        video: GALLERY_VIDEOS.natureWalk,
        duration: "3:12"
      },
      {
        id: 7,
        type: "testimonial",
        size: "small",
        title: "Cosa Dicono di Noi",
        subtitle: "Feedback dei Partecipanti",
        quote: "Un'esperienza incredibile, organizzata alla perfezione. Torneremo sicuramente!",
        author: "Laura Bianchi",
        rating: 5,
      },
      {
        id: 8,
        type: "gallery",
        size: "medium",
        title: "I Nostri Campioni",
        subtitle: "Lagotto Romagnolo di Alta Genealogia",
        images: [
          GALLERY_IMAGES.lagotto1,
          GALLERY_IMAGES.lagotto2,
          GALLERY_IMAGES.dogTraining1,
          GALLERY_IMAGES.dogTraining2
        ],
      },
      {
        id: 9,
        type: "featured",
        size: "large",
        title: "Cene di Gala Esclusive",
        subtitle: "Sapori Indimenticabili",
        description: "Degusta il tartufo in piatti prelibati preparati da chef di fama internazionale.",
        image: GALLERY_IMAGES.gourmetDinnerHero,
        featured: true,
        badge: "Esclusivo"
      }
    ];

// GUIDA PER CARICARE LE IMMAGINI
export const UPLOAD_GUIDE = {
  // 1. HERO IMAGES (immagini grandi per le card principali)
  hero: {
    description: "Immagini grandi per le card hero (2x2)",
    size: "1920x1080px o 1600x900px",
    format: "JPG o WebP",
    files: [
      "01-truffle-hunting-hero.jpg",
      "09-gourmet-dinner-hero.jpg"
    ]
  },
  
  // 2. VIDEO THUMBNAILS (anteprime per i video)
  thumbnails: {
    description: "Anteprime per i video (1x2)",
    size: "800x600px",
    format: "JPG",
    files: [
      "02-training-thumb.jpg",
      "06-nature-walk-thumb.jpg"
    ]
  },
  
  // 3. FEATURED IMAGES (card in evidenza)
  featured: {
    description: "Immagini per card featured (1x2)",
    size: "1200x800px",
    format: "JPG",
    files: [
      "04-cooking-workshop.jpg"
    ]
  },
  
  // 4. GALLERY MINI (per le mini gallerie)
  gallery: {
    description: "Immagini piccole per mini gallerie",
    size: "600x600px",
    format: "JPG",
    files: [
      "03-moment-1.jpg",
      "03-moment-2.jpg", 
      "03-moment-3.jpg",
      "08-lagotto-1.jpg",
      "08-lagotto-2.jpg"
    ]
  }
};

// GUIDA PER I VIDEO
export const VIDEO_GUIDE = {
  description: "Video per la galleria",
  format: "MP4",
  quality: "720p o 1080p",
  duration: "1-3 minuti",
  files: [
    "01-truffle-hunting.mp4",
    "02-training-session.mp4", 
    "06-nature-walk.mp4"
  ]
}; 