// add whatever parameters you deem necessary - good luck!
function removeFromString(str, startIdx, deleteCount) {
  let toArray = str.split("");
  toArray.splice(startIdx, deleteCount);
  return toArray.join("");
}

console.log(removeFromString("Elie", 2, 2)); // 'El'
console.log(removeFromString("Elie", 0, 1)); // 'lie'
console.log(removeFromString("Rithm School", 0, 6)); // 'School'
console.log(removeFromString("Rithm School", 2, 4)); // 'RiSchool'
console.log(removeFromString("Rithm School", 6, 400)); // 'Rithm '

function removeFromStringV2(str, index, numChars) {
  return str.slice(0, index) + str.slice(index + numChars);
}

console.log(removeFromStringV2("Elie", 2, 2)); // 'El'
console.log(removeFromStringV2("Elie", 0, 1)); // 'lie'
console.log(removeFromStringV2("Rithm School", 0, 6)); // 'School'
console.log(removeFromStringV2("Rithm School", 2, 4)); // 'RiSchool'
console.log(removeFromStringV2("Rithm School", 6, 400));
