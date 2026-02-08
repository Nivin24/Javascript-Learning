// Callback Examples

// Simple callback
function processUser(name, callback) {
  console.log("Processing user:", name);
  callback(name);
}

processUser("Alice", function(name) {
  console.log("Welcome,", name);
});

// setTimeout
setTimeout(() => {
  console.log("Delayed message");
}, 1000);

// Array methods with callbacks
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

let doubled = numbers.map(num => num * 2);
console.log(doubled);
