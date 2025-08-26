import { useLanguage } from "@/components/language-provider";
import { useState } from "react";
import { Dog, Award, ChefHat, Gift, Users, Calendar as CalendarIcon, Sparkles, ArrowRight } from 'lucide-react';

export function ProgramTimeline() {
  const { t } = useLanguage();
  const [activeDay, setActiveDay] = useState(0);

  // Simplified program data with only key activities, no time or location
  const programData = [
    {
      day: 15,
      dayKey: "wednesday" as const,
      date: `${t('wednesday')} 15 ${t('october')}`,
      theme: "from-[var(--primary)] to-[var(--secondary)]",
      activities: [
        {
          name: t('workTrainingBase'),
          icon: <Dog className="w-6 h-6 text-white" />,
          description: t('lagottoTrainingDescription')
        },
        {
          name: t('truffleExperienceWhite'),
          icon: <Dog className="w-6 h-6 text-white" />,
          description: t('whiteTruffleHuntingDescription')
        },
        {
          name: t('inaugurationDinner'),
          icon: <ChefHat className="w-6 h-6 text-white" />,
          description: t('gourmetDinnerDescription')
        }
      ]
    },
    {
      day: 16,
      dayKey: "thursday" as const,
      date: `${t('thursday')} 16 ${t('october')}`,
      theme: "from-[var(--secondary)] to-[var(--accent)]",
      activities: [
        {
          name: t('handlingGrooming'),
          icon: <Award className="w-6 h-6 text-white" />,
          description: t('groomingTechniquesDescription')
        },
        {
          name: t('showCooking'),
          icon: <ChefHat className="w-6 h-6 text-white" />,
          description: t('truffleCookingDescription')
        }
      ]
    },
    {
      day: 17,
      dayKey: "friday" as const,
      date: `${t('friday')} 17 ${t('october')}`,
      theme: "from-[var(--accent)] to-[var(--moss)]",
      activities: [
        {
          name: t('truffleHuntingUncinato'),
          icon: <Dog className="w-6 h-6 text-white" />,
          description: t('hookedTruffleHuntingDescription')
        },
        {
          name: t('charityRaffle'),
          icon: <Gift className="w-6 h-6 text-white" />,
          description: t('lagottoRescueEventDescription')
        }
      ]
    },
    {
      day: 18,
      dayKey: "saturday" as const,
      date: `${t('saturday')} 18 ${t('october')}`,
      theme: "from-[var(--moss)] to-[var(--primary)]",
      activities: [
        {
          name: t('officialTraining'),
          icon: <Award className="w-6 h-6 text-white" />,
          description: t('enciJudgesDescription')
        },
        {
          name: t('conferenceSurpriseGuest'),
          icon: <Users className="w-6 h-6 text-white" />,
          description: t('specialEveningDescription')
        }
      ]
    },
    {
      day: 19,
      dayKey: "sunday" as const,
      date: `${t('sunday')} 19 ${t('october')}`,
      theme: "from-[var(--primary)] to-[var(--accent)]",
      activities: [
        {
          name: t('truffleHuntingWhite'),
          icon: <Dog className="w-6 h-6 text-white" />,
          description: t('lastWhiteTruffleHuntingDescription')
        },
        {
          name: t('lunchGreetings'),
          icon: <ChefHat className="w-6 h-6 text-white" />,
          description: t('finalLunchDescription')
        }
      ]
    }
  ];

  const currentDay = programData[activeDay];

  const handleDayClick = (index: number) => {
    setActiveDay(index);
  };

  return (
    <section id="program" className="py-24 bg-gradient-to-br from-[var(--background)] via-[var(--secondary)]/20 to-[var(--accent)]/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-[var(--primary)]/20 dark:border-[var(--primary)]/30 px-8 py-4 rounded-full mb-8 shadow-lg">
            <Sparkles className="text-[var(--primary)] dark:text-[var(--accent)] w-5 h-5" />
            <span className="text-[var(--primary)] dark:text-[var(--accent)] text-sm font-semibold tracking-wide uppercase font-subtitle">
              {t('eventSchedule')}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-headline bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] dark:from-[var(--accent)] dark:to-[var(--secondary)] bg-clip-text text-transparent mb-8">
            {t('fiveDayJourney')}
          </h2>
          <p className="text-xl lg:text-2xl text-[var(--primary)] dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-body">
            {t("programDescription")}
          </p>
        </div>

        {/* Day Navigation */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {programData.map((day, index) => {
              const isActive = activeDay === index;
              return (
                <button
                  key={day.day}
                  onClick={() => handleDayClick(index)}
                  className={`px-5 py-3 rounded-2xl transition-all ${
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--primary)] font-bold shadow-md'
                      : 'bg-white text-[var(--primary)] dark:bg-gray-800 dark:text-gray-200 hover:bg-[var(--accent)]/15'
                  } border border-[var(--secondary)]/40 dark:border-[var(--primary)]/30`}
                >
                  {day.day} {t('october')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--primary)]/30 dark:bg-[var(--accent)]/30 rounded-full md:block"></div>

          {programData.map((dayData, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex flex-col items-center md:w-1/2 md:px-8 md:text-right">
                <div className={`bg-gradient-to-br ${dayData.theme} text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mb-2 z-10 shadow-lg`}>
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-headline text-[var(--primary)] dark:text-[var(--accent)] mb-1">
                  {dayData.dayKey.charAt(0).toUpperCase() + dayData.dayKey.slice(1)}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-body">
                  {dayData.date}
                </p>
              </div>
              <div className="md:w-1/2 md:px-8 mt-8 md:mt-0">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 transform transition-transform hover:scale-[1.02] duration-300 ease-in-out">
                  {dayData.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="mb-4 last:mb-0 border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="text-xl font-semibold text-[var(--primary)] dark:text-[var(--accent)] mb-2 flex items-center">
                        {activity.icon && <span className="mr-3 p-2 rounded-full bg-[var(--primary)] dark:bg-[var(--accent)] shadow-md">{activity.icon}</span>}
                        {activity.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-body">
                        {activity.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-[var(--primary)] dark:text-gray-300 mb-8 font-body">
            {t('programDescription')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--primary)] text-white text-lg font-bold rounded-full shadow-lg hover:bg-[var(--accent)] transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            {t('contactUs')}
            <ArrowRight className="w-5 h-5 ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
}