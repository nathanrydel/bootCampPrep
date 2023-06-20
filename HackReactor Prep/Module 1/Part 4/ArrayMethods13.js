// 1
// getLargestElement
// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:

// It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

function getLargestElement(arr) {
  // check if arr is empty
  if (arr.length === 0) return 0;

  // declare a largestElement
  let largestElement = arr[0];

  // iterate over the elements of array
  for (let element of arr) {
    // check if element is larger than largestElement
    if (element > largestElement) {
      // if so, update largestElement
      largestElement = element;
    }
  }
  // return largestElement;
  return largestElement;
}

// 2
// computeSumOfAllElements
// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

var output2 = computeSumOfAllElements([1, 2, 3]);
console.log(output2); // --> 6

function computeSumOfAllElements(arr) {
  // declare a total
  let sum = 0;

  // iterate over the elements of the arr
  arr.forEach((element) => {
    // add the current element to the sum
    sum += element;
  });
  return sum;
}
