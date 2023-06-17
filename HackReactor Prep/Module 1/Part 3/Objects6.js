// 1
// removeArrayValues
// Write a function called "removeArrayValues".

// Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ["hi", "there"],
};
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }

function removeArrayValues(obj) {
  // iterate over the keys in obj
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      delete obj[key];
    }
  }
}

// 2
// removeNumberValues
// Write a function called "removeNumberValues".

// Given an object, "removeNumberValues" removes any properties whose values are numbers.

var obj2 = {
  a: 2,
  b: "remaining",
  c: 4,
};
removeNumberValues(obj2);
console.log(obj2); // --> { b: 'remaining' }

function removeNumberValues(obj) {
  // iterate over the keys in obj
  for (let key in obj) {
    // check if obj[key] is NOT a number
    if (typeof obj[key] === "number") {
      // if so delete
      delete obj[key];
    }
  }
}

// 3
// removeStringValues
// Write a function called "removeStringValues".

// Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj3 = {
  name: "Sam",
  age: 20,
};
removeStringValues(obj3);
console.log(obj3); // { age: 20 }

function removeStringValues(obj) {
  // iterate over the keys in obj
  for (let key in obj) {
    // check if obj[key] is a string
    if (typeof obj[key] === "string") {
      // if so delete
      delete obj[key];
    }
  }
}
