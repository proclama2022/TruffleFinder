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
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 dark:text-white mb-8">
            {t("contactTitle")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("contactDescription")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glassmorphism rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-amber-900 dark:text-white mb-6">
                {t("eventInformation")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-white mb-1">
                      {t("location")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Portico di Romagna - Al Vecchio Convento
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-calendar text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-white mb-1">
                      {t("dates")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">15-19 Ottobre 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-white mb-1">
                      {t("phone")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Nicoletta: +39 334 750 0887
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@lagottotruffleweek.it
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-globe text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-white mb-1">Website</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      www.lagottotruffleweek.it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-amber-900 dark:text-white mb-6">
              {t("sendMessage")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-amber-900 dark:text-white">
                    {t("name")}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={t("yourName")}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="surname" className="text-amber-900 dark:text-white">
                    {t("surname")}
                  </Label>
                  <Input
                    id="surname"
                    type="text"
                    required
                    value={formData.surname}
                    onChange={(e) => handleInputChange("surname", e.target.value)}
                    placeholder={t("yourSurname")}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-amber-900 dark:text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder={t("yourEmail")}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-amber-900 dark:text-white">
                  {t("phone")}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder={t("yourPhone")}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="dogName" className="text-amber-900 dark:text-white">
                  {t("dogName")}
                </Label>
                <Input
                  id="dogName"
                  type="text"
                  value={formData.dogName}
                  onChange={(e) => handleInputChange("dogName", e.target.value)}
                  placeholder={t("yourDogName")}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-amber-900 dark:text-white">
                  {t("message")}
                </Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder={t("tellUsAbout")}
                  rows={5}
                  className="mt-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full gradient-bg text-white font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                {contactMutation.isPending ? (
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                ) : (
                  <i className="fas fa-paper-plane mr-2"></i>
                )}
                {t("sendMessageBtn")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
