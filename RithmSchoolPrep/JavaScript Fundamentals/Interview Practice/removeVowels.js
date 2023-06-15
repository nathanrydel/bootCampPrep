// ### removeVowels

// Write a function called **removeVowels** which will accept a string and return a new string with all the vowels removed. You should not consider "y" to be a vowel.

// Examples:

console.log(removeVowels("Hello!")); // "Hll!"
console.log(removeVowels("Tomatoes")); // "Tmts"
console.log(removeVowels("Reverse Vowels In The String")); // "Rvrs Vwls n Th Strng"
console.log(removeVowels("aeiou")); // ""
console.log(removeVowels("why try, shy fly?")); // "why try, shy fly?"

// input: string
// output: string

// add whatever parameters you deem necessary - good luck!
function removeVowels(string) {
  // declare regex to look for A,E,I,O,U
  let regex = /[aeiou]/gi;
  // replace regex with ""
  return string.replace(regex, "");
}
