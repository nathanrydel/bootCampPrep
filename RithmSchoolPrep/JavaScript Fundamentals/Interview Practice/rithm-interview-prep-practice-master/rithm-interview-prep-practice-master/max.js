// ### max

// Write a function called **max,** which accepts an array and returns the highest value.

// Do not use the built-in `Math.max()` function!

// Examples:

console.log(max([5, 1, 4, 7, 1, 2])); // 7
console.log(max([3, 4, 12, 1, 8])); // 12
console.log(max([-1, 6, 3, 2.2, -10, -4])); // 6

// add whatever parameters you deem necessary - good luck!
function max(array) {
  // store currentHighestNum
  let currentHighestNum = 0;
  // iterate over arr
  for (let num of array) {
    // check if current element is greater than cHN
    if (num > currentHighestNum) {
      // if so, update cHN
      currentHighestNum = num;
    }
  }
  return currentHighestNum;
}
