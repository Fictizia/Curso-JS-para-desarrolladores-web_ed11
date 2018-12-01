// voy a cambiar solo la edad y el país
// la edad será un número positivo entre 0 y 150
// el país solo puede ser Spain o USA, y se escribirá así

const age = 5
const country = 'Spain'

let ageToEnter = 21

    if(country === 'Spain'){
        ageToEnter = 18
    }

    if (age >= ageToEnter){
        console.log('Puedes entrar')
    }else{
        console.log('You shall not pass')
    }