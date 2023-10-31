// add whatever parameters you deem necessary - good luck!
function isAlt(str) {
  // initialize vowels array
  let vowels = ["a", "e", "i", "o", "u"];

  // iterate over length - 1 of str
  for (let i = 0; i < str.length - 1; i++) {
    // declare first pointer at current index and check if included in vowels
    let currentChar = vowels.includes(str[i]);
    // declare second pointer at current index + 1 and check if included in vowels
    let nextChar = vowels.includes(str[i + 1]);

    // check if first pointer AND second pointer are vowels OR if first pointer AND second pointer are not vowels
    if ((currentChar && nextChar) || (!currentChar && !nextChar)) return false;
  }
  return true;
}

console.log(isAlt("amazon")); // true
console.log(isAlt("apple")); // false
console.log(isAlt("banana")); // true
