// 1
// getElementsThatEqual10AtProperty
// Write a function called "getElementsThatEqual10AtProperty".

// Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

// Notes:

// If the array is empty, it should return an empty array.
// If the array contains no elements that are equal to 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 10, 50, 10],
};
var output = getElementsThatEqual10AtProperty(obj, "key");
console.log(output); // --> [10, 10]

function getElementsThatEqual10AtProperty(object, key) {
  // check if obj
  // check if object[key] is an array, if so return empty array
  if (Array.isArray(key)) return [];
  // check if object[key] is empty, if so return empty array
  if (object[key].length === 0) return [];

  // declare a result
  const result = [];
  // iterate over the keys in the object
  for (let prop in object) {
    // check if array contains a 10
    if (object[prop] === 10) {
      // if so, push to result
      result.push(object[prop]);
    }
  }
  return result;
}
