// ### replaceAfter

// Write a function called `replaceAfter` that accepts an array and an index. It should remove two elements starting at that index and add the strings "Hello", "world" in their places. The function should return the altered array.

// Examples:

console.log(replaceAfter(["1", "2", "a", "b", "3", "4"], 2));
// ["1", "2", "Hello", "world", "3", "4"]

console.log(replaceAfter(["a", "b", "c"], 0));
// ["Hello", "world", "c"]

function replaceAfter(arr, index) {
  arr.splice(index, 0, "Hello", "world");
  return arr;
}
