// 1
// multiply
// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:

// It should not use the multiply operator - *

var output = multiply(4, 7);
console.log(output); // --> 28

function multiply(num1, num2) {
  // track if num1 or num2 is negative
  let negativeTracker = false;
  // update tracker if only one num is negative
  if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) negativeTracker = true;

  // declare total
  let total = 0;

  // get absolute values
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  // iterate num2 times
  for (let i = 0; i < num2; i++) {
    total += num1;
  }

  // evalute negativeTracker
  if (negativeTracker) {
    return -total;
  } else {
    return total;
  }
}
