import { insertContactSchema } from "../shared/schema";
import { z } from "zod";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const rawBody = req.body ?? {};
    const body = typeof rawBody === "string" ? JSON.parse(rawBody) : rawBody;

    const contact = insertContactSchema.parse(body);

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      return res.status(500).json({ message: "MAKE_WEBHOOK_URL non configurato" });
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      return res.status(502).json({ message: `Webhook Make ha risposto ${response.status}` });
    }

    return res.status(200).json({ success: true, message: "Messaggio inviato" });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Dati non validi", errors: error.errors });
    }
    console.error("Errore webhook Make:", error);
    return res.status(500).json({ message: "Errore interno" });
  }
}


