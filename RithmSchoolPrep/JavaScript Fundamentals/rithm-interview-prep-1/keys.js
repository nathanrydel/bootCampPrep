// add whatever parameters you deem necessary - good luck!
function keys(obj) {
  // initialize output array
  let keys = [];
  // iterate over key in obj
  for (let key in obj) {
    // push key to output
    keys.push(key);
  }
  // return output
  return keys;
}

let obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj)); // ["a", "b", "c"]

let obj2 = { first: "Matt", last: "Lane" };
console.log(keys(obj2)); // ["first", "last"]

let obj3 = {};
console.log(keys(obj3)); // []
