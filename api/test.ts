import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    return res.status(200).json({ 
      success: true, 
      message: "API Test funziona!",
      method: req.method,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : "Errore sconosciuto"
    });
  }
}
