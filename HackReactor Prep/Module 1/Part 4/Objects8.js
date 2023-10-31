// 1
// getElementsGreaterThan10AtProperty
// Write a function called "getElementsGreaterThan10AtProperty".

// Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.

// Notes:

// If the array is empty, it should return an empty array.
// If the array contains no elements greater than 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 20, 30],
};
var output = getElementsGreaterThan10AtProperty(obj, "key");
console.log(output); // --> [20, 30]

function getElementsGreaterThan10AtProperty(obj, key) {
  // check if obj[key] is not an array, if so return empty arr
  if (!Array.isArray(obj[key])) return [];
  // check if obj[key] does not exist, if so return empty arr
  if (obj[key] === undefined) return [];
  // check if obj[key] is empty, if so return empty arr
  if (obj[key].length === 0) return [];

  // declare result array
  const result = [];

  // iterate over the elements of the obj[key] array
  for (let i = 0; i < obj[key].length; i++) {
    // check if element is greater than 10
    if (obj[key][i] > 10) {
      // if so, push to result
      result.push(obj[key][i]);
    }
  }
  // return result;
  return result;
}

// 2
// getFirstElementOfProperty
// Write a function called "getFirstElementOfProperty".

// Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.

var obj2 = {
  key: [1, 2, 4],
};
var output2 = getFirstElementOfProperty(obj2, "key");
console.log(output2); // --> 1

function getFirstElementOfProperty(obj, key) {
  // check if obj[key] is not an array, if so return empty arr
  if (!Array.isArray(obj[key])) return undefined;
  // check if obj[key] does not exist, if so return empty arr
  if (obj[key] === undefined) return undefined;
  // check if obj[key] is empty, if so return empty arr
  if (obj[key].length === 0) return undefined;

  // return the first element of the obj[key] array
  return obj[key][0];
}

// 3
// getNthElementOfProperty
// Write a function called "getNthElementOfProperty".

// Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If n is out of range, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.

var obj3 = {
  key: [1, 2, 6],
};
var output3 = getNthElementOfProperty(obj3, "key", 1);
console.log(output3); // --> 2

function getNthElementOfProperty(obj, key, n) {
  // check if obj[key] is not an array, if so return undefined
  if (!Array.isArray(obj[key])) return undefined;
  // check if obj[key] does not exist, if so return undefined
  if (obj[key] === undefined) return undefined;
  // check if obj[key] is empty, if so return undefined
  if (obj[key].length === 0) return undefined;
  // check if n is greater than obj[key].length, if so return undefined
  if (n > obj[key].length) return undefined;

  // iterate over the elements of the obj[key] array
  for (let i = 0; i < obj[key].length; i++) {
    // check if index equals n
    // if so return element;
    if (i === n) return obj[key][i];
  }
}

// 4
// getLastElementOfProperty
// Write a function called "getLastElementOfProperty".

// Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// if the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.

var obj4 = {
  key: [1, 2, 5],
};
var output4 = getLastElementOfProperty(obj4, "key");
console.log(output4); // --> 5

function getLastElementOfProperty(obj, key) {
  // check if obj[key] does not exist, if so return undefined
  if (obj[key] === undefined) return undefined;
  // check if obj[key] is not an array, if so return undefined
  if (!Array.isArray(obj[key])) return undefined;
  // check if obj[key] is empty, if so return undefined
  if (obj[key].length === 0) return undefined;

  // return the last element of the obj[key] array
  return obj[key][obj[key].length - 1];
}
