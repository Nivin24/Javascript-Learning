# JavaScript Interview Questions - Personal Notes

Based on handwritten notes - Comprehensive answers with code examples

---

## 1. What is JavaScript and its usage?

**Answer:** JavaScript is a high-level, interpreted programming language primarily used for:
- Web development (client-side and server-side)
- Creating interactive web pages
- Building web applications
- Mobile app development
- Game development

```javascript
// Example: Interactive button
document.getElementById('myButton').addEventListener('click', function() {
  alert('JavaScript in action!');
});
```

---

## 2. Asynchronous / Synchronous

**Synchronous:** Code executes line by line, blocking execution until complete.

**Asynchronous:** Code can run in the background without blocking.

```javascript
// Synchronous
console.log('First');
console.log('Second');
console.log('Third');

// Asynchronous
console.log('First');
setTimeout(() => console.log('Second'), 1000);
console.log('Third');
// Output: First, Third, Second
```

---

## 3. var / let / const

**var:** Function-scoped, hoisted, can be redeclared
**let:** Block-scoped, not hoisted, cannot be redeclared
**const:** Block-scoped, not hoisted, cannot be reassigned

```javascript
var x = 10;
var x = 20; // OK

let y = 10;
// let y = 20; // Error

const z = 10;
// z = 20; // Error
```

---

## 4. TDZ (Temporal Dead Zone)

**Answer:** The period between entering scope and variable initialization where accessing the variable throws an error.

```javascript
console.log(x); // ReferenceError
let x = 10;

// TDZ exists from start of block until declaration
{
  // TDZ starts
  console.log(myVar); // Error
  let myVar = 5; // TDZ ends
}
```

---

## 5. Hoisting

**Answer:** JavaScript's behavior of moving declarations to the top of their scope before execution.

```javascript
console.log(x); // undefined (not error)
var x = 5;

// Function hoisting
greet(); // Works!
function greet() {
  console.log('Hello');
}

// Function expression not hoisted
// sayHi(); // Error
const sayHi = function() {
  console.log('Hi');
};
```

---

## 6. Scope

**Answer:** Determines where variables are accessible.

**Types:** Global, Function, Block

```javascript
let global = 'global'; // Global scope

function test() {
  let func = 'function'; // Function scope
  
  if (true) {
    let block = 'block'; // Block scope
    console.log(global, func, block); // All accessible
  }
  // console.log(block); // Error
}
```

---

## 7. Types of Scope

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**

```javascript
// Global
var a = 1;

function example() {
  // Function scope
  var b = 2;
  
  if (true) {
    // Block scope
    let c = 3;
  }
}
```

---

## 8. Lexical Scope

**Answer:** Inner functions have access to variables in outer functions.

```javascript
function outer() {
  let name = 'Alice';
  
  function inner() {
    console.log(name); // Can access outer variable
  }
  
  inner();
}
outer(); // Alice
```

---

## 9. Scope Chain

**Answer:** JavaScript looks for variables from inner to outer scope.

```javascript
let a = 'global';

function level1() {
  let b = 'level1';
  
  function level2() {
    let c = 'level2';
    console.log(a, b, c); // Accesses all via scope chain
  }
  
  level2();
}
```

---

## 10. Closure / Drawbacks / Applications

**Answer:** A function that remembers variables from its outer scope.

**Drawbacks:** Can cause memory leaks if not managed properly.

**Applications:**
- Data privacy/encapsulation
- Function factories
- Memoization
- Event handlers
- Callbacks

```javascript
// Basic closure
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment() { count++; },
    decrement() { count--; },
    getCount() { return count; }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1

// Application: Function factory
function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Application: Data privacy
function bankAccount(initialBalance) {
  let balance = initialBalance; // Private
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance() {
      return balance;
    }
  };
}

const account = bankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// Cannot access balance directly - it's private!
```

---

## 11. First Class Function

**Answer:** Functions treated as values - can be assigned, passed, returned.

