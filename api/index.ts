import { type VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Abilita CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    // Estrai il path dalla URL
    const url = req.url || '';
    const path = url.split('/api/')[1] || '';

    console.log(`API Request: ${req.method} ${path}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);

    // Simple routing
    if (path === 'send-webhook' && req.method === 'POST') {
      return await handleSendWebhook(req, res);
    } else if (path === 'test-webhook' && req.method === 'GET') {
      return await handleTestWebhook(req, res);
    } else if (path === 'contacts' && req.method === 'POST') {
      return await handleContacts(req, res);
    } else {
      return res.status(404).json({ error: 'Endpoint not found', path });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}

async function handleSendWebhook(req: VercelRequest, res: VercelResponse) {
  try {
    console.log('=== SEND WEBHOOK START ===');

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('MAKE_WEBHOOK_URL not configured');
      return res.status(500).json({
        error: 'Configuration error',
        message: 'Webhook URL not configured'
      });
    }

    // Prepara i dati
    const payload = {
      name: req.body?.name || '',
      surname: req.body?.surname || '',
      email: req.body?.email || '',
      phone: req.body?.phone || '',
      dog_name: req.body?.dogName || req.body?.dog_name || '',
      message: req.body?.message || ''
    };

    console.log('Normalized payload:', payload);

    // Invia al webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'TruffleFinder-Webhook/1.0'
      },
      body: JSON.stringify(payload)
    });

    console.log('Webhook response status:', response.status);

    const responseText = await response.text();
    console.log('Webhook response:', responseText);

    if (response.ok) {
      return res.status(200).json({
        success: true,
        message: 'Webhook sent successfully',
        response: responseText
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Webhook failed',
        status: response.status,
        response: responseText
      });
    }

  } catch (error) {
    console.error('Send webhook error:', error);
    return res.status(500).json({
      success: false,
      error: 'Webhook connection error',
      details: error.message
    });
  }
}

async function handleTestWebhook(req: VercelRequest, res: VercelResponse) {
  try {
    console.log('=== TEST WEBHOOK START ===');

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    const results = {
      environment: {
        MAKE_WEBHOOK_URL: webhookUrl ? 'configured' : 'missing'
      },
      webhookTest: {},
      overall: 'pending'
    };

    if (!webhookUrl) {
      results.overall = 'failed';
      return res.json(results);
    }

    // Testa il webhook
    try {
      const testData = {
        name: 'Test',
        surname: 'User',
        email: 'test@example.com',
        phone: '+39 123 456 7890',
        dog_name: 'Test Dog',
        message: 'Test message from webhook test'
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'TruffleFinder-Test/1.0'
        },
        body: JSON.stringify(testData)
      });

      const responseText = await response.text();

      results.webhookTest = {
        status: response.ok ? 'success' : 'failed',
        statusCode: response.status,
        response: responseText
      };

      results.overall = response.ok ? 'success' : 'failed';

    } catch (error: any) {
      results.webhookTest = {
        status: 'error',
        error: error.message
      };
      results.overall = 'failed';
    }

    return res.json(results);

  } catch (error: any) {
    return res.status(500).json({
      error: 'Test failed',
      details: error.message
    });
  }
}

async function handleContacts(req: VercelRequest, res: VercelResponse) {
  try {
    console.log('=== CONTACTS START ===');

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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    if (response.ok) {
      return res.json({
        success: true,
        message: 'Message sent successfully'
      });
    } else {
      const errorText = await response.text();
      return res.status(500).json({
        success: false,
        error: 'Failed to send message',
        details: errorText
      });
    }

  } catch (error: any) {
    console.error('Contacts error:', error);
    return res.status(500).json({
      success: false,
      error: 'Contact submission failed',
      details: error.message
    });
  }
}