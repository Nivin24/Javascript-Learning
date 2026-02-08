# Functions in JavaScript

## What is a Function?

A function is a reusable block of code designed to perform a specific task. Functions help organize code and avoid repetition.

---

## Function Declaration

```javascript
function functionName(parameters) {
  // Code to execute
  return value; // Optional
}
```

**Example:**
```javascript
function greet() {
  console.log("Hello, World!");
}

greet(); // Call the function
```

---

## Functions with Parameters

Parameters allow you to pass data into functions.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Bob");   // Hello, Bob!
```

**Multiple parameters:**
```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8
```

---

## Return Statement

The `return` statement sends a value back to the caller.

```javascript
function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 5);
console.log(result); // 20
```

**Without return:**
```javascript
function sayHi() {
  console.log("Hi!");
  // No return statement
}

let value = sayHi(); // undefined
```

---

## Function Expressions

Functions can be assigned to variables.

```javascript
const greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Charlie")); // Hello, Charlie
```

---

## Default Parameters (ES6)

Provide default values for parameters.

```javascript
function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet());        // Hello, Guest
console.log(greet("Alice")); // Hello, Alice
```

---

## Function Scope

Variables declared inside a function are local to that function.

```javascript
function test() {
  let x = 10; // Local variable
  console.log(x);
}

test(); // 10
// console.log(x); // Error: x is not defined
```

---

## Why Use Functions?

✅ **Reusability**: Write once, use many times  
✅ **Organization**: Break complex problems into smaller pieces  
✅ **Maintainability**: Easier to update and debug  
✅ **Abstraction**: Hide implementation details  

---

## Key Takeaways

✅ Functions are reusable blocks of code  
✅ Use parameters to pass data in  
✅ Use return to send data out  
✅ Functions can be declared or expressed  
✅ Default parameters provide fallback values  
