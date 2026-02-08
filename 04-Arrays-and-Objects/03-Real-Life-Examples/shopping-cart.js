// Shopping Cart

let cart = [
  {name: "Laptop", price: 999, quantity: 1},
  {name: "Mouse", price: 25, quantity: 2},
  {name: "Keyboard", price: 75, quantity: 1}
];

// Calculate total
let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

// Add item
function addItem(name, price, quantity) {
  cart.push({name, price, quantity});
}

// Remove item
function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
}

// Update quantity
function updateQuantity(name, newQuantity) {
  let item = cart.find(item => item.name === name);
  if (item) item.quantity = newQuantity;
}

console.log("Total:", total);
addItem("Monitor", 200, 1);
console.log("Cart:", cart);
