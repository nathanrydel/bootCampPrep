// 1
// findShortestWordAmongMixedElements
// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear in the given array.
// Expect the given array to have values other than strings.
// If the given array is empty, it should return an empty string.
// If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
console.log(output); // --> 'two'

function findShortestWordAmongMixedElements(arr) {
  // declare shortestWordLength
  let shortestWordLength = Number.POSITIVE_INFINITY;
  // declare shortestWord
  let shortestWord = "";

  // iterate over the elements of the array using forEach
  arr.forEach((element) => {
    // check if element type is string
    if (typeof element === "string") {
      // if so, check if element length is shorter than shortestWordLength;
      if (element.length < shortestWordLength) {
        // if so, update shortestWordLength AND shortestWord
        shortestWordLength = element.length;
        shortestWord = element;
      }
    }
  });
  // return shortestWord;
  return shortestWord;
}

// 2
// findSmallestNumberAmongMixedElements
// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:

// If the given array is empty, it should return 0.
// If the array contains no numbers, it should return 0.

var output2 = findSmallestNumberAmongMixedElements([
  4,
  "lincoln",
  9,
  "octopus",
]);
console.log(output2); // Expected Output: 4 Actual: 4

var output3 = findSmallestNumberAmongMixedElements(["lincoln", "octopus"]);
console.log(output3); // Expected Output: 0

function findSmallestNumberAmongMixedElements(arr) {
  // check if arr length is 0, if so return 0;
  if (arr.length === 0) return 0;
  // declare smallestNum
  let smallestNum = Number.POSITIVE_INFINITY;

  // declare a nums array
  const nums = [];

  // iterate over the elements of the arr with forEach
  // check if element is a number
  arr.forEach((element) => {
    if (typeof element === "number") {
      // if so, push to nums
      nums.push(element);
    }
  });

  console.log(nums);
  // check if nums is empty
  if (nums.length === 0) return 0;

  // iterate over nums with forEach
  // check if element is less than smallestNum
  nums.forEach((element) => {
    if (element < smallestNum) {
      // if so, update smallestNum;
      smallestNum = element;
    }
  });
  // return smallestNum;
  return smallestNum;
}
