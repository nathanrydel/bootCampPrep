// add whatever parameters you deem necessary - good luck!
function stringIncludes(str, target) {
  for (let char of str) {
    if (char === target) return true;
  }
  return false;
}

console.log(stringIncludes("awesome", "e")); // true
console.log(stringIncludes("awesome", "z")); // false
