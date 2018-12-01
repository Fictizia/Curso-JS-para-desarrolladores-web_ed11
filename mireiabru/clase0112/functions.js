function canHeGoIn(age, country){
    let hasAge = 21

    if(country === 'Spain'){
        hasAge = 18
    }

    if (age >= hasAge){
        console.log('You can enter to the disco')
    }else{
        console.log('You shall not pass')
    }
}

canHeGoIn(18, 'Spain') // Puede entrar
canHeGoIn(21, 'EEUU') // Puede entrar
canHeGoIn(17, 'Spain') // No puede entrar
canHeGoIn(22, 'Chiquitistán') // Puede entrar