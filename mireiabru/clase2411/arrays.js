/*

const numberOfEachFood = [1, 2, 12]
const food = ['patata', 'barras de pan', 'huevos']

const list = [
                [
                    food[0], numberOfEachFood[0]
                ],
                [
                    food[1], numberOfEachFood[1]
                ],
                [
                    food[2], numberOfEachFood[2]
                ]
            ]

            // tres niveles de indentación

            const barrasPan = list[1]
            const numberBarrasPan = barrasPan[1]
            console.log(numberBarrasPan)

*/

/*
const lista = {
    barrasPan: 2,
    huevos: 12, 
    berenjenas: 5
}

const food = Object.keys(lista)

const element = food[0] // 'barrasPan'
const loQuieroSaber = lista[element] // lista['barrasPan']

console.log(`La key es ${element} y el valor es ${loQuieroSaber}`)

*/

/*

const myArray = ['Maria', 'Mireia', 'Jaime', 'Agnes', 'Victoria', 'Mireia']

const whereIsMireia = myArray.indexOf('Mireia')
const whereIsJose = myArray.indexOf('Jose')

console.log(whereIsMireia)
console.log(whereIsJose)

console.log(myArray.includes('Jose'))
console.log(myArray.includes('Agnes'))

myArray.pop()
console.log(myArray)

myArray.push('Jose')
console.log(myArray)

*/

/*

const myArray = ['Maria', 'Mireia', 'Jaime', 'Agnes', 'Victoria', 'Mireia']

let otherArray = myArray.slice()

console.log(otherArray)
console.log(myArray)

myArray.shift()

console.log(myArray)
console.log(otherArray)

*/


const order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(order.sort())

