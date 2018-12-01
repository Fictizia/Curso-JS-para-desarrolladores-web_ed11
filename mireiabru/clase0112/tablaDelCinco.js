// la table del 5, en vez de hasta el 10, hasta el 100
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...

tablaDel(x);


function tablaDel(x) {
    for (let multiplicador = 1; multiplicador <= 100; multiplicador++) {
        const multiplicando = 5;
        const resultado = multiplicador * multiplicando;
        console.log(`${multiplicando} x ${multiplicador} = ${resultado}`);
    }
}
// punto de partida // punto final // incremento