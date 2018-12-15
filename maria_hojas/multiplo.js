// multiplo de 3 --> mosquetero
// multiplo de 5 --> fantastico
// multiplo de 3 y de 5 --> asereje
// multiplo de ninguno --> aburrido

areYouBoring([58,455,15,7,69,45])

function areYouBoring (arrayToCheck) {

    let multipleThree;
    let multipleFive;

    for(let index = 0; index < arrayToCheck.length; index++){

        if(arrayToCheck[index] % 3 != 0) {          
            multipleThree = false;

        } else {
            multipleThree = true;
        }

        if(arrayToCheck[index] % 5 != 0) {          
            multipleFive = false;

        } else {
            multipleFive = true;
        }

        if (multipleFive == true && multipleThree == false){

            console.log(`${arrayToCheck[index]} says wonferful`)

        } else if (multipleFive == false && multipleThree == true){

            console.log(`${arrayToCheck[index]} says mosketeer`)

        } else if (multipleFive == true && multipleThree == true){

            console.log(`${arrayToCheck[index]} says aserejé`)

        } else {

            console.log(`${arrayToCheck[index]} is boring`)

        }

    }

}

