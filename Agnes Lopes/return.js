function isOdd(number){
    if (number % 2 === 0) {
      return true
    }else {
      return false
    }
}
//const isOddorEven = isOdd(2)
//console.log(isOddorEven)
//console.log(isOdd(2)) // variable different name from function

const isThisNumIsOdd = isOdd(8)

if(isThisNumIsOdd){
  console.log(isThisNumIsOdd++)
} else{
  console.log(isThisNumIsOdd)
}



