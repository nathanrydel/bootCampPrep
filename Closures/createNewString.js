/* Declare a function 'createNewString', which takes in a string and a callback as arguments, and returns another function. The returned function should take in no arguments. Depending on the number of times the returned function is invoked, it should run the callback on the corresponding character in the string if this is the first time the character has been appeared so far and return the value evaluated by the callback, otherwise, return the character itself. If all the characters have been iterated, return a new string constructed by all the values returned at each function invocation. */

// inputs: string, callback
// output: function

// declare function createNewString that takes a string and a callback

// Uncomment the lines below to test your code!
// function uppercaseCallback(char) {
//   return char.toUpperCase();
// }

// const newStringFn = createNewString('hello', uppercaseCallback);
// console.log(newStringFn());  // Output: "H"
// console.log(newStringFn());  // Output: "E"
// console.log(newStringFn());  // Output: "L"
// console.log(newStringFn());  // Output: "l"
// console.log(newStringFn());  // Output: "O"
// console.log(newStringFn());  // Output: "HELLO"
