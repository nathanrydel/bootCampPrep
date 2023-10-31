// add whatever parameters you deem necessary - good luck!
function countNumbers(arr) {
  // initialize count
  let count = 0;
  // iterate over elements
  for (let ele of arr) {
    // check if element not a NaN when parsed
    // if so update count
    if (!isNaN(parseInt(ele))) count++;
  }
  // return count
  return count;
}

console.log(countNumbers(["a", "b", "3", "awesome", "4"])); // 2
console.log(countNumbers(["32", "55", "awesome", "test", "100"])); // 3
console.log(countNumbers("[]")); // 0
console.log(countNumbers(["4", "1", "0", "NaN"])); // 3
console.log(countNumbers(["7", "12", "a", "", "6", "8", " console.log("])); // 4
