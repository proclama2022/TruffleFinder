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
      className="py-24 bg-background transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235B4636' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-6 py-3 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-semibold tracking-wide uppercase font-subtitle">
                {t("ourStory")}
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-headline bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent mb-8">
              {t("unforgettableExperience")}
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body">
              {t("aboutDescription")}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text Content */}
            <div className="space-y-10 scroll-reveal">
              {/* Interactive Story Accordion */}
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-2xl font-subtitle text-primary mb-6 font-bold text-center">
                  {t("ourStory")}
                </h3>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="origini" className="border border-border rounded-2xl bg-background/60 backdrop-blur-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-subtitle text-primary font-bold">{t("eventOrigins")}</h4>
                          <p className="text-sm text-muted-foreground">{t("lagottoTruffleWeekBirth")}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4 text-foreground/90">
                        <p className="text-lg leading-relaxed font-body">
                          {t("lagottoTruffleWeekStory")}
                        </p>
                        <p className="text-lg leading-relaxed font-body">
                          {t("firstEditionFoundation")}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="comunita" className="border border-border rounded-2xl bg-background/60 backdrop-blur-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Users className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-subtitle text-primary font-bold">{t('internationalCommunity')}</h4>
                          <p className="text-sm text-muted-foreground">{t("participantsFromEurope")}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-lg leading-relaxed font-body text-foreground/90">
                        {t("europeanCommunityDescription")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="attivita" className="border border-border rounded-2xl bg-background/60 backdrop-blur-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-subtitle text-primary font-bold">{t('activitiesAndTraining')}</h4>
                          <p className="text-sm text-muted-foreground">{t("uniqueExperientialSessions")}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-lg leading-relaxed font-body text-foreground/90">
                        {t("eventActivitiesDescription")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="impatto" className="border border-border rounded-2xl bg-background/60 backdrop-blur-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[var(--moss)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-subtitle text-primary font-bold">{t('socialImpact')}</h4>
                          <p className="text-sm text-muted-foreground">{t("solidarityAndSupport")}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4 text-foreground/90">
                        <p className="text-lg leading-relaxed font-body">
                          {t("charityDonationDescription")}
                        </p>
                        <p className="text-base md:text-lg font-script text-secondary border-t border-border pt-4">
                          {t("discoverOurStory")}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Features Cards */}
              <div className="space-y-6">
                <Card className="group border-border hover:border-accent/60 transition-all duration-500 hover:shadow-xl bg-card/90 backdrop-blur-sm rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Search className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-subtitle text-primary mb-3 font-bold">
                          {t("truffleHunting")}
                        </h3>
                        <p className="text-muted-foreground font-body text-lg leading-relaxed">
                          {t("truffleHuntingDesc")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-border hover:border-accent/60 transition-all duration-500 hover:shadow-xl bg-card/90 backdrop-blur-sm rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <GraduationCap className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-subtitle text-primary mb-3 font-bold">
                          {t("trainingSessions")}
                        </h3>
                        <p className="text-muted-foreground font-body text-lg leading-relaxed">
                          {t("trainingSessionsDesc")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-border hover:border-accent/60 transition-all duration-500 hover:shadow-xl bg-card/90 backdrop-blur-sm rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <ChefHat className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-subtitle text-primary mb-3 font-bold">
                          {t("gourmetExperience")}
                        </h3>
                        <p className="text-muted-foreground font-body text-lg leading-relaxed">
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
                <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-[var(--muted)] to-[var(--tortora)]/40 rounded-2xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Background Image */}
                      <div className="relative h-96 overflow-hidden">
                        <img
                          src={galleryImage1}
                          alt="Lagotto & Truffle Week Experience"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Date Badge */}
                        <div className="absolute top-6 left-6 bg-card/95 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border shadow-sm">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-accent" />
                            <span className="text-primary font-bold text-lg">
                              {t("eventDate")}
                            </span>
                          </div>
                        </div>

                        {/* Location Badge */}
                        <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-2xl border border-border shadow-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span className="text-primary font-semibold text-sm">
                              {t("eventLocation")}
                            </span>
                          </div>
                        </div>

                        {/* Overlay Text */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-card/95 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-sm">
                            <h3 className="text-2xl font-headline text-primary mb-2">
                              {t("forYouAndYourDog")}
                            </h3>
                            <p className="text-muted-foreground font-body">
                              {t("uniqueExperience")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
