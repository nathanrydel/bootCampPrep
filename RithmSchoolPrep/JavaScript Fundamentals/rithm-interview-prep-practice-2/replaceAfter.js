function replaceAfter(array, startIdx) {
  // use splice at startIdx, for 2 values, replacement item1, replacement item2
  array.splice(startIdx, 2, "Hello", "world");
  return array;
}

console.log(replaceAfter(["1", "2", "a", "b", "3", "4"], 2));
// ["1", "2", "Hello", "world", "3", "4"]

console.log(replaceAfter(["a", "b", "c"], 0));
// ["Hello", "world", "c"]
