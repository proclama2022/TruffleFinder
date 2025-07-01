import { useLanguage } from "@/hooks/use-language";

const programData = [
  {
    day: 15,
    dayKey: "wednesday" as const,
    activities: [
      { icon: "fas fa-clock", titleKey: "basicTraining", descKey: "basicTrainingDesc" },
      { icon: "fas fa-search", titleKey: "whiteTruffleExp", descKey: "whiteTruffleExpDesc" },
      { icon: "fas fa-utensils", titleKey: "inaugurationDinner", descKey: "inaugurationDinnerDesc" },
    ],
  },
  {
    day: 16,
    dayKey: "thursday" as const,
    activities: [
      { icon: "fas fa-cut", titleKey: "groomingWorkshop", descKey: "groomingWorkshopDesc" },
      { icon: "fas fa-chef-hat", titleKey: "showCooking", descKey: "showCookingDesc" },
      { icon: "fas fa-wine-glass", titleKey: "aperitif", descKey: "aperitifDesc" },
    ],
  },
  {
    day: 17,
    dayKey: "friday" as const,
    activities: [
      { icon: "fas fa-tree", titleKey: "blackTruffleHunting", descKey: "blackTruffleHuntingDesc" },
      { icon: "fas fa-picnic", titleKey: "picnicLunch", descKey: "picnicLunchDesc" },
      { icon: "fas fa-heart", titleKey: "charityRaffle", descKey: "charityRaffleDesc" },
    ],
  },
  {
    day: 18,
    dayKey: "saturday" as const,
    activities: [
      { icon: "fas fa-trophy", titleKey: "workTestTraining", descKey: "workTestTrainingDesc" },
      { icon: "fas fa-microphone", titleKey: "conferenceGuest", descKey: "conferenceGuestDesc" },
      { icon: "fas fa-mountain", titleKey: "dinnerMonteBusca", descKey: "dinnerMonteBuscaDesc" },
    ],
  },
  {
    day: 19,
    dayKey: "sunday" as const,
    activities: [
      { icon: "fas fa-search", titleKey: "blackTruffleHuntingSun", descKey: "blackTruffleHuntingSunDesc" },
      { icon: "fas fa-gem", titleKey: "whiteTruffleHuntingSun", descKey: "whiteTruffleHuntingSunDesc" },
      { icon: "fas fa-handshake", titleKey: "farewellLunch", descKey: "farewellLunchDesc" },
    ],
  },
];

