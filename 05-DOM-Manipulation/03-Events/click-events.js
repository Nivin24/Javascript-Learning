// Click Events

// Method 1: addEventListener (recommended)
let button = document.querySelector("#myButton");
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Method 2: onclick property
let button2 = document.querySelector("#button2");
button2.onclick = function() {
  alert("Button 2 clicked!");
};

// Event object
button.addEventListener("click", function(event) {
  console.log("Event type:", event.type);
  console.log("Target:", event.target);
  console.log("Coordinates:", event.clientX, event.clientY);
});

// Multiple event listeners
button.addEventListener("click", function() {
  console.log("First listener");
});
button.addEventListener("click", function() {
  console.log("Second listener");
});

// Prevent default behavior
let link = document.querySelector("a");
link.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Link click prevented");
});
