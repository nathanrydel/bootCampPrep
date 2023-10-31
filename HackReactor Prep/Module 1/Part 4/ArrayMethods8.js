// 1
// removeElement
// Write a function called "removeElement".

// Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

// Notes:

// If all the elements match, it should return an empty array.
// If an empty array is passed in, it should return an empty array.

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

var outputTwo = removeElement([false, true], true);
console.log(outputTwo);

var outputThree = removeElement([true, true], true);
console.log(outputThree);

function removeElement(array, discarder) {
  // check if array is empty, if so return empty array
  if (array.length === 0) return [];

  // iterate over the elements of array
  for (let i = 0; i < array.length; i++) {
    // check if the element is equal to discarder
    if (array[i] === discarder) {
      // if so, splice the array from the index, and delete 1 value
      array.splice(i, 1);
      // decrement i to re-check
      i--;
    }
  }
  // return array;
  return array;
}

// 2
// keep
// Write a function called "keep".

// Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

// Notes:

// If no elements match, "keep" should return an empty array.

var output2 = keep([1, 2, 3, 2, 1], 2);
console.log(output2); // --> [2, 2]

function keep(array, keeper) {
  // iterate over the elements of the array
  for (let i = 0; i < array.length; i++) {
    // check if element equals keeper
    if (array[i] !== keeper) {
      // if so, splice out element
      array.splice(i, 1);
      // decrement index to ensure every element checked
      i--;
    }
  }
  // return result;
  return array;
}

// 3
// computeAverageOfNumbers
// Write a function called "computeAverageOfNumbers".

// Given an array of numbers, "computeAverageOfNumbers" returns their average.

// Notes:

// If given an empty array, it should return 0.
// To pass test cases, you must not create a new array

var input = [1, 2, 3, 4, 5];
var output3 = computeAverageOfNumbers(input);
console.log(output3); // --> 3

function computeAverageOfNumbers(nums) {
  // check if array is empty, if so return 0
  if (nums.length === 0) return 0;
  // initialize sum
  let sum = 0;
  // declare number of elements
  const numOfElements = nums.length;

  // iterate over the elements of nums array
  for (let element of nums) {
    // add element to sum
    sum += element;
  }
  // return sum / numOfElements;
  return sum / numOfElements;
}