const activityTranslations = {
  it: {
    basicTraining: "Mattina - Lavoro training base",
    basicTrainingDesc: "Sessione di addestramento di base per il tuo Lagotto",
    whiteTruffleExp: "Pomeriggio - Truffle Experience su tartufo bianco",
    whiteTruffleExpDesc: "Esperienza di ricerca del prezioso tartufo bianco",
    inaugurationDinner: "Sera - Cena di inaugurazione presso Al Vecchio Convento",
    inaugurationDinnerDesc: "Cena di benvenuto in location esclusiva",
    groomingWorkshop: "Mattina - Laboratorio di Handling e Grooming con Daniele Tabarrini",
    groomingWorkshopDesc: "Workshop professionale di toelettatura e handling",
    showCooking: "Pomeriggio - Show cooking e Laboratorio di cucina",
    showCookingDesc: "Impara a cucinare piatti gourmet al tartufo",
    aperitif: "Sera - Apericena",
    aperitifDesc: "Aperitivo con specialità locali",
    blackTruffleHunting: "Tutto il giorno - Truffle Hunting su tartufo uncinato",
    blackTruffleHuntingDesc: "Caccia al tartufo nero nei terreni naturali",
    picnicLunch: "Pranzo - Picnic a cura di Al Vecchio Convento",
    picnicLunchDesc: "Pranzo all'aperto nelle colline romagnole",
    charityRaffle: "Sera - Riffa di beneficienza per un tesoro di lagotto rescue",
    charityRaffleDesc: "Evento benefico per sostenere il salvataggio dei Lagotto",
    workTestTraining: "Mattina - Training prova di lavoro con giudici ufficiali ENCI",
    workTestTrainingDesc: "Addestramento professionale con giudici certificati",
    conferenceGuest: "Pomeriggio - Conferenza con ospite a sorpresa",
    conferenceGuestDesc: "Incontro speciale con esperto del settore",
    dinnerMonteBusca: "Sera - Cena presso Monte Busca",
    dinnerMonteBuscaDesc: "Cena gourmet in location panoramica",
    blackTruffleHuntingSun: "Mattina - Truffle Hunting su tartufo nero",
    blackTruffleHuntingSunDesc: "Ultima sessione di caccia al tartufo nero",
    whiteTruffleHuntingSun: "Pomeriggio - Truffle Hunting su tartufo bianco",
    whiteTruffleHuntingSunDesc: "Ricerca finale del prezioso tartufo bianco",
    farewellLunch: "Sera - Pranzo e saluti",
    farewellLunchDesc: "Pranzo di commiato e arrivederci",
  },
  en: {
    basicTraining: "Morning - Basic Training Session",
    basicTrainingDesc: "Basic training session for your Lagotto",
    whiteTruffleExp: "Afternoon - White Truffle Experience",
    whiteTruffleExpDesc: "Experience searching for precious white truffles",
    inaugurationDinner: "Evening - Inauguration Dinner at Al Vecchio Convento",
    inaugurationDinnerDesc: "Welcome dinner at exclusive location",
    groomingWorkshop: "Morning - Handling and Grooming Workshop with Daniele Tabarrini",
    groomingWorkshopDesc: "Professional grooming and handling workshop",
    showCooking: "Afternoon - Show Cooking and Kitchen Lab",
    showCookingDesc: "Learn to cook gourmet truffle dishes",
    aperitif: "Evening - Aperitif",
    aperitifDesc: "Aperitif with local specialties",
    blackTruffleHunting: "All Day - Black Truffle Hunting on Natural Grounds",
    blackTruffleHuntingDesc: "Black truffle hunting on natural fields",
    picnicLunch: "Lunch - Picnic by Al Vecchio Convento",
    picnicLunchDesc: "Outdoor lunch in the Romagna hills",
    charityRaffle: "Evening - Charity Raffle for Lagotto Rescue",
    charityRaffleDesc: "Charity event to support Lagotto rescue",
    workTestTraining: "Morning - Work Test Training with Official ENCI Judges",
    workTestTrainingDesc: "Professional training with certified judges",
    conferenceGuest: "Afternoon - Conference with Special Guest",
    conferenceGuestDesc: "Special meeting with industry expert",
    dinnerMonteBusca: "Evening - Dinner at Monte Busca",
    dinnerMonteBuscaDesc: "Gourmet dinner at panoramic location",
    blackTruffleHuntingSun: "Morning - Black Truffle Hunting",
    blackTruffleHuntingSunDesc: "Final black truffle hunting session",
    whiteTruffleHuntingSun: "Afternoon - White Truffle Hunting",
    whiteTruffleHuntingSunDesc: "Final search for precious white truffles",
    farewellLunch: "Evening - Farewell Lunch",
    farewellLunchDesc: "Farewell lunch and goodbye",
  },
};

export function ProgramTimeline() {
  const { language, t } = useLanguage();

  const getActivityText = (key: string) => {
    return activityTranslations[language][key as keyof typeof activityTranslations.it] || key;
  };

  return (
    <section id="program" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 px-4 py-2 rounded-full mb-6">
            <i className="fas fa-calendar-alt text-amber-600 dark:text-amber-400"></i>
            <span className="text-amber-700 dark:text-amber-300 text-sm font-semibold tracking-wide uppercase">Event Schedule</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            5-Day Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("programDescription")}
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {programData.map((dayData, index) => (
              <div key={dayData.day} className="group">
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                  
                  {/* Day Badge */}
                  <div className="absolute -top-4 left-8">
                    <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white rounded-2xl px-6 py-3 shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{dayData.day}</div>
                        <div className="text-xs font-medium opacity-90">October</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {t(dayData.dayKey)}
                      </h3>
                      <div className="hidden md:block">
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                          <i className="fas fa-clock"></i>
                          <span className="text-sm font-medium">Full Day</span>
                        </div>
                      </div>
                    </div>

                    {/* Activities Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {dayData.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="group/activity">
                          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <i className={`${activity.icon} text-white text-lg`}></i>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                                  {getActivityText(activity.titleKey)}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {getActivityText(activity.descKey)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <i className="fas fa-paw text-6xl text-gray-400"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
