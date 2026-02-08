# Operators in JavaScript

## What are Operators?

Operators are symbols that perform operations on values and variables. They are the building blocks for creating expressions and performing calculations.

---

## Types of Operators

### 1. Arithmetic Operators

Perform mathematical calculations.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `7 * 6` | `42` |
| `/` | Division | `20 / 4` | `5` |
| `%` | Modulus (Remainder) | `17 % 5` | `2` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `x++` | Increases by 1 |
| `--` | Decrement | `x--` | Decreases by 1 |

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1
console.log(a ** b);  // 1000 (10^3)
```

**Increment/Decrement:**
```javascript
let count = 5;
count++;        // count is now 6 (post-increment)
++count;        // count is now 7 (pre-increment)
count--;        // count is now 6 (post-decrement)
```

---

### 2. Assignment Operators

Assign values to variables.

| Operator | Example | Equivalent To |
|----------|---------|---------------|
| `=` | `x = 5` | Assign 5 to x |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 4` | `x = x * 4` |
| `/=` | `x /= 2` | `x = x / 2` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 2` | `x = x ** 2` |

```javascript
let score = 100;
score += 50;    // score = 150
score -= 20;    // score = 130
score *= 2;     // score = 260
score /= 4;     // score = 65
```

---

### 3. Comparison Operators

Compare two values and return a boolean (`true` or `false`).

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal to (loose) | `5 == "5"` | `true` |
| `===` | Equal to (strict) | `5 === "5"` | `false` |
| `!=` | Not equal (loose) | `5 != "5"` | `false` |
| `!==` | Not equal (strict) | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 7` | `true` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `4 <= 3` | `false` |

```javascript
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(5 == "5");    // true (type coercion)
console.log(5 === "5");   // false (different types)
console.log(5 !== "5");   // true (different types)
```

**Best Practice:** Always use `===` and `!==` to avoid unexpected type coercion.

---

### 4. Logical Operators

Combine multiple boolean expressions.

| Operator | Name | Description | Example |
|----------|------|-------------|---------|
| `&&` | AND | True if both are true | `true && false` → `false` |
| `\|\|` | OR | True if at least one is true | `true \|\| false` → `true` |
| `!` | NOT | Inverts boolean value | `!true` → `false` |

```javascript
let age = 25;
let hasLicense = true;

// AND: Both conditions must be true
if (age >= 18 && hasLicense) {
  console.log("Can drive");
}

// OR: At least one condition must be true
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No work today!");
}

// NOT: Inverts the boolean
let isRaining = false;
if (!isRaining) {
  console.log("Go outside!");
}
```

**Short-circuit evaluation:**
```javascript
// && returns first falsy value or last value
console.log(true && "hello");   // "hello"
console.log(false && "hello");  // false

// || returns first truthy value or last value
console.log(true || "hello");   // true
console.log(false || "hello");  // "hello"
```

---

### 5. String Operators

Concatenate (join) strings.

```javascript
let firstName = "John";
let lastName = "Doe";

// Using + operator
let fullName = firstName + " " + lastName;
console.log(fullName);  // "John Doe"

// Using += operator
let greeting = "Hello";
greeting += " World";
console.log(greeting);  // "Hello World"
```

---

### 6. Ternary Operator

A shorthand for `if-else` statements.

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// Equivalent to:
let status2;
if (age >= 18) {
  status2 = "Adult";
} else {
  status2 = "Minor";
}
```

---

### 7. Type Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `typeof` | Returns the type of a variable | `typeof 42` → `"number"` |
| `instanceof` | Checks if object is instance of a class | `[] instanceof Array` → `true` |

```javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
```

---

## Operator Precedence

Operators are evaluated in a specific order (like PEMDAS in math).

**High to Low Priority:**
1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication `*`, Division `/`, Modulus `%`
4. Addition `+`, Subtraction `-`
5. Comparison `>`, `<`, `>=`, `<=`
6. Equality `==`, `===`, `!=`, `!==`
7. Logical AND `&&`
8. Logical OR `||`
9. Ternary `? :`
10. Assignment `=`, `+=`, `-=`, etc.

```javascript
let result = 5 + 3 * 2;    // 11 (not 16, because * has higher precedence)
let result2 = (5 + 3) * 2; // 16 (parentheses override precedence)
```

---

## Common Pitfalls

### 1. Confusing `=` with `==` and `===`
```javascript
let x = 5;      // Assignment
x == 5;         // Comparison (loose)
x === 5;        // Comparison (strict)
```

### 2. Type Coercion with `==`
```javascript
console.log(0 == false);    // true (unexpected!)
console.log(0 === false);   // false (better)
```

### 3. String + Number
```javascript
console.log("5" + 3);   // "53" (string concatenation)
console.log("5" - 3);   // 2 (numeric subtraction)
```

---

## Key Takeaways

✅ Arithmetic operators perform math operations  
✅ Use `===` instead of `==` for comparisons  
✅ Logical operators combine boolean expressions  
✅ Ternary operator is a shorthand for if-else  
✅ Operator precedence determines evaluation order  
✅ Be aware of type coercion when mixing types  

---

## Next Steps

Practice using operators in the `operators.js` and `practice.js` files!
