// Parameters and Return Values Examples
function add(a, b) {
  return a + b;
}

function greetUser(firstName, lastName = "Doe") {
  return `Hello, ${firstName} ${lastName}!`;
}

function calculateTotal(price, quantity, tax = 0.1) {
  let subtotal = price * quantity;
  let total = subtotal + (subtotal * tax);
  return total;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(add(5, 3));
console.log(greetUser("John"));
console.log(calculateTotal(10, 3));
console.log(sum(1, 2, 3, 4, 5));
