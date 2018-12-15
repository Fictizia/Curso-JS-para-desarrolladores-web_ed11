// recorrer array
// multiplo de 3 = fizz
// multiplo de 5 = buzz
//multiplo de 3 y 5 = fizzbuzz
//no multiplo de ninguno, simplesmente imprimir el numero

function fizzbuzz(numberList){
  console.log(`hello`, numberList)
   for (let index = 0; index < numberList.lenght; index++){
     console.log(index)
    const num = numberList[index];
    console.log(num)

    if (num % 3 === 0 && num % 5 != 0) {
      console.log(num, 'fizz')
    }
    if (num % 5 === 0 && num % 3 != 0) {
      console.log(num, 'buzz')
    }
    if (num % 5 === 0 && num % 3 === 0) {
      console.log(num,'fizzbuzz')
   }
   if (num % 3 != 0 && num % 5 != 0) {
     console.log(num, num)
   }
 }
}
const example = [5,4,3,8,9,15,25,30]

fizzbuzz([2,7])

console.log(`HELLO`)