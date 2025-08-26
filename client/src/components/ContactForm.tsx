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
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { t } = useLanguage();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Messaggio inviato con successo!');
        form.reset();
      } else {
        const errorData = await response.json();
        alert(`Errore nell'invio del messaggio: ${errorData.message || response.statusText}`);
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
          <div>
            <Label htmlFor="name" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('contactFormNameLabel')}</Label>
            <Input
              id="name"
              type="text"
              {...form.register('name')}
              className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('contactFormEmailLabel')}</Label>
            <Input
              id="email"
              type="email"
              {...form.register('email')}
              className="mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="message" className="text-lg font-body text-gray-700 dark:text-gray-300">{t('contactFormMessageLabel')}</Label>
            <Textarea
              id="message"
              {...form.register('message')}
              rows={5}
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