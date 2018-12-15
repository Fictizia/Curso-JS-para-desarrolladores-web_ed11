/*
recorrer array
multiplo de 3 = fizz
multiplo de 5 = buzz
multiplo de 3 y 5 = fizzbuzz
no multiplo de ninguno, simplemente imprime el número
*/ 


function fizzbuzz(numberList){
    for (let index = 0; index < numberList.length; index++) {
        const num = numberList[index];

        if (num % 3 === 0 && num % 5 != 0) {
            console.log(num, ' fizz')
        }
        if (num % 5 === 0 && num % 3 != 0) {
            console.log(num, ' buzz')
        }
        if (num % 5 ===0 && num % 3 === 0) {
            console.log(num, ' fizzbuzz')
        }
        if (num % 3 != 0 && num % 5 != 0) {
            console.log(num, num)
        }
        
    }
}

const example = [5,4,3,8,9,15,25,30]

fizzbuzz(example)