// 1
// removeEvenValues
// Write a function called "removeEvenValues".

// Given an object, "removeEvenValues" removes any properties whose values are even numbers.

// Do this in place and return the original object, do not construct a cloned object that omits the properties.

// Example:

var obj = {
  a: 2,
  b: 3,
  c: 4,
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }

function removeEvenValues(obj) {
  // your code here
  // iterate over keys objects
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      delete obj[key];
    }
  }
}

// 2
// countNumberOfKeys
// Write a function called "countNumberOfKeys".

// Given an object, "countNumberOfKeys" returns how many properties the given object has.

var obj2 = {
  a: 1,
  b: 2,
  c: 3,
};
var output = countNumberOfKeys(obj2);
console.log(output); // --> 3

function countNumberOfKeys(obj) {
  // your code here
  // initialize counter
  let counter = 0;
  // iterate over keys in obj
  for (let key in obj) {
    counter++;
  }
  return counter;
}

// 3
// removeOddValues
// Write a function called "removeOddValues".

// Given an object, "removeOddValues" removes any properties whose values are odd numbers.

var obj3 = {
  a: 2,
  b: 3,
  c: 4,
};
removeOddValues(obj3);
console.log(obj3); // --> { a: 2, c: 4 }

function removeOddValues(obj) {
  // your code here
  // iterate over keys in obj
  for (let key in obj) {
    if (obj[key] % 2 === 1) {
      delete obj[key];
    }
  }
}
