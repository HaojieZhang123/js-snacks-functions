/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali(arr){
    let arrIniziali = [];
    for(let i = 0; i < arr.length; i++){
        arrIniziali.push(arr[i][0]);
    }
    return arrIniziali
}

const iniziali1 = (arr) => {
    let arrIniziali = [];
    for(let i = 0; i < arr.length; i++){
        arrIniziali.push(arr[i][0]);
    }
    return arrIniziali
};


// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali(names));
console.log(iniziali1(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]