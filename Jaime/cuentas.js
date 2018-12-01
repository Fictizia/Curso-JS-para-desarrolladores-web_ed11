// && ||

// Explicación de cómo funciona el if y el else

const trueElement = true;

const falseElement = false;


/*
if (trueElement || falseElement){
    console.log('Ha dado true')
} else{
    console.log('Ha dado false')
}
*/

//console.log(false || true || false || false);


console.log(5 <= '5' && typeof 5 === typeof '5')

/*============*/

const age = 5
const hasTheAge = 18

if(age >= hasTheAge){
    console.log('Puedes entrar')
} else{
    console.log('Para tu casa')
}

/*============*/
/*============*/
/*============*/

/*=======EJERCICIO=====*/

/*============*/
/*============*/
/*============*/


/*=======MI CÓDIGO=====*/

const age = 5
const country = 'Spain'
const hasTheAge = 18

    if(country === 'Spain'){
        if(age >= hasTheAge){
        console.log('Puedes entrar')
        }else{
            console.log('Para tu casa')
        }
    }

/*=======MEJOR CÓDIGO=====*/

const age = 5
const country = 'Spain'
const hasTheAge = 18

let ageToEnter = 21


    if(country === 'Spain'){
        ageToEnter = 18
    }

    if(age >= ageToEnter){
        console.log('Puedes entrar')
    }else{
        console.log('Para tu casa')
    }