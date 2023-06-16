// 1
// computePower
// Write a function called "computePower".

// Given a number and an exponent, "computePower" returns the given number, raised to the given exponent.

var output = computePower(2, 3);
console.log(output); // --> 8

function computePower(num, exponent) {
  // your code here
  return Math.pow(num, exponent);
}

// 2
// computeSquareRoot
// Write a function called "computeSquareRoot". Given a number, "computeSquareRoot" returns its square root.

var output2 = computeSquareRoot(9);
console.log(output2); // --> 3

function computeSquareRoot(num) {
  // your code here
  return Math.sqrt(num);
}

// 3
// doubleSquareRootOf
// Write a function called "doubleSquareRootOf". Given a number, "doubleSquareRootOf" returns double its square root.

var output3 = doubleSquareRootOf(121);
console.log(output3); // --> 22

function doubleSquareRootOf(num) {
  // your code here
  return Math.sqrt(num) * 2;
}
