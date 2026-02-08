# Document Object Model (DOM)

## What is the DOM?

The DOM is a programming interface for HTML documents. It represents the page as a tree of objects that JavaScript can manipulate.

## DOM Tree Structure

```
document
  └── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── h1
          ├── p
          └── div
```

## Accessing the DOM

```javascript
// Get element by ID
let element = document.getElementById("myId");

// Get elements by class
let elements = document.getElementsByClassName("myClass");

// Get elements by tag
let paragraphs = document.getElementsByTagName("p");

// Query selector (CSS selectors)
let first = document.querySelector(".myClass");
let all = document.querySelectorAll(".myClass");
```

## Modifying Elements

```javascript
// Change text
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Change attributes
element.setAttribute("class", "newClass");
element.id = "newId";

// Change styles
element.style.color = "red";
element.style.fontSize = "20px";
```

## Key Takeaways

✅ DOM represents HTML as objects  
✅ JavaScript can manipulate the DOM  
✅ Use querySelector for modern selection  
✅ Separate content (HTML), style (CSS), behavior (JS)  
