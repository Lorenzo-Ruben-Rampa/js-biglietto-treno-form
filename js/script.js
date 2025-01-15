const name = document.getElementById("name").value;
const chilometri = parseInt(document.getElementById("km").value);
const age = parseInt(document.getElementById("age").value);
const prezzoBase = chilometri *0.21;
let prezzoFinale = prezzoBase;

// Condizioni sconto
if (age<18) {
   prezzoFinale * 0.80;
} else if(age > 65) {
   prezzoFinale * 0.60;
} 

console.log(prezzoFinale);

//Formatto prezzo finale a decimali
prezzoFinale = prezzoFinale.toFixed(2);

//Inserisco i risultati nel secondo container
const nomePasseggero = document.querySelector('outputName')
nomePasseggero.innerHTML += '<p></p>';
nomePasseggero.append('name');

const datoPrezzoFinale = document.querySelector('outputName')
datoPrezzoFinale.innerHTML += '<p></p>'
datoPrezzoFinale.append('prezzoFinale');


// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

