import { insertContactSchema } from "../shared/schema";
import { z } from "zod";
import type { VercelRequest, VercelResponse } from '@vercel/node';

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

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("MAKE_WEBHOOK_URL non configurato");
      return res.status(500).json({ message: "MAKE_WEBHOOK_URL non configurato" });
    }

    console.log("Invio a Make webhook:", webhookUrl);
    console.log("Dati contatto:", contact);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Errore webhook Make:", response.status, errorText);
      return res.status(502).json({ 
        message: `Webhook Make ha risposto ${response.status}`,
        details: errorText
      });
    }

    console.log("Webhook Make inviato con successo");
    return res.status(200).json({ success: true, message: "Messaggio inviato" });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      console.error("Errore validazione:", error.errors);
      return res.status(400).json({ message: "Dati non validi", errors: error.errors });
    }
    console.error("Errore webhook Make:", error);
    return res.status(500).json({ message: "Errore interno", error: error.message });
  }
}


