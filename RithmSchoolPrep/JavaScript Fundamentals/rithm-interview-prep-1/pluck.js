// add whatever parameters you deem necessary - good luck!
function pluck(arr, target) {
  // initialize output array
  let values = [];

  // iterate over the obj of arr
  for (let obj of arr) {
    // push obj[target] to output
    values.push(obj[target]);
  }
  // return output
  return values;
}

console.log(
  pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name"),
);
// ["Tim", "Matt", "Elie"]

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
