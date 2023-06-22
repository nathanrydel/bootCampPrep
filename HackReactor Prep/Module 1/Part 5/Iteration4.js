// 1
// computeFactorialOfN
// Write a function called "computeFactorialOfN".

// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output2 = computeFactorialOfN(4);
console.log(output2); // --> 24

function computeFactorialOfN(n) {
  if (n === 0) return 1;
  return n * computeFactorialOfN(n - 1);
}

// 2
// repeatString
// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output3 = repeatString("code", 3);
console.log(output3); // --> 'codecodecode'

function repeatString(string, num) {
  if (num === 0) return "";
  if (num === 1) return string;
  return string + repeatString(string, num - 1);
}
