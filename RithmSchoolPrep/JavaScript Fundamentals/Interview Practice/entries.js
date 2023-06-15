// ### entries

// Write a function called **entries,** which accepts an object and returns an array of arrays of key-value pairs.

// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

// Do not use the built in `Object.entries()` function!

// Examples:

let entriesObj = { a: 1, b: 2, c: 3 };
console.log(entries(entriesObj));
// [["a",1], ["b",2], ["c",3]]

let entriesObj2 = { first: "Matt", last: "Lane", isDogOwner: true };
console.log(entries(entriesObj2));
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

let entriesObj3 = {};
console.log(entries(entriesObj3)); // []

// input: object
// output: array of key/value pairs

// add whatever parameters you deem necessary - good luck!
function entries(object) {
  // declare entriesArr
  const entriesArr = [];
  // iterate over key in object
  for (let key in object) {
    // push key and value to entriesArr as its own array
    entriesArr.push([key, object[key]]);
  }
  // return entriesArr;
  return entriesArr;
}
