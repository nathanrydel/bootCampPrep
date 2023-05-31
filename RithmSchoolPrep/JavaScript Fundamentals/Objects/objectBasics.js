// Create an object that has your firstName, lastName, and occupation as keys.
let me = {
  firstName: "Nathan",
  lastName: "Rydel",
  occupation: "unemployed",
};

// Access each value from your object using both dot notation and bracket notation.
console.log(me.firstName);
console.log(me["lastName"]);
console.log(me.occupation);

// Add a key for hobby to your object. Remove the key and value for occupation.
me.hobby = "golfing";
console.log(me);

delete me.occupation;
console.log(me);

// What is the difference between dot notation and bracket notation?
// In short, use the bracket notation when you need to evaluate some expression or pass in a variable to get the name of the key, but when you know the name of the key and it is not a variable or expression, always use the dot notation.
