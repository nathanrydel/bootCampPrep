/* eslint-disable for-direction */
console.log(lastIndexOf([1, 2, 3, 4], 2)); // 1
console.log(lastIndexOf([1, 2, 3, 4, 2], 2)); // 4
console.log(lastIndexOf([1, 2, 3, 4], 22)); // -1

// add whatever parameters you deem necessary - good luck!
function lastIndexOf(arr, tar) {
  // iterate over array in descending
  for (let i = arr.length - 1; i >= 0; i--) {
    // check if arr at i equals tar
    if (arr[i] === tar) return i;
  }
  return -1;
}
