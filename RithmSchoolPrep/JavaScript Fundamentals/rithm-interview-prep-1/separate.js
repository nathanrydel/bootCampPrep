// add whatever parameters you deem necessary - good luck!
function separate(arr) {
  // declare catArr
  const catArr = [];
  // declare waterArr
  const waterArr = [];
  // declare dogArr
  const dogArr = [];
  // iterate over arr
  for (let el of arr) {
    // check if el a cat
    if (el === "cat") {
      // if so, push to catArr
      catArr.push(el);
    } else if (el === "water") {
      // else if check el a water
      // if so, push to waterArr
      waterArr.push(el);
    } else {
      // else, push to dogArr
      dogArr.push(el);
    }
  }
  return catArr.concat(waterArr, dogArr);
}

console.log(separate(["dog", "cat", "water"])); // ['cat','water','dog']

console.log(separate(["dog", "cat", "water", "cat"])); // ['cat', 'cat', 'water', 'dog'])

console.log(
  separate(["cat", "cat", "water", "dog", "water", "cat", "water", "dog"]),
);

// ['cat','cat','cat','water','water','water','dog','dog']

console.log(
  separate([
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "cat",
    "dog",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
    "water",
  ]),
);

/* ['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water', 'dog']
*/
