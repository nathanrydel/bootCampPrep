// Make a function for add, subtract, multiply, and divide. Each of these functions should accept two parameters and return the sum, difference, product and quotient.

function add(x, y) {
  console.log(x + y);
}

function subtract(x, y) {
  console.log(x - y);
}

function multiply(x, y) {
  console.log(x * y);
}

function divide(x, y) {
  console.log(x / y);
}

add(2, 2); // 4
subtract(2, 2); // 0
multiply(2, 2); // 4
divide(2, 2); // 1

// Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return “Hello Boss”, but if the parameter passed to the function is any other name, it should return the string “Hello” and the name parameter.

function sayHello(name) {
  if (name === "Tim") {
    console.log("Hello Boss");
  } else {
    console.log("Hello " + name);
  }
}

sayHello("Tim"); // "Hello Boss"
sayHello("Janey"); // "Hello Janey"
sayHello("Elie"); // "Hello Elie"

// Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

console.log(average([1, 2, 3, 4, 5])); // 3
console.log(average([1, 2, 3, 4, 5, 6])); // 3.5
console.log(average([10, 20])); // 15

// Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

function createStudent(firstName, lastName) {
  return new Student(firstName, lastName);
}

let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoppik");

let students = [tim, matt, elie];

console.log(students);

// Write a function called findStudentByFirstName, which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name’s of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization

// delcare a function that takes name: string
function findStudentByFirstName(name) {
  // declare a variable to store name in lowercase
  const lowerCasedName = name.toLowerCase();
  // iterate thru students array
  for (let i = 0; i < students.length; i++) {
    if (students[i].firstName.toLowerCase() === lowerCasedName) {
      return true;
    }
  }
  return false;
}

console.log(findStudentByFirstName("elie")); // true
console.log(findStudentByFirstName("Elie")); // true
console.log(findStudentByFirstName("Janey")); // false
console.log(findStudentByFirstName("Janey")); // false
console.log(findStudentByFirstName("TIM")); // true
console.log(findStudentByFirstName("MMMaaaTTTtttTTT")); // false

// Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

// declare function that takes an array: array
function extractEveryThird(array) {
  // declare an empty output array, newArr
  const newArr = [];
  // iterate over array and find every 3 element
  for (let i = 2; i < array.length; i++) {
    // push third element to newArr
    newArr.push(array[i]);
  }
  // return newArr
  return newArr;
}

console.log(extractEveryThird([1, 2, 3])); // [3]
console.log(extractEveryThird([1, 2, 3, 4, 5, 6])); // [3,6]
console.log(extractEveryThird(["a", "b", "c", "d"])); // ["c"]
console.log(extractEveryThird(["first value", "second value", "third value"]));

// Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.

// declare function countEvensAndOdds that takes an array
function countEvensAndOdds(array) {
  // initialize counterObj with evenCount and oddCount as keys
  const counterObj = {
    oddCount: 0,
    evenCount: 0,
  };
  // iterate over array
  for (let number of array) {
    // check if number is even
    if (number % 2 === 0) {
      counterObj.evenCount++;
    } else {
      counterObj.oddCount++;
    }
  }
  return counterObj;
}
console.log(countEvensAndOdds([1, 2, 3, 4])); // { oddCount:2, evenCount:2 }

console.log(countEvensAndOdds([1, 2, 3, 4, 5, 6, 7])); // { oddCount:4, evenCount:3 }

// Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

// declare function that takes in a string: string
function onlyCapitalLetters(string) {
  // declare empty output string
  let output = "";
  // define regex pattern
  let regex = /[A-Z]/g;
  // define a variable to store the matches of the regex
  let matches = string.match(regex);

  // check if matches is empty
  if (matches === null) {
    // if so return string
    return string;
  } else {
    // update output to be joined array of matches
    output = matches.join("");
    // return output
    return output;
  }
}

console.log(onlyCapitalLetters("Amazing")); // "A"
console.log(onlyCapitalLetters("nothing")); // ""
console.log(onlyCapitalLetters("EVERYTHING")); // "EVERYTHING"
