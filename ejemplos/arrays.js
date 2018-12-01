const myArray = ['Maria', 'Mireia', 'Jaime', 'Agnes', 'Victoria', 'Mireia']

const whereIsMireia = myArray.indexOf('Mireia')
const whereIsMireiaFromTheEnd = myArray.lastIndexOf('Mireia')
const whereIsJose = myArray.indexOf('Jose')
console.log(whereIsMireia)
console.log(whereIsJose)

console.log(myArray.includes('jose'))
console.log(myArray.includes('Agnes'))

myArray.pop()
console.log(myArray)
myArray.push('Jose')
console.log(myArray)