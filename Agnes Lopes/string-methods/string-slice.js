var str = 'The quick red fox jumped over the lazy dog\'s back.';

console.log(str.slice(30));
// expected output: "the lazy dog's back."

console.log(str.slice(4, 17));
// expected output: "quick red fox"

console.log(str.slice(-5));
// expected output: "back."

console.log(str.slice(-11, -6));
// expected output: "dog's"