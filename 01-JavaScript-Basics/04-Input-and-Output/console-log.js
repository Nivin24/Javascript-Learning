// ============================================
// CONSOLE METHODS - EXAMPLES
// ============================================

// Basic console.log
console.log("Hello, Console!");
console.log(42);
console.log(true);
console.log([1, 2, 3]);
console.log({name: "Alice", age: 25});

// Multiple arguments
console.log("Name:", "Bob", "Age:", 30);

// Template literals
let name = "Charlie";
let age = 35;
console.log(`User: ${name}, Age: ${age}`);

// console.warn - Yellow warning
console.warn("This is a warning message!");
console.warn("Low disk space");

// console.error - Red error
console.error("This is an error message!");
console.error("Failed to load resource");

// console.table - Display data in table format
let users = [
  {name: "Alice", age: 25, city: "NYC"},
  {name: "Bob", age: 30, city: "LA"},
  {name: "Charlie", age: 35, city: "Chicago"}
];
console.table(users);

// console.group - Group related logs
console.group("User Details");
console.log("Name: Alice");
console.log("Age: 25");
console.log("City: NYC");
console.groupEnd();

// console.time - Measure execution time
console.time("Loop Time");
for (let i = 0; i < 1000000; i++) {
  // Some operation
}
console.timeEnd("Loop Time");

// console.count - Count occurrences
function greet(name) {
  console.count("greet called");
  console.log("Hello, " + name);
}
greet("Alice");
greet("Bob");
greet("Alice");

// console.clear - Clear console (uncomment to use)
// console.clear();

// console.assert - Log if condition is false
let x = 5;
console.assert(x > 10, "x is not greater than 10");

// console.dir - Display object properties
let person = {
  name: "David",
  age: 40,
  address: {
    city: "Boston",
    zip: "02101"
  }
};
console.dir(person);

// Styling console output (browser only)
console.log("%cStyled Text", "color: blue; font-size: 20px; font-weight: bold");
console.log("%cRed %cGreen %cBlue", "color: red", "color: green", "color: blue");

// Debugging example
function calculateTotal(price, quantity) {
  console.log("Function called with:", {price, quantity});
  let total = price * quantity;
  console.log("Calculated total:", total);
  return total;
}

calculateTotal(10, 5);
