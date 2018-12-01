// la tabla del 5, en vez de hasta el 10, hasta el 100
// 5 x 1 = 5
// 5 x 2 = 10
// 5 X 3 = 15
// .......



function tablaDel(multiplicando, tope) {
    for (let multiplicador = 1; multiplicador <= tope; multiplicador++) {
        
        const resultado = multiplicando * multiplicador;
        console.log(`${multiplicando} x ${multiplicador} = ${resultado}`)
    }
}

function tablaDelUnoAlNueveCon(tope) {
    for (let index = 1; index <= 9; index++) {
        tablaDel(index, tope)
    }
    console.log('--------------------')
}

for(let tope = 25; tope <= 100; tope = tope *2){
    tablaDelUnoAlNueveCon(tope)
}




