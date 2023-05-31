// Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console.

function myName() {
  console.log("Nathan Rydel");
}

myName(); // if your full name was Elie Schoppik this function would return "Elie Schoppik"

// Create an array called favoriteFoods which contains the strings “pizza” and “ice cream”.
const favoriteFoods = ["pizza", "ice cream", "hot dogs", "chicken wings"];
// Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream, depending on what you get back from Math.random.

function randomFood() {
  const randomIndex = Math.floor(Math.random() * favoriteFoods.length);
  console.log(favoriteFoods[randomIndex], randomIndex);
}

randomFood();
randomFood();
randomFood();
randomFood();
randomFood();
randomFood();

// Create a variable called numbers which is an array that contains the numbers 1 through 10.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd. Here is what that might look like:

/* 
displayOddNumbers();

// 1
// 3
// 5
// 7
// 9
*/

function displayOddNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      console.log(numbers[i]);
    }
  }
}

displayOddNumbers();

// Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even. Here is what that might look like:

/*
displayEvenNumbers();

// 2
// 4
// 6
// 8
// 10
*/

function displayEvenNumbers() {
  for (let number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}

displayEvenNumbers();

// Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds

function returnFirstOddNumber() {
  for (const number of numbers) {
    if (number % 2 !== 0) {
      return number;
    }
  }
}

returnFirstOddNumber();

// Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds

function returnFirstEvenNumber() {
  for (const number of numbers) {
    if (number % 2 === 0) {
      return number;
    }
  }
}

returnFirstEvenNumber();

// Create a function called returnFirstHalf which returns the first half of the numbers array

function returnFirstHalf() {
  return numbers.slice(0, numbers.length / 2);
}

console.log(returnFirstHalf());

// Create a function called returnSecondHalf which returns the second half of the numbers array

function returnSecondHalf() {
  return numbers.slice(numbers.length / 2);
}

console.log(returnSecondHalf());
