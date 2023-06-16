// checkAge
// Write a function called "checkAge". Given a person's name and age, "checkAge" returns one of two messages: "Go home, {insert_name_here}!", if they are younger than 21. "Welcome, {insert_name_here}!", if they are 21 or older. Naturally, replace "{insert_name_here}" with the given name. :)

var output1 = checkAge("Adrian", 22);
console.log(output1); // --> 'Welcome, Adrian!'

function checkAge(name, age) {
  if (age < 21) {
    return `Go home, ${name}!`;
  }
  return `Welcome, ${name}!`;
}

// isGreaterThanTen
// Write a function called "isGreaterThan10". Given a number, "isGreaterThan10" returns whether the given number is greater than 10.

var output2 = isGreaterThan10(11);
console.log(output2); // --> true

function isGreaterThan10(number) {
  return number > 10;
}

// isLessThan30
// Write a function called "isLessThan30". Given a number, "isLessThan30" returns whether the given number is less than 30.

var output3 = isLessThan30(9);
console.log(output3); // --> true

function isLessThan30(num) {
  return num < 30;
}

// equalsTen
// Write a function called "equalsTen". Given a number, "equalsTen" returns whether or not the given number is 10.

var output4 = equalsTen(9);
console.log(output4); // --> false

function equalsTen(num) {
  return num === 10;
}
