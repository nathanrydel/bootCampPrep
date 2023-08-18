// add whatever parameters you deem necessary - good luck!
function twoHighest(arr) {
  // initialize highest
  let highest = Number.NEGATIVE_INFINITY;
  // initialize secondhighest
  let secondHighest = Number.NEGATIVE_INFINITY;
  // iterate over num of arr
  for (let num of arr) {
    // check if num > highest
    if (num > highest) {
      // if so,
      // update secondHighest to highest
      // update highest to num
      secondHighest = highest;
      highest = num;
    } else {
      // else check if num > secondHighest
      if (num > secondHighest) {
        // if so, update secondHighest
        secondHighest = num;
      }
    }
  }
  // return [secondHightest, highest]
  return [secondHighest, highest];
}

console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
console.log(twoHighest([6, 1, 9, 10, 4])); // [9,10]
console.log(twoHighest([4, 25, 3, 20, 19, 5])); // [20,25]
console.log(twoHighest([1, 2, 2])); // [2, 2];
