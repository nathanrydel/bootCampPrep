// stringLastIndexOf

// Write a function called **stringLastIndexOf,** which accepts two strings: the first is a word and the second is a single character.

// The function should return the last index at which the character exists or `-1` if the character is not found.

// Do not use the built in `"string".lastIndexOf()` **function!**

// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(str, match) {
  let matchedIdx = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === match) {
      matchedIdx = i;
    }
  }
  if (matchedIdx === 0) {
    return -1;
  }
  return matchedIdx;
}

console.log(stringLastIndexOf("awesome", "e")); // 6
console.log(stringLastIndexOf("awesome", "z")); //

console.log(stringLastIndexOf("awesome", "e")); // 6
console.log(stringLastIndexOf("awesome", "z")); // -1
