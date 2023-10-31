// add whatever parameters you deem necessary - good luck!
function min(arr) {
  // initialize minVal to Number.POSITITVE_INFINITY
  let minVal = Number.POSITIVE_INFINITY;
  // iterate over arr
  for (let num of arr) {
    // check if num < minVal
    // if so, update minVal
    if (num < minVal) minVal = num;
  }
  // return minVal
  return minVal;
}

console.log(min([5, 1, 4, 7, 1, 2])); // 1
console.log(min([-1, 6, 3, 2.2, -10, -4])); // -10
