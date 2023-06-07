// ### values

// Write a function called **values,** which accepts an object and returns an array of all of the values in the object.

// Do not use the built in `Object.values()` function!

// Examples:

let objVal = { a: 1, b: 2, c: 3 };
console.log(values(objVal)); // [1,2,3]

let objVal2 = { first: "Matt", last: "Lane", isDogOwner: true };
console.log(values(objVal2)); // ["Matt", "Lane", true]

let objVal3 = {};
console.log(values(objVal3)); // []

// add whatever parameters you deem necessary - good luck!
function values(object) {
  // declare empty output
  let valuesArr = [];
  // iterate over key in object
  for (let key in object) {
    // push value at key to valuesArr
    valuesArr.push(object[key]);
  }
  // return valuesArr;
  return valuesArr;
}
