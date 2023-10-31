// add whatever parameters you deem necessary - good luck!
function slice(arr, startIdx, endIdx) {
  // initialize new result array
  let result = [];
  // check if endIdx is undefined or longer than arr length
  if (endIdx === undefined || endIdx > arr.length) {
    // update endIdx to be arr.length
    endIdx = arr.length;
  }
  // iterate over the array from startIdx to endIdx
  for (let i = startIdx; i < endIdx; i++) {
    // add each element to result
    result.push(arr[i]);
  }
  // return result
  return result;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2)); // [1, 2]
console.log(slice([1, 2, 3, 4, 5], 2, 4)); // [3, 4]
console.log(slice([1, 2, 3, 4, 5], 2)); // [3, 4, 5]
console.log(slice([1, 2, 3, 4, 5], 2, 10)); // [3, 4, 5]
