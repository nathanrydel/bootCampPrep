// ### countValues

// Write a function called **countValues** which accepts an array and a number and returns the number of times that value appears in the array.

// Examples:

console.log(countValues([4, 1, 4, 2, 3, 4, 4], 4)); // 4
console.log(countValues([4, 1, 4, 2, 3, 4, 4], 100)); // 0
console.log(countValues([], 1)); // 0

// add whatever parameters you deem necessary - good luck!
function countValues(arr, number) {
  // initialize valCounter to 0
  let valCounter = 0;
  // iterate over arr
  for (const el of arr) {
    // check if element equals number
    if (el === number) {
      // if so, updated counter
      valCounter++;
    }
  }
  // return valCounter;
  return valCounter;
}
