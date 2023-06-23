// 1
// Convert Array To Object 2
// Write a function 'transformArrayToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// Example input:

var input = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
];
// Function's return value (output):

// {
//   make : 'Ford',
//   model : 'Mustang',
//   year : 1964
// }
// Do not change the input string. Assume that all elements in the array will be of type 'string'.

// Note that the input may have a different number of elements than the given sample. For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

function transformArrayToObject(array) {
  // your code here
  const obj = Object.fromEntries(array);
  return obj;
}

var output = transformArrayToObject(input);
console.log(output);

function transformArrayToObject2(array) {
  // declare result obj
  const result = {};

  // iterate over the arr of array
  for (let i = 0; i < array.length; i++) {
    // make the array[i][0] the key and array[i][1] the value of result
    result[array[i][0]] = array[i][1];
  }
  return result;
}

var output2 = transformArrayToObject2(input);
console.log(output2);
