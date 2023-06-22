// 1
// getProductOfAllElementsAtProperty
// Write a function called "getProductOfAllElementsAtProperty".

// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

// Notes:

// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.

var obj = {
  key: [1, 2, 3, 4],
};
var output = getProductOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 24

function getProductOfAllElementsAtProperty(obj, key) {
  // check if obj[key] does not exist, if so return 0
  if (obj[key] === undefined) return 0;
  // check if obj[key] is not an array, if so return 0
  if (!Array.isArray(obj[key])) return 0;
  // check if obj[key] is empty, if so return 0
  if (obj[key].length === 0) return 0;

  // declare the product var
  let product = 1;
  // iterate over the elements of obj[key] arr
  // multiple the product by element
  for (let i = 0; i < obj[key].length; i++) {
    product *= obj[key][i];
  }
  // return product;
  return product;
}
