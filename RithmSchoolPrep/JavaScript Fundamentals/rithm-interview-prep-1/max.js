// add whatever parameters you deem necessary - good luck!
function max(arr) {
  // initialize maxVal as Number.NEGATIVE_INFINITY
  let maxVal = Number.NEGATIVE_INFINITY;
  // iterate over arr
  for (let num of arr) {
    // check if element > maxVal
    // if so, update maxVal
    if (num > maxVal) maxVal = num;
  }
  // return maxVal
  return maxVal;
}

console.log(max([5, 1, 4, 7, 1, 2])); // 7
console.log(max([3, 4, 12, 1, 8])); // 12
console.log(max([-1, 6, 3, 2.2, -10, -4])); // 6
