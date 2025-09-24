import { insertContactSchema } from "../shared/schema";
import { z } from "zod";
import nodemailer from 'nodemailer';

// Configurazione nodemailer per Vercel
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App Password di Gmail
    },
  });
};

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

    const transporter = createTransporter();

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

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Email di destinazione
      subject: `Nuovo contatto da ${contact.name} - Lagotto Truffle Week`,
      text: textContent,
      html: htmlContent,
    });

    console.log("Email inviata con successo");
    return res.status(200).json({ 
      success: true, 
      message: "Messaggio inviato con successo"
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      console.error("Errore validazione:", error.errors);
      return res.status(400).json({ message: "Dati non validi", errors: error.errors });
    }
    console.error("Errore invio email:", error);
    return res.status(500).json({ 
      message: "Errore durante l'invio dell'email", 
      error: error.message,
      success: false 
    });
  }
}