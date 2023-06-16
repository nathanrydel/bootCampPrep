// 1
// getAllElementsButFirst
// Write a function called "getAllElementsButFirst".

// Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]

function getAllElementsButFirst(array) {
  // your code here
  return array.slice(1);
}

// 2
// getAllElementsButLast
// Write a function called "getAllElementsButLast".

// Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

var input2 = [1, 2, 3, 4];
var output2 = getAllElementsButLast(input2);
console.log(output2); // --> [1, 2 , 3]

function getAllElementsButLast(array) {
  // your code here
  return array.slice(0, array.length - 1);
}

// 3
// removeFromFront
// Write a function called "removeFromFront".

// Given an array, "removeFromFront" returns the given array with its first element removed.

// Notes:

// You should be familiar with the method 'shift'.

var output3 = removeFromFront([1, 2, 3]);
console.log(output3); // --> [2, 3]

function removeFromFront(arr) {
  // your code here
  arr.shift();
  return arr;
}
