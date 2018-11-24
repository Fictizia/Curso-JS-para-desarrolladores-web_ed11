let first = ['hello', 'world']
let second = first

console.log(first)
console.log(second)

first[0] = 'bye'

console.log(first)
console.log(second)

// and objects

let jaime = {name: 'jaime',
            age: 'taitantos',
            pupil: true,
            goodPerson: true}

let agnes = jaime

console.log(jaime)
console.log(agnes)

agnes.name = 'Agnes'

console.log(jaime)
console.log(agnes)