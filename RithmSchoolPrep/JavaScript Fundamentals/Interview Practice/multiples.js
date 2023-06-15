// ### multiples

// Implement a function called **multiples** that accepts two numbers: **_x_** and **_n_**.

// The function should return the first **_n_** multiples of the number **_x_**.

// Assume that **_x_** is a positive integer.

// Examples:

console.log(multiples(3, 4)); // [3, 6, 9, 12]
console.log(multiples(2, 5)); // [2, 4, 6, 8, 10]

// add whatever parameters you deem necessary - good luck!
function multiples(x, n) {
  // declare multiplesArr
  const multiplesArr = [];
  // iteratively add x to array
  for (let i = 1; i <= n; i++) {
    // push i * x;
    multiplesArr.push(i * x);
  }
  // return multiplesArr;
  return multiplesArr;
}
