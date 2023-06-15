// ### squareEvenNumbers

// Write a function called **squareEvenNumbers** which accepts an array and returns the sum of all of the even numbers in the array squared.

// Examples:

console.log(squareEvenNumbers([1, 2, 3, 4, 5])); // 20
console.log(squareEvenNumbers([1, 3, 5, 7])); // 0
console.log(squareEvenNumbers([5, 6, 7])); // 36

// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(arr) {
  // declare total and set to 0
  let total = 0;
  // iterate over array
  for (let num of arr) {
    // check if element is even
    if (num % 2 === 0) {
      // if so, square it and add to total
      total += num ** 2;
    }
  }
  // return total
  return total;
}
