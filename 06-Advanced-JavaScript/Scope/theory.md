# Scope in JavaScript

## What is Scope?

Scope determines where variables are accessible in your code.

## Types of Scope

### 1. Global Scope
Variables declared outside functions.

```javascript
let globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible
}
```

### 2. Function Scope
Variables declared inside functions.

```javascript
function test() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible
}

// console.log(localVar); // Error!
```

### 3. Block Scope (let/const)
Variables declared in blocks `{}`.

```javascript
if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // Accessible
}

// console.log(blockVar); // Error!
```

## Scope Chain

JavaScript looks for variables from inner to outer scope.

```javascript
let a = "global";

function outer() {
  let b = "outer";
  
  function inner() {
    let c = "inner";
    console.log(a, b, c); // All accessible
  }
  
  inner();
}
```

## Key Takeaways

✅ Scope controls variable accessibility  
✅ Inner scopes can access outer scopes  
✅ Use let/const for block scope  
✅ Avoid polluting global scope  
