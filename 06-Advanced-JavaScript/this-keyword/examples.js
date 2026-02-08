// this Keyword Examples

// Object method
let person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

person.greet(); // Hi, I'm Alice

// Constructor
function Car(brand) {
  this.brand = brand;
  this.drive = function() {
    console.log(`Driving ${this.brand}`);
  };
}

let car = new Car("Toyota");
car.drive(); // Driving Toyota

// Arrow function (no own this)
let obj = {
  name: "Bob",
  regularFunction() {
    console.log(this.name); // "Bob"
  },
  arrowFunction: () => {
    console.log(this.name); // undefined
  }
};

obj.regularFunction();
obj.arrowFunction();
