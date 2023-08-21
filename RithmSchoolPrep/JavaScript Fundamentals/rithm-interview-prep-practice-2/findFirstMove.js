function findFirstMove(array, move) {
  // iterate over array
  for (let i = 0; i < array.length; i++) {
    // iterate over subarray
    let moveIdx = array[i].indexOf(move);
    if (moveIdx > -1) return [i, moveIdx];
  }
  // return -1
  return -1;
}

let moves = [
  ["a", "b", "c"],
  ["d", "a", "f"],
  ["g", "h", "h"],
];

console.log(findFirstMove(moves, "a")); // [0, 0]
console.log(findFirstMove(moves, "h")); // [2, 1]
console.log(findFirstMove(moves, "z")); // -1
