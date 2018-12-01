// En este caso sería Adrian lo que retorna

const name= `Adrian`
function sayMyName(){
    console.log(name)
}

sayMyName()






// En este caso no retorna Emma porque lo que se declara dentro 
//la función, no se ve fuera. Estará siempre disponible dentro de las llaves.
//nunca fuera de ellas.
// Pista a seguir: los colores, está uno más apagado que el otro.


function sayMoreNames(name){
    name= `Emma`
}
console.log (name)







function sayCompleteName(name, surname) {
    const completeName= `${name} ${surname}`

    nameLongOrShort()

 function nameLongOrShort(){

    if(completeName.length<9){
        console.log(`tu nombre ${completeName} es muy corto`)
    }
    else{
        console.log (`tu nombre ${completeName} es bonito`)
    }
 }
    
}
sayCompleteName(`Yi`, `Hang`)