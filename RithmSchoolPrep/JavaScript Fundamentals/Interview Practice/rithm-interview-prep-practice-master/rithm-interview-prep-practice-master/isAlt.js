// ### isAlt

// Create a function `isAlt` that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// Examples:

console.log(isAlt("amazon")); // true
console.log(isAlt("apple")); // false
console.log(isAlt("banana")); // true
console.log(isAlt("BAnANaS")); // true

// add whatever parameters you deem necessary - good luck!
function isAlt(word) {
  // declare vowels
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // iterate over string starting a index 1
  for (let i = 1; i < word.length; i++) {
    // check if letter - 1 is vowel AND letter is vowel OR
    // check if letter - 1 is consonant AND letter is consonant
    if (
      (vowels.indexOf(word[i - 1]) >= 0 && vowels.indexOf(word[i]) >= 0) ||
      (vowels.indexOf(word[i - 1]) < 0 && vowels.indexOf(word[i]) < 0)
    ) {
      // if so return false
      return false;
    }
  }
  // return true;
  return true;
}
