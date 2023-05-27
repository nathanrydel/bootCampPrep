// Part I
// Write the code necessary to do the following:

// Create an empty array called arr.
// Add your first name to the arr variable
// Add your last name to the end of the arr variable
// Add your favorite color to the beginning of the arr variable
// Your variable arr should look like this (using Elie for a first name, Schoppik for a last name and purple for a favorite color) ["purple", "Elie", "Schoppik"]. Keep going!

const arr = [];

arr.push("Nathan");
arr.push("Rydel");
arr.unshift("Blue");

console.log(arr); // expected output: ['Blue', 'Nathan', 'Rydel']

// Remove the favorite color from the arr variable (remember this is the first value in the array – what method can you use to remove the first value in an array?)

arr.shift();
console.log(arr); // expected output: ["Nathan", "Rydel"]
// Create another array called arr2.
const arr2 = [];
// Add your favorite number to arr2
// Add the string “JavaScript” to the end of the arr2 variable
// Your variable arr2 should look like this (using 42 as a favorite number) [42, "JavaScript"].
arr2.push(22);
arr2.push("JavaScript");

console.log(arr2); // expected output: [22, "JavaScript"]

// See if the value 42 exists in the arr2 array. Do this using the indexOf method. What does indexOf return to you if the value passed to it can not be found in the array?
console.log(arr2.indexOf(42)); // expected output: -1;

// Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.
const combinedArr = arr.concat(arr2);
// Your combinedArr variable should look like this (using our previous values) ["Elie", "Schoppik", 42, "JavaScript"]
console.log(combinedArr); // expected output: ["Nathan", "Rydel", 22, "JavaScript"];

// Part II
// Complete the following, starting from the following array: let arr = ["JavaScript", "Python", "Ruby", "Java"]
let arr3 = ["JavaScript", "Python", "Ruby", "Java"];
// Return the following array: ["Python", "Ruby"].
console.log(arr3.slice(1, 3));
// Combine the array with the array ["Haskell", "Clojure"].
let array = ["Haskell", "Clojure"];
let arr4 = arr3.concat(array);
console.log(arr4);
// Return the string "JavaScript, Python, Ruby, Java".
let stringifiedArr3 = arr3.join(", ");
console.log(stringifiedArr3);
