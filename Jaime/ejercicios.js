// Dado un array de números, quiero devolver otro array solo con los números pares
let nums = ['1','2','3','4','5', '6', '7', '8', '9', '10'];

let numsPares = nums.filter(function(par){
    return par % 2 == 0
});

console.log(numsPares);

//=================

// Dado un array de números, quiero que por cada elemento 
// si es múltiplo de 3 se imprima mosquetero; 
// si es múltiplo de 5, se imprima fantástico; 
// si es múltiplo de 3 y 5, se imprima aserejé
// y si no es múltiplo de ninguno, se imprima aburrido
if(nums % 3 == 0){
     console.log('mosquetero')
}

if(nums % 5 == 0){
    console.log('fantástico')
}

if(nums % 3 && 5 == 0){
    console.log('aserejé')
}

else{
     console.log('Aburrido')
}


//=================

// Hacer función que le des un número y diga si es un número primo

let nums = ['1','2','3','4','5', '6', '7', '8', '9', '10'];

  

//=================

// Dado un array de números, decir cuál es primo y cuál no