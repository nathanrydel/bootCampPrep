// 1
// getSmallestElementAtProperty
// Write a function called "getSmallestElementAtProperty".

// Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5],
};
var output = getSmallestElementAtProperty(obj, "key");
console.log(output); // --> 1

function getSmallestElementAtProperty(obj, key) {
  // check if obj[key] does not exist, if so return undefined
  if (obj[key] === undefined) return undefined;
  // check if obj[key] is not an array, if so return undefined
  if (!Array.isArray(obj[key])) return undefined;
  // check if obj[key] is empty, if so return undefined
  if (obj[key].length === 0) return undefined;

  // declare a minValue
  let minValue = Infinity;

  // iterate over the elements of the obj[key] array
  // check if element is less than minValue
  // if so, update minValue
  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] < minValue) {
      minValue = obj[key][i];
    }
  }

  // return minValue;
  return minValue;
}

// 2
// getLargestElementAtProperty
// Write a function called "getLargestElementAtProperty".

// Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.

var obj2 = {
  key: [1, 2, 4],
};
var output2 = getLargestElementAtProperty(obj2, "key");
console.log(output2); // --> 4

function getLargestElementAtProperty(obj, key) {
  // check if obj[key] does not exist, if so return undefined
  if (obj[key] === undefined) return undefined;
  // check if obj[key] is not an array, if so return undefined
  if (!Array.isArray(obj[key])) return undefined;
  // check if obj[key] is empty, if so return undefined
  if (obj[key].length === 0) return undefined;

  // declare maxValue
  let maxValue = -Infinity;

  // iterate over the elements of the obj[key] array
  // check if current element is greater than maxValue
  // if so, update maxValue
  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] > maxValue) {
      maxValue = obj[key][i];
    }
  }
  // return maxValue;
  return maxValue;
}

// 3
// getAllButLastElementOfProperty
// Write a function called "getAllButLastElementOfProperty".

// Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If the property at the given key is not an array, it return an empty array.
// If there is no property at the key, it should return an empty array.

var obj3 = {
  key: [1, 2, 3],
};
var output3 = getAllButLastElementOfProperty(obj3, "key");
console.log(output3); // --> [1,2]

function getAllButLastElementOfProperty(obj, key) {
  // check if obj[key] does not exist, if so return []
  if (obj[key] === undefined) return [];
  // check if obj[key] is not an array, if so return []
  if (!Array.isArray(obj[key])) return [];
  // check if obj[key] is empty, if so return []
  if (obj[key].length === 0) return [];

  // pop off the last value;
  obj[key].pop();
  return obj[key];
}

// 4
// getElementOfArrayProperty
// Write a function called "getElementOfArrayProperty".

// Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If the given index is out of range of the array located at the given key, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.

var obj4 = {
  key: ["Jamil", "Albrey"],
};
var output4 = getElementOfArrayProperty(obj4, "key", 0);
console.log(output4); // --> 'Jamil'

function getElementOfArrayProperty(obj, key, index) {
  // check if obj[key] does not exist, if so return undefined
  if (obj[key] === undefined) return undefined;
  // check if obj[key] is not an array, if so return undefined
  if (!Array.isArray(obj[key])) return undefined;
  // check if obj[key] is empty, if so return undefined
  if (obj[key].length === 0) return undefined;

  return obj[key][index];
}
