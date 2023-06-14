// ### inMatrix

// Write a function called `inMatrix` which accepts an array of arrays and a value. The function should return `true` if that value is in the matrix, and `false` if it is not.

// Examples:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(inMatrix(matrix, 5)); // true
console.log(inMatrix(matrix, 8)); // true
console.log(inMatrix(matrix, 10)); // false

// input: array of arrays, value
// output: Boolean if value is included in matrix

function inMatrix(matrix, value) {
  // iterate over the arrays of matrix
  for (const array of matrix) {
    // check if array includes the value
    if (array.includes(value)) {
      // if so, return true
      return true;
    }
  }
  // return false;
  return false;
}
