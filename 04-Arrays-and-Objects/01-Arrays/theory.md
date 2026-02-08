# Arrays in JavaScript

## What is an Array?

An array is a data structure that stores multiple values in a single variable.

```javascript
let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
```

## Accessing Array Elements

Use index (starting from 0):

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
```

## Array Properties and Methods

### Length
```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
```

### Common Methods
- `push()` - Add to end
- `pop()` - Remove from end
- `unshift()` - Add to beginning
- `shift()` - Remove from beginning
- `splice()` - Add/remove at specific position
- `slice()` - Extract portion
- `concat()` - Combine arrays
- `indexOf()` - Find index
- `includes()` - Check if exists

## Key Takeaways

✅ Arrays store multiple values  
✅ Index starts at 0  
✅ Arrays are mutable  
✅ Many built-in methods available  
