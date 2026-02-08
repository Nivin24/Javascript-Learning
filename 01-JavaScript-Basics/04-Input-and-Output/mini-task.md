# Mini Task: Simple Calculator

## Objective
Create a simple calculator using `prompt()` and `alert()` that performs basic arithmetic operations.

## Requirements

1. Ask the user to enter the first number
2. Ask the user to enter the second number
3. Ask the user to choose an operation (+, -, *, /)
4. Perform the calculation
5. Display the result using `alert()`

## Bonus Challenges

- Handle division by zero
- Validate that inputs are actually numbers
- Add support for more operations (%, **)
- Display the calculation in a formatted way

## Example Output

```
Enter first number: 10
Enter second number: 5
Choose operation (+, -, *, /): +
Result: 10 + 5 = 15
```

## Starter Code

```javascript
// Get inputs from user
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt("Choose operation (+, -, *, /):");

// Your code here to perform calculation and show result
```

## Solution

<details>
<summary>Click to reveal solution</summary>

```javascript
// Get inputs
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt("Choose operation (+, -, *, /):");

// Perform calculation
let result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 === 0) {
    alert("Error: Cannot divide by zero!");
  } else {
    result = num1 / num2;
  }
} else {
  alert("Invalid operation!");
}

// Display result
if (result !== undefined) {
  alert(`Result: ${num1} ${operation} ${num2} = ${result}`);
}
```

</details>
