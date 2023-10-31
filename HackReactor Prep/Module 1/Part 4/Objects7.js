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

function getElementsThatEqual10AtProperty(obj, key) {
  // check if there is not property at the key if so, return empty array
  if (obj[key] === undefined) return [];
  // check if obj[key] is an array, if so return empty array
  if (Array.isArray(key)) return [];
  // check if obj[key] is empty, if so return empty array
  if (obj[key].length === 0) return [];

  // declare a result
  const result = [];
  // iterate over the properties in the obj
  for (let i = 0; i < obj[key].length; i++) {
    // check if array contains a 10
    if (obj[key][i] === 10) {
      // if so, push to result
      result.push(obj[key][i]);
    }
  }
  return result;
}

// 2
// getElementsLessThan100AtProperty
// Write a function called "getElementsLessThan100AtProperty".

// Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.

// Notes:

// If the array is empty, it should return an empty array.
// If the array contains no elements less than 100, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.

var obj2 = {
  key: [1000, 20, 50, 500],
};
var output2 = getElementsLessThan100AtProperty(obj2, "key");
console.log(output2); // --> [20, 50]

function getElementsLessThan100AtProperty(obj, key) {
  // check if property at given key is not an array, if so return empty array
  if (Array.isArray(obj[key]) === false) return [];
  // check if obj at key does not exist, if so return empty array
  if (obj[key] === undefined) return [];
  // check if obj is empty, if so return return empty array
  if (obj[key].length === 0) return [];

  // declare a result
  const result = [];

  // iterate over the properties in the obj
  for (let i = 0; i < obj[key].length; i++) {
    // check if property is less than 100
    if (obj[key][i] < 100) {
      // if so, push to result array
      result.push(obj[key][i]);
    }
  }
  // return result;
  return result;
}
