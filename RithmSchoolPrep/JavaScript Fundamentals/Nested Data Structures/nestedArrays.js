// Exercises
// Given the following array, write a function called printEvens that console.logs all of the even numbers

let nestedArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
  [9, 10, 11, 12],
];

function printEvens(array) {
  for (let row of array) {
    for (let cell of row) {
      if (cell % 2 === 0) {
        console.log(cell);
      }
    }
  }
}

printEvens(nestedArr1);

// 2
// 4
// 6
// 8
// 10
// 12

// Given the following array, write a function called sumTotal returns the sum of all numbers in the array

let nestedArr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function sumTotal(array) {
  let total = 0;
  for (let row of array) {
    for (let cell of row) {
      total += cell;
    }
  }
  console.log(total);
}

sumTotal(nestedArr2); // 21
