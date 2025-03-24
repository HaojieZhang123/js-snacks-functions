/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluto(name) {
    console.log('Ciao ' + name);
}

const saluto1 = (name) => console.log('Ciao ' + name);


// Invoca la funzione qui e stampa il risultato in console
saluto(userName);
saluto1(userName);


//Risultato atteso se si passa 'Mario': // ciao Mario
