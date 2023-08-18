// add whatever parameters you deem necessary - good luck!
function includes(collection, value, idx) {
  // check if collection is not Array and not string
  if (!Array.isArray(collection) && typeof collection !== "string") {
    // if so, treat as object
    // iterate over keys in object
    for (let key in collection) {
      // check if key:value === value
      return collection[key] === value;
    }
  }

  // check if idx is undefined
  if (idx === undefined) {
    // if so, check and return if collection includes value
    return collection.includes(value);
  }

  // check and return if collection starting from idx includes value
  return collection.slice(idx).includes(value);
}

console.log(includes([1, 2, 3], 1)); // true
console.log(includes([1, 2, 3], 1, 2)); // false
console.log(includes([1, 2, 3], 6)); // false

console.log(includes({ a: 1, b: 2 }, 1)); // true
console.log(includes({ a: 1, b: 2 }, "a")); // false

console.log(includes("abcd", "b")); // true
console.log(includes("abcd", "e")); // false
console.log(includes("abcd", "a", 2)); // false
