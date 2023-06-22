// 1
// getSumOfAllElementsAtProperty
// Write a function called "getSumOfAllElementsAtProperty".

// Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

// Notes:

// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the key, it should return 0.

var obj = {
  key: [4, 1, 8],
};
var output = getSumOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 13

function getSumOfAllElementsAtProperty(obj, key) {
  // check if obj[key] does not exist, if so return 0
  if (obj[key] === undefined) return 0;
  // check if obj[key] is not an array, if so return 0
  if (!Array.isArray(obj[key])) return 0;
  // check if obj[key] is empty, if so return 0
  if (obj[key].length === 0) return 0;

  // declare sum
  let sum = 0;

  // iterate over the elements of the obj[key] array
  for (let i = 0; i < obj[key].length; i++) {
    // add the element to sum
    sum += obj[key][i];
  }
  // return sum;
  return sum;
}
