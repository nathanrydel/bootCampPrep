// ### minMaxKeyInObject

// Write a function called **minMaxKeyInObject** that accepts an object with numeric keys.*

// The function should return an array with the following format: `[lowestKey, highestKey]`

// Examples:

console.log(minMaxKeyInObject({ 2: "a", 7: "b", 1: "c", 10: "d", 4: "e" }));
// [1, 10]
console.log(minMaxKeyInObject({ 1: "Elie", 4: "Matt", 2: "Tim" }));
// [1, 4]

// input: object
// ouput: array of lowest key and highest key

// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(object) {
  // declare minKey and set to infinity
  let minKey = Infinity;
  // declare maxKey and set to -infinity
  let maxKey = -Infinity;

  // iterate over key in object
  for (let key in object) {
    // convert key to number
    let keyToNum = Number(key);
    // check if keyToNum < minKey
    if (keyToNum < minKey) {
      // if so, update minKey
      minKey = keyToNum;
    }
    // check if keyToNum > maxKey
    if (keyToNum > maxKey) {
      // if so, update maxKey
      maxKey = keyToNum;
    }
  }
  // return [minKey, maxKey];
  return [minKey, maxKey];
}
