// 1
// isEvenWithoutModulo
// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even.

// Notes:

// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true

function isEvenWithoutModulo(num) {
  // if num is 0, return 0
  if (num === 0) return true;

  // handle if num is negative, if so update to positive
  num = Math.abs(num);

  // subtract 2 while num is greater than or equal to 2
  while (num >= 2) {
    num -= 2;
  }
  // return the check if num is strictly 1
  return num === 0;
}
