// Blackjack
// cards from 1 till 7 * 4 types
// J, Q and K * 4 types -> value = 10

/* const deck = [
  1,1,1,1
  2,2,2,2
  3,3,3,3
  4,4,4,4
  5,5,5,5
  6,6,6,6
  7,7,7,7
  8,8,8,8
  9,9,9,9
  10,10,10,10,10,10,10,10,10,10,10,10]

let jugada = 0
let jugadaBanca = 0

//function getRandomInt(min, max) {
//  return Math.floor(Math.random() * (max - min)) + min;}
// eliminar un numero del medio del array splice
function darCarta(deck) {
   const indiceCarta = Math.floor(Math.random() * (deck.length - 1));
   const carta = deck[indiceCarta]
   deck.splice(indiceCarta, 1) // elimina 1 elemento desde el indice
   return carta
}
function mayorDeVeintiuno(num, ) {
  if (num > 21)
  return
}

function esVeintiuno(num){
  return num === 21
}

function quienGana(manoJugador, manoBanca){
  if(manoJugador > manoBanca){
    return 'El Jugador Gana'
  }
  if(manoJugador < manoBanca){
    return 'La banca Gana'
  }
  return 'Emapate'
}
manoJugador += darCarta(deck) */