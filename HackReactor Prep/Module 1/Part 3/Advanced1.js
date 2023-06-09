// 1
// countWords
// Write a function called "countWords".

// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

// Notes:

// If given an empty string, it should return an empty object.

var output = countWords("ask a bunch get a bunch");
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
console.log(countWords("")); // --> {}

function countWords(str) {
  // your code here
  if (str === "") {
    return {};
  }

  const outputObj = {};
  const split = str.split(" ");
  for (let word of split) {
    if (!outputObj[word]) {
      outputObj[word] = 1;
    } else {
      outputObj[word]++;
    }
  }
  return outputObj;
}
