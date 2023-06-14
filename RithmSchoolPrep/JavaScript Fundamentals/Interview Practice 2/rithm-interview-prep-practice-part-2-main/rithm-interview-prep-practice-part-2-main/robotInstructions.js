// ### robotInstructions

// Write a function called `robotInstructions` which accepts an array of moves. The options for the moves are "U", "D", "L", "R". The function should return an object with one key for each move with their values being the total number of times each move appears.

// Examples:

console.log(robotInstructions(["U", "D", "L", "R"]));
// { "U": 1, "D": 1, "L": 1, "R": 1 })

robotInstructions(["U", "D", "L", "R", "U", "D", "L", "R", "U", "D", "L", "R"]);
// { "U": 3, "D": 3, "L": 3, "R": 3 })

// input: array
// output: object with keys as moves of array and value as number of times in array

function robotInstructions(array) {
  // create new output obj
  const movesObj = {}

  // iterate over the array
  for (let move of array) {
    // check if the move already in movesObj
    if (movesObj[move]){
      // if so, increment value
      movesObj[move]++;
    } else {
      // update the movesObj at move with value 1
      movesObj[move] = 1;
    }
  }
    // return movesObj;
  return movesObj;
}
