// Write a function called **squareEvenNumbers** which accepts an array and returns the sum of all of the even numbers in the array squared.

function squareEvenNumbers(arr) {
  // initialize sum
  let sum = 0;
  // iterate over num of arr
  for (let num of arr) {
    // check if even
    // if so, add square to sum
    if (num % 2 === 0) sum += num ** 2;
  }
  // return sum
  return sum;
}

console.log(squareEvenNumbers([1, 2, 3, 4, 5])); // 20
console.log(squareEvenNumbers([1, 3, 5, 7])); // 0
console.log(squareEvenNumbers([5, 6, 7])); // 36
