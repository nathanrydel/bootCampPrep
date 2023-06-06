// ### includes

// Write a function called **`includes`** which accepts a `collection`, a `value`, and an optional starting `index`. The function should return `true` if the `value` exists in the collection when we search starting from the starting `index`. Otherwise, it should return `false`.

// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.

// Tests:

console.log(includes([1, 2, 3], 1)); // true
console.log(includes([1, 2, 3], 1, 2)); // false
console.log(includes([1, 2, 3], 6)); // false

console.log(includes({ a: 1, b: 2 }, 1)); // true
console.log(includes({ a: 1, b: 2 }, "a")); // false

console.log(includes("abcd", "b")); // true
console.log(includes("abcd", "e")); // false
console.log(includes("abcd", "a", 2)); // false

// input: collection: array, string, OR object, value: string or number, and possibly index: number
// ouput: boolean

// add whatever parameters you deem necessary - good luck!
function includes(collection, value, index) {
  // check if collection is not an Array and not a string, therefore an object
  if (!Array.isArray(collection) && typeof collection !== "string") {
    // if so, iterate over the keys in the object
    for (let key in collection) {
      // check if value equals the collection value at key
      // if so return true
      if (value === collection[key]) return true;
    }
    // else return false
    return false;
  }

  // check if index does not exist (is undefined)
  if (index === undefined) {
    // if so, check and return if the indexOf value in collection is truthy
    return collection.indexOf(value) > -1;
  }

  // else return the check if collection starting from index includes the indexOf value
  return collection.slice(index).indexOf(value) > -1;
}
