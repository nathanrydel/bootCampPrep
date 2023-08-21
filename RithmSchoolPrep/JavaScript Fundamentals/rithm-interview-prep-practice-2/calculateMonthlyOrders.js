function calculateMonthlyOrders(array) {
  // initialize sum of orders
  let sum = 0;
  // iterate over object of array
  for (let object of array) {
    // iterate over key of object
    for (let key in object) {
      // add value to sum
      sum += object[key];
    }
  }

  // return sum
  return sum;
}

let monthlyOrders1 = [
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

console.log(calculateMonthlyOrders(monthlyOrders1)); // 10;

let monthlyOrders2 = [
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

console.log(calculateMonthlyOrders(monthlyOrders2)); // 16800
