// add whatever parameters you deem necessary - good luck!
function repeat(str, repeater) {
  let output = "";
  while (repeater > 0) {
    output += str;
    repeater--;
  }
  return output;
}

console.log(repeat("Matt", 3)); // 'MattMattMatt'
console.log(repeat("Elie", 2)); // 'ElieElie'
console.log(repeat("Michael", 0)); // ''