```javascript
// Assign to variable
const greet = function() { return 'Hello'; };

// Pass as argument
function execute(fn) {
  return fn();
}

// Return from function
function makeMultiplier(x) {
  return function(y) {
    return x * y;
  };
}
```

---

## 12. Higher Order Function

**Answer:** Functions that take functions as arguments or return functions.

```javascript
// Takes function as argument
function map(arr, fn) {
  let result = [];
  for (let item of arr) {
    result.push(fn(item));
  }
  return result;
}

const doubled = map([1, 2, 3], x => x * 2);
console.log(doubled); // [2, 4, 6]
```

---

## 13. Template String (Template Literals)

**Answer:** String literals allowing embedded expressions using backticks.

```javascript
// Basic template string
const name = 'Alice';
const age = 25;
console.log(`Hello, I'm ${name} and I'm ${age} years old`);

// Multi-line strings
const message = `
  This is a
  multi-line
  string
`;

// Expression evaluation
const a = 10, b = 20;
console.log(`Sum: ${a + b}`); // Sum: 30

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<strong>${values[i]}</strong>` : '');
  }, '');
}

const product = 'laptop';
const price = 999;
console.log(highlight`Product: ${product}, Price: $${price}`);
```

---

## 14. Currying

**Answer:** Transforming a function with multiple arguments into a sequence of functions.

```javascript
// Regular function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3)); // 6
```

---

## 14. Callback Function

**Answer:** A function passed as an argument to another function.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 1000);
}

fetchData(function(data) {
  console.log(data); // Data loaded
});
```

---

## 15. Promise / State / Methods

**States:** Pending, Fulfilled, Rejected

**Methods:** .then(), .catch(), .finally()

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));
```

---

## 16. What is Promise Chaining?

**Answer:** Linking multiple promises together.

```javascript
fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch(`/api/posts/${user.id}`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

---

## 17. async / await

**Answer:** Syntactic sugar for promises, makes async code look synchronous.

```javascript
async function fetchUser() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

---

## 18. Event Handling

**Answer:** Responding to user interactions.

```javascript
// Click event
document.getElementById('btn').addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log(event.target);
});

// Keyboard event
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});
```

---

## 19. Event Bubbling / Capturing

**Bubbling:** Event propagates from target to root
**Capturing:** Event propagates from root to target

```javascript
// Bubbling (default)
parent.addEventListener('click', () => console.log('Parent'));
child.addEventListener('click', () => console.log('Child'));
// Click child: "Child", "Parent"

// Capturing
parent.addEventListener('click', () => console.log('Parent'), true);
child.addEventListener('click', () => console.log('Child'), true);
// Click child: "Parent", "Child"
```

---

## 20. Propagation / Delegation

**stopPropagation():** Stops event from bubbling

**Event Delegation:** Using single listener on parent for multiple children

```javascript
// Stop propagation
child.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('Child only');
});

// Event delegation
document.getElementById('list').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }
});
```

---

## 21. Microtask / Macrotask

**Microtasks:** Promises, queueMicrotask
**Macrotasks:** setTimeout, setInterval, I/O

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0); // Macrotask

Promise.resolve().then(() => console.log('3')); // Microtask

console.log('4');

// Output: 1, 4, 3, 2
```

---

## 22. Spread Operator / Rest Parameter

**Spread (...):** Expands array/object
**Rest (...):** Collects arguments into array

```javascript
// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

## 23. NaN / isNaN

**NaN:** "Not a Number" - result of invalid math operation

```javascript
console.log(0 / 0); // NaN
console.log(parseInt('hello')); // NaN

console.log(isNaN(NaN)); // true
console.log(isNaN('hello')); // true
console.log(Number.isNaN('hello')); // false (stricter)
```

---

## 24. What is difference between Map and Object?

**Map:** Key-value pairs, any type as key, maintains insertion order
**Object:** String/Symbol keys only

```javascript
// Object
const obj = { name: 'Alice', age: 25 };

// Map
const map = new Map();
map.set('name', 'Alice');
map.set(1, 'one');
map.set({}, 'object key');

