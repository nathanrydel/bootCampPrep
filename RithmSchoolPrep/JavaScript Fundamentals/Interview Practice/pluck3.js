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

function pluck() {}
