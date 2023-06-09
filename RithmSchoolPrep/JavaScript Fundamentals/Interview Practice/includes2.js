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

// input: collection: object, array, string; value: number; index: number (opt)
// ouput: Boolean

// add whatever parameters you deem necessary - good luck!
function includes(collection, value, index) {
  // check if collection is not an array AND not a string
  if (!Array.isArray(collection) && typeof collection !== "string") {
    // handling the object
    // iterate over the keys in collection
    for (let key in collection) {
      // check if the value is equal to the value of the key
      if (value === collection[key]) {
        // if so return true
        return true;
      }
    }
    // return false;
    return false;
  }

  // check if index var does not exist (undefined)
  if (index === undefined) {
    // if so, check and return the indexOf value is truthy in collection
    return collection.indexOf(value) > -1;
  }
  // return if collection starting from index has the indexOf value (greater than -1)
  return collection.slice(index).indexOf(value) > -1;
}
