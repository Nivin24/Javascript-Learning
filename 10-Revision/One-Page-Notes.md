# JavaScript - One-Page Notes

## Basics
- **Variables**: `let`, `const`, `var`
- **Data Types**: Number, String, Boolean, Undefined, Null, Symbol, BigInt, Object
- **Operators**: Arithmetic, Comparison, Logical, Assignment, Ternary

## Control Flow
- **Conditionals**: `if`, `else if`, `else`, `switch`
- **Loops**: `for`, `while`, `do-while`
- **Break/Continue**: Exit loop or skip iteration

## Functions
- **Declaration**: `function name() {}`
- **Expression**: `const name = function() {}`
- **Arrow**: `const name = () => {}`
- **Parameters**: Default, rest (`...args`)

## Arrays
- **Methods**: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`
- **Iteration**: `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`

## Objects
- **Creation**: `{key: value}`
- **Access**: `obj.key` or `obj["key"]`
- **Methods**: `Object.keys()`, `Object.values()`, `Object.entries()`

## DOM
- **Selection**: `getElementById`, `querySelector`, `querySelectorAll`
- **Manipulation**: `textContent`, `innerHTML`, `style`, `classList`
- **Events**: `addEventListener`, `removeEventListener`

## Advanced
- **Scope**: Global, Function, Block
- **Closures**: Function accessing outer variables
- **Hoisting**: Declarations moved to top
- **this**: Context-dependent reference

## Async
- **Callbacks**: Functions passed as arguments
- **Promises**: `.then()`, `.catch()`, `.finally()`
- **Async/Await**: `async function`, `await promise`
- **Fetch**: `fetch(url).then(res => res.json())`

## ES6+ Features
- Template literals: `` `${variable}` ``
- Destructuring: `const {a, b} = obj`
- Spread: `...array`
- Default parameters
- Arrow functions
- Classes

## Best Practices
- Use `const` by default, `let` when needed
- Use `===` instead of `==`
- Avoid global variables
- Use meaningful variable names
- Comment complex code
- Handle errors with try/catch
- Use async/await for async code
