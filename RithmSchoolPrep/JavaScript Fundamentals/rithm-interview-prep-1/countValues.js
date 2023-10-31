// add whatever parameters you deem necessary - good luck!
function countValues(arr, target) {
  // initialize counter to 0
  let counter = 0;
  // iterate over element in arr
  for (let ele of arr) {
    // check if ele === counter
    // if so, update counter
    if (ele === target) counter++;
  }
  // return counter
  return counter;
}

console.log(countValues([4, 1, 4, 2, 3, 4, 4], 4)); // 4
console.log(countValues([4, 1, 4, 2, 3, 4, 4], 100)); // 0
console.log(countValues([], 1)); // 0
