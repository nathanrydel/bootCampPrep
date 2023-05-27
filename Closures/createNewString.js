/* eslint-disable no-prototype-builtins */
/* Declare a function 'createNewString', which takes in a string and a callback as arguments, and returns another function. The returned function should take in no arguments. Depending on the number of times the returned function is invoked, it should run the callback on the corresponding character in the string if this is the first time the character has been appeared so far and return the value evaluated by the callback, otherwise, return the character itself. If all the characters have been iterated, return a new string constructed by all the values returned at each function invocation. */

// inputs: string, callback
// output: function

// declare function createNewString that takes a string and a callback
function createNewString(string, callback) {
  // declare a const charMap as empty object to store characters
  const charMap = {};
  // declare a let variable newString to store new string as empty string
  let newString = "";
  // declare let variable to track index, set to 0
  let index = 0;

  // create a function newStringFn() that will be returned
  function newStringFn() {
    // check if index >= string.length
    if (index >= string.length) {
      return newString;
    }
    // declare const char and set equal to string at index
    const char = string[index];
    // increment index
    index++;

    // check if char is a property of charMap
    if (charMap.hasOwnProperty(char)) {
      // if yes, add char to newString
      newString += char;
      // return the char
      return char;
    } else {
      // declare const result and set equal to invoking callback on char
      const result = callback(char);
      // assign result as value of charMap[char] key
      charMap[char] = result;
      // add result to newString;
      newString += result;
      // return the result
      return result;
    }
  }
  // return function
  return newStringFn;
}

// Uncomment the lines below to test your code!
function uppercaseCallback(char) {
  return char.toUpperCase();
}

const newStringFn = createNewString("hello", uppercaseCallback);
console.log(newStringFn()); // Output: "H"
console.log(newStringFn()); // Output: "E"
console.log(newStringFn()); // Output: "L"
console.log(newStringFn()); // Output: "l"
console.log(newStringFn()); // Output: "O"
console.log(newStringFn()); // Output: "HELLO"
