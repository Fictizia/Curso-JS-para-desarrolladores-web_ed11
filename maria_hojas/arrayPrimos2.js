

checkArray([3,5,785,113,6,114]);

function checkArray (numbersToCheck) {

    for (let index=0;index < numbersToCheck.length ; index++){
    
        isModZero(numbersToCheck[index]);

    }

}

function isModZero (numberDivided) {

    for (let index=2;index < numberDivided; index++){
    
        if (numberDivided % index == 0) {
            console.log(`${numberDivided} no es primo`);
            return true;
        }
    }
    console.log(`${numberDivided} es primo`);
    return false

}