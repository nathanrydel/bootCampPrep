// ### pluck

// Write a function called **pluck**, which takes an array of objects and the name of a key.

// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

// Examples:

console.log(
  pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name"),
);
// ["Tim", "Matt", "Elie"]
console.log(
  pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "age"),
);
// [undefined, undefined, undefined]
console.log(
  pluck(
    [
      { name: "Tim", isBoatOwner: true },
      { name: "Matt", isBoatOwner: false },
      { name: "Elie" },
    ],
    "isBoatOwner",
  ),
);
// [true, false, undefined]

// add whatever parameters you deem necessary - good luck!

// input: array of objects, key: string
// output: value of object at key

function pluck(ArrOfObj, target) {
  // declare results array
  const results = [];
  // iterate over the elements of the array
  for (let object of ArrOfObj) {
    // declare found tracker
    let found = false;
    // iterate over the keys in the object
    for (let key in object) {
      // check if key matches target
      if (key === target) {
        // if so, push value to results
        results.push(object[key]);
        found = true;
        break;
      }
    }
    // check if target not found
    if (!found) {
      // if so, push undefined to results
      results.push(undefined);
    }
  }
  // return results;
  return results;
}
