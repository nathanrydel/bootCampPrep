// Write a function called **entries,** which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// Do not use the built in `Object.entries()` function!

function entries(object) {
  // initialize empty output array
  let entries = [];
  // iterate over the key in object
  for (let key in object) {
    // push an array of key:value to output
    entries.push([key, object[key]]);
  }
  // return output
  return entries;
}

/*
let obj = { a: 1, b: 2, c: 3 };
console.log(entries(obj));
// [["a",1], ["b",2], ["c",3]]

let obj2 = { first: "Matt", last: "Lane", isDogOwner: true };
console.log(entries(obj2));
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

let obj3 = {};
console.log(entries(obj3)); // []
*/
