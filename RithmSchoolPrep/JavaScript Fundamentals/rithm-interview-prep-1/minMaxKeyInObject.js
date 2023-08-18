// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj) {
  // initialize maxKey
  let maxKey = Number.NEGATIVE_INFINITY;
  // initialize minKey
  let minKey = Number.POSITIVE_INFINITY;
  // iterate over key in obj
  for (let key in obj) {
    // check if key > maxKey
    // if so, update as number
    if (+key > maxKey) maxKey = +key;
    // check if key < minKey
    // if so, update as number
    if (+key < minKey) minKey = +key;
  }
  // return [minKey, maxKey]
  return [minKey, maxKey];
}

console.log(minMaxKeyInObject({ 2: "a", 7: "b", 1: "c", 10: "d", 4: "e" }));
// [1, 10]
console.log(minMaxKeyInObject({ 1: "Elie", 4: "Matt", 2: "Tim" }));
// [1, 4]
