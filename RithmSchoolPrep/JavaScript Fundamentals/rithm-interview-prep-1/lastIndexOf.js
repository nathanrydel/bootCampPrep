// add whatever parameters you deem necessary - good luck!
function lastIndexOf(arr, target) {
  // initialize lastIdx as -1
  let lastIdx = -1;
  // iterate over arr with access to idx
  for (let i = 0; i < arr.length; i++) {
    // if element matches target
    if (arr[i] === target) {
      // if so, update lastIdx
      lastIdx = i;
    }
  }
  return lastIdx;
}

console.log(lastIndexOf([1, 2, 3, 4], 2)); // 1
console.log(lastIndexOf([1, 2, 3, 4, 2], 2)); // 4
console.log(lastIndexOf([1, 2, 3, 4], 22)); // -1
