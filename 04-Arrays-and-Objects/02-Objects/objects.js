// Object Examples

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Boston"
  },
  greet: function() {
    return `Hello, I'm ${this.firstName}`;
  }
};

console.log(person.firstName);
console.log(person.address.city);
console.log(person.greet());

// Object methods
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

// Destructuring
let {firstName, age} = person;
console.log(firstName, age);
