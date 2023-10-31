// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(str, target) {
  let lastIdx = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      lastIdx = i;
    }
  }
  return lastIdx;
}

console.log(stringLastIndexOf("awesome", "e")); // 6
console.log(stringLastIndexOf("awesome", "z")); // -1
