// 1
// getOddLengthWordsAtProperty
// Write a function called "getOddLengthWordsAtProperty".

// Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If it contains no odd length elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the given key, it should return an empty array.

var obj = {
  key: ["It", "has", "some", "words"],
};
var output = getOddLengthWordsAtProperty(obj, "key");
console.log(output); // --> ['has', 'words']

function getOddLengthWordsAtProperty(obj, key) {
  // check if obj[key] is not a property, if so return empty array
  if (obj[key] === undefined) return [];
  // check if obj[key] is not an array, if so return empty array
  if (!Array.isArray(obj[key])) return [];
  // check if obj[key] array is empty, if so return empty array
  if (obj[key].length === 0) return [];

  // declare empty results array
  const results = [];

  // iterate over the elements of obj[key] array
  for (let i = 0; i < obj[key].length; i++) {
    // check if element length is odd
    if (obj[key][i].length % 2 !== 0) {
      // if so, push element to results array
      results.push(obj[key][i]);
    }
  }
  // return results;
  return results;
}

// 2
// getAverageOfElementsAtProperty
// Write a function called "getAverageOfElementsAtProperty".

// Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.

// Notes:

// If the array at the given key is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.

var obj2 = {
  key: [1, 2, 3],
};
var output2 = getAverageOfElementsAtProperty(obj2, "key");
console.log(output2); // --> 2

function getAverageOfElementsAtProperty(obj, key) {
  // check if obj[key] is not a property, if so return 0
  if (obj[key] === undefined) return 0;
  // check if obj[key] is not an array, if so return 0
  if (!Array.isArray(obj[key])) return 0;
  // check if obj[key] array is empty, if so return 0
  if (obj[key].length === 0) return 0;

  // declare sum var
  let sum = 0;

  // iterate over the elements of the obj[key] array
  for (let i = 0; i < obj[key].length; i++) {
    // add the element to the sum
    sum += obj[key][i];
  }

  // return sum / obj[key].length;
  return sum / obj[key].length;
}

// 3
// getEvenLengthWordsAtProperty
// Write a function called "getEvenLengthWordsAtProperty".

// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If it contains no even length elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.

var obj3 = {
  key: ["a", "long", "game"],
};
var output3 = getEvenLengthWordsAtProperty(obj3, "key");
console.log(output3); // --> ['long', 'game']

function getEvenLengthWordsAtProperty(obj, key) {
  // check if obj[key] is not a property, if so return []
  if (obj[key] === undefined) return [];
  // check if obj[key] is not an array, if so return []
  if (!Array.isArray(obj[key])) return [];
  // check if obj[key] array is empty, if so return []
  if (obj[key].length === 0) return [];

  // iterate over the elements of the obj[key] array
  // check if the length of the element is odd
  // if so, splice out the element and revert the index
  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i].length % 2 !== 0) {
      obj[key].splice(i, 1);
      i--;
    }
  }
  // return obj[key];
  return obj[key];
}
