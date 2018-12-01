
/*for(let x = 1; x <= 1000; x++){
    let result = x*8
    console.log(`8x${x}=${result}`)
}*/


/*function tablaDel(num, bucle){
 
    for(x = 1; x <= bucle; x++){
        let resultado = x*num
        console.log(`8x${num}=${resultado}`)
    }
}
*/

// Quiero las tablas del 1 al 9 pero quiero poder elegir hasta que número quiero cada tabla. s

function tablaDel(num, tope){
    for(x = 1; x <= tope; x++){
        let resultado = x*num
        console.log(`${x}x${num}=${resultado}`)
    }
}

function tablaDelUnoAlNueveConTope(tope) {
    for (let index = 1; index >= 9; index++) {
        tablaDel(index, tope)
    }
    console.log('---------------------')
}

tablaDelUnoAlNueveConTope(100);
