// 1
// getLongestOfThreeWords
// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

// Notes:

// If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords("these", "three", "words");
console.log(output); // --> 'these'

function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  let arr = [word1, word2, word3];
  // set maxLength
  let maxLength = word1.length;
  // set longestWord
  let longestWord = arr[0];
  // iterate over elements of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      longestWord = arr[i];
    }
  }
  return longestWord;
}

// 2
// findShortestOfThreeWords
// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:

// If there are ties, it should return the first word in the parameters list.

var output2 = findShortestOfThreeWords("a", "two", "three");
console.log(output2); // --> 'a'

function findShortestOfThreeWords(word1, word2, word3) {
  // check if word1 is shorter or equal to word2
  if (word1.length <= word2.length) {
    // if so, check if word1 is shorter or equal to word3
    if (word1.length <= word3.length) {
      // if so, return word1
      return word1;
      // else
    } else {
      // return word3;
      return word3;
    }
    // else
  } else {
    // check if word2 is shorter or equal to word3
    if (word2.length <= word3.length) {
      return word2;
      // else
    } else {
      return word3;
    }
  }
}

function findShortestWord(...args) {
  // set the args to be an array
  let arr = [...args];
  // set shortestLength to  arr[0].length
  let shortestLength = arr[0].length;
  // set shortestWord to arr[0]
  let shortestWord = arr[0];
  // iterate over the elements of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortestLength) {
      // update shortestLength
      shortestLength = arr[i].length;
      // update shortestWord
      shortestWord = arr[i];
    }
  }
  return shortestWord;
}

var output3 = findShortestWord("ab", "two", "three");
console.log(output3);
