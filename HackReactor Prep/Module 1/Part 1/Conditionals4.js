// isOdd
// Write a function called "isOdd". Given a number, "isOdd" returns whether the given number is odd.

var output = isOdd(9);
console.log(output); // --> true

function isOdd(num) {
  // your code here
  return num % 2 === 1;
}

// isSameLength
// Write a function called "isSameLength".

// Given two words, "isSameLength" returns whether the given words have the same length.

var output2 = isSameLength("words", "super");
console.log(output2); // --> true

function isSameLength(word1, word2) {
  // your code here
  return word1.length === word2.length;
}

// areBothOdd
// Write a function called "areBothOdd".

// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

var output3 = areBothOdd(1, 3);
console.log(output3); // --> true

function areBothOdd(num1, num2) {
  // your code here
  return num1 % 2 === 1 && num2 % 2 === 1;
}

// Write a function called "isEitherEven".

// Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

var output4 = isEitherEven(1, 4);
console.log(output4); // --> true

function isEitherEven(num1, num2) {
  // your code here
  return num1 % 2 === 0 || num2 % 2 === 0;
}
