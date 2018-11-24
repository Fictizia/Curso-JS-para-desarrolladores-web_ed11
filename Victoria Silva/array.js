const  list = {
barrasPan: 2,
huevos : 12,
berenjenas : 5


}

const food = Object.keys(list) 
const element = food[0]//'barrasPan'
const LoquequieroSaber= list[element] //Lista ['barrasPan']
// lista.food[0]
// lista.food[1]
// lista.food[2]

console.log(element)
console.log(`la key es ${element} y el valor es ${LoquequieroSaber}`)