console.log(map.size); // 3
console.log(map.get('name')); // Alice
```

---

## 25. Object entries() / keys() / values()

```javascript
const person = { name: 'Alice', age: 25, city: 'NYC' };

console.log(Object.keys(person));
// ['name', 'age', 'city']

console.log(Object.values(person));
// ['Alice', 25, 'NYC']

console.log(Object.entries(person));
// [['name', 'Alice'], ['age', 25], ['city', 'NYC']]
```

---

## 26. Callback Hell

**Answer:** Nested callbacks creating pyramid of doom.

```javascript
// Callback hell
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        // Hard to read and maintain
      });
    });
  });
});

// Solution: Promises or async/await
```

---

## 27. Arrow Function

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// No own 'this'
const obj = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // undefined
  }
};
```

---

## 28. Memory Function

**Answer:** Caching function results (memoization).

```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log('Calculating...');
  return n * n;
});

console.log(expensiveCalc(5)); // Calculating... 25
console.log(expensiveCalc(5)); // 25 (from cache)
```

---

## 29. Function b/w Method

**Function:** Standalone
**Method:** Function inside object

```javascript
// Function
function greet() {
  console.log('Hello');
}

// Method
const person = {
  name: 'Alice',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
```

---

## 30. Default Parameter

```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}

greet(); // Hello, Guest
greet('Alice'); // Hello, Alice
```

---

## 31. Object / Methods / Destructuring

```javascript
const person = {
  name: 'Alice',
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

// Destructuring
const { name, age } = person;
console.log(name, age); // Alice 25

// Nested destructuring
const user = {
  id: 1,
  address: { city: 'NYC', zip: '10001' }
};

const { address: { city } } = user;
console.log(city); // NYC
```

---

## 32. null / undefined

**undefined:** Variable declared but not assigned
**null:** Intentional absence of value

```javascript
let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (JavaScript bug)
```

---

## 33. == / ===

**==:** Compares values with type coercion
**===:** Compares values and types (strict)

```javascript
console.log(5 == '5'); // true
console.log(5 === '5'); // false

console.log(null == undefined); // true
console.log(null === undefined); // false
```

---

## 34. Key Word and Identifiers

**Keywords:** Reserved words (if, for, function, etc.)
**Identifiers:** Names for variables, functions

```javascript
// Keywords: let, const, function, if, for, while, etc.

// Valid identifiers
let myVariable = 10;
let _private = 20;
let $jquery = 30;

// Invalid identifiers
// let 123abc = 40; // Cannot start with number
// let for = 50; // Cannot use keyword
```

---

## 35. Falsy and Truthy Values

**Falsy:** false, 0, "", null, undefined, NaN
**Truthy:** Everything else

```javascript
if (0) console.log('Truthy'); // Won't run
if (1) console.log('Truthy'); // Will run

console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean('hello')); // true
console.log(Boolean([])); // true
```

---

## 36. Execution Context

**Answer:** Environment where JavaScript code is executed.

**Types:** Global, Function, Eval

```javascript
// Global execution context
let global = 'global';

function test() {
  // Function execution context
  let local = 'local';
  console.log(global, local);
}
```

---

## 37. Prototypal and OOP Increment

**Answer:** JavaScript uses prototypal inheritance.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const alice = new Person('Alice');
alice.greet(); // Hello, I'm Alice
```

---

## 38. map vs forEach

**map:** Returns new array
**forEach:** Returns undefined, just iterates

```javascript
const arr = [1, 2, 3];

// map
const doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6]

// forEach
arr.forEach(x => console.log(x * 2));
// Prints: 2, 4, 6 (returns undefined)
```

---

## 39. Generator Function

**Answer:** Function that can pause and resume execution.

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

---

## 40. Polyfills

**Answer:** Code that provides modern functionality on older browsers.

```javascript
// Polyfill for Array.includes()
if (!Array.prototype.includes) {
  Array.prototype.includes = function(element) {
    return this.indexOf(element) !== -1;
  };
}
```

---

## Additional Topics from Notes

### Shallow Copy vs Deep Copy

```javascript
// Shallow copy
const obj1 = { a: 1, b: { c: 2 } };
const shallow = { ...obj1 };
shallow.b.c = 3;
console.log(obj1.b.c); // 3 (modified original)

