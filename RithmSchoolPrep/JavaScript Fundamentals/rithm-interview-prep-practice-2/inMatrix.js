function inMatrix(matrix, target) {
  // iterate over subarray of matrix
  for (let subarray of matrix) {
    // return check if subarray includes target
    if (subarray.includes(target)) return true;
  }
  return false;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(inMatrix(matrix, 5)); // true
console.log(inMatrix(matrix, 8)); // true
console.log(inMatrix(matrix, 10)); // false
