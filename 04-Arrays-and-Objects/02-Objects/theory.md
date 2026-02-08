# Objects in JavaScript

## What is an Object?

An object is a collection of key-value pairs (properties).

```javascript
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};
```

## Accessing Properties

```javascript
// Dot notation
console.log(person.name); // "Alice"

// Bracket notation
console.log(person["age"]); // 25
```

## Adding/Modifying Properties

```javascript
person.email = "alice@example.com"; // Add
person.age = 26; // Modify
```

## Object Methods

```javascript
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  // Shorthand (ES6)
  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3)); // 8
```

## Key Takeaways

✅ Objects store key-value pairs  
✅ Access with dot or bracket notation  
✅ Objects can contain methods  
✅ Objects are mutable  
