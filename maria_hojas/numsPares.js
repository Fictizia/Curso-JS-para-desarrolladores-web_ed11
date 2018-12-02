
function isOdd (arrayToCheck){

    let arrayOdd = [];

    for (let index = 0; index < arrayToCheck.length; index++){

        if(arrayToCheck[index] % 2 == 0 ){

            arrayOdd.push(arrayToCheck[index]);
            //return true

        }

    }

    console.log(arrayOdd);


}

isOdd([152,8,789,113,9,14]);