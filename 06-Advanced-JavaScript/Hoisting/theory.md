# Hoisting

## What is Hoisting?

JavaScript moves declarations to the top of their scope before code execution.

## Variable Hoisting

### var (hoisted)
```javascript
console.log(x); // undefined (not error!)
var x = 5;

// Interpreted as:
// var x;
// console.log(x);
// x = 5;
```

### let/const (not hoisted in same way)
```javascript
// console.log(y); // ReferenceError!
let y = 5;
```

## Function Hoisting

### Function Declarations (hoisted)
```javascript
greet(); // Works!

function greet() {
  console.log("Hello!");
}
```

### Function Expressions (not hoisted)
```javascript
// sayHi(); // Error!

const sayHi = function() {
  console.log("Hi!");
};
```

## Key Takeaways

✅ Declarations are hoisted, assignments are not  
✅ Function declarations are fully hoisted  
✅ let/const have "temporal dead zone"  
✅ Use let/const to avoid hoisting issues  
