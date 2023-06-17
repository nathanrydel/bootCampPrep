// 1
// removeNumbersLargerThan
// Write a function called "removeNumbersLargerThan".

// Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

var obj = {
  a: 8,
  b: 2,
  c: "montana",
};
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }

function removeNumbersLargerThan(num, obj) {
  // your code here
  // iterate over the keys in obj
  for (let key in obj) {
    // check if value is a number
    if (typeof obj[key] === "number") {
      // check if the value is greater than 5
      if (obj[key] > num) {
        // if so, delete value
        delete obj[key];
      }
    }
  }
}

// 2
// removeNumbersLessThan
// Write a function called "removeNumbersLessThan".

// Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

var obj2 = {
  a: 8,
  b: 2,
  c: "montana",
};
removeNumbersLessThan(5, obj2);
console.log(obj2); // --> { a: 8, c: 'montana' }

function removeNumbersLessThan(num, obj) {
  // your code here
  // iterate over the keys in obj
  for (let key in obj) {
    // check if value is a number
    if (typeof obj[key] === "number") {
      // check if the value is greater than 5
      if (obj[key] < num) {
        // if so, delete value
        delete obj[key];
      }
    }
  }
}

// 3
// removeStringValuesLongerThan
// Write a function called "removeStringValuesLongerThan".

// Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

var obj3 = {
  name: "Montana",
  age: 20,
  location: "Texas",
};
removeStringValuesLongerThan(6, obj3);
console.log(obj3); // { age: 20, location: 'Texas' }

function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let key in obj) {
    // check if value is a number
    if (typeof obj[key] === "string") {
      // check if the value is greater than 5
      if (obj[key].length > num) {
        // if so, delete value
        delete obj[key];
      }
    }
  }
}
