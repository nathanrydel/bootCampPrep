// ### reverseValues

// Write a function called `reverseValues`, which accepts an array of numbers, and iterates through it. As it traverses the array, if the value encountered is an even number, skip it AND skip the next two numbers, as well. Anything that isn't skipped should be added to a new array, which has all non-skipped numbers in reverse order of the original array.  Return this new array.

// Examples:

console.log(reverseValues([1, 1, 3, 3, 2])); // [3, 3, 1, 1]
console.log(reverseValues([1, 3, 5, 7])); // [7, 5, 3, 1]
reverseValues([1, 3, 4, 7]); // [3, 1]
reverseValues([11, 13, 15, 20, 1, 1]); // [15, 13, 11]
reverseValues([4, 5, 1, 1, 2, 1, 1]); // [1]
reverseValues([2, 2, 2]); // []

// input: array
// output: mutated array

function reverseValues(arr) {
  // create output array
  const output = [];

  // iterate over the array with access to index
  for (let i = 0; i < arr.length; i++) {
    // check if element is not even
    if (arr[i] % 2 !== 0) {
      // if so, shift to output array
      output.shift(arr[i]);
    } else {
      // else, update i to i + 2;
      i = i + 2;
    }
  }
  // return output;
  return output;
}
