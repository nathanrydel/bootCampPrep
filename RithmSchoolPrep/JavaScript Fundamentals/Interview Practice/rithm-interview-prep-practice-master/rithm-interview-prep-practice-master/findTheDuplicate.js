// Write a function called **findTheDuplicate** which accepts an array of numbers containing a single duplicate. The function returns the number which is a duplicate or undefined if there are no duplicates.

// Examples:

console.log(findTheDuplicate([1, 2, 1, 4, 3, 12])); // 1
console.log(findTheDuplicate([6, 1, 9, 5, 3, 4, 9])); // 9
console.log(findTheDuplicate([2, 1, 3, 4])); // undefined

// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(array) {
  // iterate thru array looking at the right side
  for (let right = 0; right < array.length; right++) {
    // iterate thru array looking at left side
    for (let left = 0; left < right; left++) {
      if (array[right] === array[left]) {
        return array[right];
      }
    }
  }
}
