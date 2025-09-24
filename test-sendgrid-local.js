// Test SendGrid in locale
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

// Carica variabili d'ambiente
dotenv.config();

// Configura SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

async function testSendGrid() {
  console.log('🧪 Test SendGrid in locale...');
  
  // Verifica configurazione
  if (!process.env.SENDGRID_API_KEY) {
    console.error('❌ SENDGRID_API_KEY non configurato');
    console.log('💡 Aggiungi SENDGRID_API_KEY nel file .env');
    return;
  }
  
  if (!process.env.SENDGRID_FROM_EMAIL) {
    console.error('❌ SENDGRID_FROM_EMAIL non configurato');
    console.log('💡 Aggiungi SENDGRID_FROM_EMAIL nel file .env');
    return;
  }
  
  if (!process.env.SENDGRID_TO_EMAIL) {
    console.error('❌ SENDGRID_TO_EMAIL non configurato');
    console.log('💡 Aggiungi SENDGRID_TO_EMAIL nel file .env');
    return;
  }

  console.log('✅ Configurazione trovata:');
  console.log('   FROM:', process.env.SENDGRID_FROM_EMAIL);
  console.log('   TO:', process.env.SENDGRID_TO_EMAIL);

  try {
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: 'Test SendGrid - Lagotto Truffle Week',
      text: `
Ciao Rosario!

Questo è un test di SendGrid dal tuo sito Lagotto Truffle Week.

Se ricevi questa email, significa che SendGrid è configurato correttamente!

Dati del test:
- Nome: Test User
- Email: test@example.com
- Messaggio: Test di configurazione SendGrid

Cordiali saluti,
Sistema automatico
      `,
      html: `
        <h2>Test SendGrid - Lagotto Truffle Week</h2>
        <p>Ciao Rosario!</p>
        <p>Questo è un test di SendGrid dal tuo sito <strong>Lagotto Truffle Week</strong>.</p>
        <p>Se ricevi questa email, significa che SendGrid è configurato correttamente!</p>
        
        <h3>Dati del test:</h3>
        <ul>
          <li><strong>Nome:</strong> Test User</li>
          <li><strong>Email:</strong> test@example.com</li>
          <li><strong>Messaggio:</strong> Test di configurazione SendGrid</li>
        </ul>
        
        <p>Cordiali saluti,<br>Sistema automatico</p>
      `,
    };

    console.log('📧 Invio email di test...');
    await sgMail.send(msg);
    console.log('✅ Email inviata con successo!');
    console.log('📬 Controlla la tua casella email');
    
  } catch (error) {
    console.error('❌ Errore durante l\'invio:', error);
    if (error.response) {
      console.error('Dettagli errore:', error.response.body);
    }
  }
}

testSendGrid();
