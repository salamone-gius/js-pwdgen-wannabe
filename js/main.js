/*---------- MESSAGGIO DI BENVENUTO ----------*/
//dichiaro la variabile e gli assegno un valore
const welcome = "Benvenuto al nostro Password Generator di ultimissima generazione!";

//richiamo la variabile e la utilizzo
alert(welcome);



/*-------------- CHIEDO IL NOME --------------*/
//dichiaro la variabile, gli assegno un valore e la utilizzo
let name = prompt("Qual'è il tuo nome?");



/*------------ CHIEDO IL COGNOME -------------*/
//dichiaro la variabile, gli assegno un valore e la utilizzo
let surname = prompt("Qual'è il tuo cognome?");



/*-------- CHIEDO IL COLORE PREFERITO --------*/
//dichiaro la variabile, gli assegno un valore e la utilizzo
let color = prompt("Qual'è il tuo colore preferito?");



/*--------- STAMPO I DATI RACCOLTI ---------*/
//dichiaro la variabile e gli assegno un valore
let password = name + surname + color + 21;

//stampo testo all'interno di un elemento HTML richiamato attraverso id
document.getElementById("password").innerHTML = password;

//stampo il risultato in console
console.log(password)





