import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log('Minimal test API called');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', JSON.stringify(req.headers, null, 2));
    console.log('Environment test:', {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV,
      MAKE_WEBHOOK_URL: process.env.MAKE_WEBHOOK_URL ? '***SET***' : 'NOT_SET'
    });

    return res.status(200).json({
      success: true,
      message: 'Minimal test API working',
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.url,
      environment: {
        nodeVersion: process.version,
        vercelEnv: process.env.VERCEL_ENV,
        webhookConfigured: !!process.env.MAKE_WEBHOOK_URL
      }
    });
  } catch (error) {
    console.error('Minimal test API error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}