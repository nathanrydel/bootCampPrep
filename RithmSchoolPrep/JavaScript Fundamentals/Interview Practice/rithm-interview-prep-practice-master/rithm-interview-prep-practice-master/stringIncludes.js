// ### stringIncludes

// Write a function called **stringIncludes,** which accepts two strings: the first string is a word and the second string is a single character.

// The function should return `true` if the first string includes the character, otherwise it should return `false`.

// Do not use the built in `String.includes()` function!

// Examples:

function stringIncludes(str, match) {
  // iterate over str
  for (const char of str) {
    if (char === match) return true;
  }
  return false;
}

console.log(stringIncludes("awesome", "e")); // true
console.log(stringIncludes("awesome", "z")); // false
