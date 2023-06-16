// 1
// addFullNameProperty
// Write a function called "addFullNameProperty".

// Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" sets a "fullName" property on the input object, whose value is a string with the first name and last name separated by a space.

var person = {
  firstName: "Jade",
  lastName: "Smith",
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'

function addFullNameProperty(obj) {
  // your code here
  obj.fullName = `${obj.firstName} ${obj.lastName}`;
}

// 2
// addObjectProperty
// Write a function called "addObjectProperty".

// Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.

var person1 = {
  name: "Joe Blow",
  role: "schlub",
};
var person2 = {
  name: "Mr. Burns",
  role: "supervisor",
};
addObjectProperty(person1, "manager", person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

function addObjectProperty(obj1, key, obj2) {
  // your code here
  obj1[key] = obj2;
}

// 3
// isPersonOldEnoughToDrinkAndDrive
// Write a function called "isPersonOldEnoughToDrinkAndDrive".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.

// Notes:

// The legal drinking age in the United States is 21.
// The legal driving age in the United States is 16.
// It is ALWAYS illegal to drink and drive in the United States.
var obj = {
  age: 45,
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false

function isPersonOldEnoughToDrinkAndDrive() {
  // your code here
  return false;
}
