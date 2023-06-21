// 1
// getSquaredElementsAtProperty
// Write a function called "getSquaredElementsAtProperty".

// Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.

var obj = {
  key: [2, 1, 5],
};
var output = getSquaredElementsAtProperty(obj, "key");
console.log(output); // --> [4, 1, 25]

function getSquaredElementsAtProperty(obj, key) {
  // check if obj[key] does not exist, if so return []
  if (obj[key] === undefined) return [];
  // check if obj[key] is not an array, if so return []
  if (!Array.isArray(obj[key])) return [];
  // check if obj[key] array is empty, if so return []
  if (obj[key].length === 0) return [];

  // declare a squaredArr
  const squaredArr = [];
  // iterate over the elements of the obj[key] array
  // push the square of the element to the squaredArr
  for (let i = 0; i < obj[key].length; i++) {
    squaredArr.push(Math.pow(obj[key][i], 2));
  }
  // return squaredArr;
  return squaredArr;
}

// 2
// getOddElementsAtProperty
// Write a function called "getOddElementsAtProperty".

// Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If it contains no odd elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.

var obj2 = {
  key: [1, 2, 3, 4, 5],
};
var output2 = getOddElementsAtProperty(obj2, "key");
console.log(output2); // --> [1, 3, 5]

function getOddElementsAtProperty(obj, key) {
  // check if obj[key] does not exist, if so return []
  if (obj[key] === undefined) return [];
  // check if obj[key] is not an array, if so return []
  if (!Array.isArray(obj[key])) return [];
  // check if obj[key] array is empty, if so return []
  if (obj[key].length === 0) return [];

  // iterate over the elements of the obj[key] array
  // check if element is even
  // if so, splice element and revert index

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] % 2 === 0) {
      obj[key].splice(i, 1);
      i--;
    }
  }
  // return obj[key];
  return obj[key];
}

// 3
// getEvenElementsAtProperty
// Write a function called "getEvenElementsAtProperty".

// Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If the array contains no even elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the given key, it should return an empty array.

var obj3 = {
  key: [1000, 11, 50, 17],
};
var output3 = getEvenElementsAtProperty(obj3, "key");
console.log(output3); // --> [1000, 50]

function getEvenElementsAtProperty(obj, key) {
  // check if obj[key] does not exist, if so return []
  if (obj[key] === undefined) return [];
  // check if obj[key] is not an array, if so return []
  if (!Array.isArray(obj[key])) return [];
  // check if obj[key] array is empty, if so return []
  if (obj[key].length === 0) return [];

  // iterate over the elements of the obj[key] array
  // check if element is even
  // if so, splice element and revert index

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] % 2 !== 0) {
      obj[key].splice(i, 1);
      i--;
    }
  }
  // return obj[key];
  return obj[key];
}
