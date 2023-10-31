// 1
// joinArraysOfArrays
// Write a function called "joinArrayOfArrays".

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

// You should be familiar with the "concat" method for this problem.

var output1 = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ["x", "y"],
]);
console.log(output1); // --> [1, 4, true, false, 'x', 'y']

function joinArrayOfArrays(arr) {
  let concatArr = [];
  // iterate over the arrays of arr
  for (let array of arr) {
    concatArr = concatArr.concat(array);
  }
  return concatArr;
}
