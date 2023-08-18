// add whatever parameters you deem necessary - good luck!
function indexOf(arr, target) {
  // iterate over arr and access idx
  for (let i = 0; i < arr.length; i++) {
    // check if element === target
    // return idx
    if (arr[i] === target) return i;
  }
  return -1;
}

let arr = [5, 10, 15, 20];
console.log(indexOf(arr, 20)); // 3

let arr2 = [1, 2, 3, 4, 5];
console.log(indexOf(arr2, 2)); // 1

let arr3 = [1, 2];
console.log(indexOf(arr3, 10)); // -1
