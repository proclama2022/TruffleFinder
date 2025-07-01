import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  dogName: string;
  message: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    dogName: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("messageSent"),
        description: "Grazie per averci contattato! Ti risponderemo presto.",
      });
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        dogName: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: t("errorOccurred"),
        description: "Si è verificato un errore durante l'invio del messaggio.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 px-4 py-2 rounded-full mb-6">
            <i className="fas fa-paper-plane text-orange-600 dark:text-orange-400"></i>
            <span className="text-orange-700 dark:text-orange-300 text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("contactDescription")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Event Details
              </h3>

              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {t("location")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Portico di Romagna<br />Al Vecchio Convento
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-calendar text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {t("dates")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">15-19 October 2025</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Contact
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Nicoletta: +39 334 750 0887
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        info@lagottotruffleweek.it
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Activities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">50+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Guests</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {t("name")} *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={t("yourName")}
                    className="h-12 rounded-xl border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="surname" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {t("surname")} *
                  </Label>
                  <Input
                    id="surname"
                    type="text"
                    required
                    value={formData.surname}
                    onChange={(e) => handleInputChange("surname", e.target.value)}
                    placeholder={t("yourSurname")}
                    className="h-12 rounded-xl border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder={t("yourEmail")}
                  className="h-12 rounded-xl border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {t("phone")}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder={t("yourPhone")}
                    className="h-12 rounded-xl border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dogName" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {t("dogName")}
                  </Label>
                  <Input
                    id="dogName"
                    type="text"
                    value={formData.dogName}
                    onChange={(e) => handleInputChange("dogName", e.target.value)}
                    placeholder={t("yourDogName")}
                    className="h-12 rounded-xl border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  {t("message")} *
                </Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder={t("tellUsAbout")}
                  rows={5}
                  className="rounded-xl border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 resize-none transition-colors"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full h-14 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                <div className="flex items-center justify-center space-x-2">
                  {contactMutation.isPending ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fas fa-paper-plane"></i>
                  )}
                  <span>{t("sendMessageBtn")}</span>
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
