
/*for (let i = 1; i <= 100; i++) {
    let result = i*5
    console.log(`5 multiplicado por ${i} es igual a ${result}`)
}*/


/*
function tablaDeNumeros (multiplicando,finTabla) {

    for (let i = 1; i <= finTabla; i++) {

        let resultado = i*multiplicando;

        console.log(`${multiplicando} por ${i} es igual a ${resultado} y se multiplica mientras la tabla sea menor o igual que ${finTabla}`)
    }
}

tablaDeNumeros(2,56);
*/

/*
function tablaDel (multiplicando) {

    for (let i = 1; i <= 10; i++) {
        let resultado = i*multiplicando;
        console.log(`${multiplicando} x ${i} = ${resultado}`)
    }

}

for (let i = 1; i <= 9; i++) {
    console.log(tablaDel(i))
}*/


function tablaDel (multiplicando,tope) {

    for (let i = 1; i <= tope; i++) {
        let resultado = i*multiplicando;
        console.log(`${multiplicando} x ${i} = ${resultado}`)
    }

}

function tabladeUnoalNueveConTope(tope) {
    for (let i = 1; i <= 9; i++) {
        tablaDel(i,tope)
    }
}

tabladeUnoalNueveConTope(20);