// Deep copy
const deep = JSON.parse(JSON.stringify(obj1));
deep.b.c = 4;
console.log(obj1.b.c); // 3 (original unchanged)
```

### IIFE (Immediately Invoked Function Expression)

```javascript
(function() {
  console.log('IIFE executed!');
})();

// With parameters
(function(name) {
  console.log(`Hello, ${name}`);
})('Alice');
```

### Error Handling (try/catch/finally)

```javascript
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Always executes');
}
```

### Call, Apply, Bind (Explicit Binding)

```javascript
const person = { name: 'Alice' };

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

// call
greet.call(person, 'Hello'); // Hello, Alice

// apply
greet.apply(person, ['Hi']); // Hi, Alice

// bind
const boundGreet = greet.bind(person);
boundGreet('Hey'); // Hey, Alice
```

### Optional Chaining

```javascript
const user = {
  address: {
    city: 'NYC'
  }
};

console.log(user?.address?.city); // NYC
console.log(user?.phone?.number); // undefined (no error)
```

### Nullish Coalescing

```javascript
const value1 = null ?? 'default';
console.log(value1); // 'default'

const value2 = 0 ?? 'default';
console.log(value2); // 0 (not 'default')
```

### Symbol

```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2); // false

const obj = {
  [sym1]: 'value'
};
console.log(obj[sym1]); // 'value'
```

### Mutable / Immutable

```javascript
// Mutable (can be changed)
const arr = [1, 2, 3];
arr.push(4); // OK

// Immutable (cannot be changed)
const str = 'hello';
// str[0] = 'H'; // Won't work

// const prevents reassignment, not mutation
const obj = { a: 1 };
obj.a = 2; // OK
// obj = {}; // Error
```

### Type Casting / Type Coercion

```javascript
// Explicit (casting)
const num = Number('123');
const str = String(123);

// Implicit (coercion)
console.log('5' + 5); // '55' (string)
console.log('5' - 5); // 0 (number)
console.log(true + 1); // 2
```

### Prototype

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal('Dog');
dog.speak(); // Dog makes a sound
```

### Constructor Function

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar.brand); // Toyota
```

### Callback Function (Detailed)

```javascript
function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3];
const squared = processArray(numbers, x => x * x);
console.log(squared); // [1, 4, 9]
```

### Debouncing

```javascript
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const searchInput = debounce(function(query) {
  console.log('Searching for:', query);
}, 500);
```

### JS Engine

**Answer:** Program that executes JavaScript code (V8, SpiderMonkey, etc.)

**Components:**
- Parser
- Interpreter
- Compiler (JIT)
- Garbage Collector

### Phone and Import Function

```javascript
// ES6 Modules

// export
export const name = 'Alice';
export function greet() {
  console.log('Hello');
}

// import
import { name, greet } from './module.js';
```

### Named and Anonymous Function

```javascript
// Named function
function greet() {
  console.log('Hello');
}

// Anonymous function
const greet = function() {
  console.log('Hello');
};

// Arrow function (anonymous)
const greet = () => console.log('Hello');
```

### This Keyword

```javascript
// Global context
console.log(this); // Window (browser)

// Object method
const obj = {
  name: 'Alice',
  greet() {
    console.log(this.name); // Alice
  }
};

// Arrow function (inherits this)
const obj2 = {
  name: 'Bob',
  greet: () => {
    console.log(this.name); // undefined
  }
};
```

### Web API

**Answer:** Browser-provided APIs (DOM, fetch, setTimeout, etc.)

```javascript
// Fetch API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// Geolocation API
navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude);
});
```

### Local and Session Storage

```javascript
// localStorage (persists)
localStorage.setItem('name', 'Alice');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');

// sessionStorage (cleared when tab closes)
sessionStorage.setItem('temp', 'value');
console.log(sessionStorage.getItem('temp'));
```

### Set

**Answer:** Collection of unique values (no duplicates).

```javascript
// Creating a Set
const mySet = new Set();

