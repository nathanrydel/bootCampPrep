// add whatever parameters you deem necessary - good luck!
function stringFromObject(obj) {
  // initialize output as array
  let asArray = [];
  // iterate over key in object
  for (let key in obj) {
    // concat in `${key} = ${obj[key]}
    asArray.push(`${key} = ${obj[key]}`);
  }

  // return output
  return asArray.join(", ");
}

console.log(stringFromObject({ a: 1, b: "2" }));
// "a = 1, b = 2"

console.log(
  stringFromObject({ name: "Elie", job: "Instructor", isCatOwner: false }),
);
// "name = Elie, job = Instructor, isCatOwner = false"

console.log(stringFromObject({})); // ""
