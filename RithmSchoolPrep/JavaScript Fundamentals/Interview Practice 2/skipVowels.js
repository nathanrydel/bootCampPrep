// ### skipVowels

// Write a function called `skipVowels` that accepts a string an returns an array. The function should iterate through the string and if it encounters a vowel, it should skip the current character and the next character. Otherwise, it should add that current character to the array.

// Examples:

console.log(skipVowels("hello")); // ["h", "l"]
console.log(skipVowels("much fun")); // ["m", "h", " ", "f"]
console.log(skipVowels("aaaa")); // []
console.log(skipVowels("Rithm School")); // []

function skipVowels(str) {
  // declare vowels (both lower and upper)
  let vowels = "aeiouAEIOU";
  // declare result array to store output
  let result = [];
  // iterate over str with access to index
  for (let i = 0; i < str.length; i++) {
    // check if vowels includes str element
    if (vowels.includes(str[i])) {
      // if so, increment i to skip next str element
      i++;
    } else {
      // if not, push str element to result
      result.push(str[i]);
    }
  }
  // return result;
  return result;
}
