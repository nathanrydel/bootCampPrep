// 1
// computeSummationToN
// Write a function called "computeSummationToN".

// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:

// If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

var output = computeSummationToN(6);
console.log(output); // --> 21

function computeSummationToN(n) {
  // declare sum
  let sum = 0;
  // while n is greater than 0
  while (n > 0) {
    // add n to sum
    sum += n;
    // decrement n
    n--;
  }
  // return sum;
  return sum;
}
