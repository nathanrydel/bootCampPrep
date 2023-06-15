// ### indexOf

// Write a function called **indexOf,** which accepts an array and a number.

// The function should return the first index at which the value exists or `-1` if the value is not found.

// Do not use the built in `Array.indexOf()` function!

// Examples:

let arr = [5, 10, 15, 20];
console.log(indexOf(arr, 20)); // 3

let arr2 = [1, 2, 3, 4, 5];
console.log(indexOf(arr2, 2)); // 1

let arr3 = [1, 2];
console.log(indexOf(arr3, 10)); // -1

// input: arr:array & num:number
// ouput: indexPos:number or -1

// add whatever parameters you deem necessary - good luck!
function indexOf(arr, num) {
  // iterate over arr
  for (let indexPos = 0; indexPos < arr.length; indexPos++) {
    // check if element at indexPos equals num
    if (arr[indexPos] === num) {
      // if so, return indexPos
      return indexPos;
    }
  }
  // else return -1
  return -1;
}
