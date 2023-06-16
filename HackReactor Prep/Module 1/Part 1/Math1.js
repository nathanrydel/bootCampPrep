// 1
// average
// Write a function called "average".

// Given two numbers, "average" returns their average.

var output = average(4, 6);
console.log(output); // --> 5

function average(num1, num2) {
  // your code here
  return (num1 + num2) / 2;
}

// 2
// computeAreaOfATriangle
// Write a function called "computeAreaOfATriangle".

// Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.

var output2 = computeAreaOfATriangle(4, 6);
console.log(output2); // --> 12

function computeAreaOfATriangle(base, height) {
  // your code here
  return (base * height) / 2;
}

// 3
// cube
// Write a function called "cube".

// Given a number, "cube" returns the cube of that number.

var output3 = cube(3);
console.log(output3); // --> 27

function cube(num) {
  // your code here
  return num ** 3;
}

// 4
// square
// Write a function called "square".

// Given a number, "square" should return the square of the given number.

var output4 = square(5);
console.log(output4); // --> 25

function square(num) {
  // your code here
  return num ** 2;
}
