# Async/Await

## What is Async/Await?

Async/await is syntactic sugar for Promises, making asynchronous code look synchronous.

## Async Functions

```javascript
async function fetchData() {
  return "Data fetched";
}

// Returns a Promise
fetchData().then(data => console.log(data));
```

## Await Keyword

```javascript
async function getData() {
  let result = await fetchData();
  console.log(result);
}
```

## Error Handling

```javascript
async function getData() {
  try {
    let result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## Key Takeaways

✅ Makes async code easier to read  
✅ Must use `await` inside `async` functions  
✅ Use try/catch for error handling  
✅ Modern and recommended approach  
