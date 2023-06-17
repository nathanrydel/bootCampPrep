// 1
// getAllLetters
// Write a function called "getAllLetters".

// Given a word, "getAllLetters" returns an array containing every character in the word.

// Notes:

// If given an empty string, it should return an empty array.
// You should be familiar with the 'split' method.

var output = getAllLetters("Radagast");
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
console.log(getAllLetters("")); // --> []

function getAllLetters(str) {
  // your code here
  return str.split("");
}

// 2
// getAllWords
// Write a function called "getAllWords".

// Given a sentence, "getAllWords" returns an array containing every word in the sentence.

// Notes:

// If given an empty string, it should return an empty array.
// You should be familiar with the 'split' method.

var output2 = getAllWords("Radagast the Brown");
console.log(output2); // --> ['Radagast', 'the', 'Brown']
console.log(getAllWords("")); // --> []

function getAllWords(str) {
  // your code here
  if (str === "") return [];
  return str.split(" ");
}
