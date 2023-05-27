// For each of the exercises below, assume you are starting with the following people array.

let people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// Write the command to remove “Greg” from the array.
people.shift();
console.log(people); // expected output: ["Mary", "Devon", "James"]
// Write the command to remove “James” from the array.
people.pop();
console.log(people); // expected output: ["Mary", "Devon"]
// Write the command to add “Matt” to the front of the array.
people.unshift("Matt");
console.log(people); // expected output: ["Matt", "Mary", "Devon"]
// Write the command to add your name to the end of the array.
people.push("Nathan");
console.log(people); // ["Matt", "Mary", "Devon", "Nathan"];
// Using a loop, iterate through this array and after console.log-ing “Mary”, exit from the loop.
for (const name of people) {
  console.log(name);
  if (name === "Mary") {
    break;
  }
}
// expected output: Matt \nl Mary
// Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
const peopleCopy = people.slice(2);
console.log(peopleCopy); // expected output: ["Devon", "Nathan"]
// Write the command that gives the indexOf where “Mary” is located.
console.log(people.indexOf("Mary")); // expected output: 1
// Write the command that gives the indexOf where “Foo” is located (this should return -1).
console.log(people.indexOf("Foo")); // expected output: -1
// Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); // expected output: [ 'Greg', 'Mary', 'Elizabeth', 'Artie', 'James' ]
// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
const withBob = people.concat("Bob");
console.log(withBob); // expected output: [ 'Greg', 'Mary', 'Elizabeth', 'Artie', 'James', 'Bob' ]
