// Write a function called `reverseValues`, which accepts an array of numbers, and iterates through it. As it traverses the array, if the value encountered is an even number, skip it AND skip the next two numbers, as well. Anything that isn't skipped should be added to a new array, which has all non-skipped numbers in reverse order of the original array. Return this new array.

function reverseValues(array) {
  // initialize reversedVals as empty array
  const reversedVals = [];
  // iterate over array
  for (let i = 0; i < array.length; i++) {
    // check if odd
    // if so, unshift element
    if (array[i] % 2 !== 0) {
      reversedVals.unshift(array[i]);
    } else {
      i += 2;
    }
  }
  // return reversedVals
  return reversedVals;
}

console.log(reverseValues([1, 1, 3, 3, 2])); // [3, 3, 1, 1]
console.log(reverseValues([1, 3, 5, 7])); // [7, 5, 3, 1]
console.log(reverseValues([1, 3, 4, 7])); // [3, 1]
console.log(reverseValues([11, 13, 15, 20, 1, 1])); // [15, 13, 11]
console.log(reverseValues([4, 5, 1, 1, 2, 1, 1])); // [1]
console.log(reverseValues([2, 2, 2])); // []
