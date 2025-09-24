import React from "react";
import { Card, CardContent } from "./ui/card";
import { MapPin, Phone, Mail, Calendar, Clock, Car, Bed, Package } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function UnifiedContactSection() {
  const locationData = {
    address: "Portico di Romagna, Al Vecchio Convento",
    coordinates: { lat: 44.0612, lng: 11.8657 },
    phone: "+39 334 750 0887",
    email: "info@lagottotruffleweek.it",
    dates: "15-19 October 2025"
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: locationData.address,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: locationData.phone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      value: locationData.email,
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Mail,
      title: "Contact Person",
      value: "nico.conte76543@gmail.com",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Calendar,
      title: "Dates",
      value: locationData.dates,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const logistics = [
    {
      icon: Car,
      title: "Come Arrivare",
      description: "Dall'autostrada A14 uscita Cesena, SS9 verso Portico (30 min)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bed,
      title: "Dove Dormire",
      description: "Hotel e agriturismi consigliati nelle vicinanze",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Package,
      title: "Cosa Portare",
      description: "Scarpe comode, abbigliamento a strati, guinzaglio e museruola",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-800 dark:text-white tracking-wide mb-4">
            Location & Contact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our venue and get in touch for an unforgettable experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Map Section */}
          <div className="lg:col-span-1">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
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
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
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
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Logistics Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Practical Information</h3>
              {logistics.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
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
