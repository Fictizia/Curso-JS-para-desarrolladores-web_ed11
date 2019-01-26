
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



function repartoAJugador(dondePintar) {
    manoJugador += darCarta(baraja);
    dondePintar.innerText = manoJugador
    if (mayorDeVeintiuno(manoJugador)){
        dondePintar.innerText ='has perdido Jugador'
    }
    if (esVeintiuno(manoJugador)){
        dondePintar.innerText ='has GANADO JUGADOR'
    }
    
}

function repartoABanca() {
    let bancas = document.getElementsByClassName('banca')
    console.log(bancas)
    manoBanca += darCarta(baraja);
    
    bancas.forEach(banca => {
        banca.innerText = 5
    });

    bancas[0].innerText = manoBanca
    if (mayorDeVeintiuno(manoBanca)){
        bancas[0].innerText ='has perdido BANCA'
    }
    if (esVeintiuno(manoBanca)){
        bancas[0].innerText ='has GANADO BANCA'
    }
    
}



let reparteJugador = document.getElementById('reparteJugador')
let reparteBanca = document.getElementById('reparteBanca')



reparteJugador.addEventListener('click',function(){
    let jugador = document.getElementById('jugador')
    repartoAJugador(jugador)
})
reparteBanca.addEventListener('click',repartoABanca)
