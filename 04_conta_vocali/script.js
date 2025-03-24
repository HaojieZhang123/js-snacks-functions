/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)