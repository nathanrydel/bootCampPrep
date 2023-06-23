// 1
// Convert Object To Array 3
// Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

// Argument:

var input = {
  name: "Holly",
  age: 35,
  role: "producer",
};
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]

function convertObjectToArray(obj) {
  // declare keyValueArr: any[] array
  const keyValueArr = [];

  // iterate over the keys in obj
  for (let key in obj) {
    // push(key, obj[key]) to keyValueArr as an array
    keyValueArr.push([key, obj[key]]);
  }
  // return keyValueArr;
  return keyValueArr;
}

const output = convertObjectToArray(input);
console.log(output);
