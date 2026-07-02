import React from "react";
import { Card, CardContent } from "./ui/card";
import { MapPin, Phone, Mail, Calendar, Car, Bed, Package } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { useLanguage } from "../hooks/use-language";

export function UnifiedContactSection() {
  const { t } = useLanguage();

  const locationData = {
    address: "Portico di Romagna, Al Vecchio Convento",
    coordinates: { lat: 44.0612, lng: 11.8657 },
    phone: "+39 334 750 0887",
    email: "nico.conte76543@gmail.com",
    dates: t("eventDate"),
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("location"),
      value: locationData.address,
      color: "bg-[var(--primary)]",
    },
    {
      icon: Phone,
      title: t("phone"),
      value: locationData.phone,
      color: "bg-[var(--secondary)]",
    },
    {
      icon: Mail,
      title: t("contactFormEmailLabel"),
      value: locationData.email,
      color: "bg-[var(--accent)]",
    },
    {
      icon: Calendar,
      title: t("dates"),
      value: locationData.dates,
      color: "bg-[var(--moss)]",
    },
  ];

  const logistics = [
    {
      icon: Car,
      title: t("howToArriveTitle"),
      description: t("howToArriveDesc"),
      color: "bg-[var(--primary)]",
    },
    {
      icon: Bed,
      title: t("whereToSleepTitle"),
      description: t("whereToSleepDesc"),
      color: "bg-[var(--secondary)]",
    },
    {
      icon: Package,
      title: t("whatToBringTitle"),
      description: t("whatToBringDesc"),
      color: "bg-[var(--accent)]",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--muted)]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-h2 text-[var(--primary)] tracking-wide mb-4">
            {t("locationContactTitle")}
          </h2>
          <p className="text-body-large text-[var(--muted-foreground)] max-w-2xl mx-auto">
            {t("locationContactSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Map Section */}
          <div className="lg:col-span-1">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]">
              {/* Modern Map Embed */}
              <iframe
                title="Portico di Romagna Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.1234567890123!2d11.8656789012345!3d44.0612345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cc66e1234567%3A0xabcdef1234567890!2sPortico%20di%20Romagna!5e0!3m2!1sit!2sit!4v1234567890123"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />



              {/* Map Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Logistics */}
          <div className="lg:col-span-1">
            {/* Contact Form */}
            <div className="mb-8">
              <ContactForm />
            </div>
            {/* Contact Info Cards */}
            <div className="grid gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-card border border-[var(--border)] shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--foreground)]">{item.title}</h3>
                        <p className="text-sm text-[var(--muted-foreground)]">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Logistics Cards */}
            <div className="space-y-4">
              <h3 className="font-headline text-xl text-[var(--primary)] mb-4">{t("practicalInformationTitle")}</h3>
              {logistics.map((item, index) => (
                <Card key={index} className="bg-card border border-[var(--border)] shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--foreground)] mb-1">{item.title}</h4>
                        <p className="text-sm text-[var(--muted-foreground)]">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
