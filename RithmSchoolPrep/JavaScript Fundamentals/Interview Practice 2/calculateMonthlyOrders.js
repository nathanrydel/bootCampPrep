// ### calculateMonthlyOrders

// Write a function called `calculateMonthlyOrders` that accepts an array of objects. Each object has one or more properties for months in the year and those properties each have a value which is a number. The function should return the sum of all the values of all the properties in all the objects.

// Examples:

let orders1 = [
  {
    February: 1,
    March: 2,
    April: 2,
  },
  {
    April: 1,
    May: 2,
    June: 2,
  },
];

console.log(calculateMonthlyOrders(orders1)); // 10;

let orders2 = [
  {
    January: 100,
    February: 200,
    March: 300,
    April: 400,
    May: 500,
    June: 600,
    July: 700,
    August: 800,
    September: 900,
    October: 1000,
    November: 1100,
    December: 1200,
  },
  {
    January: 200,
    February: 300,
    March: 400,
    April: 500,
    May: 600,
    June: 700,
    July: 800,
    August: 900,
    September: 1000,
    October: 1100,
    November: 1200,
    December: 1300,
  },
];

console.log(calculateMonthlyOrders(orders2)); // 16800

// input: Array of objects
// output: number of orders

function calculateMonthlyOrders(array) {
  // declare total orders
  let total = 0;
  // iterate over the objects of the array
  for (let element of array) {
    // iterate over the keys
    for (let key in element) {
      // add values to total
      total += element[key];
    }
  }
  return total;
}
