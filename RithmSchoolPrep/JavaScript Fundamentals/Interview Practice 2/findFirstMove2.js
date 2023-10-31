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

// input: array of arrays, str to find
// output: array (with array number, element number)

function findFirstMove(arr, str) {
  // iterate over the main arr
  for (let i = 0; i < arr.length; i++) {
    // iterate over the sub arr
    for (let j = 0; i < arr[i].length; j++) {
      // check if element of sub arr matches str target
      // if so return main arr index, sub arr index as arr
      if (arr[i][j] === str) return [i, j];
    }
  }
  // if str target not found, return -1
  return -1;
}

/*
let moves = [
  ["a", "b", "c"],
  ["d", "a", "f"],
  ["g", "h", "h"],
];
findFirstMove(moves, "a")

i = 0 // ['a', 'b', 'c']
j = 0 // 'a'

'a' ?= 'a' -- true

return [i, j] = [0, 0]
expected: [0,0]

findFirstMove(moves, "h")

i = 2 // ['g', 'h', 'h']
j = 1 // 'h'

'h' ?= 'h' -- true

return [i, j] = [2, 1]
expected: [2, 1]

(findFirstMove(moves, "z")); // -1

i = 2 // ['g', 'h', 'h']
j = 2 // 'h'

'h' ?= 'z'

return -1
expected: -1
*/
