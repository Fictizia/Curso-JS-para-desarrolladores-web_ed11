/*  var lastName = "Lovelace";
  var thirdLetterOfLastName = lastName[2];

{
  // Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];
}
{
  // Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
}
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly"); */

wordBlanks("dog", "big", "ran", "quickly");
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  // Your code above this line
  return result += "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");