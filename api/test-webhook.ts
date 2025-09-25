import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Abilita CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Dati di test per il webhook
  const testData = {
    name: 'Test',
    surname: 'User',
    email: 'test@example.com',
    phone: '+39 123 456 7890',
    dogName: 'Test Dog',
    message: 'Questo è un messaggio di test per verificare la configurazione del webhook.',
    testTimestamp: new Date().toISOString()
  };

  const testResults = {
    timestamp: new Date().toISOString(),
    method: req.method,
    endpoint: '/api/test-webhook',
    tests: [] as Array<{
      name: string;
      status: 'success' | 'error' | 'warning';
      message: string;
      details?: any;
    }>,
    environment: {} as Record<string, string | undefined>,
    webhookTest: {} as any
  };

  try {
    // Test 1: Verifica environment variables
    testResults.environment = {
      MAKE_WEBHOOK_URL: process.env.MAKE_WEBHOOK_URL ? '***CONFIGURED***' : 'NOT SET',
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV,
      VERCEL_URL: process.env.VERCEL_URL,
      PORT: process.env.PORT
    };

    if (!process.env.MAKE_WEBHOOK_URL) {
      testResults.tests.push({
        name: 'Environment Configuration',
        status: 'error',
        message: 'MAKE_WEBHOOK_URL non configurato nelle environment variables',
        details: {
          availableEnvVars: Object.keys(process.env).filter(key =>
            key.includes('MAKE') || key.includes('WEBHOOK') || key.includes('VERCEL')
          )
        }
      });
    } else {
      testResults.tests.push({
        name: 'Environment Configuration',
        status: 'success',
        message: 'MAKE_WEBHOOK_URL è configurato',
        details: {
          urlLength: process.env.MAKE_WEBHOOK_URL.length,
          urlType: process.env.MAKE_WEBHOOK_URL.startsWith('https') ? 'HTTPS' : 'HTTP',
          domain: new URL(process.env.MAKE_WEBHOOK_URL).hostname
        }
      });
    }

    // Test 2: Validazione schema
    try {
      const validatedData = insertContactSchema.parse(testData);
      testResults.tests.push({
        name: 'Schema Validation',
        status: 'success',
        message: 'Schema validation passato con successo',
        details: validatedData
      });
    } catch (validationError: any) {
      testResults.tests.push({
        name: 'Schema Validation',
        status: 'error',
        message: 'Schema validation fallito',
        details: validationError.errors || validationError.message
      });
    }

    // Test 3: Webhook call (solo se MAKE_WEBHOOK_URL è configurato)
    if (process.env.MAKE_WEBHOOK_URL) {
      try {
        const webhookUrl = process.env.MAKE_WEBHOOK_URL;
        console.log('Test webhook call to:', webhookUrl);
        console.log('Test payload:', testData);

        const startTime = Date.now();
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'TruffleFinder-Test/1.0',
            'X-Test-Request': 'true'
          },
          body: JSON.stringify({
            ...testData,
            testMode: true,
            testEndpoint: '/api/test-webhook'
          })
        });
        const endTime = Date.now();

        const responseText = await response.text();
        const responseTime = endTime - startTime;

        testResults.webhookTest = {
          url: webhookUrl,
          method: 'POST',
          status: response.status,
          statusText: response.statusText,
          responseTime: `${responseTime}ms`,
          requestHeaders: {
            'Content-Type': 'application/json',
            'User-Agent': 'TruffleFinder-Test/1.0',
            'X-Test-Request': 'true'
          },
          requestBody: testData,
          responseHeaders: Object.fromEntries(response.headers.entries()),
          responseBody: responseText
        };

        if (response.ok) {
          let parsedResponse;
          try {
            parsedResponse = JSON.parse(responseText);
          } catch {
            parsedResponse = { rawResponse: responseText };
          }

          testResults.tests.push({
            name: 'Webhook Call',
            status: 'success',
            message: `Webhook inviato con successo (${response.status}) in ${responseTime}ms`,
            details: {
              response: parsedResponse,
              responseTime
            }
          });
        } else {
          testResults.tests.push({
            name: 'Webhook Call',
            status: 'error',
            message: `Webhook fallito con status ${response.status}: ${response.statusText}`,
            details: {
              status: response.status,
              statusText: response.statusText,
              body: responseText,
              responseTime
            }
          });
        }
      } catch (fetchError: any) {
        testResults.tests.push({
          name: 'Webhook Call',
          status: 'error',
          message: `Errore di connessione al webhook: ${fetchError.message}`,
          details: {
            error: fetchError.message,
            stack: fetchError.stack,
            code: fetchError.code,
            errno: fetchError.errno
          }
        });
      }
    } else {
      testResults.tests.push({
        name: 'Webhook Call',
        status: 'warning',
        message: 'Webhook test saltato - MAKE_WEBHOOK_URL non configurato'
      });
    }

    // Test 4: Validazione URL (se configurato)
    if (process.env.MAKE_WEBHOOK_URL) {
      try {
        const url = new URL(process.env.MAKE_WEBHOOK_URL);
        testResults.tests.push({
          name: 'URL Validation',
          status: 'success',
          message: 'URL formato valido',
          details: {
            protocol: url.protocol,
            hostname: url.hostname,
            pathname: url.pathname,
            search: url.search,
            hash: url.hash
          }
        });
      } catch (urlError: any) {
        testResults.tests.push({
          name: 'URL Validation',
          status: 'error',
          message: `URL non valido: ${urlError.message}`,
          details: { url: process.env.MAKE_WEBHOOK_URL }
        });
      }
    }

    // Test 5: Check HTTPS (se configurato)
    if (process.env.MAKE_WEBHOOK_URL) {
      const isHttps = process.env.MAKE_WEBHOOK_URL.startsWith('https://');
      testResults.tests.push({
        name: 'HTTPS Check',
        status: isHttps ? 'success' : 'warning',
        message: isHttps ? 'URL usa HTTPS' : 'URL non usa HTTPS (potrebbe essere un problema di sicurezza)',
        details: { usesHttps: isHttps }
      });
    }

    // Calcola lo stato complessivo
    const overallStatus = testResults.tests.every(test => test.status === 'success') ? 'success' :
                         testResults.tests.some(test => test.status === 'error') ? 'error' : 'warning';

    // Log dei risultati
    console.log('Webhook test results:', {
      overallStatus,
      testsCount: testResults.tests.length,
      successCount: testResults.tests.filter(t => t.status === 'success').length,
      errorCount: testResults.tests.filter(t => t.status === 'error').length,
      warningCount: testResults.tests.filter(t => t.status === 'warning').length
    });

    return res.status(200).json({
      success: overallStatus !== 'error',
      status: overallStatus,
      summary: {
        totalTests: testResults.tests.length,
        passed: testResults.tests.filter(t => t.status === 'success').length,
        errors: testResults.tests.filter(t => t.status === 'error').length,
        warnings: testResults.tests.filter(t => t.status === 'warning').length
      },
      ...testResults
    });

  } catch (error: any) {
    console.error('Errore nel test webhook:', error);
    return res.status(500).json({
      success: false,
      status: 'error',
      error: 'Errore interno durante il test del webhook',
      details: {
        message: error.message,
        stack: error.stack,
        type: error.constructor.name
      },
      timestamp: new Date().toISOString()
    });
  }
}