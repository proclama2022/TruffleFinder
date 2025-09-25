import { type VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from "../shared/schema";
import { z } from "zod";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Abilita CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { pathname } = new URL(req.url || '', 'http://localhost');
  const path = pathname.replace('/api', '');

  console.log(`=== API REQUEST: ${req.method} ${path} ===`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);

  try {
    // Route handlers
    switch (path) {
      case '/send-webhook':
        if (req.method !== 'POST') {
          res.setHeader("Allow", "POST");
          return res.status(405).json({ error: "Method Not Allowed" });
        }
        return await handleSendWebhook(req, res);

      case '/test-webhook':
        if (req.method !== 'GET') {
          res.setHeader("Allow", "GET");
          return res.status(405).json({ error: "Method Not Allowed" });
        }
        return await handleTestWebhook(req, res);

      case '/contacts':
        if (req.method === 'POST') {
          return await handleContacts(req, res);
        } else if (req.method === 'GET') {
          return res.status(200).json({ message: "Contacts endpoint - GET not implemented" });
        } else {
          res.setHeader("Allow", "POST, GET");
          return res.status(405).json({ error: "Method Not Allowed" });
        }

      default:
        return res.status(404).json({ error: "Endpoint not found" });
    }
  } catch (error: any) {
    console.error('=== API ERROR ===', error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message
    });
  }
}

async function handleSendWebhook(req: VercelRequest, res: VercelResponse) {
  try {
    console.log("=== WEBHOOK REQUEST START ===");

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

async function handleTestWebhook(req: VercelRequest, res: VercelResponse) {
  try {
    console.log("=== TEST WEBHOOK START ===");

    const results = {
      environment: {},
      webhookTest: {},
      schemaTest: {},
      overall: 'pending'
    };

    // Test environment variables
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    results.environment.MAKE_WEBHOOK_URL = webhookUrl ? 'configured' : 'missing';

    if (!webhookUrl) {
      results.environment.allEnvVars = Object.keys(process.env).filter(key => key.includes('WEBHOOK') || key.includes('MAKE'));
      results.overall = 'failed';
      return res.json(results);
    }

    // Test URL format
    try {
      new URL(webhookUrl);
      results.environment.urlFormat = 'valid';
    } catch {
      results.environment.urlFormat = 'invalid';
      results.overall = 'failed';
      return res.json(results);
    }

    // Test schema validation
    const testData = {
      name: "Test",
      surname: "User",
      email: "test@example.com",
      phone: "+39 123 456 7890",
      dog_name: "Test Dog",
      message: "Questo è un messaggio di test per verificare la configurazione del webhook."
    };

    try {
      const validated = insertContactSchema.parse(testData);
      results.schemaTest.status = 'passed';
      results.schemaTest.data = validated;
    } catch (error: any) {
      results.schemaTest.status = 'failed';
      results.schemaTest.error = error.errors;
      results.overall = 'failed';
      return res.json(results);
    }

    // Test actual webhook call
    try {
      console.log("Testing webhook call to:", webhookUrl);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "TruffleFinder-Test/1.0"
        },
        body: JSON.stringify(testData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const responseText = await response.text();

      results.webhookTest = {
        status: response.ok ? 'success' : 'failed',
        statusCode: response.status,
        statusText: response.statusText,
        response: responseText
      };

      if (response.ok) {
        results.overall = 'success';
        console.log("=== TEST WEBHOOK SUCCESS ===");
      } else {
        results.overall = 'failed';
        console.error("=== TEST WEBHOOK FAILED ===");
      }

    } catch (error: any) {
      results.webhookTest = {
        status: 'error',
        error: error.message,
        details: {
          name: error.name,
          code: error.code
        }
      };
      results.overall = 'failed';
      console.error("=== TEST WEBHOOK ERROR ===");
    }

    res.json(results);

  } catch (error: any) {
    console.error("Test endpoint error:", error);
    res.status(500).json({
      error: "Test endpoint failed",
      details: error.message
    });
  }
}

async function handleContacts(req: VercelRequest, res: VercelResponse) {
  try {
    const contact = insertContactSchema.parse(req.body);

    // Send data to Make.com webhook
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('MAKE_WEBHOOK_URL not configured');
      return res.status(500).json({
        message: "Server configuration error",
        error: "Webhook URL not configured"
      });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error(`Webhook failed with status: ${response.status}, response: ${errorText}`);
      return res.status(500).json({
        message: "Failed to send message",
        error: `Webhook error: ${response.status}`
      });
    }

    res.json({ message: "Message sent successfully", success: true });
  } catch (error) {
    console.error('Contact endpoint error:', error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Invalid contact data",
        errors: error.errors
      });
    } else {
      return res.status(500).json({
        message: "Failed to send message",
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
}