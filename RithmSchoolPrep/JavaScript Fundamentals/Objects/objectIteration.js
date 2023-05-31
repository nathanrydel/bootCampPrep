// Given the following object below, write code to print the value then the key to the console separated by ‘=>’:

let namesAndHobbies = {
  elie: "JavaScript",
  matt: "jogging",
  janey: "table building",
  tim: "sailing",
};

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim

for (const property in namesAndHobbies) {
  console.log(`${namesAndHobbies[property]} => ${property}`);
}

// Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.

namesAndHobbies.nathan = "golfing";
console.log(namesAndHobbies);

// Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.

if ("nathan" in namesAndHobbies) {
  console.log("nathan", namesAndHobbies.nathan);
}
