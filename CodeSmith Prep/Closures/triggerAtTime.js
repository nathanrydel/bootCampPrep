/* Declare a function 'trigger' that takes in a number K and a callback as arguments, and return another function. The returned function should take in a single argument and when invoked at the K-th time, it should run the callback on the passed-in argument and return that value, then reset the timer for that specific argument to be ready for the next time. However, the next invocation at the K-th time on the same value, it should run the callback with the previous returned value as the argument. And if it's not the time to run the callback, return 'Please invoke the function *time* time(s) more with *argument* to see the result'. */

// declare a function trigger that takes K: number & cb: function

// Example usage:
function callbackFunc(arg) {
  return arg.toUpperCase();
}

const triggeredFunc = trigger(3, callbackFunc);

console.log(triggeredFunc("hello")); // Please invoke the function 2 more time(s) with 'hello' to see the result.
console.log(triggeredFunc("hello")); // Please invoke the function 1 more time(s) with 'hello' to see the result.
console.log(triggeredFunc("hello")); // HELLO
console.log(triggeredFunc("hello")); // Please invoke the function 2 more time(s) with 'hello' to see the result.
console.log(triggeredFunc("world")); // Please invoke the function 2 more time(s) with 'world' to see the result.
console.log(triggeredFunc("world")); // Please invoke the function 1 more time(s) with 'world' to see the result.
console.log(triggeredFunc("world")); // WORLD
