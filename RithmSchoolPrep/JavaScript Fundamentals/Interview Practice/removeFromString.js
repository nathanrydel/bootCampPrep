// Write a function called **removeFromString,** which accepts a string, a starting index (number) and a number of characters to remove.

// The function should return a new string with the characters removed.

console.log(removeFromString("Elie", 2, 2)); // 'El'
console.log(removeFromString("Elie", 0, 1)); // 'lie'
console.log(removeFromString("Rithm School", 0, 6)); // 'School'
console.log(removeFromString("Rithm School", 2, 4)); // 'RiSchool'
console.log(removeFromString("Rithm School", 6, 400)); // 'Rithm '

// add whatever parameters you deem necessary - good luck!
function removeFromString(str, idx, num) {
  // convert to arr
  let strToArr = str.split("");
  // use splice to remove
  strToArr.splice(idx, num);
  // return joined array
  return strToArr.join("");
}
