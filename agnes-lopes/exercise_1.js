// voya a cambiar solo la edad y pais
// la edad sera un numero entero positivo, entre 0 y 150
// el pais solo puede ser Spain o US, y se escribira asi
{
  const age = 19
  const country = 'Spain'
  let ageToEnter = 21

  if (country === 'Spain') {
    ageToEnter = 18
  }

  if (age >= ageToEnter) {
    console.log('Pass')
  } else {
    console.log('Do not Pass')
  }
}

// {
//   const cat = 'black'

//   if (cat === 'black') {
//     adoption = true

// }