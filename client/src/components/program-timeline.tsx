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
    <section id="program" className="py-20 bg-truffle-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 dark:text-white mb-8">
            {t("eventProgram")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("programDescription")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 timeline-line transform md:-translate-x-1/2"></div>

            {programData.map((dayData, index) => (
              <div key={dayData.day} className="relative flex items-center mb-16">
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-yellow-600 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{dayData.day}</span>
                </div>
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-12' : 'md:w-1/2 md:pl-12 md:ml-auto'}`}>
                  <div className="glassmorphism rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-amber-900 dark:text-white mb-4">
                      {t(dayData.dayKey)}
                    </h3>
                    <div className="space-y-4">
                      {dayData.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-start space-x-3">
                          <i className={`${activity.icon} text-yellow-600 mt-1`}></i>
                          <div>
                            <h4 className="font-semibold text-amber-900 dark:text-white">
                              {getActivityText(activity.titleKey)}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                              {getActivityText(activity.descKey)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
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
