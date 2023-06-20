// 1
// squareElements
// Write a function called "squareElements". Given an array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

function squareElements(arr) {
  // declare result array
  const result = [];
  // iterate over the elements of the array
  for (let i = 0; i < arr.length; i++) {
    // square the element
    const square = arr[i] ** 2;
    // push to the result
    result.push(square);
  }
  // return result;
  return result;
}

// 2
// filterOddElements
// Write a function called "filterOddElements".

// Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.

var output2 = filterOddElements([1, 2, 3, 4, 5]);
console.log(output2); // --> [1, 3, 5]

function filterOddElements(arr) {
  // your code here
  // declare oddArr
  const oddArr = [];
  arr.forEach((element) => {
    if (element % 2 === 1) {
      oddArr.push(element);
    }
  });
  return oddArr;
}

// 3
// computeProductOfAllElements
// Submitted on Today at 5:20 PM
// Write a function called "computeProductOfAllElements".

// Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

// Notes:

// If given array is empty, it should return 0.

var output3 = computeProductOfAllElements([2, 5, 6]);
console.log(output3); // --> 60

function computeProductOfAllElements(arr) {
  // your code here
  // check if arr is empty, if so return 0
  if (arr.length === 0) return 0;
  // declare a total and set equal to 1
  let total = 1;
  // iterate over elements of arr
  for (let element of arr) {
    // multiply total by element
    total *= element;
  }

  // return total
  return total;
}
