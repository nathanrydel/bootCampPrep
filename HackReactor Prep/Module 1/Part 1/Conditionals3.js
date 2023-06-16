// isLessThan
// Write a function called "isLessThan". Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

var output = isLessThan(9, 4);
console.log(output); // --> true

function isLessThan(num1, num2) {
  // your code here
  return num1 > num2;
}

// isGreaterThan
// Write a function called "isGreaterThan". Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

var output2 = isGreaterThan(11, 10);
console.log(output2); // --> false

function isGreaterThan(num1, num2) {
  // your code here
  return num2 > num1;
}

// isEqualTo
// Write a function called "isEqualTo". Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

var output3 = isEqualTo(11, 10);
console.log(output3); // --> false

function isEqualTo(num1, num2) {
  // your code here
  return num1 === num2;
}

// isEven
// Write a function called "isEven". Given a number, "isEven" returns whether it is even.

var output4 = isEven(11);
console.log(output4); // --> false

function isEven(num) {
  // your code here
  return num % 2 === 0;
}
