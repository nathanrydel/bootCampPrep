function countIfHasValue(object, value) {
  // initialize counter
  let counter = 0;
  // iterate over key in object
  for (let key in object) {
    // check if key includes value
    if (object[key].includes(value)) counter++;
  }
  // return counter
  return counter;
}

let counterObj = {
  a: [1, 10, 3],
  b: [4, 1, 7],
  c: [7, 7, 7],
  d: [10, 7, 12],
};

console.log(countIfHasValue(counterObj, 1)); // 2
console.log(countIfHasValue(counterObj, 7)); // 3
console.log(countIfHasValue(counterObj, 10)); // 2
console.log(countIfHasValue(counterObj, 13)); // 0
