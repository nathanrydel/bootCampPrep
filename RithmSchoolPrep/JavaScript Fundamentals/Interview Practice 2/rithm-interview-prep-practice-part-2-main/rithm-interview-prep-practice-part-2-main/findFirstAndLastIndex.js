// ### findFirstAndLastIndex

// Write a function called `findFirstAndLastIndex` that should accept an array and a number and return a new array where the first index is the index where that number is **first** found and the second index is the index where that number is **last** found. If the number does not exist at least twice, the function should return `-1`

// Examples:

console.log(findFirstAndLastIndex([1, 2, 3, 4, 5], 3)); // -1
console.log(findFirstAndLastIndex([1, 2, 2, 2, 5], 12)); // -1
console.log(findFirstAndLastIndex([1, 2, 2, 2, 5], 2)); // [1, 3]

// inputs: arr of nums, value
// ouput: arr of index postion of first find and last find OR -1

function findFirstAndLastIndex(arr, val) {
  // initialize firstPos
  let firstPos = -1;
  // initialize lastPos
  let lastPos = -1;

  // iterate over elements of arr
  for (let i = 0; i < arr.length; i++) {
    // check if the element equals the val
    if (arr[i] === val) {
      // if so, check if the firstPos equals -1;
      if (firstPos === -1) {
        // if so, update firstPos
        firstPos = i;
      }
      // else, update lastPos
      lastPos = i;
    }
  }

  // check if firstPos equals -1 OR lastPos equals -1 OR firstPos equals lastPos
  if (firstPos === -1 || lastPos === -1 || firstPos === lastPos) {
    // if so, return -1
    return -1;
  } else {
    // return [firstPos, lastPos];
    return [firstPos, lastPos];
  }
}
