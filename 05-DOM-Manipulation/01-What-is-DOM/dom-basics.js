// DOM Basics Examples

// Selecting elements
let heading = document.querySelector("h1");
let paragraph = document.querySelector("p");
let button = document.querySelector("button");

// Changing content
heading.textContent = "New Heading";
paragraph.innerHTML = "<strong>Bold paragraph</strong>";

// Changing styles
heading.style.color = "blue";
heading.style.fontSize = "32px";

// Changing attributes
let link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
link.textContent = "Click here";

// Creating elements
let newDiv = document.createElement("div");
newDiv.textContent = "I'm a new div!";
newDiv.className = "highlight";
document.body.appendChild(newDiv);

// Removing elements
let oldElement = document.querySelector(".remove-me");
if (oldElement) {
  oldElement.remove();
}
