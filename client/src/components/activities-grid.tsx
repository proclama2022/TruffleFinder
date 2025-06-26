import { useLanguage } from "@/hooks/use-language";

const activitiesData = [
  {
    id: 1,
    titleKey: "truffleHunting",
    descKey: "truffleHuntingDesc",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    difficulty: "intermediate",
    duration: "fullDay",
  },
  {
    id: 2,
    titleKey: "professionalTraining",
    descKey: "professionalTrainingDesc",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    difficulty: "beginner",
    duration: "halfDay",
  },
  {
    id: 3,
    titleKey: "cookingWorkshop",
    descKey: "cookingWorkshopDesc",
    image: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    difficulty: "allLevels",
    duration: "3hours",
  },
  {
    id: 4,
    titleKey: "groomingWorkshop",
    descKey: "groomingWorkshopDesc",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    difficulty: "beginner",
    duration: "halfDay",
  },
  {
    id: 5,
    titleKey: "natureWalks",
    descKey: "natureWalksDesc",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    difficulty: "family",
    duration: "2hours",
  },
  {
    id: 6,
    titleKey: "gourmetDinners",
    descKey: "gourmetDinnersDesc",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    difficulty: "premium",
    duration: "evening",
  },
];

const activityTranslations = {
  it: {
    professionalTraining: "Addestramento Professionale",
    professionalTrainingDesc: "Impara da giudici ENCI certificati e migliora le abilità del tuo cane.",
    cookingWorkshop: "Laboratorio di Cucina",
    cookingWorkshopDesc: "Impara a preparare deliziosi piatti al tartufo con chef esperti.",
    groomingWorkshop: "Laboratorio di Grooming",
    groomingWorkshopDesc: "Impara tecniche di grooming professionale con l'esperto Daniele Tabarrini.",
    natureWalks: "Passeggiate Naturalistiche",
    natureWalksDesc: "Esplora le splendide colline di Romagna con il tuo amico a quattro zampe.",
    gourmetDinners: "Cene Gourmet",
    gourmetDinnersDesc: "Goditi cene esclusive nei migliori ristoranti della regione.",
    "3hours": "3 ore",
    "2hours": "2 ore",
    evening: "Sera",
  },
  en: {
    professionalTraining: "Professional Training",
    professionalTrainingDesc: "Learn from certified ENCI judges and improve your dog's skills.",
    cookingWorkshop: "Cooking Workshop",
    cookingWorkshopDesc: "Learn to prepare delicious truffle dishes with expert chefs.",
    groomingWorkshop: "Grooming Workshop",
    groomingWorkshopDesc: "Learn professional grooming techniques with expert Daniele Tabarrini.",
    natureWalks: "Nature Walks",
    natureWalksDesc: "Explore the beautiful hills of Romagna with your four-legged friend.",
    gourmetDinners: "Gourmet Dinners",
    gourmetDinnersDesc: "Enjoy exclusive dinners at the finest restaurants in the region.",
    "3hours": "3 hours",
    "2hours": "2 hours",
    evening: "Evening",
  },
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "beginner": return "bg-green-500";
    case "intermediate": return "bg-yellow-500";
    case "allLevels": return "bg-blue-500";
    case "family": return "bg-purple-500";
    case "premium": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

export function ActivitiesGrid() {
  const { language, t } = useLanguage();

  const getActivityText = (key: string) => {
    return activityTranslations[language][key as keyof typeof activityTranslations.it] || t(key as any) || key;
  };

  return (
    <section id="activities" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 dark:text-white mb-8">
            {t("ourActivities")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("activitiesDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((activity) => (
            <div key={activity.id} className="group glassmorphism rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300">
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${activity.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`${getDifficultyColor(activity.difficulty)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {t(activity.difficulty)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-900 dark:text-white mb-3">
                  {getActivityText(activity.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {getActivityText(activity.descKey)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <i className="fas fa-clock"></i>
                    <span>{getActivityText(activity.duration)}</span>
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold">
                    {t("learnMore")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
