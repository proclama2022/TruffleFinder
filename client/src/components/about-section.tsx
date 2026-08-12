import React, { useEffect, useRef } from "react";
import { useLanguage } from "../hooks/use-language";
import { Card, CardContent } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Search, GraduationCap, ChefHat, Calendar, MapPin, Sparkles, BookOpen, Users, Award, Heart } from "lucide-react";
import galleryImage1 from "/images/gallery/525098126_17988052070831393_4383520019337702928_n.jpg";
import nicolettaLogoImage from "/images/gallery/nicoletta-logo.jpg";

const galleryImages = [
  galleryImage1,
  // Aggiungere altre immagini in assets/images/
];

export function AboutSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('.scroll-reveal');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-stone-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/20 px-6 py-3 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-amber-700 dark:text-amber-300 text-sm font-semibold tracking-wide uppercase font-subtitle">
                {t("ourStory")}
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-headline bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-8">
              {t("unforgettableExperience")}
            </h2>
            <p className="text-xl lg:text-2xl text-stone-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-body">
              {t("aboutDescription")}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text Content */}
            <div className="space-y-10 scroll-reveal">
              {/* Interactive Story Accordion */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 dark:border-amber-700/30">
                <h3 className="text-2xl font-subtitle text-stone-800 dark:text-white mb-6 font-bold text-center">
                  {t("ourStory")}
                </h3>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="origini" className="border border-amber-200/30 dark:border-amber-700/30 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-subtitle text-stone-800 dark:text-white font-bold">{t("eventOrigins")}</h4>
                          <p className="text-sm text-stone-600 dark:text-gray-300">{t("lagottoTruffleWeekBirth")}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4 text-stone-700 dark:text-gray-200">
                        <p className="text-lg leading-relaxed font-body">
                          {t("lagottoTruffleWeekStory")}
                        </p>
                        <p className="text-lg leading-relaxed font-body">
                          {t("firstEditionFoundation")}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="comunita" className="border border-amber-200/30 dark:border-amber-700/30 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-subtitle text-stone-800 dark:text-white font-bold">{t('internationalCommunity')}</h4>
                          <p className="text-sm text-stone-600 dark:text-gray-300">{t("participantsFromEurope")}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-lg leading-relaxed font-body text-stone-700 dark:text-gray-200">
                        {t("europeanCommunityDescription")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="attivita" className="border border-amber-200/30 dark:border-amber-700/30 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-subtitle text-stone-800 dark:text-white font-bold">{t('activitiesAndTraining')}</h4>
                          <p className="text-sm text-stone-600 dark:text-gray-300">{t("uniqueExperientialSessions")}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-lg leading-relaxed font-body text-stone-700 dark:text-gray-200">
                        {t("eventActivitiesDescription")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="impatto" className="border border-amber-200/30 dark:border-amber-700/30 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-subtitle text-stone-800 dark:text-white font-bold">{t('socialImpact')}</h4>
                          <p className="text-sm text-stone-600 dark:text-gray-300">{t("solidarityAndSupport")}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4 text-stone-700 dark:text-gray-200">
                        <p className="text-lg leading-relaxed font-body">
                          {t("charityDonationDescription")}
                        </p>
                        <p className="text-sm italic border-t border-amber-200/30 dark:border-amber-700/30 pt-4">
                          {t("discoverOurStory")}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              {/* Features Cards */}
              <div className="space-y-6">
                <Card className="group border-amber-200/50 dark:border-amber-700/30 hover:border-amber-400/70 dark:hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/25">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-subtitle text-stone-800 dark:text-white mb-3 font-bold">
                          {t("truffleHunting")}
                        </h3>
                        <p className="text-stone-600 dark:text-gray-300 font-body text-lg leading-relaxed">
                          {t("truffleHuntingDesc")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-amber-200/50 dark:border-amber-700/30 hover:border-amber-400/70 dark:hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-subtitle text-stone-800 dark:text-white mb-3 font-bold">
                          {t("trainingSessions")}
                        </h3>
                        <p className="text-stone-600 dark:text-gray-300 font-body text-lg leading-relaxed">
                          {t("trainingSessionsDesc")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-amber-200/50 dark:border-amber-700/30 hover:border-amber-400/70 dark:hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/25">
                        <ChefHat className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-subtitle text-stone-800 dark:text-white mb-3 font-bold">
                          {t("gourmetExperience")}
                        </h3>
                        <p className="text-stone-600 dark:text-gray-300 font-body text-lg leading-relaxed">
                          {t("gourmetExperienceDesc")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right: Event Card */}
            <div className="scroll-reveal">
              <div className="relative">
                {/* Main Event Card */}
                <Card className="relative overflow-hidden border-0 shadow-2xl shadow-amber-500/20 bg-gradient-to-br from-stone-100 to-amber-100 dark:from-gray-800 dark:to-amber-900/20">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Background Image */}
                      <div className="relative h-96 overflow-hidden">
                        <img
                          src={galleryImage1}
                          alt="Truffle Camp Experience"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Date Badge */}
                        <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-200/50">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                            <span className="text-stone-800 dark:text-white font-bold text-lg">
                              {t("eventDate")}
                            </span>
                          </div>
                        </div>

                        {/* Location Badge */}
                        <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-2xl border border-amber-200/50">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                            <span className="text-stone-800 dark:text-white font-semibold text-sm">
                              {t("eventLocation")}
                            </span>
                          </div>
                        </div>

                        {/* Overlay Text */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl border border-amber-200/50">
                            <h3 className="text-2xl font-bold text-stone-800 dark:text-white mb-2">
                              {t("forYouAndYourDog")}
                            </h3>
                            <p className="text-stone-600 dark:text-gray-300 font-body">
                              {t("uniqueExperience")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
