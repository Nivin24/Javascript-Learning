// ============================================
// FUNCTION BASICS - EXAMPLES
// ============================================

// Example 1: Simple function
function sayHello() {
  console.log("Hello!");
}

sayHello(); // Call the function

// Example 2: Function with parameter
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");

// Example 3: Function with multiple parameters
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum); // 8

// Example 4: Function with return
function multiply(x, y) {
  return x * y;
}

let product = multiply(4, 7);
console.log("Product:", product); // 28

// Example 5: Function expression
const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(10, 3)); // 7

// Example 6: Default parameters
function greetUser(name = "Guest") {
  return "Welcome, " + name + "!";
}

console.log(greetUser());        // Welcome, Guest!
console.log(greetUser("Alice")); // Welcome, Alice!

// Example 7: Function with multiple operations
function calculateArea(width, height) {
  let area = width * height;
  return area;
}

console.log("Area:", calculateArea(5, 10)); // 50

// Example 8: Function calling another function
function square(n) {
  return n * n;
}

function sumOfSquares(a, b) {
  return square(a) + square(b);
}

console.log(sumOfSquares(3, 4)); // 9 + 16 = 25

// Example 9: Early return
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

// Example 10: Function with validation
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Cannot divide by zero
