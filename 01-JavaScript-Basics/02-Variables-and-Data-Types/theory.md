# Variables and Data Types

## What are Variables?

A **variable** is a container that stores data. Think of it as a labeled box where you can put different values and retrieve them later.

```javascript
let age = 25;
let name = "Alice";
```

---

## Declaring Variables

JavaScript has three ways to declare variables:

### 1. `let` (Modern, Recommended)
- **Block-scoped**: Only accessible within the block `{}` where it's defined
- **Can be reassigned**: You can change its value
- **Cannot be redeclared**: Can't declare the same variable twice in the same scope

```javascript
let score = 100;
score = 150;  // ✅ Allowed
// let score = 200;  // ❌ Error: already declared
```

### 2. `const` (Modern, Recommended for Constants)
- **Block-scoped**: Like `let`
- **Cannot be reassigned**: Value is constant
- **Must be initialized**: You must assign a value when declaring

```javascript
const PI = 3.14159;
// PI = 3.14;  // ❌ Error: cannot reassign const
```

### 3. `var` (Old, Avoid in Modern Code)
- **Function-scoped**: Accessible throughout the entire function
- **Can be reassigned and redeclared**
- **Hoisted**: Declaration is moved to the top (can cause bugs)

```javascript
var oldStyle = "avoid this";
```

**Best Practice:** Use `const` by default. Use `let` only when you need to reassign the variable. Avoid `var`.

---

## Data Types in JavaScript

JavaScript has **8 data types**, divided into two categories:

### Primitive Types (7 types)

#### 1. **Number**
Represents both integers and floating-point numbers.

```javascript
let age = 25;              // Integer
let price = 19.99;         // Floating-point
let negative = -42;        // Negative number
let billion = 1e9;         // Scientific notation: 1,000,000,000
```

Special numeric values:
```javascript
let infinite = Infinity;
let notANumber = NaN;      // "Not a Number" (result of invalid math)
```

#### 2. **String**
Represents text. Can use single quotes, double quotes, or backticks.

```javascript
let firstName = 'John';
let lastName = "Doe";
let greeting = `Hello, ${firstName}!`;  // Template literal (ES6)
```

#### 3. **Boolean**
Represents `true` or `false`.

```javascript
let isStudent = true;
let hasLicense = false;
```

#### 4. **Undefined**
A variable that has been declared but not assigned a value.

```javascript
let x;
console.log(x);  // undefined
```

#### 5. **Null**
Represents "no value" or "empty value" (intentional absence).

```javascript
let emptyValue = null;
```

#### 6. **Symbol** (ES6)
Unique and immutable identifier (advanced topic).

```javascript
let id = Symbol('id');
```

#### 7. **BigInt** (ES2020)
For integers larger than `Number.MAX_SAFE_INTEGER`.

```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
```

### Non-Primitive Type

#### 8. **Object**
Collections of key-value pairs (we'll cover this in detail later).

```javascript
let person = {
  name: "Alice",
  age: 30
};
```

---

## Type Checking

Use `typeof` operator to check the type of a value:

```javascript
console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (historical bug!)
console.log(typeof {});           // "object"
```

---

## Type Coercion (Automatic Type Conversion)

JavaScript automatically converts types in certain situations:

```javascript
console.log("5" + 3);      // "53" (number 3 converted to string)
console.log("5" - 3);      // 2 (string "5" converted to number)
console.log(true + 1);     // 2 (true converted to 1)
console.log(false + 1);    // 1 (false converted to 0)
```

**Be careful!** Type coercion can lead to unexpected results.

---

## Naming Rules for Variables

✅ **Allowed:**
- Start with letter, `_`, or `$`
- Can contain letters, numbers, `_`, `$`
- Case-sensitive (`age` and `Age` are different)

```javascript
let userName = "Alice";
let _private = 123;
let $element = document.querySelector('#id');
let user2 = "Bob";
```

❌ **Not Allowed:**
- Cannot start with a number
- Cannot use reserved keywords (`let`, `if`, `function`, etc.)
- Cannot contain spaces or special characters (except `_` and `$`)

```javascript
// let 2users = 10;     // ❌ Error
// let user-name = "";  // ❌ Error
// let let = 5;         // ❌ Error (reserved keyword)
```

**Naming Conventions:**
- Use **camelCase** for variables: `firstName`, `totalPrice`
- Use **UPPER_CASE** for constants: `MAX_SIZE`, `API_KEY`
- Use descriptive names: `userAge` instead of `x`

---

## Key Takeaways

✅ Use `let` for variables that change, `const` for constants  
✅ JavaScript has 7 primitive types + objects  
✅ Strings, numbers, and booleans are the most common types  
✅ Use `typeof` to check a value's type  
✅ Be aware of type coercion (automatic type conversion)  
✅ Follow naming conventions for readable code  

---

## Next Steps

Practice declaring variables and working with different data types in the `variables.js` and `practice.js` files!
