// Write a function called **prependToString,** which accepts two strings.

// The function should return a new string with the second string prepended to the first string.

// Examples:

console.log(prependToString("awesome", "very")); // 'veryawesome'
console.log(prependToString("world", "hello ")); // 'hello world'
console.log(prependToString("nothing", "")); // 'nothing'

function prependToString(str1, str2) {
  return str2 + str1;
}
