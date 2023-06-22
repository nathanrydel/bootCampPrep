// ### twoHighest

// Write a function called **twoHighest** that takes an array of numbers as its argument and returns the **two highest numbers within the array**.

// The returned value should be an array in the following format: `[secondHighest, highest]`

// The order of the numbers passed in could be any order.

// **Do not use the build in sort() method - the tests will fail!**

// Examples:

console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
console.log(twoHighest([6, 1, 9, 10, 4])); // [9,10]
console.log(twoHighest([4, 25, 3, 20, 19, 5])); // [20,25]
console.log(twoHighest([1, 2, 2])); // [2, 2];

// input: array
// output: array of 2 highest elements of array

// add whatever parameters you deem necessary - good luck!
function twoHighest(array) {
  // initialize highest value as -Number.Positive_Infinity
  let highest = -Number.Positive_Infinity;
  // initialize secondHighest value as -Number.Positive_Infinity
  let secondHighest = -Number.Positive_Infinity;

  // iterate over the elements of the array
  for (let num of array) {
    // check if num > highest
    if (num >= highest) {
      // if so, update secondHighest to be current highest
      secondHighest = highest;
      // update highest to be num;
      highest = num;
      // also check if num is greater than secondHighest AND num is less than
    } else if (num > secondHighest && num < highest) {
      // if so, update secondHighest
      secondHighest = num;
    }
  }
  // return [secondHighest, highest];
  return [secondHighest, highest];
}
