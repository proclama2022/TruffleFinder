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
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    console.log("=== WEBHOOK REQUEST START ===");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    const payload = req.body;

    if (!payload) {
      console.error("Payload mancante");
      return res.status(400).json({ error: "Payload mancante" });
    }

    // Normalizza i dati per lo schema (dogName -> dog_name)
    const normalizedPayload = {
      ...payload,
      dog_name: payload.dogName || payload.dog_name || '',
    };
    delete normalizedPayload.dogName;

    console.log("Normalized payload:", normalizedPayload);

    // Valida i dati usando lo schema esistente
    const contact = insertContactSchema.parse(normalizedPayload);
    console.log("Validated contact:", contact);

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("MAKE_WEBHOOK_URL non configurato");
      console.error("Available env vars:", Object.keys(process.env).filter(key => key.includes('WEBHOOK') || key.includes('MAKE')));
      return res.status(500).json({ error: "Configurazione webhook mancante" });
    }

    console.log("Invio webhook a:", webhookUrl);
    console.log("Payload completo:", JSON.stringify(contact, null, 2));

    try {
      // Configura timeout di 15 secondi
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "TruffleFinder-Webhook/1.0"
        },
        body: JSON.stringify(contact),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

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

        console.log("=== WEBHOOK REQUEST SUCCESS ===");
        return res.status(200).json({
          message: "Webhook inviato con successo",
          data
        });
      } else {
        // Errore dal webhook - restituisci un errore strutturato
        console.error("=== WEBHOOK REQUEST FAILED ===");
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
      console.error("=== WEBHOOK NETWORK ERROR ===");
      console.error("Errore di rete nel webhook:", fetchError);
      console.error("Error details:", {
        name: fetchError.name,
        message: fetchError.message,
        stack: fetchError.stack,
        code: fetchError.code
      });

      return res.status(503).json({
        error: "Errore di connessione al webhook",
        details: fetchError.message
      });
    }
  } catch (error: any) {
    console.error("=== WEBHOOK VALIDATION ERROR ===");
    if (error instanceof z.ZodError) {
      console.error("Errore validazione:", error.errors);
      return res.status(400).json({
        error: "Dati non validi",
        details: error.errors
      });
    }

    console.error("Errore interno:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack
    });

    return res.status(500).json({
      error: "Errore interno del server",
      details: error instanceof Error ? error.message : String(error)
    });
  }
}