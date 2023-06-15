// repeat

// Write a function called **repeat,** which accepts a string and a number and returns a new string with the string repeated that number of times.

// **Do not use the built in repeat method**

// add whatever parameters you deem necessary - good luck!
function repeat(str, val) {
  // initialize output
  let output = "";
  // check if val = 0
  if (val === 0) return "";
  // loop over val
  for (let i = 0; i < val; i++) {
    // add str to output
    output += str;
  }
  // return output;
  return output;
}

console.log(repeat("Matt", 3)); // 'MattMattMatt'
console.log(repeat("Elie", 2)); // 'ElieElie'
console.log(repeat("Michael", 0)); // ''
