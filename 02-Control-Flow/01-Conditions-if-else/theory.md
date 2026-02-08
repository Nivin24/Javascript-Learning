# Conditional Statements (if-else)

## What are Conditionals?

Conditionals allow your program to make decisions and execute different code based on conditions.

---

## The `if` Statement

Executes code only if a condition is true.

```javascript
if (condition) {
  // Code runs if condition is true
}
```

**Example:**
```javascript
let age = 18;

if (age >= 18) {
  console.log("You can vote!");
}
```

---

## The `if-else` Statement

Provides an alternative when the condition is false.

```javascript
if (condition) {
  // Runs if true
} else {
  // Runs if false
}
```

**Example:**
```javascript
let temperature = 15;

if (temperature > 25) {
  console.log("It's hot!");
} else {
  console.log("It's cold!");
}
```

---

## The `if-else if-else` Statement

Tests multiple conditions.

```javascript
if (condition1) {
  // Runs if condition1 is true
} else if (condition2) {
  // Runs if condition2 is true
} else {
  // Runs if all conditions are false
}
```

**Example:**
```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

---

## Nested if Statements

You can put if statements inside other if statements.

```javascript
let age = 20;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive!");
  } else {
    console.log("You need a license!");
  }
} else {
  console.log("You're too young to drive!");
}
```

---

## Truthy and Falsy Values

JavaScript converts values to boolean in conditions.

**Falsy values** (treated as false):
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy values**: Everything else!

```javascript
if ("hello") {
  console.log("This runs!"); // Strings are truthy
}

if (0) {
  console.log("This doesn't run"); // 0 is falsy
}
```

---

## Best Practices

✅ Use `===` instead of `==` in conditions  
✅ Keep conditions simple and readable  
✅ Use early returns to avoid deep nesting  
✅ Consider using switch for many conditions  

---

## Key Takeaways

✅ `if` executes code when condition is true  
✅ `else` provides alternative code  
✅ `else if` tests multiple conditions  
✅ Conditions evaluate to true or false  
✅ Be aware of truthy and falsy values  
