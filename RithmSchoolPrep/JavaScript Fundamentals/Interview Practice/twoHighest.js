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
  // declare highest and set to -Infinity
  let highest = -Infinity;
  // declare secondHighest
  let secondHighest = -Infinity;
  // iterate thru arr
  for (let num of array) {
    // check if element is greater than secondHighest
    if (num > secondHighest) {
      // if so, update variable
      secondHighest = num;
    }
    // check if secondHighest greater than or equal to highest
    if (secondHighest >= highest) {
      // if so, update highest
      // create temp var to swap
      let temp = highest;
      highest = secondHighest;
      secondHighest = temp;
    }
  }
  return [secondHighest, highest];
}
