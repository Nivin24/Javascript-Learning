// Async/Await Examples

// Basic async function
async function greet() {
  return "Hello!";
}

greet().then(msg => console.log(msg));

// Using await
async function fetchUser() {
  let response = await fetch("https://api.example.com/user");
  let data = await response.json();
  return data;
}

// Error handling
async function getData() {
  try {
    let result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Multiple awaits
async function processData() {
  let data1 = await fetchData1();
  let data2 = await fetchData2();
  let combined = data1 + data2;
  return combined;
}
