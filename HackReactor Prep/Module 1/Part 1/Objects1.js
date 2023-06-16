// Write a function called "getProperty". Given an object and a key, "getProperty" returns the value of the property at the given key. Notes:

// If there is no property at the given key, it should return undefined.
var obj1 = {
  key: "value",
};

var output1 = getProperty(obj1, "key");
console.log(output1); // --> 'value'

function getProperty(obj, key) {
  for (let keys in obj) {
    if (keys === key) {
      return obj[keys];
    }
  }
}

// Write a function called "addProperty". Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); // --> true

function addProperty(obj, key) {
  return (obj[key] = true);
}

// Write a function called "removeProperty". Given an object and a key, "removeProperty" removes the given key from the given object.

var obj = {
  name: "Sam",
  age: 20,
};

removeProperty(obj, "name");
console.log(obj.name); // --> undefined

function removeProperty(obj, key) {
  delete obj[key];
}
