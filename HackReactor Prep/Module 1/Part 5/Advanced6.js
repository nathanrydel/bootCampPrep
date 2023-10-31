// 1
// modulo
// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:

// Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// 0 % ANYNUMBER = 0.
// ANYNUMBER % 0 = NaN.
// If either operand is NaN, then the result is NaN.
// Modulo always returns the sign of the first number, even if the remainder is 0.

var output = modulo(-25, 4);
console.log(output); // --> 1

function modulo(num1, num2) {
  // if num1 is 0, return 0
  if (num1 === 0) return 0;
  // if num2 is 0, return NaN
  if (num2 === 0) return NaN;
  // if num1 OR num2 is NaN, return NaN
  if (Number.isNaN(num1) || Number.isNaN(num2)) return NaN;

  let negNum1 = false;
  // track if num1 is negative
  if (num1 < 0) {
    negNum1 = true;
  }

  // make both num1 and num2 absolute
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  // grab the highest whole number quotient
  const quotient = Math.floor(num1 / num2);
  // declare remainder as the quotient * num2 subtracted from num1
  const remainder = num1 - quotient * num2;

  if (negNum1) {
    return -remainder;
  } else {
    return remainder;
  }
}
