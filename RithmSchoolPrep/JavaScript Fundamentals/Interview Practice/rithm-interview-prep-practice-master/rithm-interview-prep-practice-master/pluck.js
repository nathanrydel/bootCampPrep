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

function pluck(arr, key) {
  // declare valuesArr
  let valuesArr = [];
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // push the value of arr at i at key
    valuesArr.push(arr[i][key]);
  }
  // return valuesArr
  return valuesArr;
}
