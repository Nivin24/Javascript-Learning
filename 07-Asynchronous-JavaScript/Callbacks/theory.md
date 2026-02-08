# Callbacks

## What is a Callback?

A callback is a function passed as an argument to another function, to be executed later.

```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
```

## Asynchronous Callbacks

```javascript
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("This runs first");
```

## Callback Hell

Multiple nested callbacks become hard to read:

```javascript
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      // Callback hell!
    });
  });
});
```

## Key Takeaways

✅ Callbacks enable asynchronous programming  
✅ Can lead to "callback hell"  
✅ Promises and async/await are modern alternatives  
