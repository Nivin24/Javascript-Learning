let display = document.getElementById("display");
let currentValue = "0";
let operator = null;
let previousValue = null;
let shouldResetDisplay = false;

function updateDisplay() {
  display.textContent = currentValue;
}

function clearDisplay() {
  currentValue = "0";
  operator = null;
  previousValue = null;
  shouldResetDisplay = false;
  updateDisplay();
}

function deleteDigit() {
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
  } else {
    currentValue = "0";
  }
  updateDisplay();
}

function appendNumber(number) {
  if (shouldResetDisplay) {
    currentValue = number;
    shouldResetDisplay = false;
  } else {
    if (currentValue === "0" && number !== ".") {
      currentValue = number;
    } else {
      if (number === "." && currentValue.includes(".")) return;
      currentValue += number;
    }
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null && !shouldResetDisplay) {
    calculate();
  }
  previousValue = currentValue;
  operator = op;
  shouldResetDisplay = true;
}

function calculate() {
  if (operator === null || previousValue === null) return;
  
  let prev = parseFloat(previousValue);
  let current = parseFloat(currentValue);
  let result;
  
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current !== 0 ? prev / current : "Error";
      break;
  }
  
  currentValue = result.toString();
  operator = null;
  previousValue = null;
  shouldResetDisplay = true;
  updateDisplay();
}
