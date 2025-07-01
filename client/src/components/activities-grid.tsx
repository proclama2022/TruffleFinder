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
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 px-4 py-2 rounded-full mb-6">
            <i className="fas fa-star text-green-600 dark:text-green-400"></i>
            <span className="text-green-700 dark:text-green-300 text-sm font-semibold tracking-wide uppercase">Premium Activities</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("activitiesDescription")}
          </p>
        </div>

        {/* Activities Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {activitiesData.map((activity, index) => (
            <div key={activity.id} className="group cursor-pointer">
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-2">
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={getActivityText(activity.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`${getDifficultyColor(activity.difficulty)} rounded-xl px-3 py-1.5 shadow-lg`}>
                      <span className="text-white text-xs font-bold tracking-wide">
                        {t(activity.difficulty as any)}
                      </span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1.5">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-clock text-white text-xs"></i>
                        <span className="text-white text-xs font-medium">
                          {getActivityText(activity.duration)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    {getActivityText(activity.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {getActivityText(activity.descKey)}
                  </p>
                  
                  {/* Action Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <i className="fas fa-heart text-white text-xs"></i>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                        Highly Rated
                      </span>
                    </div>
                    
                    <button className="group/btn flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-sm font-semibold">
                      <span>{t("learnMore")}</span>
                      <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform"></i>
                    </button>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
