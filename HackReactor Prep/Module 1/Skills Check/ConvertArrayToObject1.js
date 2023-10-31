/* eslint-disable for-direction */
// 1
// Convert Array To Object 1
// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:

// the first element of the array as the object's key, and
// the last element of the array as that key's value.
// Example input:

var input = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];
// Function's return value (output):

// {
//   Queen : 'Beyonce'
// }

// Do not change the input array. Assume all elements in the input array will be of type 'string'.

// Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

// E.g. it should handle input like:

// ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']
// Function's return value (output):

// {
//   Kevin : 'Coleman'
// }

function transformFirstAndLast(array) {
  // declare obj
  const obj = {};
  // declare key as first element of array
  const key = array[0];
  // declare value as last element of array
  const value = array[array.length - 1];
  // return obj[key] = value;
  obj[key] = value;
  return obj;
}

var output = transformFirstAndLast(input);
console.log(output);
