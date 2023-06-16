// 1
// getNthElement
// Write a function called "getNthElement".

// Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.

// Notes:

// If the array has a length of 0, it should return 'undefined'.

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
console.log(getNthElement([])); // --> undefined

function getNthElement(array, n) {
  // your code here
  return array[n];
}

// 2
// getFirstElement
// Write a function called "getFirstElement".

// Given an array, "getFirstElement" returns the first element of the given array.

// Notes:

// If the given array has a length of 0, it should return undefined.

var output2 = getFirstElement([1, 2, 3, 4, 5]);
console.log(output2); // --> 1
console.log(getFirstElement([])); // --> undefined

function getFirstElement(array) {
  // your code here
  return array[0];
}

// 3
// getLastElement
// Write a function called "getLastElement".

// Given an array, "getLastElement" returns the last element of the given array.

// Notes:

// If the given array has a length of 0, it should return 'undefined'.

var output3 = getLastElement([1, 2, 3, 4]);
console.log(output3); // --> 4
console.log(getLastElement([])); // --> undefined

function getLastElement(array) {
  // your code here
  return array[array.length - 1];
}
