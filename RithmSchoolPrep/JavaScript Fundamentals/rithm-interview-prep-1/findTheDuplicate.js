// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr) {
  // declare a hash table: vals
  const vals = {};
  // iterate over elements of arr
  for (let ele of arr) {
    // check if element exists in vals
    if (vals[ele]) {
      vals[ele]++;
    } else {
      vals[ele] = 1;
    }
  }
  for (let key in vals) {
    if (vals[key] > 1) return +key;
  }
}

console.log(findTheDuplicate([1, 2, 1, 4, 3, 12])); // 1
console.log(findTheDuplicate([6, 1, 9, 5, 3, 4, 9])); // 9
console.log(findTheDuplicate([2, 1, 3, 4]));
