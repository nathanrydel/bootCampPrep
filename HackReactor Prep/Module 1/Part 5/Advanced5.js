// 1
// sumDigits
// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

// If the number is negative, the first digit should count as negative.

// Notes:

// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

var output2 = sumDigits(-316);
console.log(output2); // --> 4

function sumDigits(num) {
  // declare a sum var
  let sum = 0;
  // Convert the num to a string to iterate over it
  let toString = num.toString();

  // iterate over the elements of toString
  for (let i = 0; i < toString.length; i++) {
    // check if first element is -
    if (toString[i] === "-") {
      // if so, subtract next element from sum
      sum -= Number.parseInt(toString[i + 1]);
      i++;
      // else
    } else {
      // add element to sum
      sum += Number.parseInt(toString[i]);
    }
  }
  // return sum;
  return sum;
}