// Adding values
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, won't be added
mySet.add('hello');

console.log(mySet.size); // 3
console.log(mySet.has(1)); // true

// Iterating
for (let item of mySet) {
  console.log(item);
}

// Convert array to Set (removes duplicates)
const numbers = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = new Set(numbers);
console.log([...uniqueNumbers]); // [1, 2, 3, 4]

// Set methods
mySet.delete(1);
mySet.clear(); // Removes all
```

### WeakSet and WeakMap

**WeakSet:** Like Set but only holds objects, allows garbage collection
**WeakMap:** Like Map but keys must be objects, allows garbage collection

```javascript
// WeakSet
const weakSet = new WeakSet();
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Bob' };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

// When obj1 is no longer referenced, it can be garbage collected
obj1 = null;

// WeakMap
const weakMap = new WeakMap();
let key = { id: 1 };

weakMap.set(key, 'value');
console.log(weakMap.get(key)); // 'value'

// Key differences from Map/Set:
// 1. Keys/values must be objects
// 2. Not iterable
// 3. No size property
// 4. Allows garbage collection when references are removed
```

### Garbage Collection

**Answer:** Automatic memory management that removes unused objects.

**How it works:**
- Mark and Sweep algorithm
- Identifies unreachable objects
- Frees memory automatically

```javascript
// Object is created
let user = {
  name: 'Alice',
  age: 25
};

// Object is reachable (referenced by 'user')

// Remove reference
user = null;

// Now the object is unreachable and will be garbage collected

// Example: Circular references
function createCircular() {
  let obj1 = {};
  let obj2 = {};
  
  obj1.ref = obj2;
  obj2.ref = obj1;
  
  return obj1;
}

let circular = createCircular();
// Even with circular references, modern GC can handle it
circular = null; // Will be garbage collected

// Memory leak example (closure holding reference)
function createLeak() {
  const largeData = new Array(1000000);
  
  return function() {
    // This closure keeps largeData in memory
    console.log(largeData.length);
  };
}

const leak = createLeak(); // largeData stays in memory
```

### Pure and Impure Functions

**Pure Function:** Same input always produces same output, no side effects
**Impure Function:** May produce different outputs, has side effects

```javascript
// PURE FUNCTIONS
// 1. Same input, same output
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5

// 2. No side effects
function multiply(a, b) {
  return a * b;
}

// 3. Doesn't modify external state
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// IMPURE FUNCTIONS
// 1. Uses external variable
let counter = 0;
function incrementCounter() {
  counter++; // Modifies external state
  return counter;
}

// 2. Different output for same input
function getRandomNumber() {
  return Math.random(); // Different every time
}

// 3. Modifies input
function addItem(arr, item) {
  arr.push(item); // Mutates array
  return arr;
}

// 4. Has side effects (I/O, API calls, etc.)
function saveToDatabase(data) {
  console.log('Saving...'); // Side effect
  // database.save(data); // Side effect
}

// Making impure function pure
// IMPURE
function addItemImpure(arr, item) {
  arr.push(item);
  return arr;
}

// PURE
function addItemPure(arr, item) {
  return [...arr, item]; // Returns new array
}

const original = [1, 2, 3];
const newArray = addItemPure(original, 4);
console.log(original); // [1, 2, 3] - unchanged
console.log(newArray); // [1, 2, 3, 4]
```

---

## Summary

This document covers all the JavaScript interview topics from your handwritten notes with:
- Clear explanations
- Code examples
- Practical use cases
- Common gotchas

**Total Topics Covered:** 50+ core concepts including:
- Fundamentals (variables, data types, operators)
- Functions (first-class, higher-order, pure/impure, closures)
- Async Programming (callbacks, promises, async/await)
- Scope & Hoisting
- Event Handling & Delegation
- Data Structures (Set, Map, WeakSet, WeakMap)
- Memory Management (Garbage Collection, Memoization)
- Modern Features (template strings, destructuring, optional chaining)
- And much more!

Keep practicing these concepts and refer back to this document for quick revision!

