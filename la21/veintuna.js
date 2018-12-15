// num del 1 al 7 * 4 palos valen lo que marque
// sota, caballo y rey * 4 palos que valen 10

// PIDEN CARTA
// REPARTIR UNA CARTA A CADA JUGADOR
// RESTARLA DE LA BARAJA
// chequear si la jugada es 21, si lo es GANA
// chequear que la jugada sea < 21 no pasa nada
// chequear si la jugada es > 21 PIERDE
// si los 2 se plantan gana el mas cercano al 21


const baraja = [
    1,1,1,1,
    2,2,2,2,
    3,3,3,3,
    4,4,4,4,
    5,5,5,5,
    6,6,6,6,
    7,7,7,7,
    10,10,10,10,10,10,10,10,10,10,10,10]



function darCarta(baraja) {
    const indiceCarta = Math.floor(Math.random() * (baraja.length - 1));
    const carta = baraja[indiceCarta]
    baraja.splice(indiceCarta, 1) // elimina 1 elemento desde el indice
    return carta
  }

function mayorDeVeintiuno(num){
    return num > 21
}

function esVeintiuno(num, jugadorOBanca){
    return num === 21
    
}

function quienGana(manoJugador, manoBanca){
    if(manoJugador > manoBanca){
        return 'El jugador gana'
        
    }
    if(manoJugador < manoBanca){
        return 'La banca gana'
        
    }
    return 'empate'
    
}

let manoJugador = 0
let manoBanca = 0

function repartoAJugador() {
    manoJugador += darCarta(baraja);
    console.log('mano del jugador: ', manoJugador)
    if (mayorDeVeintiuno(manoJugador)){
        console.log('has perdido Jugador')
    }
    if (esVeintiuno(manoJugador)){
        console.log('has GANADO JUGADOR')
    }
    console.log(baraja)
    console.log(baraja.length)
}

function repartoABanca() {
    manoBanca += darCarta(baraja);
    console.log('mano de la banca', manoBanca)
    if (mayorDeVeintiuno(manoBanca)){
        console.log('has perdido BANCA')
    }
    if (esVeintiuno(manoBanca)){
        console.log('has GANADO BANCA')
    }
    console.log(baraja)
    console.log(baraja.length)
}
