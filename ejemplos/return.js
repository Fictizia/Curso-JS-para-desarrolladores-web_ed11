const isOdd = function (number) {
    if(number % 2 === 0){
        const numberTimesTwo = number * 2
        
        const result = {
            trueOrFalse:true,
            mathCalculation:numberTimesTwo
        }
        return result
    }
    return {
        trueOrFalse:false,
        mathCalculation:number
    }
}

const isThisNumOdd = isOdd(8)

if(isThisNumOdd){
    console.log(isThisNumOdd++)
}else{
    console.log(isThisNumOdd)
}



