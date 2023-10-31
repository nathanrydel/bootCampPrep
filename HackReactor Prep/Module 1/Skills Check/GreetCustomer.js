// 1
// Greet Customer
// Write a function called "greetCustomer".

// Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.

// The greeting should be different, depending on the name on their reservation.

// Case 1 - Unknown customer ( Name is not present in customerData ):

// var output = greetCustomer('Terrance');
// console.log(output); // --> 'Welcome! Is this your first time?'
// Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

// var output = greetCustomer('Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
// Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
// Notes:

// Your function should not alter the customerData object to update the number of visits.
// Do not hardcode to the exact sample data. This is a BAD IDEA:
// if (firstName === 'Joe') {
//   // do something
// }

var customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

// input: Object of objects
// output: required string based on number of visits

function greetCustomer(firstName) {
  if (customerData[firstName] === undefined) {
    // if so, return 'Welcome! Is this your first time?'
    return "Welcome! Is this your first time?";
  }

  // declare a visits object and assing it as the
  const visitsObj = customerData[firstName];
  // check if visitsObj.visits is 1
  if (visitsObj.visits === 1) {
    // if so, return required string
    return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    // else
  } else {
    // return required string
    return `Welcome back, ${firstName}! So glad to see you again!`;
  }
}

const output = greetCustomer("Carol");
console.log(output);
