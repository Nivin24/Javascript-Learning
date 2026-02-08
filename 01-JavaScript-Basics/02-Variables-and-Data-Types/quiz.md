# Variables and Data Types - Quiz

Test your understanding of JavaScript variables and data types!

---

## Multiple Choice Questions

### Question 1
Which keyword should you use for a value that won't change?
- A) var
- B) let
- C) const
- D) static

**Answer:** C) const

---

### Question 2
What is the output of `typeof null`?
- A) "null"
- B) "undefined"
- C) "object"
- D) "number"

**Answer:** C) "object" (This is a known JavaScript quirk/bug)

---

### Question 3
Which of these is NOT a primitive data type?
- A) String
- B) Number
- C) Array
- D) Boolean

**Answer:** C) Array (Arrays are objects, not primitives)

---

### Question 4
What will `console.log("5" + 3)` output?
- A) 8
- B) "8"
- C) "53"
- D) Error

**Answer:** C) "53" (The number is converted to a string)

---

### Question 5
What is the value of an uninitialized variable?
- A) null
- B) undefined
- C) 0
- D) ""

**Answer:** B) undefined

---

### Question 6
Which variable name is INVALID?
- A) _userName
- B) $price
- C) 2ndPlace
- D) firstName

**Answer:** C) 2ndPlace (Cannot start with a number)

---

### Question 7
What is the difference between `==` and `===`?
- A) No difference
- B) `==` checks value only, `===` checks value and type
- C) `===` is faster
- D) `==` is deprecated

**Answer:** B) `==` checks value only (with type coercion), `===` checks both value and type

---

### Question 8
What will `console.log("10" - 5)` output?
- A) "105"
- B) "10-5"
- C) 5
- D) Error

**Answer:** C) 5 (The string is converted to a number for subtraction)

---

### Question 9
How many data types does JavaScript have?
- A) 5
- B) 6
- C) 7
- D) 8

**Answer:** D) 8 (Number, String, Boolean, Undefined, Null, Symbol, BigInt, Object)

---

### Question 10
What is the recommended naming convention for variables in JavaScript?
- A) snake_case
- B) camelCase
- C) PascalCase
- D) kebab-case

**Answer:** B) camelCase

---

## True or False

### Question 11
You can reassign a variable declared with `const`.
- True
- False

**Answer:** False

---

### Question 12
`let` and `var` are completely interchangeable.
- True
- False

**Answer:** False (They have different scoping rules)

---

### Question 13
Template literals use backticks (`) instead of quotes.
- True
- False

**Answer:** True

---

## Code Output Questions

### Question 14
What is the output?
```javascript
let x = 10;
let y = "10";
console.log(x === y);
```
- A) true
- B) false
- C) undefined
- D) Error

**Answer:** B) false (Different types: number vs string)

---

### Question 15
What is the output?
```javascript
const person = { name: "Alice" };
person.name = "Bob";
console.log(person.name);
```
- A) "Alice"
- B) "Bob"
- C) Error
- D) undefined

**Answer:** B) "Bob" (const prevents reassignment of the variable, not modification of object properties)

---

## Short Answer Questions

### Question 16
Explain the difference between `null` and `undefined`.

**Sample Answer:**
- `undefined` means a variable has been declared but not assigned a value
- `null` is an intentional assignment representing "no value" or "empty"

---

### Question 17
What is type coercion? Give an example.

**Sample Answer:**
Type coercion is JavaScript's automatic conversion of values from one type to another. Example: `"5" + 3` results in `"53"` because the number 3 is converted to a string.

---

### Question 18
Why should you avoid using `var` in modern JavaScript?

**Sample Answer:**
`var` has function scope (not block scope), can be redeclared, and is hoisted in confusing ways. `let` and `const` have block scope and more predictable behavior.

---

## Coding Challenges

### Question 19
Write code to swap the values of two variables without using a third variable.

**Sample Answer:**
```javascript
let a = 5;
let b = 10;

[a, b] = [b, a];  // Using array destructuring

// Or using arithmetic:
// a = a + b;
// b = a - b;
// a = a - b;
```

---

### Question 20
Create variables for a book object with title, author, pages, and isRead properties. Use appropriate data types.

**Sample Answer:**
```javascript
let bookTitle = "1984";
let bookAuthor = "George Orwell";
let bookPages = 328;
let isRead = true;
```

---

## Scoring Guide

- **18-20 correct**: Excellent! You've mastered variables and data types.
- **15-17 correct**: Great job! Review the questions you missed.
- **12-14 correct**: Good progress. Practice more with the examples.
- **Below 12**: Take time to review the theory and examples before continuing.

---

## Next Steps

Once you're comfortable with variables and data types, move on to **Operators** to learn how to perform operations on your data!
