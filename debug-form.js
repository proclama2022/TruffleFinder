// Script per verificare i campi del form
console.log('=== VERIFICA CAMPI FORM ===');

// Trova tutti i campi input e textarea
const formFields = document.querySelectorAll('input, textarea');
console.log('Numero totale di campi:', formFields.length);

// Controlla ogni campo
formFields.forEach((field, index) => {
  const isVisible = field.offsetParent !== null;
  const computedStyle = window.getComputedStyle(field);
  
  console.log(`Campo ${index + 1}:`);
  console.log('  ID:', field.id);
  console.log('  Placeholder:', field.placeholder);
  console.log('  Visibile:', isVisible);
  console.log('  Display:', computedStyle.display);
  console.log('  Visibility:', computedStyle.visibility);
  console.log('  Opacity:', computedStyle.opacity);
  console.log('  ---');
});

// Controlla specificamente i campi che dovrebbero esserci
const expectedFields = ['name', 'surname', 'email', 'phone', 'dogName', 'message'];
expectedFields.forEach(fieldId => {
  const field = document.getElementById(fieldId);
  if (field) {
    console.log(`✓ Campo ${fieldId} trovato`);
  } else {
    console.log(`✗ Campo ${fieldId} NON trovato`);
  }
});

console.log('=== FINE VERIFICA ===');