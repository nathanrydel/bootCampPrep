// (stringIndexOf

// Write a functio); called **stringIndexOf,** which accepts two strings: the first is a word and the second is a single character.

// The function should return the first index in the word at which the character exists or `-1` if the character is not found.

// Do not use the built in `"string".indexOf()` function!

// add whatever parameters you deem necessary - good luck!
function stringIndexOf(str, match) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === match) {
      return i;
    }
  }
  return -1;
}

console.log(stringIndexOf("awesome", "e")); // 2
console.log(stringIndexOf("awesome", "z")); // -1
