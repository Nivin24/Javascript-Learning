// Array Examples

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
console.log(fruits.length); // 3

// Adding elements
fruits.push("date");        // Add to end
fruits.unshift("apricot");  // Add to beginning

// Removing elements
let last = fruits.pop();    // Remove from end
let first = fruits.shift(); // Remove from beginning

// Finding elements
let index = fruits.indexOf("banana");
let exists = fruits.includes("cherry");

// Iterating
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(fruit => console.log(fruit));
