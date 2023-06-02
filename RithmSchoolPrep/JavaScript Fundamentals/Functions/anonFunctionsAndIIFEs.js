// Write a function called displayFullName, which should accept two parameters, firstName and lastName. The function should be immediately invoked and return the firstName + lastName. You should NOT have to call this function, it should invoke right away.

(function displayFullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
})("Nathan", "Rydel");

// Write a function called createCalculator, which should return an object that has four methods, add, subtract, multiply and divide.

const createCalculator = function () {
  return {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    },
  };
};

let calc = createCalculator();
console.log(calc.add(20, 20)); // 40
console.log(calc.subtract(2, 2)); // 0
console.log(calc.multiply(2, 2)); // 4
console.log(calc.divide(12, 2)); // 6
