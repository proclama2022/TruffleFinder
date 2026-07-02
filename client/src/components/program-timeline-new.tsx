import { useLanguage } from "@/components/language-provider";
import { useState, useEffect } from "react";
import { Dog, Award, ChefHat, Gift, Users, Flame, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProgramTimelineNew() {
  const { t } = useLanguage();
  const [activeDay, setActiveDay] = useState(0);

  // Program data — Lagotto & Truffle Week, 14-18 ottobre 2026
  const programData = [
    {
      day: 14,
      dayKey: "wednesday" as const,
      date: `${t('wednesday')} 14 ${t('october')}`,
      theme: "from-[var(--primary)] to-[var(--secondary)]",
      activities: [
        {
          name: t('workTrainingBase'),
          icon: <Dog className="w-6 h-6 text-white" />,
          description: t('lagottoTrainingDescription')
        },
        {
          name: t('functionalTraining'),
          icon: <Award className="w-6 h-6 text-white" />,
          description: t('truffleTrainingDescription')
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
      day: 15,
      dayKey: "thursday" as const,
      date: `${t('thursday')} 15 ${t('october')}`,
      theme: "from-[var(--secondary)] to-[var(--accent)]",
      activities: [
        {
          name: t('truffleTrainingLagottoCorner'),
          icon: <Dog className="w-6 h-6 text-white" />,
          description: t('lagottoCornerDescription')
        },
        {
          name: t('showCooking'),
          icon: <ChefHat className="w-6 h-6 text-white" />,
          description: t('truffleCookingDescription')
        },
        {
          name: t('charityRaffle'),
          icon: <Gift className="w-6 h-6 text-white" />,
          description: t('lagottoRescueEventDescription')
        }
      ]
    },
    {
      day: 16,
      dayKey: "friday" as const,
      date: `${t('friday')} 16 ${t('october')}`,
      theme: "from-[var(--accent)] to-[var(--moss)]",
      activities: [
        {
          name: t('truffleTrainingMountain'),
          icon: <Dog className="w-6 h-6 text-white" />,
          description: t('mountainTrainingDescription')
        },
        {
          name: t('seminarKatrienVanGemert'),
          icon: <Users className="w-6 h-6 text-white" />,
          description: t('puppyLitterDescription')
        }
      ]
    },
    {
      day: 17,
      dayKey: "saturday" as const,
      date: `${t('saturday')} 17 ${t('october')}`,
      theme: "from-[var(--moss)] to-[var(--primary)]",
      activities: [
        {
          name: t('officialTraining'),
          icon: <Award className="w-6 h-6 text-white" />,
          description: t('enciJudgesDescription')
        },
        {
          name: t('conferenceGilbertoGrandi'),
          icon: <Users className="w-6 h-6 text-white" />,
          description: t('gilbertoGrandiDescription')
        },
        {
          name: t('monteBuscaFireStories'),
          icon: <Flame className="w-6 h-6 text-white" />,
          description: t('fireStoriesDescription')
        }
      ]
    },
    {
      day: 18,
      dayKey: "sunday" as const,
      date: `${t('sunday')} 18 ${t('october')}`,
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
    <section id="program" className="py-24 bg-gradient-to-br from-[var(--background)] via-[var(--secondary)]/20 to-[var(--accent)]/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-[var(--primary)]/20 px-8 py-4 rounded-full mb-8 shadow-lg">
            <Sparkles className="text-[var(--primary)] w-5 h-5" />
            <span className="text-[var(--primary)] text-sm font-semibold tracking-wide uppercase font-subtitle">
              {t('eventSchedule')}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-headline bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent mb-8">
            {t('fiveDayJourney')}
          </h2>
          <p className="text-xl lg:text-2xl text-[var(--primary)] max-w-4xl mx-auto leading-relaxed font-body">
            {t("programDescription")}
          </p>
        </div>

        {/* Day Navigation - Centered */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex justify-center space-x-4 px-4">
            {programData.map((day, index) => {
              const isActive = activeDay === index;
              return (
                <motion.button
                  key={day.day}
                  onClick={() => handleDayClick(index)}
                  className={`px-6 py-4 rounded-2xl min-w-[120px] transition-all duration-300 ${
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--primary)] font-bold shadow-lg'
                      : 'bg-card text-[var(--primary)] hover:bg-[var(--accent)]/20'
                  } border border-[var(--secondary)]/40`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    y: isActive ? -5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-lg font-semibold">{day.day}</div>
                  <div className="text-sm opacity-80">{t('october')}</div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Timeline Content - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Day Content - Centered */}
          <div className="bg-card rounded-3xl shadow-2xl border border-[var(--border)] p-8 mx-4">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-headline text-[var(--primary)] mb-3">
                {t(currentDay.dayKey)}
              </h3>
              <p className="text-xl text-[var(--muted-foreground)] font-body">
                {currentDay.date}
              </p>
            </div>

            {/* Activities Grid - Centered with even spacing */}
            <div className="grid md:grid-cols-2 gap-8 justify-items-center">
              <AnimatePresence mode="wait">
                {currentDay.activities.map((activity, activityIndex) => (
                  <motion.div
                    key={activityIndex}
                    className="bg-gradient-to-br from-white to-[var(--muted)]/40 rounded-2xl p-6 border border-[var(--border)] shadow-md hover:shadow-lg w-full max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: activityIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className={`bg-gradient-to-br ${currentDay.theme} rounded-xl p-4 flex-shrink-0`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {activity.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-[var(--primary)] mb-3">
                          {activity.name}
                        </h4>
                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Call to Action - Centered */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-xl text-[var(--primary)] mb-10 font-body max-w-2xl mx-auto leading-relaxed">
            {t('programDescription')}
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-10 py-5 bg-[var(--primary)] text-white text-lg font-bold rounded-full shadow-lg hover:bg-[var(--accent)] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('contactUs')}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 ml-3" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}