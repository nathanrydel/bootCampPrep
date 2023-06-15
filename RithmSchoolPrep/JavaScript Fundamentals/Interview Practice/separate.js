// ### separate

// Dogs don't get along with cats, and cats don't get along with dogs.

// What they both have in common is that they don't get along with water (baths).

// Given an array of 'dogs', 'cats', and 'water', write a function called **separate,** which returns a new array so that the dogs are separated from the cats by water. **Make sure that cats always come first in the array.**

// You can assume that the array will always at least three elements, and that there'll always be at least one dog, one cat, and one water to work with.

// **Examples:**

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

// add whatever parameters you deem necessary - good luck!
function separate(array) {
  // initialize catArr to empty arr
  let catArr = [];
  // initialize dogArr to empty arr
  let dogArr = [];
  // initialize waterArr to empty arr
  let waterArr = [];
  // initialize joinedArr to to empty arr
  // iterate over elements of array
  for (let ele of array) {
    // check if element is a cat
    if (ele === "cat") {
      // if so, push to catArr
      catArr.push(ele);
      // else if element is dog
    } else if (ele === "dog") {
      // push to dogArr
      dogArr.push(ele);
      // else
    } else {
      // push to waterArr
      waterArr.push(ele);
    }
  }
  // return catArr.concat(waterArr, dogArr)
  return catArr.concat(waterArr, dogArr);
}
