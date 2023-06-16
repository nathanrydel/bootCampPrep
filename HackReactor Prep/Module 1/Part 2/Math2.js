// 1
// computeAreaOfARectangle
// Write a function called "computeAreaOfARectangle".

// Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

function computeAreaOfARectangle(length, width) {
  // your code here
  return length * width;
}

// 2
// computePerimeterOfARectangle
// Write a function called "computePerimeterOfARectangle".

// Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimeter.

var output2 = computePerimeterOfARectangle(5, 2);
console.log(output2); // --> 14

function computePerimeterOfARectangle(length, width) {
  // your code here
  return length * 2 + width * 2;
}

// 3
// computePerimeterOfATriangle
// Write a function called "computePerimeterOfATriangle".

// Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimeter.

var output3 = computePerimeterOfATriangle(6, 7, 10);
console.log(output3); // --> 23

function computePerimeterOfATriangle(side1, side2, side3) {
  // your code here
  return side1 + side2 + side3;
}
