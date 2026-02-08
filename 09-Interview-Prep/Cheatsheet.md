# JavaScript Cheatsheet

## Variables
```javascript
let x = 10;        // Block-scoped, reassignable
const y = 20;      // Block-scoped, constant
var z = 30;        // Function-scoped (avoid)
```

## Data Types
- Number, String, Boolean, Undefined, Null, Symbol, BigInt, Object

## Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
- Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logical: `&&`, `||`, `!`
- Assignment: `=`, `+=`, `-=`, `*=`, `/=`

## Control Flow
```javascript
if (condition) { }
else if (condition) { }
else { }

switch (value) {
  case x: break;
  default:
}

for (let i = 0; i < 10; i++) { }
while (condition) { }
do { } while (condition);
```

## Functions
```javascript
function name(params) { return value; }
const name = function(params) { };
const name = (params) => value;
```

## Arrays
```javascript
let arr = [1, 2, 3];
arr.push(4);           // Add to end
arr.pop();             // Remove from end
arr.map(x => x * 2);   // Transform
arr.filter(x => x > 2); // Filter
arr.reduce((a,b) => a+b, 0); // Reduce
```

## Objects
```javascript
let obj = {key: "value"};
obj.key;               // Access
obj["key"];            // Access
Object.keys(obj);      // Keys
Object.values(obj);    // Values
```

## DOM
```javascript
document.getElementById("id");
document.querySelector(".class");
element.textContent = "text";
element.addEventListener("click", fn);
```

## Async
```javascript
// Promise
promise.then(result => {}).catch(error => {});

// Async/Await
async function fn() {
  try {
    let result = await promise;
  } catch (error) { }
}
```

## ES6+ Features
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- Default parameters
- Classes
- Modules
