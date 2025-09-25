import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Abilita CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Log per debugging
  console.log('=== API REQUEST ===');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Validazione dei dati obbligatori
    const { name, surname, email, message } = req.body || {};

    // Controlla i campi obbligatori
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Name is required and must be at least 2 characters long'
      });
    }

    if (!surname || typeof surname !== 'string' || surname.trim().length < 2) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Surname is required and must be at least 2 characters long'
      });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Valid email address is required'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Message is required and must be at least 10 characters long'
      });
    }

    // Prepara i dati per il webhook
    const webhookData = {
      name: name.trim(),
      surname: surname.trim(),
      email: email.trim(),
      phone: req.body?.phone || '',
      dog_name: req.body?.dogName || req.body?.dog_name || '',
      message: message.trim()
    };

    // Invia al webhook di Make.com
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      return res.status(500).json({
        error: 'Configuration error',
        message: 'Webhook URL not configured'
      });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'TruffleFinder-Webhook/1.0'
      },
      body: JSON.stringify(webhookData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(502).json({
        error: 'Failed to send to webhook',
        details: errorText
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Data sent successfully'
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({
      error: 'Server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}