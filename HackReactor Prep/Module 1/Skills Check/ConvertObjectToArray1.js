// 1
// Convert Object To Array 1
// Write a function called "getAllKeys" which returns an array of all the input object's keys. Example input:

var input = {
  name: "Sam",
  age: 25,
  hasPets: true,
};
// Function's return value (output) :

// ['name', 'age', 'hasPets']
// Do not use "Object.keys" to solve this prompt.

// Note that your function should be able to handle any object passed in it.

// E.g. it should also handle an input like:

var alternativeInput = {
  a: "a",
  number: 11,
  hungry: true,
  grammyWins: 1,
};
// Function's return value (output):

// ['a', 'number', 'hungry', 'grammyWins']

function getAllKeys(obj) {
  // declare keys: string[] as empty
  const keys = [];
  // iterate over the keys in obj
  for (let key in obj) {
    // push the key to keys
    keys.push(key);
  }
  // return keys
  return keys;
}

var output1 = getAllKeys(input);
console.log(output1);

var output2 = getAllKeys(alternativeInput);
console.log(output2);
