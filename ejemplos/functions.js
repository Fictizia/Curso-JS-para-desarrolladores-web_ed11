function canHeGoIn(age, country){
    let hasAge = 21

    if (country === "Spain"){
        hasAge = 18
    }

    if (age >= hasAge){
        console.log('Puede entrar en la disco')

    }else{
        console.log('No Puede entrar en la disco') 
    }
}
const spainAdult = 18

canHeGoIn(spainAdult,'Spain')
canHeGoIn(21,'EEUU')
canHeGoIn(17,'Spain')
canHeGoIn(22,'Chiquitistán')