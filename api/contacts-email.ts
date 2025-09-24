import { insertContactSchema } from "../shared/schema";
import { z } from "zod";
import sgMail from '@sendgrid/mail';

// Configura SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req: any, res: any) {
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

    // Verifica configurazione SendGrid
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY non configurato");
      return res.status(500).json({ message: "Configurazione SendGrid non trovata" });
    }

    console.log("Invio email per contatto:", contact.name);

    // Email HTML formattata
    const htmlContent = `
      <h2>Nuovo Contatto - Lagotto Truffle Week</h2>
      <p><strong>Nome:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Telefono:</strong> ${contact.phone || 'Non fornito'}</p>
      <p><strong>Messaggio:</strong></p>
      <p>${contact.message}</p>
      <hr>
      <p><small>Inviato dal sito Lagotto Truffle Week</small></p>
    `;

    const textContent = `
Nuovo Contatto - Lagotto Truffle Week

Nome: ${contact.name}
Email: ${contact.email}
Telefono: ${contact.phone || 'Non fornito'}
Messaggio: ${contact.message}

Inviato dal sito Lagotto Truffle Week
    `;

    const emailTo = process.env.SENDGRID_TO_EMAIL || process.env.SENDGRID_FROM_EMAIL;
    if (!emailTo) {
      const errorMsg = "Nessun destinatario email configurato. Imposta SENDGRID_TO_EMAIL.";
      console.error(errorMsg);
      return res.status(500).json({ message: errorMsg });
    }

    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    if (!fromEmail) {
      const errorMsg = "Email mittente non configurata. Imposta SENDGRID_FROM_EMAIL.";
      console.error(errorMsg);
      return res.status(500).json({ message: errorMsg });
    }

    const msg = {
      to: emailTo,
      from: fromEmail,
      subject: `Nuovo contatto da ${contact.name} - Lagotto Truffle Week`,
      text: textContent,
      html: htmlContent,
    };

    await sgMail.send(msg);

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

    // Assicura che la risposta sia sempre JSON
    const errorMessage = error instanceof Error ? error.message : "Errore sconosciuto";
    return res.status(500).json({ 
      message: "Errore interno del server durante l'invio dell'email.", 
      error: errorMessage 
    });
  }
}