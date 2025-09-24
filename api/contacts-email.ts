import { z } from "zod";
import nodemailer from 'nodemailer';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Schema inline per evitare problemi di import su Vercel
const insertContactSchema = z.object({
  name: z.string().min(1),
  surname: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  dog_name: z.string().optional(),
  message: z.string().min(1),
});

// Configura Nodemailer con mail.proclama.co SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "mail.proclama.co",
  port: parseInt(process.env.EMAIL_PORT || "465"),
  secure: process.env.EMAIL_SECURE === 'true', // true per 465 (SSL)
  auth: {
    user: process.env.EMAIL_USER || "test@proclama.co",
    pass: process.env.EMAIL_PASS || "Bianchetto2024!",
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

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

    // Verifica configurazione email
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Configurazione email mancante");
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

    const emailTo = process.env.EMAIL_TO || process.env.EMAIL_USER;
    if (!emailTo) {
      const errorMsg = "Nessun destinatario email configurato. Imposta EMAIL_TO o EMAIL_USER.";
      console.error(errorMsg);
      return res.status(500).json({ message: errorMsg });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: emailTo,
      subject: `Nuovo contatto da ${contact.name} - Lagotto Truffle Week`,
      text: textContent,
      html: htmlContent,
    });

    console.log("Email inviata con successo");
    return res.status(200).json({
      success: true,
      message: "Messaggio inviato con successo"
    });
  } catch (error) {
    console.error("Errore API:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Dati inviati non validi", errors: error.errors });
    }

    // Gestione errori SMTP
    if (error instanceof Error) {
      if (error.message.includes('ECONNREFUSED') || error.message.includes('ENOTFOUND')) {
        return res.status(500).json({
          message: "Errore connessione SMTP. Verifica EMAIL_HOST e EMAIL_PORT.",
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