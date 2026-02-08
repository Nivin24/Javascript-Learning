// Keyboard Events

// keydown - fires when key is pressed
document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
  console.log("Key code:", event.code);
});

// keyup - fires when key is released
document.addEventListener("keyup", function(event) {
  console.log("Key released:", event.key);
});

// Input event on text field
let input = document.querySelector("#textInput");
input.addEventListener("input", function(event) {
  console.log("Current value:", event.target.value);
});

// Specific key detection
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    console.log("Enter key pressed!");
  }
  if (event.key === "Escape") {
    console.log("Escape key pressed!");
  }
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    console.log("Ctrl+S pressed!");
  }
});
