//dichiarazione variabile
let giuseppe;

//assegnazione valore
giuseppe = 'ciao';

//utilizzo/richiamo
alert(giuseppe);

//concatenazione di stringhe
const miaStringa = "Rosso" + "Acceso";
alert(miaStringa);

//numeri o stringhe?
const stringa = "8"; //questa è una stringa
const numero = 8; //questo è un numero

//sintassi interpolazione per concatenare più stringhe
//dichiarazione variabile
let string = "Qui";
let stringTwo = "Qua";
console.log (
    `
    ${string} Quo ${stringTwo}
    Andarono al mercato
    `
)

//operazioni aritmetiche tra numeri e variabili
let somma = 4 + 4;
let sottr = somma - 3;
let divisione = somma / 2;
let molt = sottr *2;
console.log(somma);

//stampare in console il tipo di variabile
console.log(typeof somma);

//visualizzare testo in html
document.writeln("Hello World!");

//visualizzare testo all'interno di un elemento HTML richiamato attraverso id
document.getElementById("password").innerHTML = "Ciaone!"