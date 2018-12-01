// la tabla del 5 hasta el 100
// 5 x 1 = 5
// 5 x 2 = 10
// ......

/*
for(let multiplicador = 1; multiplicador <= 100; multiplicador++){
    const multiplicando = 5
    const resultado = multiplicando * multiplicador
    
    console.log(`${multiplicando} x ${multiplicador} = ${resultado}`)
}
*/

// =============

// ======TABLA DE UN NÚMERO (10 EN ESTE CASO)=======
/*
tablaDel(10,50);

function tablaDel(multiplicando, tope) {
    for(let multiplicador = 1; multiplicador <= tope; multiplicador++){
        const resultado = multiplicando * multiplicador
        
        console.log(`${multiplicando} x ${multiplicador} = ${resultado}`)
    }
}

*/



// ======TABLA DEL 1 AL 9=======
/*
function tablaDel(multiplicando) {
    for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
        const resultado = multiplicando * multiplicador
        
        console.log(`${multiplicando} x ${multiplicador} = ${resultado}`)
    }
}

for (let index = 1; index <= 9; index++) {
    tablaDel(index)
    
}
*/


// ======TABLA DEL 1 AL 9 CON TOPES=======
function tablaDel(multiplicando,tope) {
    for(let multiplicador = 1; multiplicador <= tope; multiplicador++){
        const resultado = multiplicando * multiplicador
        
        console.log(`${multiplicando} x ${multiplicador} = ${resultado}`)
    }
}


function tablaDelUnoAlNueveConTope(tope) {
    for (let index = 1; index <= 9; index++) {
        tablaDel(index, tope)
    }
    console.log('=========')
}

tablaDelUnoAlNueveConTope(100)
tablaDelUnoAlNueveConTope(50)
tablaDelUnoAlNueveConTope(25)
tablaDelUnoAlNueveConTope(10)