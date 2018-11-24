//const numberOfEachFood = [1,2,3]
//const food = ['potatoes', 'bread' , 'eggs']

/*const list = [
                 [
                      food[0], numberOfEachFood[0]
                 ],
                 [
                       food[1], numberOfEachFood[1]
                 ],
                 [
                      food[2], numberOfEachFood[2]
                 ],
                ]
                */
//array + array
//console.log(list[1][1]) easier way
//const barrasBread = list[1]
//const numberBarrasBread = barrasBread[1]
//console.log(numberBarrasBread) too much work

const lista = {
    barrasPan : 2,
    huevo: 12,
    berenjenas: 5
}
//console.log(lista)
//console.log(lista.berenjenas)
//const lista = {

//}
//const food = Object.keys(lista)
const listaDePropriedades = Object.keys(lista)

const element= food[0] //'barrasPan'
const loQueQuieroSaber = lista[element] // lista['barrasPan']

//console.log(food)
//console.log(element)

console.log(`La key es ${element} y el valor es ${loQueQuieroSaber}`)
//console.log(food)











/* lista.food[0]
lista.food[1]
lista.food[2]
*/
