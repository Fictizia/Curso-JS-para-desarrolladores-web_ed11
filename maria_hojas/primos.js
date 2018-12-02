//según la teoría, los númros primos son todos los números que sólo son divisibles entre 1 y ellos mismos
//para saber si un numero es divisible entre otro su módulo debe ser 0


isModZero(85);

function isModZero (numberDivided) {

    //ejecuto esta función a partir de index 2 que es el primer número primo que conozco (único par)
    //mientras index sea menor que el número que le pido, incremento en uno el valor de index
    //para ir dividiendo número por número e ir comprobando si su módulo es 0
    for (let index=2;index < numberDivided; index++){
    
        //al recorrer el bucle, si el módulo de dividir el número dado entre index es igual a 0
        //NO PUEDE SER PRIMO, isModZero devuelve true, termino la ejecución
        if (numberDivided % index == 0) {
            console.log(`${numberDivided} no es primo`);
            return true;
        }
    }
    //en caso contrario será un número primo
    console.log(`${numberDivided} es primo`);
    return false

}
/*
function isModCero (numberDivided) {

    let index=2;
    while (index < numberDivided && numberDivided % index != 0){

        index++;
    }
    if(index >= numberDivided){
        console.log(`es primo`);
        return true

    }

}*/

