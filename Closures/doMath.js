/*Declare a function 'doMath', which takes in a number (called 'initialValue') as a single argument and returns another function.
The returned function can take in 2 arguments (a string (called 'operator' –it could be any of 4 basic operators: addition, subtraction, multiplication, and division) and a number) or just a single argument. When the returned function is invoked with just an equal sign ('='), return the evaluated result from all previous expressions (starting at the 'initialValue'). Otherwise, return the message "Please enter '=' to see the result!".
Note: Do not use the 'eval()' method!
*/

/*********** Uncomment the lines below to test your code **********/
// const calc = doMath(3);
// console.log(calc('+', 3)); // 'Please enter '=' to see the result!'
// console.log(calc('*', 2)); // 'Please enter '=' to see the result!'
// console.log(calc('*', 2)); // 'Please enter '=' to see the result!'
// console.log(calc('/', 4)); // 'Please enter '=' to see the result!'
// console.log(calc('+', 1)); // 'Please enter '=' to see the result!'
// console.log(calc('=')); // 7 -> (3 + 3 * 2 * 2 / 4 + 1 = 7)