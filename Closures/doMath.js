/*Declare a function 'doMath', which takes in a number (called 'initialValue') as a single argument and returns another function.
The returned function can take in 2 arguments (a string (called 'operator' –it could be any of 4 basic operators: addition, subtraction, multiplication, and division) and a number) or just a single argument. When the returned function is invoked with just an equal sign ('='), return the evaluated result from all previous expressions (starting at the 'initialValue'). Otherwise, return the message "Please enter '=' to see the result!".
Note: Do not use the 'eval()' method!
*/

// delcare a function that takes in 1 arg, initialValue: number
function doMath(initialValue) { 
  // declare a result variable
  let result = initialValue;
  // return a function that takes 2 args, operator, and number
  return function (operator, number) {
    // check if operator is +, -, *, /
    if (operator === '+') {
      // perform operation
      result += number;
      // return required string
      return "Please enter '=' to see the result!";
    } else if (operator === '-') {
      result -= number;
      return "Please enter '=' to see the result!";
    } else if (operator === '*') {
      result *= number;
      return "Please enter '=' to see the result!";
    } else if (operator === '/') {
      result /= number;
      return "Please enter '=' to see the result!";
    } else if (operator === '=') {
      // return result
      return result;
    }
  }
}

/*********** Uncomment the lines below to test your code **********/
const calc = doMath(3);
console.log(calc('+', 3)); // 'Please enter '=' to see the result!'
console.log(calc('*', 2)); // 'Please enter '=' to see the result!'
console.log(calc('*', 2)); // 'Please enter '=' to see the result!'
console.log(calc('/', 4)); // 'Please enter '=' to see the result!'
console.log(calc('+', 1)); // 'Please enter '=' to see the result!'
console.log(calc('=')); // 7 -> (3 + 3 * 2 * 2 / 4 + 1 = 7)

/** Refactor the function to have less repetition */

function refactoredDoMath(initialValue) {
  // declare a result variable and set to initialValue
  let result = initialValue;
  // declare a helper function that takes an operator and number
  function performOperation(operator, number) {
    // check which operator and perform related operation
    if (operator === '+') {
      result += number;
    } else if (operator === '-') {
      result -= number;
    } else if (operator === '*') {
      result *= number;
    } else if (operator === '/') {
      result /= number;
    }
  }
  // return a function that takes an operator and number
  return function (operator, number) {
    // check if operator is =
    if (operator === '=') {
      // if so return result
      return result;
    // also check if operator exists and is not =
    } else if (operator && operator !== '=') {
      // invoke helper function with operator and number
      performOperation(operator, number);
      // return required string invoking helper function
      return "Please enter '=' to see the result!";
    }
  };
}

const calc2 = refactoredDoMath(3);
console.log(calc2('+', 3)); // 'Please enter '=' to see the result!'
console.log(calc2('*', 2)); // 'Please enter '=' to see the result!'
console.log(calc2('*', 2)); // 'Please enter '=' to see the result!'
console.log(calc2('/', 4)); // 'Please enter '=' to see the result!'
console.log(calc2('+', 1)); // 'Please enter '=' to see the result!'
console.log(calc2('=')); // 7 -> (3 + 3 * 2 * 2 / 4 + 1 = 7)