import { z } from "zod";
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Schema inline
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
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
    console.log("Body ricevuto:", req.body);
    
    const contact = contactSchema.parse(req.body);
    
    console.log("Contatto validato:", contact);

    // Simula invio email (senza SendGrid per ora)
    return res.status(200).json({ 
      success: true, 
      message: "Messaggio ricevuto correttamente",
      data: contact
    });
  } catch (error) {
    console.error("Errore:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Dati non validi", 
        errors: error.errors 
      });
    }

    return res.status(500).json({ 
      message: "Errore server", 
      error: error instanceof Error ? error.message : "Errore sconosciuto"
    });
  }
}
