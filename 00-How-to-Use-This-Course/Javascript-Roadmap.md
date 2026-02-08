# What is JavaScript? (Theory)

JavaScript is a **programming language** that makes websites interactive. It lets you do things like show popups, change content without reloading the page, respond to button clicks, and fetch new data from servers. [web:91][web:93][web:97]

---

## Quick history

- **1995**: Created by Brendan Eich at Netscape in **10 days**. Originally called "Mocha", then "LiveScript", renamed **JavaScript** to ride the Java hype. [web:95][web:97][web:102]
- **1997**: Standardized as **ECMAScript** (the "language spec") by ECMA International. [web:98]
- **2008+**: Became super fast with Google's V8 engine (used in Chrome and Node.js). Now runs everywhere. [web:97]

**Key point**: JavaScript ≠ Java. JavaScript is for web scripting; Java is a different language for apps/servers. [web:97]

---

## What does JavaScript do?

JavaScript makes web pages **dynamic**:

- **Change content**: Update text, images, colors without refreshing the page.
- **Respond to users**: Button clicks, form submissions, keyboard input.
- **Fetch data**: Get weather, user posts, or search results from servers.
- **Animations**: Smooth transitions, sliders, menus.
- **Games and apps**: Interactive games, calculators, todo lists, maps. [web:46][web:93][web:97]

**Example use cases**:
- Login forms that check passwords instantly.
- Shopping carts that update prices.
- Charts that redraw with new data.
- Apps like Google Maps or Gmail that feel "alive".

---

## Where does JavaScript run?

JavaScript runs in many places:

1. **Browser** (client-side):  
   - Chrome, Firefox, Safari, Edge.  
   - Uses the **DOM** (Document Object Model) to change HTML/CSS.  
   - Safe: runs on your computer, no server needed for basics. [web:46][web:100]

2. **Server** (with Node.js):  
   - Build backends, APIs, servers (like Express.js).  
   - No browser/DOM; uses files, databases instead. [web:96][web:100]

3. **Mobile/Desktop**:  
   - React Native (apps), Electron (desktop apps like VS Code). [web:97]

4. **Embedded**: Some IoT devices, even cars. [web:97]

**Today**: JavaScript runs **everywhere** – full-stack development with one language. [web:97]

---

## JavaScript vs ECMAScript

- **ECMAScript (ES)**: The official standard (syntax, rules). Latest is ES2023+. [web:98]
- **JavaScript**: ECMAScript + extras:
  - **DOM/BOM** in browsers (for HTML manipulation).
  - Node.js APIs on servers. [web:96][web:98][web:100]

You write **JavaScript code**; the browser/server handles the rest. [web:96][web:100]

---

## Key characteristics

- **Lightweight and fast**: Interpreted (no compilation), runs immediately.
- **Dynamic typing**: Variables change types (e.g., `let x = 5; x = "hello";`).
- **Object-oriented + functional**: Supports classes, prototypes, functions as values.
- **Single-threaded**: Does one thing at a time, but uses async for non-blocking.
- **Case-sensitive**: `myVar` ≠ `myvar`. [web:93][web:97]

---

## How to include JavaScript in HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello</h1>
  <button id="btn">Click me</button>

  <!-- Inline JS -->
  <script>
    alert("Hello from JS!");
  </script>

  <!-- External JS file -->
  <script src="script.js"></script>
</body>
</html>
````

- Put `<script>` before `</body>` (best practice).
- External files: `src="filename.js"`. 

---

## First code example

Open your browser console (F12 → Console) and try:

```javascript
console.log("Hello, World!");
alert("This is JavaScript!");
let name = prompt("Your name?");
console.log("Hi, " + name);
```