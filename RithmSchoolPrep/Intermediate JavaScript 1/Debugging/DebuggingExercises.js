// Answer the following questions:

// What does the throw keyword do?
// It allows you to return an error that you define
// What does the finally keyword do?

// What is the difference between a TypeError and ReferenceError?

// How do you create a snippet in the Chrome dev tools?
// Open the sources tab, head to the left hand panel and click on snippets, then right click inside the tab and click 'new'

// In the Chrome dev tools, on the right hand side of the sources tab, there is a “pause” button which allows you to “pause on caught exceptions.” What is an exception?
// An exception is an error that occurs in your program. Caught exceptions are errors that are evaluated in a try/catch block

// How do we “catch” errors in JavaScript? Give an example with code for what that might look like.

try {
  undefined()
} catch(error) {
  console.log("This is a TypeError", error)
}

// Explain what type of error will be thrown, why the error is occuring, and how to fix it:

person;
//

let data0 = {};
data.displayInfo();
//

let data1 = {};
data1.displayInfo.foo = "bar";
//

function data() {
  let thing = "foo";
}
data();
thing;
// 

for(let i=0; i > 5; i++){
  console.log(i);
}
// 

function addIfEven(num){
  if(num % 2 = 0){
      return num + 5;
  }
  return num;
}
// 

function loopToFive(){
  for(let i=0, i < 5, i++){
      console.log(i);
  }
}
// 

function displayEvenNumbers(){
  let numbers = [1,2,3,4,5,6,7,8];
  let evenNumbers = [];
  for(let i=0; i<numbers.length-1; i++;){
      if(numbers % 2 = 0); {
          evenNumbers.push(i);
      }
      return evenNumbers;
  }
}
displayEvenNumbers(); // should return [2,4,6,8]

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.