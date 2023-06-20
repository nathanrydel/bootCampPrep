// 1
// findSmallestElement
// Write a function called "findSmallestElement".

// Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

// Notes:

// If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

function findSmallestElement(arr) {
  // check if arr is empty
  if (arr.length === 0) return 0;
  // declare a smallestElement
  let smallestElement = arr[0];
  // iterate over the elements of the array
  for (let element of arr) {
    // check if element is larger than smallestElement
    if (element < smallestElement) {
      // if so, update smallestElement
      smallestElement = element;
    }
  }
  // return smallestElement;
  return smallestElement;
}

// 2
// findShortestElement
// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear.
// If the given array is empty, it should return an empty string.

var output2 = findShortestElement(["a", "two", "three"]);
console.log(output2); // --> 'a'

function findShortestElement(arr) {
  // your code here
  if (arr.length === 0) return "";
  // declare a shortestElement by length
  let shortestElement = arr[0];

  // iterate over the elements of the arr
  for (let element of arr) {
    // check if element length is less than shortestElement
    if (element.length < shortestElement.length) {
      // update shortestElement
      shortestElement = element;
    }
  }
  return shortestElement;
}
