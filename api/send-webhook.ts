import { insertContactSchema } from "../shared/schema";
import { z } from "zod";

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
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const payload = req.body;

    if (!payload) {
      return res.status(400).json({ error: "Payload mancante" });
    }

    // Valida i dati usando lo schema esistente
    const contact = insertContactSchema.parse(payload);

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("MAKE_WEBHOOK_URL non configurato");
      return res.status(500).json({ error: "Configurazione webhook mancante" });
    }

    console.log("Invio webhook a:", webhookUrl);
    console.log("Payload:", contact);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "User-Agent": "TruffleFinder-Webhook/1.0"
        },
        body: JSON.stringify(contact),
      });

      console.log("Webhook response status:", response.status);
      console.log("Webhook response headers:", Object.fromEntries(response.headers.entries()));

      // Leggi sempre la risposta come testo per evitare errori di parsing
      const responseText = await response.text();
      console.log("Webhook response body:", responseText);

      if (response.ok) {
        // Successo - prova a parsare come JSON se possibile, altrimenti usa il testo
        let data;
        try {
          data = JSON.parse(responseText);
        } catch {
          data = { message: responseText };
        }
        
        return res.status(200).json({ 
          message: "Webhook inviato con successo", 
          data 
        });
      } else {
        // Errore dal webhook - restituisci un errore strutturato
        console.error("Webhook failed with status:", response.status);
        return res.status(502).json({ 
          error: "Errore nell'invio del webhook",
          details: {
            status: response.status,
            statusText: response.statusText,
            body: responseText
          }
        });
      }
    } catch (fetchError: any) {
      console.error("Errore di rete nel webhook:", fetchError);
      return res.status(503).json({ 
        error: "Errore di connessione al webhook",
        details: fetchError.message
      });
    }
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      console.error("Errore validazione:", error.errors);
      return res.status(400).json({ 
        error: "Dati non validi", 
        details: error.errors 
      });
    }
    
    console.error("Errore interno:", error);
    return res.status(500).json({ 
      error: "Errore interno del server",
      details: error.message
    });
  }
}