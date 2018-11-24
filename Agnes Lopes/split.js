/*//JavaScript Demo: String.split()

var str = 'The quick brown fox jumped over the lazy dog.';

var words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

var chars = str.split('');
console.log(chars[8]);
// expected output: "k"

var strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumped over the lazy dog."] */

const listaCompra = 'peras; manzanas; platanos; yogur'
const listaEnArray = listaCompra.split(';')
console.log(listaEnArray)
listaEnArray.shift() // eliminated the first item
console.log(listaEnArray)


