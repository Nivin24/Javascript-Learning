# Input and Output in JavaScript

## What is I/O?

**Input**: Getting data from the user  
**Output**: Displaying data to the user

---

## Output Methods

### 1. `console.log()`

Prints output to the browser console (F12 → Console tab).

```javascript
console.log("Hello, World!");
console.log(42);
console.log(true);
```

**Other console methods:**
```javascript
console.warn("This is a warning");    // Yellow warning
console.error("This is an error");    // Red error
console.table([{name: "Alice", age: 25}]);  // Table format
console.clear();                      // Clear console
```

### 2. `alert()`

Shows a popup dialog box.

```javascript
alert("Welcome to my website!");
```

⚠️ **Note**: Blocks code execution until user clicks OK.

### 3. `document.write()`

Writes directly to the HTML document.

```javascript
document.write("Hello from JavaScript!");
```

⚠️ **Caution**: Overwrites entire page if called after page load. Rarely used in modern code.

### 4. Modifying HTML Elements

The modern way to display output.

```javascript
document.getElementById("demo").textContent = "New text";
document.getElementById("demo").innerHTML = "<strong>Bold text</strong>";
```

---

## Input Methods

### 1. `prompt()`

Shows a dialog box for user input.

```javascript
let name = prompt("What is your name?");
console.log("Hello, " + name);
```

Returns a **string** (even if user enters a number).

```javascript
let age = prompt("Enter your age:");
console.log(typeof age);  // "string"

// Convert to number:
let ageNumber = Number(age);
// or
let ageNumber2 = parseInt(age);
```

### 2. `confirm()`

Shows a dialog with OK/Cancel buttons.

```javascript
let isConfirmed = confirm("Are you sure?");
if (isConfirmed) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}
```

Returns `true` or `false`.

### 3. HTML Form Elements

The modern, recommended way.

```html
<input type="text" id="username">
<button onclick="greet()">Submit</button>

<script>
function greet() {
  let name = document.getElementById("username").value;
  alert("Hello, " + name);
}
</script>
```

---

## Converting Input Types

`prompt()` always returns a string. Convert as needed:

```javascript
let input = prompt("Enter a number:");  // "42"

// String to Number
let num1 = Number(input);        // 42
let num2 = parseInt(input);      // 42 (integer)
let num3 = parseFloat(input);    // 42.0 (decimal)
let num4 = +input;               // 42 (unary plus)

// Number to String
let str = String(42);            // "42"
let str2 = (42).toString();      // "42"
let str3 = 42 + "";              // "42"
```

---

## Template Literals for Output

Use backticks for cleaner output:

```javascript
let name = "Alice";
let age = 25;

console.log(`Name: ${name}, Age: ${age}`);
```

---

## Best Practices

✅ Use `console.log()` for debugging  
✅ Use HTML elements for user-facing output  
✅ Use form inputs instead of `prompt()` in production  
✅ Always validate and convert user input  
✅ Avoid `alert()` and `prompt()` in modern web apps  

---

## Key Takeaways

✅ `console.log()` for debugging output  
✅ `alert()` for simple popups  
✅ `prompt()` for simple input  
✅ `confirm()` for yes/no questions  
✅ HTML elements for modern I/O  
✅ Always convert `prompt()` input from string to number when needed  
