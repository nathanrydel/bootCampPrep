// 1
// or
// Write a function called "or".

// Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator. Notes:

// Do not use the || operator.
// Use ! and && operators instead.

var output = or(true, false);
console.log(output); // --> true;

function or(expression1, expression2) {
  // your code here
  return !(!expression1 && !expression2);
}

// 2
// isEitherEvenOrAreBoth7
// Write a function called "isEitherEvenOrAreBoth7".

// Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

var output2 = isEitherEvenOrAreBoth7(3, 7);
console.log(output2); // --> false

var output3 = isEitherEvenOrAreBoth7(2, 3);
console.log(output3); // --> true

function isEitherEvenOrAreBoth7(num1, num2) {
  // declare atleastOneEven
  const atleastOneEven = num1 % 2 === 0 || num2 % 2 === 0;
  // declare bothSevens
  const bothSevens = num1 === 7 && num2 === 7;

  if (atleastOneEven || bothSevens) {
    return true;
  } else {
    return false;
  }
}

// 3
// isEitherEvenAndLessThan9
// Write a function called "isEitherEvenAndLessThan9".

// Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

var output4 = isEitherEvenAndLessThan9(2, 4);
console.log(output4); // --> true

var output5 = isEitherEvenAndLessThan9(72, 2);
console.log(output5); // --> false

function isEitherEvenAndLessThan9(num1, num2) {
  // declare eitherEven
  const eitherEven = num1 % 2 === 0 || num2 % 2 === 0;
  // declare bothLessThan9
  const bothLessThan9 = num1 < 9 && num2 < 9;

  if (eitherEven && bothLessThan9) {
    return true;
  } else {
    return false;
  }
}
