// 1
// getLongestWordOfMixedElements
// Write a function called "getLongestWordOfMixedElements".

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// Notes:

// If the array is empty, it should return an empty string ("").
// If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 'word'

function getLongestWordOfMixedElements(arr) {
  // check if array is empty, if so return ""
  if (arr.length === 0) return "";

  // declare longestWordLength
  let longestWordLength = Number.NEGATIVE_INFINITY;
  // declare longestWord
  let longestWord = "";

  // iterate over the element of arr with forEach
  arr.forEach((element) => {
    // check if each element is a string
    if (typeof element === "string") {
      // if so, check if its length is greater than lWL
      if (element.length > longestWordLength) {
        // if so, update longestWordLength and longestWord
        longestWordLength = element.length;
        longestWord = element;
      }
    }
  });
  // return longestWord;
  return longestWord;
}

// 2
// getLargestNumberAmongMixedElements
// Write a function called "getLargestNumberAmongMixedElements".

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// Notes:

// The array might contain values of a type other than numbers.
// If the array is empty, it should return 0.
// If the array contains no numbers, it should return 0.

var output2 = getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output2); // --> 5

function getLargestNumberAmongMixedElements(arr) {
  // check if arr is empty, if so return 0
  if (arr.length === 0) return 0;

  //declare largestNum
  let largestNum = Number.NEGATIVE_INFINITY;

  // declare nums array
  const nums = [];

  // iterate over arr with forEach
  arr.forEach((element) => {
    // check if element is a number
    if (typeof element === "number") {
      // if so, push to nums array
      nums.push(element);
    }
  });

  // check if nums array is empty, if so return 0
  if (nums.length === 0) return 0;

  // iterate over nums with forEach
  nums.forEach((element) => {
    // check if element is greater than largestNum
    if (element > largestNum) {
      // if so, update largestNum
      largestNum = element;
    }
  });
  // return largestNum;
  return largestNum;
}
