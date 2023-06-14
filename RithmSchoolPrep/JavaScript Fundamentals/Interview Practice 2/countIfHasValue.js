// ### countIfHasValue

// Write a function called `countIfHasValue` which accepts an object where all of the values are arrays. It also accepts a numeric value that is being searched for. The function should return the number of arrays in which the searched-for value appears.

// Examples:

let obj = {
  a: [1, 1, 3],
  b: [4, 1, 7],
  c: [7, 7, 7],
  d: [10, 7, 12],
};
console.log(countIfHasValue(obj, 1)); // 2
console.log(countIfHasValue(obj, 7)); // 3
console.log(countIfHasValue(obj, 10)); // 1
console.log(countIfHasValue(obj, 13)); // 0

// input: Object with arrays as values, search value
// ouput: number of values in obj

function countIfHasValue(obj, value) {
  // declare count
  let count = 0;
  // iterate over keys in obj
  for (const key in obj) {
    // check if obj at key includes value
    if (obj[key].includes(value)) {
      // increment count
      count++;
    }
  }
  // return count
  return count;
}
