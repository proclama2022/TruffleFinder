import React from 'react';
import { Card, CardContent } from './ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useLanguage } from '../hooks/use-language';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  surname: z.string().min(2, { message: 'Surname must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().optional(),
  dogName: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { t, currentTranslations } = useLanguage();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      dogName: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      // Usa l'endpoint send-webhook che gestisce meglio le risposte
      const response = await fetch('/api/send-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          surname: values.surname,
          email: values.email,
          phone: values.phone || '',
          dog_name: values.dogName || '',
          message: values.message
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Messaggio inviato con successo!');
        form.reset();
      } else {
        const errorData = await response.json();
        console.error('Errore API:', errorData);
        alert(`Errore nell'invio del messaggio: ${errorData.error || errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Errore durante l\'invio del modulo:', error);
      alert('Si è verificato un errore inaspettato. Riprova più tardi.');
    }
  };

  return (
    <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
      <CardContent>
        <h3 className="text-3xl font-headline text-gray-800 dark:text-white mb-6 text-center">{t('contactFormTitle')}</h3>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name + Surname */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('contactFormNameLabel')}</Label>
              <Input
                id="name"
                type="text"
                placeholder={currentTranslations.formPlaceholders.yourName}
                {...form.register('name')}
                className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="surname" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('surname')}</Label>
              <Input
                id="surname"
                type="text"
                placeholder={currentTranslations.formPlaceholders.yourSurname}
                {...form.register('surname')}
                className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              {form.formState.errors.surname && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.surname.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('contactFormEmailLabel')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={currentTranslations.formPlaceholders.yourEmail}
              {...form.register('email')}
              className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          {/* Phone + Dog Name (optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('phone')}</Label>
              <Input
                id="phone"
                type="tel"
                placeholder={currentTranslations.formPlaceholders.yourPhone}
                {...form.register('phone')}
                className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <Label htmlFor="dogName" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('dogName')}</Label>
              <Input
                id="dogName"
                type="text"
                placeholder={currentTranslations.formPlaceholders.yourDogName}
                {...form.register('dogName')}
                className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('contactFormMessageLabel')}</Label>
            <Textarea
              id="message"
              {...form.register('message')}
              rows={5}
              placeholder={currentTranslations.formPlaceholders.tellUsAbout}
              className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            {form.formState.errors.message && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
          >
            {t('contactFormSubmitButton')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}