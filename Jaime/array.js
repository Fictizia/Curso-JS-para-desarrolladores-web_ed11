// ARRAYS

// const numberOfEachFood = [1,2,12]
// const food = ['patata';'barras de pan', 'huevos']

// const list = [
//                 [
//                     food[0],numberOfEachFood[0]
//                 ],
//                 [
//                     food[1],numberOfEachFood[1]
//                 ],
//                 [
//                     food[2],numberOfEachFood[2]
//                 ],
// ]

// const barrasPan = list[1]
// const numerBarrasPan = barrasPan[1]
// console.log(numerBarrasPan)

//================

const lista = {
    barrasPan: 2,
    huevos: 12,
    berenjenas: 5
}

const food = Object.keys(lista) //para saber las propiedades de lista
const element = food[0] // Vale 'barrasPan'
const loQueQuieroSaber = lista[element] // es igual a lista['barrasPan'] pero lo hacemos así para que te venga el valor sin saber cuál es


console.log(`La key es ${element} y el valor es ${loQueQuieroSaber}`)

//========azúcar sintáctico========
let num = 1
num++ //a num le va a sumar 1
num-- //a num le va a restar 1
let num += // le va a sumar a num lo mismo (num + num)

//================


//========EJERCICIO========

let firstText = 'hola'
let secondText = firstText

firstText = 'adios'

console.log(`firstText vale: ${firstText}`)
console.log(`secondText vale: ${secondText}`)


//================

let first = true
let second = first // true

first = false // false

console.log(`first vale: ${first}`)
console.log(`second vale: ${second}`)