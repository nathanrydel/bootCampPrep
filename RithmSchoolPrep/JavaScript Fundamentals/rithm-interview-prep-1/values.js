// add whatever parameters you deem necessary - good luck!
function values(obj) {
  // declare output array
  let values = [];
  // iterate over the key in obj
  for (let key in obj) {
    // push value to array
    values.push(obj[key]);
  }

  // return array
  return values;
}

let valObj1 = { a: 1, b: 2, c: 3 };
console.log(values(valObj1)); // [1,2,3]

let valObj2 = { first: "Matt", last: "Lane", isDogOwner: true };
console.log(values(valObj2)); // ["Matt", "Lane", true]

let valObj3 = {};
console.log(values(valObj3)); // []
