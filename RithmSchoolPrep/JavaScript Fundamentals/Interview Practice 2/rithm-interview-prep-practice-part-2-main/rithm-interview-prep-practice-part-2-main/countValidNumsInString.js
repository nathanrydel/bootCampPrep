// ### countValidNumsInString

// Write a function called `countValidNumsInString` which counts the number of valid numbers in a string.

// Examples:

console.log(countValidNumsInString("")); // 0
console.log(countValidNumsInString("1")); // 1
console.log(countValidNumsInString("12")); // 2
console.log(countValidNumsInString("12abc3")); // 3
console.log(countValidNumsInString("1s2d3dsadas4")); // 4
console.log(countValidNumsInString("512,3,4!?!")); // 5
console.log(countValidNumsInString("123456")); // 6

// input: string
// output: count of numbers in the string

function countValidNumsInString(str) {
  // create RegEx to check for all numbers
  const regExp = /[0-9]/g;
  // use match to check for matches with RegEx
  const matches = str.match(regExp);
  // return matches length if not null OR 0
  return matches !== null ? matches.length : 0;
}
