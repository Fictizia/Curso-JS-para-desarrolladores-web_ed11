// según la teoría, los númros primos son todos los números que sólo son divisibles entre 1
// y ellos mismos
// para saber si un numero es divisible entre otro su módulo debe ser 0


// x
// x % x
// 2 hasta x, no debe de haber ningún numero que de resto 0

function isPrime (numberDivided) {
    
    if(numberDivided < 2 ){
        console.log(`${numberDivided} es menor que 2, NO es primo`);
            return false;
    }

    if(numberDivided % 2 === 0 && numberDivided != 2){
        console.log(`${numberDivided} es par, NO es primo`);
            return false;
    }
    //ejecuto esta función a partir de index 2 que es el primer número primo que conozco (único par)
    //mientras index sea menor que el número que le pido, incremento en uno el valor de index
    //para ir dividiendo número por número e ir comprobando si su módulo es 0
    for (let index = 3; index < numberDivided; index += 2){
    
        //al recorrer el bucle, si el módulo de dividir el número dado entre index es igual a 0
        //NO PUEDE SER PRIMO, isPrime devuelve true, termino la ejecución
        if (numberDivided % index == 0) {
            console.log(`${numberDivided} es divisible por ${index}, no es primo`);
            return false;
        }
    }
    //en caso contrario será un número primo
    console.log(`${numberDivided} es primo`);
    return true

}

function primeNumberList(numberList) {
    for (let index = 0; index < numberList.length; index++) {
        const num = numberList[index];
        isPrime(num)
    }
}

const numbers = [2,8,9,25,3,30,1,48,-9,-10, 31, 7, 85]

primeNumberList(numbers);