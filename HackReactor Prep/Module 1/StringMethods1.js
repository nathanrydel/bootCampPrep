// getFullName
// Write a function called "getFullName". Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

var output = getFullName("Joe", "Smith");
console.log(output); // --> 'Joe Smith'

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// getLengthOfWord
// Write a function called "getLengthOfWord". Given a word, "getLengthOfWord" returns the length of the given word.

var output2 = getLengthOfWord("some");
console.log(output2); // --> 4

function getLengthOfWord(word) {
  return word.length;
}

// getLengthOfTwoWords
// Write a function called "getLengthOfTwoWords". Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

var output3 = getLengthOfTwoWords("some", "words");
console.log(output3); // --> 9

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}
