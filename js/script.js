// Intercettare il form
const form = document.querySelector('form');
form.addEventListener('submit', (event) => { //* INIZIO EVENTO SUBMIT *//
event.preventDefault();

// Seleziono elementi input
const nomeiniziale = document.getElementById('name');
const distanzaInput = document.getElementById('km');
const etaInput = document.getElementById('age');

// Seleziono elementi output
const returnName = document.getElementById('outputNome');
const ticketOffer = document.getElementById('outputOffer');
const carrozza = document.getElementById('outputCarrozza');
const cpCode = document.getElementById('outputCPCode');
const datoPrezzoFinale = document.getElementById('outputPrezzo');

// Converto i valori degli input in numeri
const distanza = parseInt(distanzaInput.value);
const eta = parseInt(etaInput.value);
console.log(eta);

// prezzo
const prezzoBase = distanza *0.21;
let sconto = 0;
console.log(prezzoBase);

// Condizioni sconto
if (eta < 18) {
   sconto = prezzoBase * 0.20;
} else if(eta > 65) {
   sconto = prezzoBase * 0.40;
} 

// Prezzo finale
let prezzoFinale = prezzoBase - sconto;
console.log(prezzoFinale.toFixed(2));

// Stampo il risultato finale negli output
datoPrezzoFinale.innerHTML = `€${prezzoFinale.toFixed(2)}`;
}); //* FINE EVENTO SUBMIT */
