// 1
// areValidCredentials
// Write a function called "areValidCredentials".

// Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

var output = areValidCredentials("Ritu", "mylongpassword");
console.log(output); // --> true

function areValidCredentials(name, password) {
  // your code here
  if (name.length > 3 && password.length >= 8) return true;
  return false;
}

// 2
// findMinLengthOfThreeWords
// Write a function called "findMinLengthOfThreeWords".

// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output2 = findMinLengthOfThreeWords("a", "be", "see");
console.log(output2); // --> 1

function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let array = [word1, word2, word3];
  // declare minLength = word1.length
  let minLength = word1.length;
  // iterate over the elements and compare the length to minLength
  for (let i = 0; i < array.length; i++) {
    if (array[i].length < minLength) {
      minLength = array[i].length;
    }
  }
  return minLength;
}

// 3
// findMaxLengthOfThreeWords
// Write a function called "findMaxLengthOfThreeWords".

// Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output3 = findMaxLengthOfThreeWords("a", "be", "see");
console.log(output3); // --> 3

function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let arr = [word1, word2, word3];
  // declare maxLength
  let maxLength = word1.length;
  // iterate over elements of array and compare length at each element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}
