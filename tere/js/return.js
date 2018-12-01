//Devuelve true. El return no pinta, sí lo hace el console
//Se recomienda meterlo en una variable para reutilizarlo.
//No se puede llamar a una variable igual que a una funcion.  

function isOdd(number) {
    if(number%2===0){
        return true
    }else{
        return false
    }
}

const isOddOrEven=isOdd(2)
console.log (isOddOrEven)





//Esta función pone el numero 8 en impar sumandole uno con el ++

const isOdd=function isOdd(number) {
    if(number%2===0){
        return true
    }else{
        return false
    }
    //Se puede simplificar el codigo quitando el else y dejando solo el return false
}


const isThisNumOdd= isOdd(8)

if(isThisNumOdd(8)){
    console.log(isThisNumOdd++)
} 
else{
    console.log(isThisNumOdd)
}







