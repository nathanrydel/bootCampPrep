// add whatever parameters you deem necessary - good luck!
function removeVowels(string) {
  return string.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("Hello!"));
console.log(removeVowels("Tomatoes"));
console.log(removeVowels("aeiou"));
