// ### countNumbers

// Write a function called **countNumbers**, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

// Examples:

console.log(countNumbers(["a", "b", "3", "awesome", "4"])); // 2
console.log(countNumbers(["32", "55", "awesome", "test", "100"])); // 3
console.log(countNumbers("[]")); // 0
console.log(countNumbers(["4", "1", "0", "NaN"])); // 3
console.log(countNumbers(["7", "12", "a", "", "6", "8", " "])); // 4

// input: array of strings
// output: number of numbers

// add whatever parameters you deem necessary - good luck!
function countNumbers(arr) {
  // declare numCounter
  let counter = 0;
  // iterate thru arr
  for (let ele of arr) {
    // convert to number with parseInt
    const toNumber = parseInt(ele);
    // check if isNaN
    const isNan = isNaN(toNumber);
    // check if isNaN is false
    if (isNan === false) {
      // if so, increment counter
      counter++;
    }
  }
  return counter;
}

console.log(parseInt(""));
