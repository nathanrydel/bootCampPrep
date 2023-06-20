// 1
// filterOddLengthWords
// Submitted on Today at 4:48 PM
// Write a function called "filterOddLengthWords".

// Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(["there", "it", "is", "now"]);
console.log(output); // --> ['there', "now']

function filterOddLengthWords(words) {
  // declare result
  const result = [];
  // iterate over the words of the array
  for (let word of words) {
    // check if the length of the word is odd
    if (word.length % 2 === 1) {
      // if so, push to result
      result.push(word);
    }
  }
  // return result
  return result;
}

// 2
// filterEvenLengthWords
// Submitted on Today at 4:49 PM
// Write a function called "filterEvenLengthWords".

// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output2 = filterEvenLengthWords(["word", "words", "word", "words"]);
console.log(output2); // --> ['word', 'word']

function filterEvenLengthWords(words) {
  // declare result
  let result = [];
  // iterate over the word of words
  for (let word of words) {
    // check if word length is even
    if (word.length % 2 === 0) {
      result.push(word);
    }
  }
  return result;
}

// 3
// getLengthOfLongestElement
// Submitted on Today at 4:55 PM
// Write a function called "getLengthOfLongestElement".

// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

// Notes:

// It should return 0 if the array is empty.

var output3 = getLengthOfLongestElement(["one", "two", "three"]);
console.log(output3); // --> 5

function getLengthOfLongestElement(arr) {
  if (arr.length === 0) return 0;
  // set longestLength to arr[0].length
  let longestLength = arr[0].length;
  // check if arr is undefined, if yes return 0
  // iterate over the elements of the array
  for (let element of arr) {
    // check if the element length is greater than longestLength
    if (element.length > longestLength) {
      // if so, update longestLength
      longestLength = element.length;
    }
  }
  // return longestLength;
  return longestLength;
}
