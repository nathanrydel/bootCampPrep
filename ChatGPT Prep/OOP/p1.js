// Problem 1:
// Create a JavaScript class called Person with the following properties and methods:

class Person {
  // Properties: name (string), age (number), gender (string).
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    // Methods: introduce() that prints "Hi, my name is [name], I am [age] years old and I am a [gender]."
    return `Hi, my name is ${this.name}, I am ${this.age} years old, and I am a ${this.gender}.`;
  }
}

const person1 = new Person("Aaron", 28, "male");

console.log(person1);
console.log(person1.introduce());

// Problem 2:
// Create a subclass called Student that extends the Person class. The Student class should have an additional property called major (string). Override the introduce() method to include the major in the introduction.

class Student extends Person {
  constructor(name, age, gender, major) {
    super(name, age, gender);
    this.major = major;
  }

  introduce() {
    return `Hi, my name is ${this.name}, I am ${this.age} years old, I am a ${this.gender}, and I am a student studying ${this.major}.`;
  }
}

const student1 = new Student("Kaia", 19, "female", "journalism");
console.log(student1);
console.log(student1.introduce());

// Problem 3:
// Create a subclass called Teacher that extends the Person class. The Teacher class should have an additional property called subject (string). Override the introduce() method to include the subject in the introduction.

class Teacher extends Person {
  constructor(name, age, gender, subject) {
    super(name, age, gender);
    this.subject = subject;
  }

  introduce() {
    return `Hi, my name is ${this.name}, I am ${this.age} years old, I am a ${this.gender}, and I am a student studying ${this.subject}.`;
  }
}

const teacher = new Teacher("James", 57, "male", "Archeaology");
console.log(teacher);
console.log(teacher.introduce());

// Problem 4:
// Create a JavaScript class called Shape with the following properties and methods:

// Properties: color (string), calculateArea() (method that returns the area of the shape).
// Create a subclass called Rectangle that extends the Shape class. The Rectangle class should have additional properties: width and height. Implement the calculateArea() method for rectangles.
// Create a subclass called Circle that extends the Shape class. The Circle class should have an additional property: radius. Implement the calculateArea() method for circles.

class Shape {
  constructor(color) {
    this.color = color;
  }

  calculateArea() {
    throw new Error(
      "calculateArea() method must be implemented in a subclass.",
    );
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const shape = new Shape("white");
// console.log(shape.calculateArea()); // throw error
console.log(shape);
const rectangle = new Rectangle("red", 4, 5);
console.log(rectangle.calculateArea());
const circle = new Circle("blue", 3.1415);
console.log(circle.calculateArea());

// Problem 5:
// Create a JavaScript class called BankAccount with the following properties and methods:

// Properties: accountNumber (number), balance (number).
// Methods: deposit(amount) (method that adds the given amount to the balance), withdraw(amount) (method that subtracts the given amount from the balance), getBalance() (method that returns the current balance).
// Create a subclass called SavingsAccount that extends the BankAccount class. The SavingsAccount class should have an additional property: interestRate. Implement the addInterest() method that increases the balance based on the interest rate.

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    // return this.balance;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      // return this.balance;
    } else {
      return `Insufficient funds in account.`;
    }
  }

  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  addInterest() {
    this.balance += (this.interestRate / 100) * this.balance;
  }
}

const account1 = new BankAccount(8956231, 3000);
console.log(account1.getBalance());
account1.withdraw(100);
account1.deposit(200);
console.log(account1.getBalance());

const savings1 = new SavingsAccount(8956232, 1000, 3.5);
console.log(savings1.getBalance());
console.log(savings1.withdraw(1100));
console.log(savings1.deposit(200));
console.log(savings1.addInterest());
console.log(savings1.getBalance());
