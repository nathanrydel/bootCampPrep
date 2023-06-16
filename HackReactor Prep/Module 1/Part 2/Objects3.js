// 1
// isPersonOldEnoughToDrive
// Write a function called "isPersonOldEnoughToDrive".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.

// Notes:

// The legal driving age in the United States is 16.

var obj = {
  age: 16,
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true

function isPersonOldEnoughToDrive(person) {
  // your code here
  return person.age >= 16;
}

// 2
// isPersonOldEnoughToVote
// Write a function called "isPersonOldEnoughToVote".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.

// Notes:

// The legal voting age in the United States is 18.

var obj2 = {
  age: 19,
};
var output2 = isPersonOldEnoughToVote(obj2);
console.log(output2); // --> true

function isPersonOldEnoughToVote(person) {
  // your code here
  return person.age >= 18;
}

// 3
// addArrayProperty
// Write a function called "addArrayProperty".

// Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, "myProperty", myArray);
console.log(myObj.myProperty); // --> [1, 3]

function addArrayProperty(obj, key, arr) {
  // your code here
  obj[key] = arr;
}
