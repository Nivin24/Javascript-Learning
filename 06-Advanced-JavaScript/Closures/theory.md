# Closures

## What is a Closure?

A closure is a function that has access to variables from its outer (enclosing) function, even after the outer function has returned.

```javascript
function outer() {
  let count = 0;
  
  function inner() {
    count++;
    console.log(count);
  }
  
  return inner;
}

let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
```

## Why Closures Matter

✅ Data privacy  
✅ Function factories  
✅ Callbacks and event handlers  
✅ Module pattern  

## Common Use Cases

### Private Variables
```javascript
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment() { count++; },
    decrement() { count--; },
    getCount() { return count; }
  };
}

let counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
```

## Key Takeaways

✅ Closures remember outer function variables  
✅ Enable data privacy  
✅ Created every time a function is created  
✅ Powerful for creating function factories  
