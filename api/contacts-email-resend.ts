import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from "zod";

// Schema per validazione
const insertContactSchema = z.object({
  name: z.string().min(1),
  surname: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  dog_name: z.string().optional(),
  message: z.string().min(1),
});

// Inizializza Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Abilita CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const body = req.body;

    if (!body) {
      return res.status(400).json({ message: "Body mancante" });
    }

    const contact = insertContactSchema.parse(body);

    // Verifica configurazione Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY non configurata");
      return res.status(500).json({ message: "Configurazione email non trovata" });
    }

    console.log("Invio email per contatto:", contact.name);

    // Email HTML formattata
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #d97706; margin-bottom: 20px; text-align: center;">Nuovo Contatto - Lagotto Truffle Week</h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Dettagli Contatto</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 120px;">Nome:</td>
                <td style="padding: 8px 0; color: #374151;">${contact.name} ${contact.surname || ''}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0; color: #374151;">${contact.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Telefono:</td>
                <td style="padding: 8px 0; color: #374151;">${contact.phone || 'Non fornito'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Nome Cane:</td>
                <td style="padding: 8px 0; color: #374151;">${contact.dog_name || 'Non fornito'}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Messaggio</h3>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; border-left: 4px solid #d97706;">
              ${contact.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">

          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            Inviato dal sito Lagotto Truffle Week - ${new Date().toLocaleString('it-IT')}
          </p>
        </div>
      </div>
    `;

    const textContent = `
Nuovo Contatto - Lagotto Truffle Week

Nome: ${contact.name} ${contact.surname || ''}
Email: ${contact.email}
Telefono: ${contact.phone || 'Non fornito'}
Nome Cane: ${contact.dog_name || 'Non fornito'}

Messaggio:
${contact.message}

Inviato dal sito Lagotto Truffle Week - ${new Date().toLocaleString('it-IT')}
    `;

    const emailTo = process.env.EMAIL_TO || process.env.RESEND_EMAIL_FROM;
    if (!emailTo) {
      const errorMsg = "Nessun destinatario email configurato. Imposta EMAIL_TO o RESEND_EMAIL_FROM.";
      console.error(errorMsg);
      return res.status(500).json({ message: errorMsg });
    }

    // Invia email con Resend
    const emailResponse = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM || 'Lagotto Truffle Week <noreply@lagottotruffleweek.it>',
      to: [emailTo],
      subject: `Nuovo contatto da ${contact.name} - Lagotto Truffle Week`,
      text: textContent,
      html: htmlContent,
    });

    console.log("Email inviata con successo:", emailResponse.data?.id);
    return res.status(200).json({
      success: true,
      message: "Messaggio inviato con successo",
      emailId: emailResponse.data?.id
    });

  } catch (error) {
    console.error("Errore API:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Dati inviati non validi", errors: error.errors });
    }

    // Gestione errori Resend
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return res.status(500).json({
          message: "Errore configurazione email. Verifica RESEND_API_KEY.",
          error: error.message
        });
      }
    }

    const errorMessage = error instanceof Error ? error.message : "Errore sconosciuto";
    return res.status(500).json({
      message: "Errore interno del server durante l'invio dell'email.",
      error: errorMessage
    });
  }
}