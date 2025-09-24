import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Carica le variabili d'ambiente dal file config.env
dotenv.config({ path: './config.env' });

console.log('🧪 Test invio email...');
console.log('📧 Da:', process.env.EMAIL_USER);
console.log('📬 A:', process.env.EMAIL_TO);

// Configurazione del trasportatore email
const transporter = nodemailer.createTransport({
  host: 'mail.proclama.co',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Opzioni dell'email di test
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
  subject: '🧪 Test Email - TruffleFinder',
  html: `
    <h2>Test Email Funzionante!</h2>
    <p>Questo è un test per verificare che l'invio email funzioni correttamente.</p>
    <p><strong>Server:</strong> mail.proclama.co</p>
    <p><strong>Porta:</strong> 465 (SSL)</p>
    <p><strong>Data:</strong> ${new Date().toLocaleString('it-IT')}</p>
  `,
};

try {
  console.log('📤 Invio email in corso...');
  const info = await transporter.sendMail(mailOptions);
  console.log('✅ Email inviata con successo!');
  console.log('📋 ID Messaggio:', info.messageId);
  console.log('📊 Risposta:', info.response);
} catch (error) {
  console.error('❌ Errore nell\'invio email:');
  console.error('🔍 Dettagli errore:', error.message);
  console.error('📋 Codice errore:', error.code);
  console.error('📋 Stack completo:', error.stack);
}