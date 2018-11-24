// String.fromCharCode(num1[, ...[, numN]])

//console.log(String.fromCharCode(42))

/*miArray = []
miArray.length

Array.length(Array)*/

//JavaScript Demo: String.fromCharCode()

String.fromCharCode(65, 66, 67);  // returns "ABC"
String.fromCharCode(0x2014)       // returns "—"
String.fromCharCode(0x12014)      // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(189, 43, 190, 61) // returns ½+¾=


console.log(String.fromCharCode(65, 66, 67));
console.log(String.fromCharCode(0x2014));
console.log(String.fromCharCode(0x12014));
console.log(String.fromCharCode(189, 43, 190, 61));

//JavaScript Demo: String.indexOf()

var paragraph = 'The quick brown fox jumped over the lazy dog. If the dog barked, was it really lazy?';

var searchTerm = 'dog';
var indexOfFirst = paragraph.indexOf(searchTerm);

console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
// expected output: "The index of the first "dog" from the beginning is 41"

console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
// expected output: "The index of the 2nd "dog" is 53"

//JavaScript Demo: String.repeat()

var chorus = 'Because I\'m happy. ';

console.log('Chorus lyrics for "Happy": ' + chorus.repeat(27));

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

//JavaScript Demo: String.replace()
var p = 'The quick brown fox jumped over the lazy dog. If the dog reacted, was it really lazy?';

var regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));

// expected output: "The quick brown fox jumped over the lazy ferret. If the ferret reacted, was it really lazy?"

//JavaScript Demo: String.split()

var str = 'The quick brown fox jumped over the lazy dog.';

var words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

var chars = str.split('');
console.log(chars[8]);
// expected output: "k"

var strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumped over the lazy dog."]