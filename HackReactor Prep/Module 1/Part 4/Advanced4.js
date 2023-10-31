// 1
// countAllCharacters
// Write a function called "countAllCharacters".

// Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:

// If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters("banana");
console.log(output); // --> {b: 1, a: 3, n: 2}

function countAllCharacters(str) {
  // declare charCount obj
  const charCount = {};

  // iterate over the chars of str
  for (let char of str) {
    // check if the obj at char exists
    if (charCount[char]) {
      // if so, increment the value
      charCount[char]++;
      // else
    } else {
      // create the property
      charCount[char] = 1;
    }
  }
  // return charCount;
  return charCount;
}
