// Problem 1:
// Create a JavaScript class called Vehicle that has the following properties:

// manufacturer (string)
// model (string)
// year (number)
// Include a method called start that logs a message to the console, indicating that the vehicle has started.

class Vehicle {
  constructor(manu, model, yr) {
    this.manu = manu;
    this.model = model;
    this.yr = yr;
  }

  start() {
    console.log(`The vehicle has started`);
  }

  park() {
    console.log(`You turned off the engine.`);
  }
}

// Extend the Vehicle class and create two new classes: Car and Motorcycle. The Car class should have an additional property:

// numDoors (number)

class Car extends Vehicle {
  constructor(manu, model, yr, numDoors) {
    super(manu, model, yr);
    this.numDoors = numDoors;
  }

  start() {
    return `You started your car`;
  }
}
// The Motorcycle class should have an additional property:

// hasSidecar (boolean)

class Motorcycle extends Vehicle {
  constructor(manu, model, yr, hasSidecar) {
    super(manu, model, yr);
    this.hasSidecar = hasSidecar;
  }

  start() {
    return `You started your motorcycle`;
  }
}

// Implement the start method for each class, including a specific message for each vehicle type.

const car = new Car("Toyota", "Corolla", 2016, 4);
console.log(car.start());

const motorcycle = new Motorcycle("Ducati", "Brrr", 2009, false);
console.log(motorcycle.start());

// Create a JavaScript class called Shape that has the following properties and methods:

// name (string)
// calculateArea (method)
// Include a static method called getShapeCount that returns the total count of shapes created.

class Shape {
  constructor(name) {
    this.name = name;
    Shape.incrementShapeCount();
  }

  calculateArea() {
    throw new Error("calculateArea must be invoked on a subclass");
  }

  static getShapeCount() {
    return Shape.shapeCount;
  }

  static incrementShapeCount() {
    if (!Shape.shapeCount) {
      Shape.shapeCount = 0;
    }
    Shape.shapeCount++;
  }
}

// Extend the Shape class and create two new classes: Rectangle and Triangle. The Rectangle class should have additional properties:

// width (number)
// height (number)

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// The Triangle class should have additional properties:
// base (number)
// height (number)
// Implement the calculateArea method for each class, and update the getShapeCount method to correctly count the shapes created.

class Triangle extends Shape {
  constructor(name, base, height) {
    super(name);
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

const rectangle = new Rectangle("Rectangle", 5, 3);
const rectangle2 = new Rectangle("Rectangle", 8, 5);
console.log(rectangle.calculateArea()); // Output: 15
console.log(rectangle2.calculateArea()); // Output: 40

const triangle = new Triangle("Triangle", 4, 6);
const triangle2 = new Triangle("Triangle", 9, 16);
console.log(triangle.calculateArea()); // Output: 12
console.log(triangle2.calculateArea()); // Output: 72

console.log(Shape.getShapeCount());

// Problem 3:
// Create a JavaScript class called BankAccount that has the following properties and methods:

// accountNumber (string)
// balance (number)
// Include a static property called bankName that holds the name of the bank.

class BankAccount {
  constructor(accountNum, balance) {
    this.accountNum = accountNum;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }

  static bankName = "My Bank";
}

// Extend the BankAccount class and create a new class called CheckingAccount. The CheckingAccount class should inherit the properties and methods from the BankAccount class and add an additional property:

// overdraftLimit (number)
// Implement the withdraw method in the CheckingAccount class to allow for overdrafts up to the specified limit.

class CheckingAccount extends BankAccount {
  constructor(accountNum, balance, overdraftLimit) {
    super(accountNum, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount < this.balance + this.overdraftLimit) {
      this.balance -= amount;
    } else {
      return "Exceeded overdraft limit";
    }
  }
}

const bankAccount = new BankAccount("1234567890", 1000);
bankAccount.deposit(500);
console.log(bankAccount.balance); // Output: 1500

const checkingAccount = new CheckingAccount("9876543210", 2000, 500);
console.log(checkingAccount.withdraw(2500)); // Output: Exceeded overdraft limit.
console.log(checkingAccount.balance); // Output: 2000

checkingAccount.withdraw(500);
console.log(checkingAccount.balance); // Output: 1500

console.log(BankAccount.bankName); // Output: MyBank

// Problem 4:
// Create a JavaScript class called Animal that has the following properties and methods:

// name (string)
// age (number)
// eat (method)
// sleep (method)

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name[0].toUpperCase() + this.name.slice(1)} ate some food.`;
  }

  sleep() {
    return `${this.name[0].toUpperCase() + this.name.slice(1)} went to sleep.`;
  }
}

// Extend the Animal class and create two new classes: Cat and Dog. The Cat class should have an additional method called meow, and the Dog class should have an additional method called bark.

// Create instances of both the Cat and Dog classes and test their methods.

const tiger = new Animal("Frank", 25);
console.log(tiger.eat());
console.log(tiger.sleep());

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  meow() {
    return `${this.name[0].toUpperCase() + this.name.slice(1)} meows!`;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  bark() {
    return `${this.name[0].toUpperCase() + this.name.slice(1)} barks!`;
  }
}

const kitty = new Cat("Kitty", 2);
console.log(kitty.meow());
console.log(kitty.eat());
console.log(kitty.sleep());
console.log(kitty.age);

const fido = new Dog("fido", 6);
console.log(fido.bark());
console.log(fido.eat());
console.log(fido.sleep());
console.log(fido.age);
