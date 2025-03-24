/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(str){
    const strVowels = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            strVowels.push(str[i]);
        }
    }
    return strVowels;
}

const contaVocali1 = (str) => {
    const strVowels = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            strVowels.push(str[i]);
        }
    }
    return strVowels;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word).length + ' (' + contaVocali(word) + ')');
console.log(contaVocali1(word).length + ' (' + contaVocali1(word) + ')');



//Risultato atteso se si passa 'javascript': 3 (a, a, i)