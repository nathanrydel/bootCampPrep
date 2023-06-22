// 1
// multiplyBetween
// Write a function called "multiplyBetween".

// Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:

// The product between 1 and 4 is 1 * 2 * 3 = 6.
// If num2 is not greater than num1, it should return 0.

var output = multiplyBetween(2, 5);
console.log(output); // --> 24

function multiplyBetween(num1, num2) {
  // check if num1 & num2 are equal, return 0
  if (num1 === num2) return 0;
  // check if num1 > num2, return 0
  if (num1 > num2) return 0;
  // declare product
  let product = 1;

  // while num1 is less than num2
  while (num1 < num2) {
    // multiple product by num1
    product *= num1;
    // increment num1
    num1++;
  }
  // return product;
  return product;
}

// 2
// computeSumBetween
// Write a function called "computeSumBetween".

// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

// Notes:

// The sum between 1 and 4 is 1 + 2 + 3 = 6.
// If num2 is not greater than num1, it should return 0.

var output2 = computeSumBetween(2, 5);
console.log(output2); // --> 9

function computeSumBetween(num1, num2) {
  // check if num1 & num2 are equal, return 0
  if (num1 === num2) return 0;
  // check if num1 > num2, return 0
  if (num1 > num2) return 0;

  // declare sum
  let sum = 0;

  while (num1 < num2) {
    sum += num1;
    num1++;
  }

  return sum;
}
