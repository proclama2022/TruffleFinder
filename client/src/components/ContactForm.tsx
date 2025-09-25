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
      console.log('=== FORM SUBMISSION START ===');
      console.log('📋 Form values:', values);

      // Prepara i dati per l'invio
      const payload = {
        name: values.name,
        surname: values.surname,
        email: values.email,
        phone: values.phone || '',
        dogName: values.dogName || '',
        message: values.message
      };

      console.log('📤 Payload to send:', JSON.stringify(payload, null, 2));
      console.log('🔗 Endpoint: /api/send-webhook');

      // Usa l'endpoint send-webhook per inviare direttamente a Make.com
      const response = await fetch('/api/send-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

      const responseText = await response.text();
      console.log('📡 Response text:', responseText);

      if (response.ok) {
        let result;
        try {
          result = JSON.parse(responseText);
        } catch (e) {
          result = { rawResponse: responseText };
        }

        console.log('✅ Success response:', result);
        console.log('=== FORM SUBMISSION SUCCESS ===');
        alert('✅ Messaggio inviato con successo!');
        form.reset();
      } else {
        let errorData;
        try {
          errorData = JSON.parse(responseText);
        } catch (e) {
          errorData = { rawResponse: responseText };
        }

        console.error('❌ Errore API:', errorData);
        console.error('❌ Status:', response.status);
        console.error('❌ Status text:', response.statusText);
        console.error('=== FORM SUBMISSION FAILED ===');
        alert(`❌ Errore nell'invio del messaggio: ${errorData.error || errorData.message || response.statusText}\n\nDettagli: ${JSON.stringify(errorData, null, 2)}`);
      }
    } catch (error) {
      console.error('💥 Errore durante l\'invio del modulo:', error);
      console.error('💥 Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      console.error('=== FORM SUBMISSION CRASHED ===');
      alert(`💥 Si è verificato un errore inaspettato: ${error.message}\n\nControlla la console per i dettagli.`);
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

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('phone')}</Label>
            <Input
              id="phone"
              type="tel"
              placeholder={currentTranslations.formPlaceholders.yourPhone}
              {...form.register('phone')}
              className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            {form.formState.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>

          {/* Dog Name */}
          <div>
            <Label htmlFor="dogName" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('dogNameLabel')}</Label>
            <Input
              id="dogName"
              type="text"
              placeholder={currentTranslations.formPlaceholders.dogName}
              {...form.register('dogName')}
              className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            {form.formState.errors.dogName && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.dogName.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('messageLabel')}</Label>
            <Textarea
              id="message"
              placeholder={currentTranslations.formPlaceholders.yourMessage}
              rows={5}
              {...form.register('message')}
              className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            {form.formState.errors.message && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-body text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {t('sendMessageButton')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}