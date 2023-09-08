// ### skipVowels

// Write a function called `skipVowels` that accepts a string an returns an array. The function should iterate through the string and if it encounters a vowel, it should skip the current character and the next character. Otherwise, it should add that current character to the array.

function skipVowels(str) {
  // declare vowels
  const vowels = "aeiouAEIOU";
  // initialize skipVowels:[]
  let skipVowels = [];
  // iterate over str
  for (let i = 0; i < str.length; i++) {
    // check if current str at index is not a vowel
    if (vowels.includes(str[i])) {
      // if a vowel, skip next index
      i++;
    } else {
      // if not, push element to skipVowels
      skipVowels.push(str[i]);
    }
  }
  return skipVowels;
}

console.log(skipVowels("hello")); // ["h", "l"]
console.log(skipVowels("much fun")); // ["m", "h", " ", "f"]
console.log(skipVowels("aaaa")); // []
