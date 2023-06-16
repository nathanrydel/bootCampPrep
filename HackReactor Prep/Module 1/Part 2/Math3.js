// 1
// computeTripledAreaOfARectangle
// Write a function called "computeTripledAreaOfARectangle".

// Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24

function computeTripledAreaOfARectangle(length, width) {
  // your code here
  return length * width * 3;
}

// 2
// computePerimeterOfACircle
// Write a function called "computePerimeterOfACircle".

// Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.

// Notes:

// Math.PI can be used for pi.

var output2 = computePerimeterOfACircle(4);
console.log(output2); // --> 25.132741228718345

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

function computePerimeterOfACircle(radius) {
  // your code here
  return Math.PI * radius * 2;
}

// 3
// computeAreaOfACircle
// Write a function called "computeAreaOfACircle".

// Given the radius of a circle, "computeAreaOfACircle" returns its area.

// Notes:

// Math.PI can be used for pi.

var output3 = computeAreaOfACircle(4);
console.log(output3); // --> 50.26548245743669

function computeAreaOfACircle(radius) {
  // your code here
  return Math.PI * Math.pow(radius, 2);
}

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
