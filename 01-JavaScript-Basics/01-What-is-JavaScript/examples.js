// ============================================
// WHAT IS JAVASCRIPT? - EXAMPLES
// ============================================

// Example 1: Hello World in the Console
// Open your browser console (F12 or Right-click → Inspect → Console)
// and paste this code:

console.log("Hello, World!");
console.log("Welcome to JavaScript!");

// --------------------------------------------

// Example 2: Simple Arithmetic
// JavaScript can perform calculations

console.log(5 + 3);        // Addition: 8
console.log(10 - 4);       // Subtraction: 6
console.log(7 * 6);        // Multiplication: 42
console.log(20 / 4);       // Division: 5
console.log(17 % 5);       // Modulus (remainder): 2

// --------------------------------------------

// Example 3: Working with Text (Strings)

console.log("JavaScript");
console.log("Learning" + " " + "JavaScript");  // String concatenation
console.log("2024");

// --------------------------------------------

// Example 4: Displaying Messages to Users
// (These work in browsers, not in Node.js console)

// alert("This is a popup message!");
// let userName = prompt("What is your name?");
// console.log("Hello, " + userName + "!");

// --------------------------------------------

// Example 5: Changing Web Page Content
// This code works when included in an HTML file

/*
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>
  <h1 id="heading">Original Text</h1>
  <button onclick="changeText()">Click Me</button>

  <script>
    function changeText() {
      document.getElementById("heading").textContent = "Text Changed by JavaScript!";
    }
  </script>
</body>
</html>
*/

// --------------------------------------------

// Example 6: JavaScript Can Make Decisions

let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// --------------------------------------------

// Example 7: JavaScript Can Repeat Tasks (Loops)

for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5

// --------------------------------------------

// Example 8: JavaScript Can Store Lists of Data

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);  // Apple
console.log(fruits[1]);  // Banana
console.log(fruits[2]);  // Cherry

// --------------------------------------------

// Example 9: JavaScript Can Work with Objects

let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log(person.name);  // Alice
console.log(person.age);   // 25

// --------------------------------------------

// Example 10: JavaScript Can Respond to Time

// setTimeout runs code after a delay (in milliseconds)
setTimeout(function () {
    console.log("This message appears after 2 seconds");
}, 2000);

// --------------------------------------------

// TRY IT YOURSELF:
// 1. Copy any example above into your browser console
// 2. Modify the values and see what happens
// 3. Try combining different examples
// 4. Experiment and have fun!
