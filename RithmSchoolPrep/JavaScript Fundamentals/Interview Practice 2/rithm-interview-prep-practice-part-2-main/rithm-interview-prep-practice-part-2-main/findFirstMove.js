// ### findFirstMove

// Write a function called `findFirstMove`. This function accepts an array of arrays of moves and a move. It should return an array with the index of the first move in the array of arrays of moves. If the move is not present in the moves array, the function should return -1.

// Examples:

let moves = [
  ["a", "b", "c"],
  ["d", "a", "f"],
  ["g", "h", "h"],
];

console.log(findFirstMove(moves, "a")); // [0, 0]
console.log(findFirstMove(moves, "h")); // [2, 1]
console.log(findFirstMove(moves, "z")); // -1

// inputs: arr of arrays, str
// output: arr of subArr1 index, subArr Element index

function findFirstMove(arr, str) {
  // iterate over the arrays
  for (let i = 0; i < arr.length; i++) {
    // iterate over each array
    for (let j = 0; j < arr[i].length; j++) {
      // check if the element matches the str
      if (arr[i][j] === str) {
        // if so, push array index and element index
        return [i, j];
      }
    }
  }
  // return output;
  return -1;
}
