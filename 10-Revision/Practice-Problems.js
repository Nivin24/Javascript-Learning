// JavaScript Practice Problems - Mixed Topics

// Problem 1: Array manipulation
// Create a function that returns only even numbers from an array
function getEvenNumbers(arr) {
  // Your solution
}

// Problem 2: Object manipulation
// Create a function that counts properties in an object
function countProperties(obj) {
  // Your solution
}

// Problem 3: String manipulation
// Create a function that reverses words in a sentence
function reverseWords(sentence) {
  // Your solution
}

// Problem 4: Closure
// Create a counter function using closure
function createCounter() {
  // Your solution
}

// Problem 5: Array methods
// Use map, filter, reduce to find sum of squares of even numbers
function sumOfSquaresOfEvens(arr) {
  // Your solution
}

// Problem 6: Promise
// Create a promise that resolves after 2 seconds
function delayedPromise() {
  // Your solution
}

// Problem 7: Async/Await
// Create an async function that fetches data
async function fetchData(url) {
  // Your solution
}

// Problem 8: DOM manipulation
// Create a function that changes all paragraph colors
function changeAllParagraphColors(color) {
  // Your solution
}

// Problem 9: Event handling
// Create a debounce function
function debounce(func, delay) {
  // Your solution
}

// Problem 10: Recursion
// Create a function to calculate Fibonacci number
function fibonacci(n) {
  // Your solution
}

// SOLUTIONS (scroll down)

/*
// Solution 1
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Solution 2
function countProperties(obj) {
  return Object.keys(obj).length;
}

// Solution 3
function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

// Solution 4
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

// Solution 5
function sumOfSquaresOfEvens(arr) {
  return arr
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((sum, n) => sum + n, 0);
}

// Solution 6
function delayedPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done!"), 2000);
  });
}

// Solution 7
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Solution 8
function changeAllParagraphColors(color) {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => p.style.color = color);
}

// Solution 9
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Solution 10
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
*/
