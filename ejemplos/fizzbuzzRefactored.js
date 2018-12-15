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

        onlyMultipleOfThree(num);
        onlyMultipleOfFive(num);
        multipleOfBoth(num);
        notMultipleOfThreeOrFive(num);
        
    }

    function notMultipleOfThreeOrFive(num) {
        if (num % 3 != 0 && num % 5 != 0) {
            console.log(num, num);
            
        }
    }

    function multipleOfBoth(num) {
        if (num % 5 === 0 && num % 3 === 0) {
            console.log(num, ' fizzbuzz');
            
        }
    }

    function onlyMultipleOfFive(num) {
        if (num % 5 === 0 && num % 3 != 0) {
            console.log(num, ' buzz');
        }
        
    }

    function onlyMultipleOfThree(num) {
        if (num % 3 === 0 && num % 5 != 0) {
            console.log(num, ' fizz');
            return
        }
    }
}

const example = [5,4,3,8,9,15,25,30]

fizzbuzz(example)