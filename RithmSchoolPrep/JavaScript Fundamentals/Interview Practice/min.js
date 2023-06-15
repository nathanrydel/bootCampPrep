// ### min

// Write a function called **min,** which accepts an array of numbers and returns the lowest value.

// Do note use the built-in `Math.min()` function!

// Examples:

console.log(min([5, 1, 4, 7, 1, 2])); // 1
console.log(min([-1, 6, 3, 2.2, -10, -4])); // -10

// add whatever parameters you deem necessary - good luck!
function min(array) {
  // store curLowest and set to first array element
  let curLowest = array[0];
  // iterate over array
  for (let el of array) {
    // check if current element less than cL
    if (el < curLowest) {
      // if so, update currLowest
      curLowest = el;
    }
  }
  // return curLowest
  return curLowest;
}
