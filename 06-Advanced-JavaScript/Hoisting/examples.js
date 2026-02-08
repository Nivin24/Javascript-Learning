// Hoisting Examples

// var hoisting
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// Function hoisting
greet(); // Works!
function greet() {
  console.log("Hello!");
}

// Function expression not hoisted
// sayHi(); // Error!
const sayHi = function() {
  console.log("Hi!");
};

// let/const temporal dead zone
// console.log(b); // ReferenceError
let b = 20;
