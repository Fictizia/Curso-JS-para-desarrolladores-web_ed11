var p = 'The quick brown fox jumped over the lazy dog. If the dog reacted, was it really lazy?';

var regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));

// expected output: "The quick brown fox jumped over the lazy ferret. If the ferret reacted, was it really lazy?"
