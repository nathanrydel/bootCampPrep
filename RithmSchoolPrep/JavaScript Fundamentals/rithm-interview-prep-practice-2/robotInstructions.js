// ### robotInstructions

// Write a function called `robotInstructions` which accepts an array of moves. The options for the moves are "U", "D", "L", "R". The function should return an object with one key for each move with their values being the total number of times each move appears.

console.log(robotInstructions(["U", "D", "L", "R"]));
// { "U": 1, "D": 1, "L": 1, "R": 1 })

console.log(
  robotInstructions([
    "U",
    "D",
    "L",
    "R",
    "U",
    "D",
    "L",
    "R",
    "U",
    "D",
    "L",
    "R",
  ]),
);
// { "U": 3, "D": 3, "L": 3, "R": 3 })

function robotInstructions(moveList) {
  // initialize instructions object literal
  let instructions = {};
  // iterate over the moves of moveList
  for (let move of moveList) {
    // check if move already in instructions
    if (move in instructions) {
      // if so, increment value
      instructions[move]++;
    } else {
      // else, create move: 1 key:value pair
      instructions[move] = 1;
    }
  }
  // return instructions object
  return instructions;
}
