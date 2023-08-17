// add whatever parameters you deem necessary - good luck!
function stringIndexOf(str, target) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) return i;
  }
  return -1;
}

console.log(stringIndexOf("awesome", "e")); // 2
console.log(stringIndexOf("awesome", "z")); // -1
