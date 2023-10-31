// 1
// isOddWithoutModulo
// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:

// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.

var output = isOddWithoutModulo(-17);
console.log(output); // --> true

function isOddWithoutModulo(num) {
  // if num is 0, return 0
  if (num === 0) return false;

  // handle if num is negative, if so update to positive
  num = Math.abs(num);

  // subtract 2 while num is greater than or equal to 2
  while (num >= 2) {
    num -= 2;
  }
  // return the check if num is strictly 1
  return num === 1;
}
