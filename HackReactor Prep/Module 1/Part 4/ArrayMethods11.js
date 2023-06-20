// 1
// filterEvenElements
// Write a function called "filterEvenElements".

// Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]

function filterEvenElements(arr) {
  // your code here
  const evenArr = [];

  // iterate over the array
  arr.forEach((element) => {
    if (element % 2 === 0) {
      evenArr.push(element);
    }
  });
  return evenArr;
}

// 2
// getLengthOfShortestElement
// Submitted on Today at 5:27 PM
// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:

// It should return 0 if the array is empty.

var output2 = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output2); // --> 3

function getLengthOfShortestElement(arr) {
  // check if arr is empty
  if (arr.length === 0) {
    return 0;
  }

  // initialize shortestLength
  let shortestLength = arr[0].length;

  // iterate over each element of arr
  // check if element length is less than shortestLength
  arr.forEach((element) => {
    if (element.length < shortestLength) {
      // if so update shortestLength
      shortestLength = element.length;
    }
  });
  // return shortestLength;
  return shortestLength;
}

// 3
// getLongestElement
// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:

// If there are ties, it returns the first element to appear.
// If the array is empty, it should return an empty string.

var output3 = getLongestElement(["one", "two", "three"]);
console.log(output3); // --> 'three'

function getLongestElement(arr) {
  // check if arr is empty
  if (arr.length === 0) {
    return "";
  }

  // initialize longestWord
  let longestWord = arr[0];

  // iterate over the words of arr
  for (let word of arr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
