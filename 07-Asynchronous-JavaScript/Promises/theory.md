# Promises

## What is a Promise?

A Promise represents a value that may be available now, in the future, or never.

```javascript
let promise = new Promise((resolve, reject) => {
  // Async operation
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});
```

## Promise States

- **Pending**: Initial state
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

## Using Promises

```javascript
promise
  .then(result => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  })
  .finally(() => {
    // Always runs
  });
```

## Chaining Promises

```javascript
fetchData()
  .then(data => processData(data))
  .then(processed => saveData(processed))
  .catch(error => console.error(error));
```

## Key Takeaways

✅ Promises handle async operations  
✅ Cleaner than callbacks  
✅ Can be chained  
✅ Better error handling  
