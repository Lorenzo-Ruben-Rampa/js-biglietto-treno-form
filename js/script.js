// Intercettare il form
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
event.preventDefault();
});

// Seleziono elementi input
const nomeiniziale = document.getElementById('name');
const distanzaInput = document.getElementById('km');
const etaInput = document.getElementById('age');

// Seleziono elementi output
const returnName = document.getElementById('outputNome');
const ticketOffer = document.getElementById('outputOffer');
const Carrozza = document.getElementById('outputCarrozza');
const CPCode = document.getElementById('outputCPCode');
const datoPrezzoFinale = document.getElementById('outputPrezzo');

// Converto i valori degli input in numeri
const distanza = parseInt(distanzaInput.value);
const eta = parseInt(etaInput.value);

// prezzo
const prezzoBase = distanzaInput *0.21;
let sconto = 0;

// Condizioni sconto
if (eta<18) {
   sconto = prezzoBase * 0.20;
} else if(eta > 65) {
   sconto = prezzoBase * 0.40;
} 

// Prezzo finale
let prezzoFinale = prezzoBase - sconto;
console.log(prezzoFinale.toFixed(2));

// Stampo il risultato finale negli output
datoPrezzoFinale.innerHTML = `€${prezzoFinale.toFixed(2)}`;


// TENTATIVI PRECEDENTI FALLITI
// function capitalizeFirstLetter(nomeiniziale) {
//    return nomeiniziale.charAt(0).toUpperCase() + nomeiniziale.slice(1);
// }
// const nomeFormat = capitalizeFirstLetter(nomeiniziale);
// console.log(nomeFormat);

// function aggiungiAllaTabella() {
//    let ritornaNome = nomeDecimale.value;

//    if(ritornaNome) {
//       const ritornaNomeTab = document.getElementById('prova');
//       prova = ritornaNome;
//    }
// }
// document.getElementById('name').addEventListener('input', aggiungiAllaTabella); 
// field.addEventListener('input', () => {
//    const name = field.charAt(0).toUpperCase().value;
//    console.log(name);
//    ritornaNome.innerText = name;
// });

//Inserisco i risultati nel secondo container
// function setValues(value){
//    let nome = document.getElementById("name").value;
//    document.getElementById("prova").value = nome;
//    }

// console.log(setValues);

// const nomePasseggero = document.querySelector('td.outputName')
// nomePasseggero.innerHTML += '<p></p>';
// nomePasseggero.append(name);

