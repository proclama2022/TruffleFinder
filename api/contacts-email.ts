import { insertContactSchema } from "../shared/schema";
import { z } from "zod";
import nodemailer from 'nodemailer';

// Configura il trasportatore Nodemailer
const transporter = nodemailer.createTransport({
  host: "mail.proclama.co",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Il tuo indirizzo email
    pass: process.env.EMAIL_PASS, // La tua password
  },
});

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

    // Verifica configurazione email
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Configurazione email mancante");
      return res.status(500).json({ message: "Configurazione email non trovata" });
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

    const emailTo = process.env.EMAIL_TO || process.env.EMAIL_USER;
    if (!emailTo) {
      const errorMsg = "Nessun destinatario email configurato. Imposta EMAIL_TO o EMAIL_USER.";
      console.error(errorMsg);
      return res.status(500).json({ message: errorMsg });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: emailTo, // Nodemailer gestisce stringhe con virgole
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

    // Assicura che la risposta sia sempre JSON
    const errorMessage = error instanceof Error ? error.message : "Errore sconosciuto";
    return res.status(500).json({ 
      message: "Errore interno del server durante l'invio dell'email.", 
      error: errorMessage 
    });
  }
}